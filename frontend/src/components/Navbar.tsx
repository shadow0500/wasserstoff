import React, { useState } from 'react'
import logoImage from '../Assets/logo.png'
import { NavLink, Navigate } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Avatar } from '@mui/material'
import heroImage from '../Assets/heroImage.jpg'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate= useNavigate();
  //To Change the Navbar with sign in or not
  var isSignedIn = true;
  const [isClicked, setIsClicked] = useState(false);
  //To Open or close dropdown using hamburger
  const handleHamClick = () => {
    setIsClicked((prev) => !prev);
  }
  //Badge icons
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  //To change notification icon color
  const [isFilled, setIsFilled] = useState(false);
  const handleColor = () => {
    setIsFilled((prev) => !prev);
    setValue(0);
  }
  //To change the value in badge
  const [value, setValue] = useState(10);
  

  return (
    <>
      <div className='bg-[#fffffe] h-[5rem] flex justify-between items-center'>
        <NavLink to='/'><img src={logoImage} className='h-[4rem]  ml-5 cursor-pointer' alt="" /></NavLink>
        {
          (isSignedIn) ? (<><div className='hidden sm:flex justify-center items-center space-x-4 mr-5'>

            <NavLink to='/createPost'><button className="bg-[#6246ea] cursor-pointer hover:bg-blue-700 text-white font-bold  px-4 h-[2.5rem] rounded">Create Post</button></NavLink>
            <NavLink to='/'><button className="bg-[#6246ea] cursor-pointer hover:bg-blue-700 text-white font-bold  px-4 h-[2.5rem] rounded">Posts</button></NavLink>

            <div>
              <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                <Badge badgeContent={value} color="secondary">
                  {
                    (!isFilled) ? (<NotificationsNoneIcon fontSize='large' className='cursor-pointer' color="action" onClick={handleColor} />) : (<NotificationsIcon fontSize='large' className='cursor-pointer' color="action" onClick={handleColor} />)
                  }
                </Badge>
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem onClick={() => {navigate('/profile'); setAnchorEl(null)}}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </div>
            <div>
              <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                <Avatar src={heroImage} />
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem onClick={() => {navigate('/profile')}}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </div>
          </div>
            <div className='flex sm:hidden'>
              <GiHamburgerMenu className='h-9 w-8 mr-5 cursor-pointer text-[#d000ff]' onClick={handleHamClick} />
            </div>
          </>) : (
            <div className='hidden sm:flex justify-center items-center space-x-4 mr-5'>
              <NavLink to='/signin'><button className="navbar-btn">Sign In</button></NavLink>
              <NavLink to='/signup'><button className="navbar-btn">Register</button></NavLink>
            </div>
          )
        }

      </div>
      {
        (isClicked) ? (
          <div className='flex flex-col  w-fit bg-transparent items-right space-y-4 mr-5 my-3 sm:hidden'>
            <NavLink to='/createPost'><button className=" text-black font-semibold text-left text-xl px-4 " onClick={handleHamClick}>Create Post</button></NavLink>
            <NavLink to='/posts'><button className="text-black font-semibold text-xl px-4" onClick={handleHamClick}>Posts</button></NavLink>
            <NavLink to='/profile'><div>
              <PermIdentityIcon className='ml-4' />
              <button className="text-black font-semibold text-xl px-1" onClick={handleHamClick}>Profile</button>
            </div></NavLink>
            <NavLink to='/signin'><div>
              <LogoutIcon className='ml-4' />
              <button className="text-black font-semibold text-xl px-1" onClick={handleHamClick}>Sign Out</button>
            </div></NavLink>
          </div>
        ) : (<></>)
      }
    </>
  )
}

export default Navbar