
'use client';
import { Button } from '../../ui/button'; // Importing the Button component
import { useState, useEffect } from 'react';
import Image from 'next/image';
import backgroundImage from '../../../eventback2.jpg'; // Make sure to adjust the path
import { createEvent } from '../../lib/action'; // Assuming this function sends the data
import { redirect } from 'next/navigation';
import { useRouter } from 'next/router'; // Import the useRouter hook
import Link from 'next/link';
import Layout from '../../layout.tsx';


export default function Form() {
  //const router = useRouter();
  const [width1, setWidth] = useState(0);
  const [height1, setHeight] = useState(0);
  const [isMounted, setIsMounted] = useState(false); // Track if component has mounted

  const [gameID, setGameID] = useState('');
  const [time, setTime] = useState('');
  const [eventType, setEventType] = useState('');
  const [team, setTeam] = useState('');
  const [playerID, setPlayerID] = useState('');
  //const [eventId, setEventId] = useState(101); // Starting Event ID


  // Set the initial width after the component mounts on the client
  useEffect(() => {
    const updateDimensions = () => {
      setWidth(window.innerWidth); 
      setHeight(window.innerHeight);
    }
    setIsMounted(true); // Set isMounted to true after the first render

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []); // Empty dependency array ensures this runs only once

  if (!isMounted) return null;

  const containerStyle ={
    position: 'absolute',
    height: height1 < 550 ? '75vh' : '500px',
    width: height1 < 550 ? '45vw' : '400px',
    borderRadius: '10px',
    backgroundColor: '#f2f2f2',
    border: '2px solid',
    padding: '30px',
    boxShadow: '0 8px 8px rgba(1, 1, 1, 0.15)',
    display: 'grid',
    alignItems: 'center',
    fontSize: width1 < 650 || height1 < 450 ? '12px' : '16px',
    placeItems: 'center',
  };

  const inputStyle = {
    textAlign: 'center',
    width: width1 < 550 || height1 < 450 ? '80%' : '100%',
    height: width1 < 550 || height1 < 450 ? '80%' : '100%',
    fontSize: width1 < 550 || height1 < 450 ? '12px' : '16px',
  };

  // Handle form submission
  async function handleClick() {
   // event.preventDefault(); // Prevent the default form submission
  //console.log("why");
    // Create a new FormData instance
    const formData = new FormData();
   // formData.append('eventId', eventId.toString());  // Convert number to string
    formData.append('gameID', gameID);
    formData.append('time', time);
    formData.append('eventType', eventType);
    formData.append('team', team);
    formData.append('playerID', playerID);
  
    await createEvent(formData);
  };
  

  return (
    <Layout>
      <body
        style={{
          //position: 'relative',
          width: width1,
          height: height1,
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
        }}
      >
        <Image
          src={backgroundImage}
          alt="Background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          //backgroundPosition = "bottom"
        />
        <div style={containerStyle}>  
          <div className="grid place-items-center mb-4" style={{ textAlign: 'center', paddingInline: '40px' }}>
            <label htmlFor="GameID">Enter a Game ID</label>
            <input
              id="GameID"
              name="GameID"
              type="number"
              value={gameID}
              onChange={(e) => setGameID(e.target.value)}
              placeholder="i.e. 12345"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              style={inputStyle}
            />
          </div>
          <div className="grid place-items-center mb-4" style={{ textAlign: 'center', paddingInline: '40px' }}>
            <label htmlFor="time">Enter a time for the event</label>
            <input
              id="time"
              name="time"
              type="number"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              placeholder="0-90"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              style={inputStyle}
            />
          </div>
          <div className="grid place-items-center mb-4" style={{ textAlign: 'center', paddingInline: '30px', justifyContent: 'center' }}>
            <label htmlFor="type">What type of event</label>
            <input
              id="type"
              name="type"
              type="text"
              value={eventType}
              onChange={(e) => setEventType(e.target.value)}
              placeholder="Goal, Assist, Yellow Card, Red Card"
              className="rounded-md border w-full border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              style={inputStyle}
            />
          </div>
          <div className="grid place-items-center mb-4" style={{ textAlign: 'center', paddingInline: '40px' }}>
            <label htmlFor="team">Which team</label>
            <input
              id="team"
              name="team"
              type="binary"
              value={team}
              onChange={(e) => setTeam(e.target.value)}
              placeholder="1 for Roanoke, 0 for Opponent"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              style={inputStyle}
            />
          </div>
          <div className="grid place-items-center mb-4" style={{ textAlign: 'center', paddingInline: '40px' }}>
            <label htmlFor="playerID">Enter an ID</label>
            <input
              id="playerID"
              name="playerID"
              type="number"
              value={playerID}
              onChange={(e) => setPlayerID(e.target.value)}
              placeholder="i.e. 12345"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              style={inputStyle}
            />
          </div>
          <Button onClick = {handleClick}>
            Submit
          </Button>
        </div>
      </body>
      </Layout>
  );
}


// app/page.tsx or a specific page file
/*'use client';
import { useState } from 'react';
import Image from 'next/image';
import backgroundImage from 'C:/Users/micha/350react/350Project/teamapp/app/eventback2.jpg';
import Layout from '../../layout.tsx';
import { EventButton } from './EventButton.tsx';

export default function Form() {
  const [gameID, setGameID] = useState('');
  const [time, setTime] = useState('');
  const [eventType, setEventType] = useState('');
  const [team, setTeam] = useState('');
  const [playerID, setPlayerID] = useState('');

  return (
    <Layout>
      <div
        style={{
          width: '100%',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <Image
          src={backgroundImage}
          alt="Background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />

        <div style={{
          position: 'absolute',
          height: '500px',
          width: '400px',
          borderRadius: '10px',
          backgroundColor: '#f2f2f2',
          border: '2px solid',
          padding: '30px',
          boxShadow: '0 8px 8px rgba(1, 1, 1, 0.15)',
          display: 'grid',
          placeItems: 'center',
        }}>
          <div>
            <div className="mb-4" style={{ textAlign: 'center', paddingInline: '40px' }}>
              <label htmlFor="GameID">Enter a Game ID</label>
              <input
                id="GameID"
                type="number"
                value={gameID}
                onChange={(e) => setGameID(e.target.value)}
                placeholder="i.e. 12345"
                className="peer block w-full rounded-md border border-gray-200 py-2 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
            <div className="mb-4" style={{ textAlign: 'center', paddingInline: '40px' }}>
              <label htmlFor="time">Enter a time for the event</label>
              <input
                id="time"
                type="number"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                placeholder="0-90"
                className="peer block w-full rounded-md border border-gray-200 py-2 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
            <div className="mb-4" style={{ textAlign: 'center', paddingInline: '40px' }}>
              <label htmlFor="type">What type of event</label>
              <input
                id="type"
                type="text"
                value={eventType}
                onChange={(e) => setEventType(e.target.value)}
                placeholder="Goal, Assist, Yellow Card, Red Card"
                className="rounded-md border w-full border-gray-200 py-2 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
            <div className="mb-4" style={{ textAlign: 'center', paddingInline: '40px' }}>
              <label htmlFor="team">Which team</label>
              <input
                id="team"
                type="number"
                value={team}
                onChange={(e) => setTeam(e.target.value)}
                placeholder="1 for Roanoke, 0 for Opponent"
                className="peer block w-full rounded-md border border-gray-200 py-2 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
            <div className="mb-4" style={{ textAlign: 'center', paddingInline: '40px' }}>
              <label htmlFor="playerID">Enter a Player ID</label>
              <input
                id="playerID"
                type="number"
                value={playerID}
                onChange={(e) => setPlayerID(e.target.value)}
                placeholder="i.e. 12345"
                className="peer block w-full rounded-md border border-gray-200 py-2 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
            <EventButton
              GameId={Number(gameID)}
              Time={Number(time)}
              Type={eventType}
              Team={Number(team)}
              PlayerId={Number(playerID)}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
*/