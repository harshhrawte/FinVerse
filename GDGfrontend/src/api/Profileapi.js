import axios from "axios";

const API_URL = import.meta.env.VITE_CHATBOT_API_URL + "/api/v1";

export const getProfile = async (userId) => {
    try {
      const response = await axios.get(`${API_URL}/profile/get-profile/${userId}`,{
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching profile:', error);
      throw error;
    }
  };


  export const updateProfile = async (userId, userData, token) => {
    try{
    const res = await axios.put(`${API_URL}/profile/edit-profile/${userId}`, userData, {
     headers: {
      Authorization: `Bearer ${token}`,
    },
  });
    return res.data;
  } catch (error) {
    console.error('Error fetching profile:', error);
    throw error;
  }
};

  
