import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';
import Router from 'next/router';
import Link from 'next/link';

export default function Home() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Simulate successful login for demo purposes
    const res = { success: true, message: "Login successful", token: "fakeToken" };

    if (res.success) {
      toast.success(res.message);
      Cookies.set("token", res.token);
      setTimeout(() => {
        Router.push("/home");
      }, 1000);
    } else {
      toast.error(res.message);
    }
  };

  return (
    <>
      <section className="bg-black text-center text-white">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow sm:max-w-md">
            <div className="p-6 space-y-4 sm:p-8">
              <h1 className="text-xl font-bold tracking-tight text-black dark:text-white">Login</h1>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className='text-left'>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-black">Your email</label>
                  <input 
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-100 border text-black rounded-lg block w-full p-2.5"
                    placeholder="name@gmail.com"
                    required
                  />
                </div>
                <div className='text-left'>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-black">Password</label>
                  <input
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-100 border text-black rounded-lg block w-full p-2.5"
                    required
                  />
                </div>
                <button type="submit" className="w-full text-white bg-black hover:bg-gray-800 font-medium rounded-lg text-sm px-5 py-2.5">Sign in</button>
                <p className="text-sm font-light text-black">
                  Don’t have an account yet? <Link href="/register" className="font-medium text-black hover:underline">Sign up</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
}