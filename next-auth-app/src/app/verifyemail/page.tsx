"use client";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const page = () => {
  const [token, setToken] = useState("");
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(null);

  const verifyEmail = async () => {
    try {
      const { data } = await axios.post("/api/users/verifyemail", { token });
      setVerified(true);
      setError(null);
    } catch (error: any) {
      setError(error.message);
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    setError(null);
    const urlToken = window.location.search.split("=")[1];
    setToken(urlToken || "");
  }, []);

  useEffect(() => {
    setError(null);
    if (token.length > 0) {
      verifyEmail();
    }
  }, [token]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl">Verify Email</h1>
      <h2 className="p-2 bg-orange-500 text-black">
        {token ? `${token}` : "No token"}
      </h2>
      {verified && (
        <div className="">
          <h2 className="p-2 bg-green-500 text-black">Email verified</h2>
          <Link href="/login">Login</Link>
        </div>
      )}
      {error && (
        <div className="">
          <h2 className="p-2 bg-green-500 text-black">
            Something went wrong...
          </h2>
        </div>
      )}
    </div>
  );
};

export default page;
