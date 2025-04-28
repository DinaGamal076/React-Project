import React from 'react';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import headphonesImg from '../assets/headphones.png';
import smartwatchImg from '../assets/smart-watch.png';
import logoImg from '../assets/logo2.png';

const LandingPage = ({ cart, setCart, wishlist, setWishlist }) => {
    const features = [
        {
            title: "Awesome Design",
            description: "Sleek aesthetics meet functional elegance in our thoughtfully crafted products. From minimalist to bold styles, our designs blend beauty with purpose to elevate your everyday experience."
        },
        {
            title: "Latest Technology",
            description: "Stay ahead with cutting-edge innovations and modern solutions. We continuously integrate the newest advancements to bring you smart, future-ready products that simplify your life."
        },
        {
            title: "User Friendly",
            description: "Intuitive interfaces and effortless functionality are at our core. We prioritize seamless experiences with products designed to be accessible and enjoyable for everyone."
        },
        {
            title: "High Quality",
            description: "Our products are built to last, using premium materials and precise engineering to ensure top-notch performance and durability you can count on."
        }
    ];

    return (
        <>
            <Navbar
                cart={cart}
                setCart={setCart}
                wishlist={wishlist}
                setWishlist={setWishlist}
            />
            <div className="font-sans text-[#0A1F44]">
                {/* Hero Section */}
                <section className="bg-[#011B3A] text-white px-6 py-12 md:py-20">
                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col items-center md:items-start"
                        >
                            <div className="flex flex-col items-center mb-8">
                                <img
                                    src={logoImg}
                                    alt="logo"
                                    className="w-auto h-24 md:h-32 mb-6"
                                />
                                <h1 className="text-3xl md:text-4xl font-bold leading-tight text-center md:text-left">
                                    Best Electronic Products <br /> For Your Daily Life
                                </h1>
                            </div>
                            <p className="text-sm md:text-base mt-4 text-gray-300 text-center md:text-left">
                                Welcome to Electronica your trusted online store for the latest electronics.
                            </p>
                            <div className="mt-6 flex gap-4">
                                <Link to="/signup">
                                    <motion.button
                                        whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(224, 4, 93, 0.6)" }}
                                        whileTap={{ scale: 0.95 }}
                                        className="bg-[#E1006E] hover:bg-[#c40060] text-white px-6 py-2 rounded-lg font-semibold"
                                    >
                                        Sign Up
                                    </motion.button>
                                </Link>
                                <Link to="/login">
                                    <motion.button
                                        whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(224, 4, 93, 0.6)" }}
                                        whileTap={{ scale: 0.95 }}
                                        className="border border-[#E0045D] text-[#E0045D] hover:bg-[#E0045D] hover:text-white px-6 py-2 rounded-lg font-semibold"
                                    >
                                        Sign In
                                    </motion.button>
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            className="flex justify-center"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <motion.img
                                src={headphonesImg}
                                alt="Headphones"
                                className="w-[350px] md:w-[420px] h-auto"
                                whileHover={{
                                    scale: 1.05,
                                    filter: 'drop-shadow(0 20px 30px rgba(224, 4, 93, 0.7))'
                                }}
                                style={{
                                    filter: 'drop-shadow(0 15px 25px rgba(224, 4, 93, 0.5))',
                                }}
                            />
                        </motion.div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="bg-white py-16 px-6">
                    <div className="max-w-6xl mx-auto text-center">
                        <motion.h2
                            className="text-2xl md:text-3xl font-bold mb-2"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            Products Features
                        </motion.h2>

                        <div className="flex flex-col items-center mt-1 mb-10">
                            <div className="w-60 h-0.5 bg-[#E0045D] rounded-full mb-1"></div>
                            <div className="w-40 h-0.5 bg-[#E0045D] rounded-full"></div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-10 items-center">
                            <motion.div
                                className="flex justify-start ml-8"
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                            >
                                <motion.img
                                    src={smartwatchImg}
                                    alt="Smartwatch"
                                    className="w-[340px] md:w-[400px] h-auto"
                                    whileHover={{
                                        scale: 1.05,
                                        filter: 'drop-shadow(0 25px 35px rgba(21, 89, 172, 0.7))'
                                    }}
                                    style={{
                                        filter: 'drop-shadow(0 20px 30px rgba(21, 89, 172, 0.7))',
                                    }}
                                />
                            </motion.div>

                            <motion.div
                                className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                {features.map((feature, idx) => (
                                    <motion.div
                                        key={idx}
                                        className="bg-white p-6 rounded-lg border border-[#E0045D] text-[#0A1F44] font-semibold text-center"
                                        whileHover={{
                                            scale: 1.05,
                                            boxShadow: '0px 15px 25px rgba(224, 4, 93, 0.4)'
                                        }}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.1 * idx }}
                                        style={{
                                            boxShadow: '0px 10px 20px rgba(224, 4, 93, 0.3)'
                                        }}
                                    >
                                        <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                                        <p className="text-sm font-normal text-gray-600 leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>

                        {/* 🛍️ Button below cards */}
                        <div className="col-span-2 flex justify-center mt-16">
                            <Link to="/shop">
                                <motion.button
                                    whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(224, 4, 93, 0.6)" }}
                                    whileTap={{ scale: 0.95 }}
                                    className="border border-[#E0045D] text-[#E0045D] hover:bg-[#E0045D] hover:text-white text-lg px-10 py-4 rounded-lg font-semibold"
                                >
                                    Start Shopping
                                </motion.button>
                            </Link>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </>
    );
};

export default LandingPage;
