import React, { useState } from 'react';

interface PostProps {
  userImageUrl: string;
  imageUrl: string;
  description: string;
  username: string;
  datePosted: string;
}

const Post: React.FC<PostProps> = ({ userImageUrl, imageUrl, description, username, datePosted }) => {
  const [isTrunk, setIsTrunk] = useState(true);

  const myString = description;
  const truncString = myString.substring(0, 100) + '...';

  return (
    <div>
      <div className="flex flex-col bg-white border rounded-lg shadow mb-3 p-4 space-y-2">
        <div className='flex items-center'>
          <img className="rounded-full h-10 w-10 mr-2" src={userImageUrl} alt="User Profile" />
          <div>
            <p className='font-bold text-xl text-black'>{username}</p>
            <p className='text-black'>posted on {datePosted}</p>
          </div>
        </div>

        <p className="mb-3 text-lg text-gray-700 ">{(isTrunk) ? truncString : myString}</p>
        {
          (myString.length > 100) && ((isTrunk) ? <p className='cursor-pointer' onClick={() => { setIsTrunk(false) }}>...see more</p> : <p className='cursor-pointer' onClick={() => { setIsTrunk(true) }}>...see less</p>)
        }
        <div className='h-1/2 flex flex-col justify-center'>
          <img className="rounded-t-lg object-cover" src={imageUrl} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Post;
