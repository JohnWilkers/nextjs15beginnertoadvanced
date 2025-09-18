"use client";

import { useAuth, useUser } from "@clerk/nextjs";
import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  // const { isLoaded, userId, sessionId, getToken } = useAuth();
  // if (!isLoaded || !userId) {
  //   return null;
  // }
  
  // Use useUser only if you need the complete user object
  const { isLoaded, isSignedIn, user } = useUser();
  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)} >Increment</button>
    </>
  )
}