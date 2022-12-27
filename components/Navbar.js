import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        // <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        //     <div className="grid gap-10 lg:grid-cols-2">
        //         <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
        //             <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400">
        //                 <svg className="text-teal-900 w-7 h-7" viewBox="0 0 24 24">
        //                     <polyline
        //                         fill="none"
        //                         stroke="currentColor"
        //                         strokeWidth="2"
        //                         strokeLinecap="round"
        //                         strokeMiterlimit="10"
        //                         points=" 8,5 8,1 16,1 16,5"
        //                         strokeLinejoin="round"
        //                     />
        //                     <polyline
        //                         fill="none"
        //                         stroke="currentColor"
        //                         strokeWidth="2"
        //                         strokeLinecap="round"
        //                         strokeMiterlimit="10"
        //                         points="9,15 1,15 1,5 23,5 23,15 15,15"
        //                         strokeLinejoin="round"
        //                     />
        //                     <polyline
        //                         fill="none"
        //                         stroke="currentColor"
        //                         strokeWidth="2"
        //                         strokeLinecap="round"
        //                         strokeMiterlimit="10"
        //                         points="22,18 22,23 2,23 2,18"
        //                         strokeLinejoin="round"
        //                     />
        //                     <rect
        //                         x="9"
        //                         y="13"
        //                         fill="none"
        //                         stroke="currentColor"
        //                         strokeWidth="2"
        //                         strokeLinecap="round"
        //                         strokeMiterlimit="10"
        //                         width="6"
        //                         height="4"
        //                         strokeLinejoin="round"
        //                     />
        //                 </svg>
        //             </div>
        //             <div className="max-w-xl mb-6">
        //                 <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
        //                     Let us handle
        //                     <br className="hidden md:block" />
        //                     your next{' '}
        //                     <span className="inline-block text-deep-purple-accent-400">
        //                         destination
        //                     </span>
        //                 </h2>
        //                 <p className="text-base text-gray-700 md:text-lg">
        //                     Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        //                     accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
        //                     quae. explicabo.
        //                 </p>
        //             </div>
        //             <div>
        //                 <Link
        //                     to="/"
        //                     aria-label=""
        //                     className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
        //                 >
        //                     Learn more
        //                     <svg
        //                         className="inline-block w-3 ml-2"
        //                         fill="currentColor"
        //                         viewBox="0 0 12 12"
        //                     >
        //                         <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
        //                     </svg>
        //                 </Link>
        //             </div>
        //         </div>
        //         <div className="flex items-center justify-center -mx-4 lg:pl-8">
        //             <div className="flex flex-col items-end px-3">
        //                 <img
        //                     className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
        //                     src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
        //                     alt=""
        //                 />
        //                 <img
        //                     className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
        //                     src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
        //                     alt=""
        //                 />
        //             </div>
        //             <div className="px-3">
        //                 <img
        //                     className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
        //                     src="https://images.pexels.com/photos/3182739/pexels-photo-3182739.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
        //                     alt=""
        //                 />
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <header className="p-4 bg-purple-600 text-gray-100">
            <div className="container flex justify-between h-16 mx-auto">
                <div className="flex">
                    <a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-8 h-8 text-violet-400">
                            <path d="M27.912 7.289l-10.324-5.961c-0.455-0.268-1.002-0.425-1.588-0.425s-1.133 0.158-1.604 0.433l0.015-0.008-10.324 5.961c-0.955 0.561-1.586 1.582-1.588 2.75v11.922c0.002 1.168 0.635 2.189 1.574 2.742l0.016 0.008 10.322 5.961c0.455 0.267 1.004 0.425 1.59 0.425 0.584 0 1.131-0.158 1.602-0.433l-0.014 0.008 10.322-5.961c0.955-0.561 1.586-1.582 1.588-2.75v-11.922c-0.002-1.168-0.633-2.189-1.573-2.742zM27.383 21.961c0 0.389-0.211 0.73-0.526 0.914l-0.004 0.002-10.324 5.961c-0.152 0.088-0.334 0.142-0.53 0.142s-0.377-0.053-0.535-0.145l0.005 0.002-10.324-5.961c-0.319-0.186-0.529-0.527-0.529-0.916v-11.922c0-0.389 0.211-0.73 0.526-0.914l0.004-0.002 10.324-5.961c0.152-0.090 0.334-0.143 0.53-0.143s0.377 0.053 0.535 0.144l-0.006-0.002 10.324 5.961c0.319 0.185 0.529 0.527 0.529 0.916z"></path>
                            <path d="M22.094 19.451h-0.758c-0.188 0-0.363 0.049-0.515 0.135l0.006-0.004-4.574 2.512-5.282-3.049v-6.082l5.282-3.051 4.576 2.504c0.146 0.082 0.323 0.131 0.508 0.131h0.758c0.293 0 0.529-0.239 0.529-0.531v-0.716c0-0.2-0.11-0.373-0.271-0.463l-0.004-0.002-5.078-2.777c-0.293-0.164-0.645-0.26-1.015-0.26-0.39 0-0.756 0.106-1.070 0.289l0.010-0.006-5.281 3.049c-0.636 0.375-1.056 1.055-1.059 1.834v6.082c0 0.779 0.422 1.461 1.049 1.828l0.009 0.006 5.281 3.049c0.305 0.178 0.67 0.284 1.061 0.284 0.373 0 0.723-0.098 1.027-0.265l-0.012 0.006 5.080-2.787c0.166-0.091 0.276-0.265 0.276-0.465v-0.716c0-0.293-0.238-0.529-0.529-0.529z"></path>
                        </svg>
                    </a>
                    <ul className="items-stretch hidden space-x-3 lg:flex">
                        <li className="flex">
                            <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Link</a>
                        </li>
                        <li className="flex">
                            <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-violet-400 border-violet-400">Link</a>
                        </li>
                        <li className="flex">
                            <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Link</a>
                        </li>
                        <li className="flex">
                            <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Link</a>
                        </li>
                    </ul>
                </div>
                <div className="items-center flex-shrink-0 hidden lg:flex">
                    <button className="px-8 py-3 font-semibold rounded bg-violet-400 text-gray-900">Log in</button>
                </div>
                <button className="p-4 lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-100">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </header>
    );
};

export default Navbar;