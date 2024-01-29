// import React from 'react'
// import Post from './Post'

// const Posts = () => {
//   return (
//     <div className='bg-gray-100'>
//       <div className='flex flex-col mx-auto md:w-1/2 pt-3 max-h-max'>
//       <Post/>
//       <Post/>
//       <Post/>
//       <Post/>
//       <Post/>
//       <Post/>
//       <Post/>
//       <Post/>
//       <Post/>
//       <Post/>
//     </div>
//     </div>
//   )
// }

// export default Posts


// src/components/PostsList.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Post from './Post';
import { useNavigate } from 'react-router-dom';
import { postsState } from '../store/posts';
import { useRecoilValue, useRecoilState, useSetRecoilState } from 'recoil';
import { userState } from '../store/user';
const Posts = () => {

  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  // if(!token){
  //   navigate('/signin');
  //   return;
  // }

  const [posts, setPosts] = useRecoilState(postsState)
  // const userData = useRecoilValue(userState);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/posts');
        setPosts(response.data); 
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []); 

  return (
    <div className='bg-gray-100 min-h-screen'>
      <h1 className="text-3xl font-bold mb-4  text-black">All Posts</h1>
      {posts.length === 0 ? (
        <p>No posts available.</p>
      ) : (
        <div className='bg-gray-100 flex flex-col mx-auto md:w-1/2 pt-3 max-h-max'>
          {posts.map((post) => (
              <Post
                userImageUrl={post.userImageUrl}
                imageUrl={post.imageUrl}
                description={post.description}
                username={post.username}
                datePosted={post.datePosted}
              />
          ))}
        </div>
      )}
    </div>
  );
};

export default Posts;
