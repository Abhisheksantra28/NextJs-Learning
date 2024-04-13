"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import {toast} from "react-hot-toast"

const Page = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });
  const [loading, setLoading] = useState(false)

  const router = useRouter();

  const onSignup = async () => {
    try {
      setLoading(true)
      const response = await axios.post("/api/users/signup", user);
      console.log("Signup success",response.data);
      router.push("/login");
    } catch (error:any) {
      console.error(error.message);
    }finally{
      setLoading(false)
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2  text-white">
      <h1 className="text-5xl">Signup</h1>
      <hr className="my-4 w-1/4 border border-white" />

      <form className="w-80 text-black">
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium">
            Username:
          </label>
          <input
            type="text"
            id="username"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            placeholder="Enter your username"
            className="mt-1 p-2 w-full border focus:outline-none rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            placeholder="Enter your email"
            className="mt-1 p-2 w-full border focus:outline-none rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium">
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder="Enter your password"
            className="mt-1 p-2 w-full focus:outline-none border rounded-md"
          />
        </div>

        <button
          type="button" // Change to "submit" if using a form submit
          onClick={onSignup}
          disabled={loading}
          className="bg-blue-500 text-white p-2 rounded-md"
        >
          Sign Up
        </button>
      </form>

      <p className="mt-4">
        Already have an account?{' '}
        <Link href="/login">
          Login
        </Link>
      </p>
    </div>
  );
};


export default Page;
