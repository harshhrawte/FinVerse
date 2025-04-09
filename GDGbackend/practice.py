# ------------------------------------
# Part 1: Imports & Setup
# ------------------------------------
import os
import sys
import json
import re
import time
import logging  # <-- Added import
import fitz  # PyMuPDF for PDF extraction
import requests
from dotenv import load_dotenv
from langchain_core.messages import HumanMessage, AIMessage
from langchain_community.chat_message_histories import ChatMessageHistory
from langchain_google_genai import GoogleGenerativeAIEmbeddings, ChatGoogleGenerativeAI
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_chroma import Chroma
from langchain_community.document_loaders import TextLoader
from langchain.schema import Document
from langchain_core.prompts import ChatPromptTemplate, MessagesPlaceholder
from langchain.chains.combine_documents import create_stuff_documents_chain
from google.generativeai import GenerativeModel, configure

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)
# ------------------------------------
# Part 2: Environment Variables & API Keys
# ------------------------------------
load_dotenv()

# Replace with your actual keys
hf_token = os.getenv("HF_TOKEN")
gemini_api_key = os.getenv("GEMINI_API_KEY")
serpapi_api_key = os.getenv("SERPAPI_API_KEY")  # Replace with your actual key

# Configure Google Generative AI
configure(api_key=gemini_api_key)

# ------------------------------------
# Part 3: PDF Extraction
# ------------------------------------
pdf_folder = "books"
output_text_file = "datatext.txt"

if not os.path.exists(output_text_file):
    if not os.path.exists(pdf_folder):
        print("Error: PDF folder not found!")
        sys.exit()

    pdf_files = [f for f in os.listdir(pdf_folder) if f.lower().endswith(".pdf")]
    
    if not pdf_files:
        print("Error: No PDF files found in the folder!")
        sys.exit()

    print("Extracting text from PDFs...")
    with open(output_text_file, "w", encoding="utf-8") as txt_file:
        for pdf_file in pdf_files:
            pdf_path = os.path.join(pdf_folder, pdf_file)
            print(f"Processing: {pdf_file}")
            
            try:
                doc = fitz.open(pdf_path)
                for page_num in range(len(doc)):
                    text = doc[page_num].get_text()
                    txt_file.write(text + "\n" + "=" * 80 + "\n")
                print(f"✅ Extracted text from {pdf_file}")
            except Exception as e:
                print(f"Error opening {pdf_file}: {e}")
                continue
    print(f"🎉 All PDFs processed! Extracted text saved in '{output_text_file}'.")
else:
    print(f"✅ Found existing '{output_text_file}'. Skipping PDF extraction.")

# ------------------------------------
# Part 4: Persistent Chat History
# ------------------------------------
history_file = "chat_history.json"

def load_chat_history():
    """Load chat history from JSON file and convert to Human/AI messages."""
    chat_history = ChatMessageHistory()
    
    if os.path.exists(history_file):
        try:
            with open(history_file, "r") as f:
                history_data = json.load(f)
            
            for msg in history_data:
                if msg.get("type") == "human":
                    chat_history.add_user_message(msg.get("content", ""))
                elif msg.get("type") == "ai":
                    chat_history.add_ai_message(msg.get("content", ""))
            
            print("✅ Loaded existing chat history.")
        except json.JSONDecodeError:
            print("⚠ Chat history file is empty or corrupted. Starting fresh.")
    else:
        print("📜 No previous chat history found. Starting fresh.")
    
    return chat_history

def save_chat_history(history):
    """Save chat history as JSON."""
    history_data = [{"type": "human" if isinstance(msg, HumanMessage) else "ai", "content": msg.content} for msg in history.messages]
    
    with open(history_file, "w") as f:
        json.dump(history_data, f, indent=4)

chat_history = load_chat_history()


def clear_history():
    """Clear chat history both in memory and storage"""
    global chat_history
    chat_history = ChatMessageHistory()  # Create fresh history
    if os.path.exists(history_file):
        os.remove(history_file)
    print("🧹 Chat history cleared!")


# ------------------------------------
# Part 5: Persistent Retriever & Embeddings
# ------------------------------------
loader = TextLoader(output_text_file, encoding="utf-8")
documents = loader.load()

# Split into chunks
text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=200)
splits = text_splitter.split_documents(documents)

# Embedding and vector store setup
persist_directory_gemini = "retriever_store_gemini"
if os.path.exists(persist_directory_gemini) and os.listdir(persist_directory_gemini):
    print("✅ Loaded existing Gemini retriever store.")
    vectorstore = Chroma(persist_directory=persist_directory_gemini, embedding_function=GoogleGenerativeAIEmbeddings(
        model="models/embedding-001", google_api_key=gemini_api_key))
else:
    print("🔍 Creating new Gemini retriever store...")
    embeddings = GoogleGenerativeAIEmbeddings(model="models/embedding-001", google_api_key=gemini_api_key)
    vectorstore = Chroma.from_documents(documents=splits, embedding=embeddings, persist_directory=persist_directory_gemini)
    print("✅ Created and saved new retriever store!")

retriever = vectorstore.as_retriever(search_kwargs={"k": 5})

# ------------------------------------
# Part 6: Web Search Function via SerpAPI
# ------------------------------------
def search_serpapi(query):
    """Get real-time information from the web using SerpAPI."""
    url = "https://serpapi.com/search"
    params = {
        "q": query,
        "api_key": os.environ["SERPAPI_API_KEY"],
        "engine": "google"
    }

    try:
        response = requests.get(url, params=params)
        data = response.json()
        
        # Extract organic search results
        results = data.get("organic_results", [])
        if not results:
            return "No search results found."
        
        formatted_results = []
        for i, res in enumerate(results[:5], 1):
            title = res.get("title", "No title")
            link = res.get("link", "No link")
            snippet = res.get("snippet", "No snippet available")
            formatted_results.append(f"{i}. {title}\nLink: {link}\nSnippet: {snippet}\n")
        
        return "\n".join(formatted_results)
    except Exception as e:
        return f"Error performing web search: {str(e)}"

# ------------------------------------
# Part 7: LLM & Prompt Configuration
# ------------------------------------
llm = ChatGoogleGenerativeAI(model="gemini-2.0-flash", google_api_key=gemini_api_key)

system_prompt = (
    "You are FinVerse, a domain-specific financial intelligence assistant. "
    "You specialize exclusively in personal finance, investments, budgeting, debt management, and retirement planning. "
    "Please answer only finance-related questions. If a question is not related to finance, respond with: "
    "'I'm sorry, I can only help with finance-related queries.'\n\n"
    "Answer based on the following sources of information:\n\n"
    "1. RETRIEVED CONTEXT (from financial documents): {context}\n\n"
    "2. WEB SEARCH RESULTS (if available): {web_search}\n\n"
    "Always prioritize the most credible and up-to-date financial information."
)


prompt = ChatPromptTemplate.from_messages([
    ("system", system_prompt),
    MessagesPlaceholder(variable_name="history"),
    ("human", "{input}")
])

stuff_chain = create_stuff_documents_chain(llm=llm, prompt=prompt, document_variable_name="context")

# ------------------------------------
# Part 8: Determine If Web Search Is Needed
# ------------------------------------
def needs_web_search(query):
    """Determine if the query needs real-time information from the web."""
    realtime_indicators = [
        "today", "latest", "current", "now", "recent", 
        "price", "rate", "market", "stock", "news",
        "dollar", "rupee", "euro", "yen", "exchange rate",
        "bitcoin", "crypto", "index", "trend", "update"
    ]
    
    query_lower = query.lower()
    for indicator in realtime_indicators:
        if indicator in query_lower:
            return True
    return False

# ------------------------------------
# Part 9: Integrated Chat Function
# ------------------------------------
def chat_with_ai(user_input):
    """Generate AI response using LLM, retriever, and web search when needed."""
    try:
        # Check if we need real-time web search
        web_search_results = ""
        if needs_web_search(user_input):
            print("🔎 Searching the web for real-time information...")
            web_search_results = search_serpapi(user_input)
        
        # Get retrieved documents from our knowledge base
        print("📚 Retrieving from knowledge base...")
        retrieved_docs = retriever.invoke(user_input)
        processed_docs = [Document(page_content=doc.page_content if hasattr(doc, "page_content") else str(doc)) for doc in retrieved_docs]

        # Limit history to prevent context overflow
        max_history = 4
        trimmed_history = chat_history.messages[-max_history:]

        # Prepare input data for the LLM
        input_data = {
            "input": user_input,
            "context": processed_docs,
            "web_search": web_search_results,
            "history": trimmed_history,
            "parameters": {"max_new_tokens": 500}
        }

        # Generate response
        print("🤖 Generating response...")
        response = stuff_chain.invoke(input_data)
        response_text = response if isinstance(response, str) else response.content

        # Add to chat history and save
        chat_history.add_user_message(user_input)
        chat_history.add_ai_message(response_text)
        save_chat_history(chat_history)

        return response_text
    except Exception as e:
        print(f"⚠ Error: {str(e)}")
        return "Something went wrong. Please try again."
    

# ------------------------------------
# Part 10: Main Conversation Loop
# ------------------------------------
if __name__ == "__main__":
    print("💡 Enhanced Finance Chatbot is ready!")
    print("This bot uses:")
    print("  - 📚 RAG for answering from your financial documents")
    print("  - 💬 Persistent chat history")
    print("  - 🔎 Web search for real-time information")
    print("\nType 'exit' to stop the chat.")

    while True:
        user_input = input("\nYou: ").strip()
        
        if user_input.lower() in ["exit", "quit"]:
            print("Goodbye! 💙")
            break

        response = chat_with_ai(user_input)
        print(f"\nAI: {response}")