import { useState, useRef, useEffect } from 'react';


export default function Blob() {

    const blobRef = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        const handleMouseMove = (event) => {
            const x = event.clientX;
            const y = event.pageY;
            const { left, top } = blobRef.current.getBoundingClientRect();
            const dx = x - (left + 100);
            const dy = y - (top + 100);
            setPosition({ x: x - dx / 4, y: y - dy / 4 });
            setRotation(Math.atan2(dy, dx) * (10 / Math.PI));
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);


    return (
        <div
            id="blob"
            ref={blobRef}
            className="absolute bg-gradient-to-r blur-3xl from-blue-400 to-purple-500 w-96 h-72 rounded-full animate-rotate-custom duration-20s infinite"
            style={{
                transform: `translate(${position.x - 190}px, ${position.y - 150}px) rotate(${360}deg)`,
                transition: 'transform 0.3s ease-out',
            }}
        ></div>
    );
}
