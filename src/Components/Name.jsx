import { useState } from 'react';

export default function Name() {

    const [name, setName] = useState('ATOMIC CODE');

    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ 1234567890!@#$%^&*()_-';
    const ATOMICCODE = 'ATOMIC CODE';

    const changeName = () => {

        let iterations = 1 / 3;

        const interval = setInterval(() => {
            const word = name.split('')
                .map((letter, index) => {
                    if (index < iterations) {
                        return ATOMICCODE[index];
                    }

                    return letters[Math.floor(Math.random() * 48)];
                })
                .join('');
            setName(word);

            if (iterations >= ATOMICCODE.length) clearInterval(interval);

            iterations += 1;
        }, 40);

    };

    return (
        <>
            <div className='flex h-screen items-center justify-center'>
                <h1 onMouseOver={changeName} className='text-white text-[4rem] sm:text-[6rem]  z-10'>{name}</h1>
            </div>
        </>
    );
}