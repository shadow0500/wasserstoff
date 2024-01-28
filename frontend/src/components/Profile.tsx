import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Post from './Post';

interface UserData {
  name: string;
  bannerImage: string;
  profileImage: string;
  posts: Array<PostData>;
}

interface PostData {
  id: number;
  userImageUrl: string;
  imageUrl: string;
  description: string;
  username: string;
  datePosted: string;
}

const ProfilePage: React.FC = () => {
  const [userData, setUserData] = useState<UserData>({
    name: '',
    bannerImage: 'url-to-banner-image', // Replace with actual URL or import the image
    profileImage: 'url-to-profile-image', // Replace with actual URL or import the image
    posts: [],
  });

  useEffect(() => {
    // Fetch user data and posts when the component mounts
    const fetchUserData = async () => {
      try {
        const response = await axios.get<UserData>('http://localhost:3000/user'); // Replace with your actual API endpoint
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <>
      <div className="flex flex-col h-screen items-center justify-center bg-[#f8f9fd] space-y-2 w-full">
        <div className="border-2 rounded-lg shadow-xl bg-[#ffffff] m-2 p-4 w-full">
          {/* Banner Image */}
          <div className="h-32" style={{ backgroundImage: `url(${userData.bannerImage})`, backgroundSize: 'cover' }} />

          {/* Profile Image and Name */}
          <div className="flex flex-col items-center justify-end mt-4">
            <img src={userData.profileImage} alt="Profile" className="w-20 h-20 rounded-full mb-2" />
            <p className="text-lg font-bold text-black">{userData.name}Hello</p>
          </div>

          {/* User's Posts Section */}
          <div className="mt-4">
            <h2 className="text-2xl font-bold mb-2 text-black">Your Posts</h2>
            <ul>
              {userData.posts.map((post) => (
                <li key={post.id} className="mb-2">
                  {/* Display post content */}
                  <Post
                    userImageUrl={post.userImageUrl} 
                    imageUrl={post.imageUrl}
                    description={post.description}
                    username={post.username}
                    datePosted={post.datePosted}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <span className="text-center text-black">Not you? <NavLink to="/signin" className="hover:text-blue-800">Sign Out</NavLink></span>
      </div>
    </>
  );
};

export default ProfilePage;
