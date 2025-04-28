'use client';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { useRouter } from 'next/navigation';


export default function AuthForm() {

    const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Authenticator>
        {({ signOut, user }) => (
        <div className="flex h-screen items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
            <button
             onClick={() => router.push('/dashboard')}
             className="px-8 py-4 text-white text-2xl font-bold bg-black bg-opacity-40 rounded-full hover:scale-105 transition transform"
            >
             Enter GoalForge 🚀
            </button>
        </div>
        )}
      </Authenticator>
    </div>
  );
}


/*<h1 className="text-2xl font-bold">Hello, {user?.username}</h1>
            <button 
              onClick={signOut}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Sign out
            </button> */
