from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import json
import logging
import random
import google.generativeai as genai
from datetime import datetime

from practice import chat_with_ai, logger, clear_history

app = Flask(__name__)
CORS(app)  # Enable CORS to allow your React frontend to communicate with this API

@app.route('/chat', methods=['POST'])
def chat_api():
    try:
        data = request.get_json()
        user_input = data.get("message")
        if not user_input:
            return jsonify({"error": "No message provided"}), 400

        # Log the incoming request
        logger.info(f"Received chat request: {user_input[:50]}...")
        
        # Use the chat_with_ai function from practice.py to generate a response
        response_text = chat_with_ai(user_input)
        return jsonify({"message": response_text})
    except Exception as e:
        logger.error(f"Error in chat API: {str(e)}")
        return jsonify({"error": "An error occurred processing your request"}), 500

@app.route('/clear_history', methods=['POST'])
def clear_history_api():
    try:
        clear_history()
        return jsonify({"message": "Chat history cleared successfully"}), 200
    except Exception as e:
        logger.error(f"Error clearing history: {str(e)}")
        return jsonify({"error": "Failed to clear history"}), 500

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Initialize Gemini API
genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

# List of financial categories to randomize prompts
FINANCE_CATEGORIES = [
    "personal finance", "investing", "credit", "banking", 
    "retirement planning", "budgeting", "taxation", 
    "insurance", "mortgages", "financial literacy"
]

# Question difficulty levels
DIFFICULTY_LEVELS = ["basic", "intermediate", "advanced"]

def extract_json(text):
    """Improved JSON extraction with validation"""
    try:
        # Remove potential Markdown formatting
        text = text.replace('```json', '').replace('```', '')
        
        # Find the first [ and last ] to capture the JSON array
        start_idx = text.find('[')
        end_idx = text.rfind(']') + 1  # Include closing bracket

        if start_idx == -1 or end_idx == 0:
            logger.error("No JSON array brackets found in the response")
            return None

        json_str = text[start_idx:end_idx]
        
        # Validate JSON format
        parsed = json.loads(json_str)
        return parsed  # Return parsed JSON directly
    except (json.JSONDecodeError, ValueError) as e:
        logger.error(f"JSON extraction failed: {str(e)}")
        return None

def generate_quiz_questions():
    """Generate quiz questions using Google's Gemini API with randomization"""
    try:
        # Configure the model
        model = genai.GenerativeModel('gemini-2.0-flash')
        
        # Create a randomized prompt
        categories = random.sample(FINANCE_CATEGORIES, k=3)  # Pick 3 random categories
        difficulty = random.choice(DIFFICULTY_LEVELS)
        current_time = datetime.now().isoformat()
        
        prompt = f"""Generate 3 simple and clear multiple-choice quiz questions about {', '.join(categories)} at a {difficulty} level.
Avoid technical jargon and keep the language easy to understand for beginners. Make each question straightforward and educational.

Return the questions as a JSON array. Each question object must have:
- id: integer
- question: string
- options: array of 4 strings
- correctAnswer: integer (0-3)

Example format:
[
  {{
    "id": 1,
    "question": "What is compound interest?",
    "options": ["Interest on principal", "Interest on principal + previous interest", "Simple interest", "Tax deduction"],
    "correctAnswer": 1
  }}
]

Current timestamp for uniqueness: {current_time}
Return ONLY the JSON array without any explanation or markdown:"""

        # Generate content with temperature > 0 for more randomness
        response = model.generate_content(
            prompt,
            generation_config=genai.types.GenerationConfig(
                temperature=0.7,
                top_p=0.95,
                top_k=40
            )
        )
        response_text = response.text
        logger.info(f"Gemini Raw Response: {response_text}")
        
        return extract_json(response_text)
    except Exception as e:
        logger.error(f"Question generation error: {str(e)}")
        return None

# Larger bank of fallback questions
FALLBACK_QUESTIONS = [
    {
        "id": 1,
        "question": "What is compound interest?",
        "options": ["Interest on principal only", "Interest on both principal and previously accumulated interest", "A type of bank account", "A government bond"],
        "correctAnswer": 1
    },
    {
        "id": 2,
        "question": "What does diversification in investing refer to?",
        "options": ["Buying only high-risk stocks", "Investing in different types of assets to reduce risk", "Investing all money in a single industry", "Frequently trading stocks"],
        "correctAnswer": 1
    },
    {
        "id": 3,
        "question": "What is a 401(k)?",
        "options": ["A type of tax", "A retirement savings plan", "A government stimulus check", "A type of loan"],
        "correctAnswer": 1
    },
    {
        "id": 4,
        "question": "Which of these is considered a liquid asset?",
        "options": ["Real estate", "Cash in a checking account", "Collectible items", "A 10-year certificate of deposit with penalties for early withdrawal"],
        "correctAnswer": 1
    },
    {
        "id": 5,
        "question": "What is the Rule of 72 used for?",
        "options": ["Calculating tax deductions", "Estimating how long it takes money to double at a given interest rate", "Determining mortgage rates", "Setting retirement goals"],
        "correctAnswer": 1
    },
    {
        "id": 6,
        "question": "What is inflation?",
        "options": ["Increase in stock prices", "Decrease in the money supply", "General increase in prices and fall in purchasing value of money", "Growth in GDP"],
        "correctAnswer": 2
    },
    {
        "id": 7,
        "question": "What is an ETF?",
        "options": ["Electronic Transfer Fund", "Exchange-Traded Fund", "Emerging Technology Finance", "Early Termination Fee"],
        "correctAnswer": 1
    },
    {
        "id": 8,
        "question": "What is a bear market?",
        "options": ["When stock prices rise 20% or more", "When stock prices fall 20% or more", "A market that specializes in natural resources", "A market dominated by aggressive investors"],
        "correctAnswer": 1
    },
    {
        "id": 9,
        "question": "What does ROI stand for?",
        "options": ["Risk of Investment", "Return on Investment", "Rate of Inflation", "Regulation of Income"],
        "correctAnswer": 1
    }
]

@app.route('/quiz', methods=['GET'])
def get_dynamic_quiz():
    try:
        questions = generate_quiz_questions()
        
        if not questions:
            # If questions couldn't be generated properly, use random fallback questions
            questions = random.sample(FALLBACK_QUESTIONS, k=min(3, len(FALLBACK_QUESTIONS)))
            
            # Renumber the questions from 1 to match expected format
            for i, q in enumerate(questions, 1):
                q["id"] = i
                
            logger.warning("Using fallback questions due to generation failure")

        # Validate questions structure before returning
        required_keys = {'id', 'question', 'options', 'correctAnswer'}
        for idx, q in enumerate(questions):
            if not all(key in q for key in required_keys):
                logger.error(f"Question {idx} missing keys: {q}")
                return jsonify({"error": "Invalid question format"}), 500
            if not isinstance(q['options'], list) or len(q['options']) != 4:
                logger.error(f"Invalid options in question {idx}: {q['options']}")
                return jsonify({"error": "Options must be 4 elements"}), 500
            if not 0 <= q['correctAnswer'] <= 3:
                logger.error(f"Invalid correctAnswer in question {idx}: {q['correctAnswer']}")
                return jsonify({"error": "correctAnswer must be 0-3"}), 500

        return jsonify({"questions": questions})

    except Exception as e:
        logger.error(f"Quiz Generation Error: {str(e)}")
        return jsonify({"error": "Failed to generate quiz"}), 500

@app.route('/')
def home():
    return "Your application is running! 🚀"  # Or render a template

if __name__ == "__main__":
    port = int(os.getenv("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=True)