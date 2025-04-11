import React from 'react';
import { FaBalanceScale, FaUserShield, FaHandsHelping } from 'react-icons/fa'; 
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'; 
import more from '../assets/more.jpg'; 
function About() {
    return (
        <section id="about" className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${more})` }}>
          
            <div className="absolute inset-0 bg-black opacity-30"></div>
            
            <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-24 py-16 text-center">
                <div className="bg-white bg-opacity-80 shadow-lg rounded-lg p-8 md:p-12 transform hover:scale-105 transition-transform duration-500">
                    <h2 className="text-5xl font-extrabold text-indigo-700 mb-6">About Us</h2>
                    <div className="flex justify-center space-x-8 mb-8">
                        <FaBalanceScale className="text-4xl text-purple-500" />
                        <FaUserShield className="text-4xl text-blue-500" />
                        <FaHandsHelping className="text-4xl text-green-500" />
                    </div>
                    <p className="text-gray-700 text-xl mb-4">
                        We connect you with experienced lawyers specializing in various fields of law.
                    </p>
                    <p className="text-gray-700 text-xl">
                        Our mission is to simplify the process of finding legal help with detailed profiles and reviews.
                    </p>
                </div>
            </div>
            
            
            <footer className="bg-gray-600 text-white py-8 mt-16">
                <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center">
                    <div>
                        <h3 className="text-2xl text-white font-extrabold mb-4">Our Mission</h3>
                        <p className="text-sm mb-8">
                            Our goal is to provide a seamless platform where clients can easily connect with the right legal professionals to meet their needs.
                        </p>
                        <div className="flex justify-center space-x-6 mb-8">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-300 transition duration-300">
                                <FaFacebook size="1.5em" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-200 transition duration-300">
                                <FaTwitter size="1.5em" />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-400 transition duration-300">
                                <FaLinkedin size="1.5em" />
                            </a>
                        </div>
                        <h3 className="text-2xl  font-semibold mb-4">Contact Us</h3>
                        <p className="text-sm">
                            Email: <a href="mailto:support@yourproject.com" className="text-blue-400 hover:underline">support@yourproject.com</a>
                        </p>
                    </div>
                </div>
            </footer>
        </section>
    );
}

export default About;
