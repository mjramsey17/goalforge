'use client';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

export default function AuthForm() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Authenticator>
        {({ signOut, user }) => (
          <main className="text-center space-y-4">
            <h1 className="text-2xl font-bold">Hello, {user?.username}</h1>
            <button 
              onClick={signOut}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Sign out
            </button>
          </main>
        )}
      </Authenticator>
    </div>
  );
}
