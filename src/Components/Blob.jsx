import { useState, useEffect } from 'react';

export default function Blob() {
    const [position, setPosition] = useState({ x: 180, y: 290 });

    useEffect(() => {
        const handleMouseMove = (event) => {
            const x = event.clientX;
            const y = event.pageY;
            setPosition({ x, y });
        };

        const handleScroll = () => {
            setPosition((prevState) => ({
                ...prevState,
                y: window.pageYOffset + 290,
            }));
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div
            id="blob"
            className="absolute bg-gradient-to-r blur-3xl from-blue-500 to-sky-400 w-96 h-72 rounded-full animate-rotate-custom"
            style={{
                transform: `translate(${position.x - 120}px, ${position.y - 190}px)  scale(1.2)`, // edit the scale() value to adjust the morphing
                transition: 'transform 0.8s ease-out',
            }}
        ></div>
    );
}