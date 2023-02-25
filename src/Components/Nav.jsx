export default function Nav() {

    return (
        <>
            <div className="fixed z-10 bg-opacity-0 bg-black text-white w-[100%]">
                <ul className='flex py-2 px-4'>
                    <li className='mx-4 cursor-pointer'>Home</li>
                    <li className='mx-4 cursor-pointer'>Projects</li>
                    <li className='mx-4 cursor-pointer'>Youtube</li>
                </ul>
            </div>
        </>
    );
}