import { useState } from 'react';
import Cookies from 'universal-cookie';

import { Modal } from 'react-bootstrap';


export default function ConnectModal({showModal, toggleShowModal}) {
    const cookies = new Cookies();

    const [showPwd, setShowPwd] = useState(false);
    const [user, setUser] = useState('');

    const handlePwdIconClick = (e) => {
        e.preventDefault();
        setShowPwd(!showPwd);
    }

    const setUserCookie = () => {
        
    }

    const handleConnectClick = async (e) => {
        e.preventDefault();
        setUser({firstname: "Hugo", lastname: "Zbinden"});
        cookies.set('user', user, { path: '/', maxAge: 3})
    }
    
    return(

        <Modal show={showModal} onHide={toggleShowModal}>
            <form action="" className="p-8 mb-0 rounded-lg shadow-2xl space-y-4 bg-[#E6E1CF]">
                <p className="text-3xl text-center font-medium">Connexion utilisateur</p>

                <div>
                    <label htmlFor="email" className="text-sm font-medium">Email</label>

                    <div className="relative mt-1">
                    <input
                        type="email"
                        id="email"
                        className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm bg-[#FAF4DE]"
                        placeholder="Enter email"
                    />

                    <span className="absolute inset-y-0 inline-flex items-center right-4">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                        />
                        </svg>
                    </span>
                    </div>
                </div>

                <div>
                    <label htmlFor="password" className="text-sm font-medium">Password</label>

                    <div className="relative mt-1">
                    <input
                        type={showPwd ? 'text' : 'password'}
                        id="password"
                        className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm bg-[#FAF4DE]"
                        placeholder="Enter password"
                    />

                    <span className="absolute inset-y-0 inline-flex items-center right-4">
                        <button onClick={(e) => {handlePwdIconClick(e)}}>
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 text-gray-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                            </svg>
                        </button>
                    </span>
                    </div>
                </div>

                <button type="submit" className="block w-full px-5 py-3 text-sm font-medium text-white bg-[#01A6BF] rounded-lg" onClick={(e) => {handleConnectClick(e)}}>
                    Se connecter
                </button>

                <p className="text-sm text-center text-gray-500">
                    Aucun compte ? {' '}
                    <a className="underline" href="">Créez-en un !</a>
                </p>
            </form>
        </Modal>

    )
}