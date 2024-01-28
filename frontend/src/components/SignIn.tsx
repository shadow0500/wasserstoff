import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import signinImg from '../Assets/signinImg.jpeg';

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const { data } = await axios.post('http://localhost:3000/login', formData);
      console.log(data);
      navigate('/posts');
    } catch (error:any) {
      console.log(error.response.data);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="flex flex-col h-screen items-center justify-center bg-[#f8f9fd] space-y-2 w-full">
        <div className="border-2 rounded-lg shadow-xl bg-[#ffffff] m-2">
          <img src={signinImg} alt="" className="mx-auto my-4" width={120} />
          <p className="text-center text-3xl text-black my-3">Sign In</p>

          <div>
            <form
              action=""
              className="flex flex-col space-y-5 my-4 justify-center items-center "
              method="POST"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Username or Email"
                className="mx-8 px-2 placeholder-black bg-white border-[#eeeeee] border-2 h-10 w-64 rounded-md text-black outline-none"
              />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="mx-8 px-2 placeholder-black bg-white border-[#eeeeee] border-2 h-10 w-64 rounded-md outline-none"
              />
              <button
                type="submit"
                className="mx-auto bg-[#6246ea] hover:bg-blue-700 text-white font-bold py-2 px-4 h-10 w-64 rounded-md"
              >
                Sign In
              </button>
            </form>
            <div className="flex justify-end">
              <button className="mr-4 mb-10 hover:underline text-blue-800">Forgot password??</button>
            </div>
          </div>
        </div>
        <span className="text-center text-black">
          New to the website? <NavLink to="/signup" className="hover:text-blue-800">Create Account</NavLink>
        </span>
      </div>
    </>
  );
};

export default SignIn;
