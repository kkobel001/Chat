import React from 'react';
// import './Nav.scss';

type PropsNav = {
    title: string;
    source: string;

}

const Nav: React.FC<PropsNav> = ({ source, title }) => {
    return (
        <div className="min-h-full">
            <nav className="bg-gray-800">
                <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">{title}</a>
                        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">{source}</a>
                    </div>
                </div>
            </nav>
        </div>




    )

}


export default Nav;