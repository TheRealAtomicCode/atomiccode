import { useState } from 'react';

const Video = ({ title, lnk, setLnk, setTitle }) => {

    setLnk(lnk);
    setTitle(title);

    return (
        <li className="py-2 px-4">
            <a className="text-white hover:text-gray-100 cursor-pointer">
                kkk
            </a>
        </li>
    );
};

export default function Youtube() {

    const [lnk, setLnk] = useState('https://www.youtube.com/embed/YIOSYmDdZ5w');
    const [title, setTitle] = useState('Middleware explained - Node.JS');

    console.log(lnk);
    console.log(title);

    return (
        <div className='relative'>
            <h2 className="text-3xl text-center text-white mb-12">My youtube channel</h2>
            <div className="grid grid-cols-12 gap-4 mx-2">

                <div className='col-span-12 w-full md:col-span-8 bg-white'>
                    <iframe className='w-full h-80 md:h-96 lg:h-[34rem] rounded-none' src={lnk} title={title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>

                <div className='col-span-12 md:col-span-4 bg-gray-800 w-full h-80 md:h-auto md:overflow-y-auto rounded-lg'>
                    <h3 className="text-xl font-medium text-white mb-4 px-4 py-2">Playlist</h3>
                    <ul className="divide-y divide-gray-600">

                        <Video title="Middleware explained - Node.JS" lnk="#" setLnk={setLnk} setTitle={setTitle} />
                        <Video title="2" lnk="#3" setLnk={setLnk} setTitle={setTitle} />
                        <Video title="3 Node.JS" lnk="#2" setLnk={setLnk} setTitle={setTitle} />
                        <Video title="4 - Node.JS" lnk="#4" setLnk={setLnk} setTitle={setTitle} />
                        <Video title="5 - Node.JS" lnk="#5" setLnk={setLnk} setTitle={setTitle} />
                        <Video title="6 - Node.JS" lnk="#6" setLnk={setLnk} setTitle={setTitle} />

                    </ul>
                </div>
            </div>
        </div>
    );
}