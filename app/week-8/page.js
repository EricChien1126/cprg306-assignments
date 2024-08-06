"use client";

import { useUserAuth } from "./_utils/auth-context";
import { useRouter } from 'next/router';

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const router = useRouter();

  const handleLogin = async () => {
    try {
      await gitHubSignIn();
      router.push('/week-8/shopping-list');
    } catch (error) {
      console.error("Error logging in: ", error);
    }
  };

  const handleLogout = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Error logging out: ", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome to the Shopping List App</h1>
      {user ? (
        <div>
          <p>Welcome, {user.displayName} ({user.email})</p>
          <button onClick={handleLogout} className="px-4 py-2 bg-red-600 text-white rounded-md shadow-sm hover:bg-red-700">
            Logout
          </button>
          <button onClick={() => router.push('/week-8/shopping-list')} className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700">
            Go to Shopping List
          </button>
        </div>
      ) : (
        <button onClick={handleLogin} className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700">
          Login with GitHub
        </button>
      )}
    </div>
  );
}
