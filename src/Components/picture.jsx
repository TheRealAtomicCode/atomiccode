export default function Intro() {

    return (
        <div className='relative text-white text-xl'>
            <div className='sm:grid sm:grid-cols-2 text-center sm:text-justify m-4'>
                <div className='flex items-center h-full mr-4 sm:ml-4 md:ml-16'>
                    <p className="font-light">
                        Hi, I'm Qader Baghi,
                        and i'm a self taught
                        web and mobile developer,
                        oh and I also do
                        youtube tutorials
                    </p>
                </div>
                <div className='flex justify-center'>
                    <img className='w-44 mt-10 sm:mt-0 sm:w-60 rounded-md' src='me.png' />
                </div>
            </div>
        </div>
    );
}
