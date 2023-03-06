const Projects = () => {
    return (
        <div className="relative text-white">
            <h2 className="text-center text-3xl">Projects</h2>
            <div className="flex flex-wrap justify-center py-8 px-4 sm:px-8 lg:px-16">
                <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
                    <div className="bg-gray-800 h-full rounded-lg overflow-hidden shadow-lg">
                        <div className="bg-gray-500 h-48 md:h-64">
                            <img className="object-cover  h-48 md:h-64" src="atomicdev.jpg" alt="" />
                        </div>
                        <div className="p-4">
                            <h3 className="text-xl font-medium mb-2">Atomic.dev</h3>
                            <p className="text-gray-400 text-base mb-4">
                                A Next.js and firebase app inspired by Dev.to
                            </p>
                            <div className="flex justify-between">
                                <a
                                    href="https://github.com/user/repo"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white"
                                >
                                    GitHub Repo
                                </a>
                                <a
                                    href="https://example.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white"
                                >
                                    Website
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
                    <div className="bg-gray-800 h-full rounded-lg overflow-hidden shadow-lg">
                        <div className="bg-gray-500 h-48 md:h-64">
                            <img className="object-cover  h-48 md:h-64" src="space.png" alt="" />
                        </div>
                        <div className="p-4">
                            <h3 className="text-xl font-medium mb-2">NASA API app</h3>
                            <p className="text-gray-400 text-base mb-4">
                                An application that displays information from NASA's public APIs based on date entered.
                            </p>
                            <div className="flex justify-between">
                                <a
                                    href="https://github.com/user/repo"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white"
                                >
                                    GitHub Repo
                                </a>
                                <a
                                    href="https://example.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white"
                                >
                                    Website
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
                    <div className="bg-gray-800 h-full rounded-lg overflow-hidden shadow-lg">
                        <div className="bg-gray-500 h-48 md:h-64">
                            <img className="object-cover  h-48 md:h-64" src="chat.png" alt="" />
                        </div>
                        <div className="p-4">
                            <h3 className="text-xl font-medium mb-2">Chat-Firebase</h3>
                            <p className="text-gray-400 text-base mb-4">
                                A chat application built with Firebase and React
                            </p>
                            <div className="flex justify-between">
                                <a
                                    href="https://github.com/user/repo"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white"
                                >
                                    GitHub Repo
                                </a>
                                <a
                                    href="https://example.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white"></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
                    <div className="bg-gray-800 h-full rounded-lg overflow-hidden shadow-lg">
                        <div className="bg-gray-500 h-48 md:h-64">
                            <img className="object-cover  h-48 md:h-64" src="task.png" alt="" />
                        </div>
                        <div className="p-4">
                            <h3 className="text-xl font-medium mb-2">Task Manager REST API</h3>
                            <p className="text-gray-400 text-base mb-4">
                                A REST API Built in express, node.js, mongoDB, and mongoose, for managing user tasks.
                            </p>
                            <div className="flex justify-between">
                                <a
                                    href="https://github.com/user/repo"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white"
                                >
                                    GitHub Repo
                                </a>
                                <a
                                    href="https://example.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white"
                                >
                                    Website
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;