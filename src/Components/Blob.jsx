import { useState, useRef, useEffect } from 'react';

export default function Blob() {
    const blobRef = useRef(null);
    const [position, setPosition] = useState({ x: 180, y: 190 });

    useEffect(() => {
        const handleMouseMove = (event) => {
            const x = event.clientX;
            const y = event.clientY;
            const { left, top } = blobRef.current.getBoundingClientRect();
            const dx = x - (left + 100);
            const dy = y - (top + 100);
            setPosition({ x: x - dx / 2, y: y - dy / 2 });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    // setInterval(() => {
    //     setRotate(rotate + 10);
    //     if (rotate === 360) {
    //         setRotate(0);
    //     }
    // }, 50);

    return (
        <div
            id="blob"
            ref={blobRef}
            className="fixed bg-gradient-to-r blur-3xl from-blue-400 to-purple-500 w-96 h-72 rounded-full animate-rotate-custom"
            style={{
                transform: `translate(${position.x - 90}px, ${position.y - 90}px)  scale(1.2)`, // edit the scale() value to adjust the morphing
                transition: 'transform 0.8s ease-out',
            }}
        ></div>
    );
}