export const getProfile = async (userId) => {
    try {
      const response = await api.get(`/profile/get-profile/${userId}`,{
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