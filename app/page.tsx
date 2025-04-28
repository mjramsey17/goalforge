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
        <div className="flex f-screen items-center justify-center bg-gradient-to-br from-gray-500 to-maroon-600">
            <>
            <button
             onClick={() => router.push('/dashboard')}
             data-test="app-button-view"
             className= "px-8 py-4 text-white text-2xl font-bold bg-black bg-opacity-40 rounded-full hover:scale-105 transition transform"
            >
             Enter Project GoalForge 🚀
            </button>
            <style jsx global>{`
        [data-test=app-button-view] {
          
          
          backdrop-filter: blur(10px);
          z-index: 1;
          animation: glowing 4000ms infinite;
          animation-timing-function: ease-in-out;
          
        }

        @keyframes glowing {
          0% {
            background-color: black;
            opacity: 50%;
            box-shadow: 0 0 5px pink;
          }
          25% {
            background-color: black;
            opacity: 70%;
            box-shadow: 0 0 10px pink;
          }
          50% {
            background-color: black;
            opacity: 100%;
            box-shadow: 0 0 20px pink;
          }
          75% {
            background-color: black;
            opacity: 70%;
            box-shadow: 0 0 40px pink;
          }
          100% {
            background-color: black;
            opacity: 50%;
            box-shadow: 0 0 80px pink;
          }
        }
      `}</style>
      </>
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
