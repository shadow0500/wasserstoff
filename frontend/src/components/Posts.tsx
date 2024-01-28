import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Post from './Post';

interface PostData {
  userImageUrl: string;
  imageUrl: string;
  description: string;
  username: string;
  datePosted: string;
}

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<PostData[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get<PostData[]>('http://localhost:3000/posts');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className='bg-gray-100 min-h-screen'>
      <h1 className="text-3xl font-bold mb-4 text-black">All Posts</h1>
      {posts.length === 0 ? (
        <p>No posts available.</p>
      ) : (
        <div className='bg-gray-100 flex flex-col mx-auto md:w-1/2 pt-3 max-h-max'>
          {posts.map((post) => (
            <Post
              key={post.datePosted} // Assuming datePosted is unique and can be used as a key
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
