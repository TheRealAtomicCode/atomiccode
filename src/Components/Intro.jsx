export default function Intro() {

    return (
        <div className='relative text-white text-xl'>
            <div className='sm:grid sm:grid-cols-2 text-center sm:text-justify m-4'>
                <div className='flex items-center h-full mr-4 sm:ml-4 md:ml-16'>
                    <p className="font-light text-3xl">
                        Welcome to my portfolio! I'm Qader Baghi, a self-taught web and mobile developer with expertise in multiple programming languages and frameworks. I'm passionate about creating user-friendly solutions and sharing my knowledge through engaging YouTube tutorials. Check out my portfolio to see what I can do for you!
                    </p>
                </div>
                <div className='flex justify-center'>
                    <img className='w-80 h-auto pt-16 sm:pt-0 sm:pl-2 sm:w-96 rounded-md object-contain' src='me.png' />
                </div>
            </div>
        </div>


    );
}
