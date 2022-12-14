import { auth } from "../utils/firebase";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Dashboard() {
  const route = useRouter();
  const [user, loading] = useAuthState(auth);
  //See if user us logged
  const getData = async () => {
    if (loading) return;
    if (!user) return route.push("/auth/login");
  };

  //Get users data
  useEffect(() => {
    getData();
  }, [user, loading]);

  return (
    <div>
      <h1>Your posts</h1>
      <div>posts</div>
      <button onClick={() => auth.signOut()}>Sign out</button>
    </div>
  );
}
