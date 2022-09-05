import { NavLink, Link } from 'react-router-dom';

export default function Navigation(){

    return(
        <header className="bg-[#30976A] shadow-lg">
            <div className="px-4 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                <div className="md:flex md:items-center md:gap-12">
                    <Link to='/' className="block text-[#FAF4DE] text-2xl">
                        ACPedia
                    </Link>
                </div>

                <div className="hidden md:block active:visible">
                    <nav aria-labelledby="header-navigation">
                        <h2 className="sr-only" id="header-navigation">Header navigation</h2>

                        <ul className="flex items-center text-sm gap-6">
                            <li>
                                <NavLink 
                                    to='/fishes' 
                                    className='text-[#FAF4DE] md:text-lg transition-all duration-150 hover:text-[#FAF4DE]/75 hover:tracking-widest'
                                    style={({ isActive }) => {
                                        return {
                                            borderBottom: isActive ? "2px solid #FAF4DE" : "0px",
                                        }
                                    }}
                                >
                                    Poissons
                                </NavLink>
                            </li>

                            <li>
                                <NavLink 
                                    to='/seacreatures' 
                                    className='text-[#FAF4DE] md:text-lg transition-all duration-150 hover:text-[#FAF4DE]/75 hover:tracking-widest'
                                    style={({ isActive }) => {
                                        return {
                                            borderBottom: isActive ? "2px solid #FAF4DE" : "0px",
                                        }
                                    }}
                                >
                                    Créatures de mer
                                </NavLink>
                            </li>

                            <li>
                                <NavLink 
                                    to='/bugs' 
                                    className='text-[#FAF4DE] md:text-lg transition-all duration-150 hover:text-[#FAF4DE]/75 hover:tracking-widest'
                                    style={({ isActive }) => {
                                        return {
                                            borderBottom: isActive ? "2px solid #FAF4DE" : "0px",
                                        }
                                    }}
                                >
                                    Insectes
                                </NavLink>
                            </li>

                            <li className={window.location.pathname === '/fossils' ? "border-b-2 border-[#FAF4DE]/75 text-[#FAF4DE]/75" : ""}>
                                <NavLink 
                                    to='/fossils' 
                                    className='text-[#FAF4DE] md:text-lg transition-all duration-150 hover:text-[#FAF4DE]/75 hover:tracking-widest'
                                    style={({ isActive }) => {
                                        return {
                                            borderBottom: isActive ? "2px solid #FAF4DE" : "0px",
                                        }
                                    }}
                                >
                                    Fossiles
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="flex items-center gap-4">
                    <div className="sm:gap-4 sm:flex">
                    <a
                        className="px-5 py-2.5 text-sm font-medium text-white bg-teal-600 rounded-md shadow"
                        href="/"
                    >
                        Login
                    </a>

                    <div className="hidden sm:flex">
                        <a
                        className="px-5 py-2.5 text-sm font-medium text-teal-600 bg-gray-100 rounded-md"
                        href="/"
                        >
                        Register
                        </a>
                    </div>
                    </div>

                    <div className="block md:hidden">
                        <button
                            className="p-2 text-gray-600 bg-gray-100 rounded transition hover:text-gray-600/75"
                        >
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                            </svg>
                        </button>
                    </div>
                </div>
                </div>
            </div>
        </header>

    )
}