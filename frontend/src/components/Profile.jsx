import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Post from './Post';

import { useRecoilValue, useRecoilState, useSetRecoilState } from 'recoil';
import { userState } from '../store/user';
import { postsState } from '../store/posts';

const ProfilePage = () => {


  const userData = useRecoilValue(userState);
  const posts = useRecoilValue(postsState);


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
              {posts.map((post) => (
                (post.user_id == userData.user_id) && 
                (<li key={post.id} className="mb-2 ">
                  {/* Display post content */}
                  <Post
                    userImage={post.userImageUrl} 
                    imageUrl={post.imageUrl}
                    description={post.description}
                    username={post.username}
                    datePosted={post.datePosted}
                  />
                </li>)
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
