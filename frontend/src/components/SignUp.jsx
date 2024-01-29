import React from 'react'
import { NavLink } from 'react-router-dom'
import signinImg from '../Assets/signinImg.jpeg'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = React.useState({
    email: '',
    password: '',
    name:'',
    confirmPassword: '',
    username: '',
    media: null,
  })

  const token = localStorage.getItem("token");
  if(token){
    navigate('/');
    return;
  }
  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const { email, password, confirmPassword, name, username,media,phoneNumber, gender, age, profilePicture, backgroundPicture } = formData
      if (password !== confirmPassword) {
        alert('Passwords do not match')
      }
      
      const userData = {
        email,
        password,
        name,
        username,
        media,
      };
      const res = await axios.post("http://localhost:3000/signUp", userData);
      console.log(res.data);
      localStorage.setItem("token", res.token);
      navigate('/');
    } catch (err) {
      console.log(`error is : ${err}`  )
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleChange2 = (e) => {
    // Handle file input separately
    if (e.target.name === 'profilePicture' || e.target.name === 'backgroundPicture') {
      setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };
  return (
    <>

      <div className=" flex flex-col  items-center justify-center bg-[#f8f9fd] space-y-2 w-full">
        <div className='border-2 rounded-lg shadow-xl bg-[#ffffff] m-2 w-fit'>
          <img src={signinImg} alt="" className='mx-auto my-4' width={120} />
          <p className='text-center text-3xl my-3'>Sign Up</p>

          <div>
            <form action="" method='POST' className='flex flex-col space-y-5 my-5 mb-8 justify-center items-center '>

              {/* Additional form fields */}
              <div className="flex flex-col space-y-1 w-64 mx-8">
                {/* <label htmlFor="email" className="text-sm text-gray-600">Name</label> */}
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder='Email'
                  className='px-2 bg-white placeholder-black border-[#eeeeee] border-2 h-10 rounded-md outline-none'
                />
              </div>
              <div className="flex flex-col space-y-1 w-64 mx-8">
                {/* <label htmlFor="password" className="text-sm text-gray-600">Name</label> */}
                <input
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  type="password"
                  placeholder='Password'
                  className='px-2 bg-white placeholder-black border-[#eeeeee] border-2 h-10 rounded-md outline-none'
                />
              </div>
              <div className="flex flex-col space-y-1 w-64 mx-8">
                {/* <label htmlFor="confirmPassword" className="text-sm text-gray-600">Name</label> */}
                <input
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  type="password"
                  placeholder='Confirm Password'
                  className='px-2 bg-white placeholder-black border-[#eeeeee] border-2 h-10 rounded-md outline-none'
                />
              </div>
              <div className="flex flex-col space-y-1 w-64 mx-8">
                {/* <label htmlFor="name" className="text-sm text-gray-600">Name</label> */}
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                  placeholder='Name'
                  className='px-2 bg-white placeholder-black border-[#eeeeee] border-2 h-10 rounded-md outline-none'
                />
              </div>
              <div className="flex flex-col space-y-1 w-64 mx-8">
                {/* <label htmlFor="name" className="text-sm text-gray-600">Name</label> */}
                <input
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  type="text"
                  placeholder='Username'
                  className='px-2 bg-white placeholder-black border-[#eeeeee] border-2 h-10 rounded-md outline-none'
                />
              </div>

              {/* Profile Picture */}
              <div className="flex flex-col space-y-1 w-64 mx-8">
                <label htmlFor="profilePicture" className="text-sm text-gray-600">Profile Picture</label>
                <input
                  name="media"
                  onChange={handleChange2}
                  type="file"
                  accept="image/*"
                  className='px-2 placeholder-black border-[#eeeeee] border-2 h-10 rounded-md outline-none'
                />
              </div>

              <button
                type="submit"
                className='mx-auto bg-[#6246ea] hover:bg-blue-700 text-white font-bold py-2 px-4 h-10 w-64 rounded-md'
                onClick={handleSubmit}
              >
                Register
              </button>
            </form>

          </div>
        </div>
        <span className=' text-center text-black pb-3'>Already have an Accont? <NavLink to='/signin' className=' hover:text-blue-800'>Log In</NavLink></span>
      </div>
    </>
  )
}

export default SignUp