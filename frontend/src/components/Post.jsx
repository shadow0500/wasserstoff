import React, {useState} from 'react';
import download from '../Assets/download.png';
// import { FaArrowRight } from 'react-icons/fa';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import signinImg from '../Assets/signinImg.jpeg'; // Add the path to your user profile image



const Post = ({userImageUrl, imageUrl, description, username, datePosted}) => {

  const [isTrunk, setIsTrunk] = useState(true)


  var myString = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lobasdjkrem Ipsum has been the industry's standard dummy text ever since the 1500";
  var truncString = myString.substring(0, 100)+"...";
  return (
    <div>
      <div className="flex flex-col bg-white border  rounded-lg shadow mb-3 p-4 space-y-2">
        <div className='flex items-center'>
          <img className="rounded-full h-10 w-10 mr-2" src={signinImg} alt="User Profile" />
          <div>
            <p className='font-bold text-xl text-black'>Zubair-05</p>
            <p className='text-black'>posted 22hrs ago</p>
          </div>
        </div>

        <p className="mb-3 text-lg text-gray-700 ">{(isTrunk)?truncString:myString}</p>
        {
          (myString.length > 100) && ((isTrunk) ? <p className='cursor-pointer' onClick={() => {setIsTrunk(false)}}>...see more</p> : <p className='cursor-pointer' onClick={() => {setIsTrunk(true)}}>...see less</p>)
        }
        <div className='h-1/2 flex flex-col justify-center'>
          <img className="rounded-t-lg object-cover" src={download} alt="" />
        </div>

        <div className="h-1/2 p-2">
          <div className='flex justify-around items-center'>
            <FavoriteBorderIcon className='cursor-pointer' fontSize="large" />
            <ChatBubbleOutlineIcon className='cursor-pointer' fontSize="large" />
            <BookmarkBorderIcon className='cursor-pointer' fontSize="large" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
