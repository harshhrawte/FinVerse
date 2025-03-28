import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Mail, MapPin, Calendar, Users, Camera, Phone } from 'lucide-react';

const Profile = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('jwt-key'); // Get JWT from localStorage
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Decode JWT to get userId
  const getUserIdFromToken = (token) => {
    try {
      const payload = JSON.parse(atob(token.split('.')[1])); // Decode the payload (base64)
      return payload.userId; // Extract userId from JWT payload
    } catch (err) {
      console.error('Error decoding token:', err);
      return null;
    }
  };

  // Fetch user profile from database
  useEffect(() => {
    const fetchProfile = async () => {
      if (!token) {
        navigate('/login');
        return;
      }

      const userId = getUserIdFromToken(token);
      if (!userId) {
        setError('Invalid token');
        setLoading(false);
        navigate('/login');
        return;
      }

      try {
        const response = await fetch(`/api/user/${userId}`, {
          headers: {
            'Authorization': `Bearer ${token}`, // Send JWT in Authorization header
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch profile');
        }

        const data = await response.json();
        setProfileData(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load profile. Please try again.');
        setLoading(false);
        console.error('Error fetching profile:', err);
      }
    };

    fetchProfile();
  }, [token, navigate]);

  // Handle saving profile changes to the database
  const handleSave = async () => {
    try {
      const userId = getUserIdFromToken(token);
      if (!userId) {
        setError('Invalid token');
        return;
      }

      const response = await fetch(`/api/user/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(profileData),
      });

      if (!response.ok) {
        throw new Error('Failed to update profile');
      }

      setIsEditing(false);
      setError(null);
    } catch (err) {
      setError('Failed to save changes. Please try again.');
      console.error('Error updating profile:', err);
    }
  };

  // Handle input changes during editing
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle profile picture upload
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const formData = new FormData();
        formData.append('profilePicture', file);

        const userId = getUserIdFromToken(token);
        const response = await fetch(`/api/user/${userId}/upload-profile-picture`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
          body: formData,
        });

        if (!response.ok) {
          throw new Error('Failed to upload profile picture');
        }

        const data = await response.json();
        setProfileData(prev => ({ ...prev, profilePicture: data.profilePicture }));
      } catch (err) {
        setError('Failed to upload profile picture. Please try again.');
        console.error('Error uploading profile picture:', err);
      }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (!profileData) return null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-6 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="w-full max-w-md mx-auto">
        <div className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-100">
          <div className="relative h-32 bg-gradient-to-r from-blue-600 to-blue-800">
            <div className="absolute bottom-0 left-0 right-0 flex justify-center transform translate-y-1/2">
              <div className="relative">
                <img
                  src={profileData.profilePicture || 'https://via.placeholder.com/150'}
                  alt={`${profileData.firstName} ${profileData.lastName}`}
                  className="w-24 h-24 rounded-full border-4 border-white shadow-md object-cover"
                />
                {isEditing && (
                  <label className="absolute bottom-0 right-0 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors shadow-sm cursor-pointer">
                    <Camera size={16} />
                    <input 
                      type="file" 
                      className="hidden" 
                      accept="image/*"
                      onChange={handleImageUpload}
                    />
                  </label>
                )}
              </div>
            </div>
          </div>

          <div className="p-6 pt-16">
            {error && (
              <div className="mb-4 p-2 bg-red-100 text-red-700 rounded-md">
                {error}
              </div>
            )}
            {isEditing ? (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={profileData.firstName}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={profileData.lastName}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={profileData.email}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200"
                    disabled // Email is typically not editable
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                  <input
                    type="text"
                    name="phoneNumber"
                    value={profileData.phoneNumber}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Address</label>
                  <input
                    type="text"
                    name="address"
                    value={profileData.address}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Gender</label>
                    <select
                      name="gender"
                      value={profileData.gender}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200"
                    >
                      <option value="">Select</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Age</label>
                    <input
                      type="number"
                      name="age"
                      value={profileData.age}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200"
                    />
                  </div>
                </div>
                <div className="flex justify-between">
                  <button 
                    onClick={() => setIsEditing(false)}
                    className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
                  >
                    Cancel
                  </button>
                  <button 
                    onClick={handleSave}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                  >
                    Save
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="text-center">
                  <h2 className="text-xl font-bold text-gray-800">
                    {profileData.firstName} {profileData.lastName}
                  </h2>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="text-blue-500" size={20} />
                    <span className="text-gray-700">{profileData.email}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="text-blue-500" size={20} />
                    <span className="text-gray-700">{profileData.phoneNumber || 'Not set'}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="text-blue-500" size={20} />
                    <span className="text-gray-700">{profileData.address || 'Not set'}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="text-blue-500" size={20} />
                    <span className="text-gray-700">{profileData.gender || 'Not set'}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="text-blue-500" size={20} />
                    <span className="text-gray-700">{profileData.age ? `${profileData.age} years old` : 'Not set'}</span>
                  </div>
                </div>
                <button 
                  onClick={() => setIsEditing(true)}
                  className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors flex items-center justify-center space-x-2"
                >
                  <User size={18} />
                  <span>Edit Profile</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;