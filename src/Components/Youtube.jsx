import { useState } from 'react';

const Video = ({ title, lnk, setLnk, setVidTitle }) => {

    const clickHandler = () => {
        setLnk(lnk);
        setVidTitle(title);
    };

    return (
        <li className="py-2 px-4">
            <a onClick={clickHandler} className="text-white hover:text-gray-100 cursor-pointer">
                {title}
            </a>
        </li>
    );
};

export default function Youtube() {

    const [lnk, setLnk] = useState('https://www.youtube.com/embed/c16KLlM3ZNw?list=PLC78UwgJsZkv6lybReszKicGhScDFY40J');
    const [vidTitle, setVidTitle] = useState('React for Beginners - Lets build a memory game!');

    return (
        <div className='relative'>
            <h2 className="text-3xl text-center text-white mb-12">
                <a href="https://www.youtube.com/@AtomicCodeX">My youtube channel</a>
            </h2>
            <div className="grid grid-cols-12 gap-4 mx-2">

                <div className='col-span-12 w-full md:col-span-8 bg-white'>
                    <iframe className='w-full h-80 md:h-96 lg:h-[34rem] rounded-none' src={lnk} title={vidTitle} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>

                <div className='col-span-12 md:col-span-4 bg-gray-800 w-full h-80 md:h-auto md:overflow-y-auto rounded-lg'>
                    <h3 className="text-xl font-medium text-white mb-4 px-4 py-2">Playlist</h3>
                    <ul className="divide-y divide-gray-600">

                        <Video title="React for Beginners - Lets build a memory game!" lnk="https://www.youtube.com/embed/c16KLlM3ZNw?list=PLC78UwgJsZkv6lybReszKicGhScDFY40J" setLnk={setLnk} setVidTitle={setVidTitle} />
                        <Video title="Middleware explained - Node.JS" lnk="https://www.youtube.com/embed/YIOSYmDdZ5w" setLnk={setLnk} setVidTitle={setVidTitle} />
                        <Video title="Firebase V9 - The basics - (firestore, auth, and hosting)" lnk="https://www.youtube.com/embed/W15wiYrQBZI" setLnk={setLnk} setVidTitle={setVidTitle} />
                        <Video title="Node.js - build a Web Server - The beginners guide" lnk="https://www.youtube.com/embed/WRpfuKq-Am8" setLnk={setLnk} setVidTitle={setVidTitle} />
                        <Video title="JWT Explained - in 2 minutes (JSON Web Tokens)" lnk="https://www.youtube.com/embed/7ozQLeFJpqs" setLnk={setLnk} setVidTitle={setVidTitle} />
                        <Video title="useContext In 2 Minutes - the React Hooks series" lnk="https://www.youtube.com/embed/_HdrLsyAdJg" setLnk={setLnk} setVidTitle={setVidTitle} />

                    </ul>
                </div>
            </div>
        </div>
    );
}