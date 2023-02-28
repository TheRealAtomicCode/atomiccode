const TechStack = () => {
    return (
        <div className="relative text-white container mx-auto px-4">
            {/* Design section */}
            <div className="mb-8 mt-0">
                <h2 className="text-4xl font-bold text-center mb-2 lg:mb-4">Design</h2>
                <div className="flex flex-wrap justify-center gap-4 text-center">
                    <div>
                        <h3 className='py-2 lg:text-lg'>HTML</h3>
                        <img src="html.svg" alt="HTML icon" className="w-20 md:w-20 lg:w-34 lg:mx-14 max-w-full" />
                    </div>
                    <div>
                        <h3 className='py-2 lg:text-2xl'>CSS</h3>
                        <img src="css.svg" alt="CSS icon" className="w-20 md:w-20 lg:w-34 lg:mx-14 max-w-full" />
                    </div>
                    <div>
                        <h3 className='py-2 lg:text-2xl'>Tailwind</h3>
                        <img src="tailwind.png" alt="Tailwind icon" className="w-20 md:w-20 lg:w-34 lg:mx-14 max-w-full" />
                    </div>
                    <div>
                        <h3 className='py-2 lg:text-2xl'>Figma</h3>
                        <img src="figma.svg" alt="Figma icon" className="w-20 md:w-20 lg:w-34 lg:mx-14 max-w-full max-h-24 lg:max-h-44" />
                    </div>
                </div>
            </div>

            {/* front end  */}
            <div className="mb-8 lg:mt-8">
                <h2 className="text-4xl font-bold text-center mb-6 lg:mb-4">Front-end</h2>
                <div className="flex flex-wrap justify-center gap-4 text-center">
                    <div>
                        <h3 className='py-2 lg:text-2xl'>JavaScript</h3>
                        <img src="js.svg" alt="JavaScript icon" className="w-20 md:w-20 lg:w-34 lg:mx-14 max-w-full" />
                    </div>
                    <div>
                        <h3 className='py-2 lg:text-2xl'>TypeScript</h3>
                        <img src="ts.png" alt="TypeScript icon" className="w-20 md:w-20 lg:w-34 lg:mx-14 max-w-full" />
                    </div>
                    <div>
                        <h3 className='py-2 lg:text-2xl'>React</h3>
                        <img src="react.svg" alt="Recat icon" className="w-20 md:w-20 lg:w-34 lg:mx-14 max-w-full" />
                    </div>
                    <div>
                        <h3 className='py-2 lg:text-2xl'>Next</h3>
                        <img src="next.png" alt="Next icon" className="w-20 md:w-20 lg:w-34 lg:mx-14 max-w-full max-h-24 lg:max-h-44" />
                    </div>
                </div>
            </div>

            {/* Backend section */}
            <div className="mb-8 lg:mt-8">
                <h2 className="text-4xl font-bold text-center mb-6 lg:mb-4">Back-end</h2>
                <div className="flex flex-wrap justify-center gap-4 text-center">
                    <div>
                        <h3 className='py-2 lg:text-2xl'>Node.JS</h3>
                        <img src="node.png" alt="Node.JS icon" className="w-20 md:w-20 lg:w-34 lg:mx-14 max-w-full" />
                    </div>
                    <div>
                        <h3 className='py-2 lg:text-2xl'>PostgreSQL</h3>
                        <img src="postgresql.png" alt="PostgreSQL icon" className="w-20 md:w-20 lg:w-34 lg:mx-14 max-w-full" />
                    </div>
                    <div>
                        <h3 className='py-2 lg:text-2xl'>MongoDB</h3>
                        <img src="mongo.svg" alt="MongoDB icon" className="w-20 md:w-20 lg:w-34 lg:mx-14 max-w-full" />
                    </div>
                    <div>
                        <h3 className='py-2 lg:text-2xl'>Firebase</h3>
                        <img src="firebase.svg" alt="Firebase icon" className="w-20 md:w-20 lg:w-34 lg:mx-14 max-w-full max-h-24 lg:max-h-44" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TechStack;