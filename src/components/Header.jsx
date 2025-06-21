import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ExternalLink, Star } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    const navItems = [
        { name: '🏠 Home', id: 'hero' },
        { name: '😇 About', id: 'about' },
        { name: '💰 Tokenomics', id: 'tokenomics' },
        { name: '👨‍👩‍👧‍👦 Family', id: 'community' },
        { name: '🛒 Get $GABE', id: 'buy-guide' },
        { name: '🗺️ Roadmap', id: 'roadmap' },
    ];

    return (
        <motion.header
            className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled
                ? 'bg-white/90 backdrop-blur-lg shadow-xl border-b border-heavenGold/20'
                : 'bg-transparent'
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <nav className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <motion.div
                        className="flex items-center space-x-3 cursor-pointer group"
                        onClick={() => scrollToSection('hero')}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <div className="relative">
                            <motion.div
                                className="w-12 h-12 bg-gradient-to-r from-heavenGold to-suiBlue rounded-full flex items-center justify-center"
                                animate={{
                                    rotate: [0, 10, -10, 0],
                                    scale: [1, 1.1, 1]
                                }}
                                transition={{ duration: 3, repeat: Infinity }}
                            >
                                <img
                                    src="./logo.png"
                                    alt="logo"
                                    className="h-9 w-9 rounded-full animate-spin"
                                    style={{ animationDuration: '3s' }}

                                />
                                {/* <span className="text-white font-black text-xl">G</span> */}
                            </motion.div>
                            <motion.div
                                className="absolute -inset-1 bg-gradient-to-r from-heavenGold/30 to-suiBlue/30 rounded-full blur"
                                animate={{ scale: [1, 1.3, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                            <motion.div
                                className="absolute -top-2 -right-2 text-lg"
                                animate={{
                                    y: [0, -5, 0],
                                    opacity: [0.7, 1, 0.7]
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                💕
                            </motion.div>
                        </div>
                        <div>
                            <h1 className="text-xl font-black text-gray-800 group-hover:text-suiBlue transition-colors">
                                $GABE
                            </h1>
                            <p className="text-xs text-gray-600 font-bold">Your Angel Friend 😇</p>
                        </div>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-6">
                        {navItems.map((item) => (
                            <motion.button
                                key={item.name}
                                onClick={() => scrollToSection(item.id)}
                                className="text-gray-700 hover:text-suiBlue transition-colors font-bold px-3 py-2 rounded-lg hover:bg-heavenGold/10"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {item.name}
                            </motion.button>
                        ))}
                    </div>

                    {/* Buy Button */}
                    <div className="hidden md:flex items-center space-x-4">
                        <motion.a
                            href="https://raidenx.io/sui/moonbags-gabe-sui-261686"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gradient-to-r from-heavenGold to-suiBlue text-white px-6 py-3 rounded-full font-black hover:shadow-lg transition-all flex items-center space-x-2 relative overflow-hidden"
                            whileHover={{
                                scale: 1.05,
                                boxShadow: '0 10px 30px rgba(255, 215, 0, 0.3)'
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Star className="w-5 h-5" />
                            <span>Join Family!</span>
                            <ExternalLink size={16} />
                            <motion.div
                                className="absolute top-0 left-0 w-full h-full pointer-events-none"
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                {[...Array(3)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="absolute text-xs"
                                        style={{
                                            left: `${20 + i * 30}%`,
                                            top: `${10 + i * 20}%`,
                                        }}
                                        animate={{
                                            y: [0, -10, 0],
                                            opacity: [0, 1, 0],
                                        }}
                                        transition={{
                                            duration: 1.5,
                                            repeat: Infinity,
                                            delay: i * 0.3,
                                        }}
                                    >
                                        ✨
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.a>
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden text-gray-700 hover:text-suiBlue transition-colors p-2 rounded-lg hover:bg-heavenGold/10"
                        whileTap={{ scale: 0.95 }}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </motion.button>
                </div>

                {/* Mobile Menu */}
                <motion.div
                    className={`md:hidden overflow-hidden ${isMenuOpen ? 'max-h-96' : 'max-h-0'}`}
                    initial={false}
                    animate={{
                        height: isMenuOpen ? 'auto' : 0,
                        opacity: isMenuOpen ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="pt-4 pb-2 space-y-2 bg-white/90 backdrop-blur-sm rounded-2xl mt-4 border border-heavenGold/20">
                        {navItems.map((item) => (
                            <motion.button
                                key={item.name}
                                onClick={() => scrollToSection(item.id)}
                                className="block w-full text-left px-6 py-3 text-gray-700 hover:text-suiBlue hover:bg-heavenGold/10 rounded-lg transition-colors font-bold"
                                whileHover={{ x: 5 }}
                            >
                                {item.name}
                            </motion.button>
                        ))}
                        <motion.a
                            href="https://raidenx.io/sui/moonbags-gabe-sui-261686"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full bg-gradient-to-r from-heavenGold to-suiBlue text-white px-6 py-3 rounded-lg font-black text-center mt-4 mx-2"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            🚀 Join the Family!
                        </motion.a>
                    </div>
                </motion.div>
            </nav>
        </motion.header>
    );
};

export default Header;
