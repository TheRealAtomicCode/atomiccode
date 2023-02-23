import Head from 'next/head';
import Name from '../Components/Name';

import { useState, useRef, useEffect } from 'react';


export default function Home() {

  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);


  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-black">

        <div id='blob' className="absolute bg-red-500 w-12 h-12 rounded-full" style={{
          left: position.x - 20,
          top: position.y - 20,
        }}></div>

        <Name />

      </main>
    </>
  );
}