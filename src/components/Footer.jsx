import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Send, ExternalLink, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        community: [
            { name: 'X (Twitter)', url: 'https://x.com/gabedotsui?s=21', icon: Twitter },
            { name: 'Telegram', url: 'https://t.me/Gabedotsuii', icon: Send },
        ],
        resources: [
            { name: 'Buy $GABE', url: 'https://raidenx.io/sui/moonbags-gabe-sui-261686' },
            { name: 'DexScreener', url: '#' },
            { name: 'Sui Explorer', url: '#' },
            { name: 'Documentation', url: '#' },
        ],
        legal: [
            { name: 'Privacy Policy', url: '#' },
            { name: 'Terms of Service', url: '#' },
            { name: 'Disclaimer', url: '#' },
            { name: 'Contact', url: '#' },
        ],
    };

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-darkAngel text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                {[...Array(50)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-heavenGold rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            opacity: [0.3, 1, 0.3],
                            scale: [1, 1.5, 1],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10">
                {/* Main Footer Content */}
                <div className="container mx-auto px-6 py-16">
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
                        {/* Brand Section */}
                        <motion.div
                            className="lg:col-span-1"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center space-x-3 mb-6">
                                <div className="relative">
                                    <div className="w-12 h-12 bg-gradient-to-r from-heavenGold to-suiBlue rounded-full flex items-center justify-center">
                                        <img
                                            src="./logo.png"
                                            alt="logo"
                                            className="h-9 w-9 rounded-full animate-spin"
                                            style={{ animationDuration: '3s' }}

                                        />
                                        {/* <span className="text-white font-bold text-xl">G</span> */}
                                    </div>
                                    <motion.div
                                        className="absolute -inset-1 bg-gradient-to-r from-heavenGold/30 to-suiBlue/30 rounded-full blur"
                                        animate={{ scale: [1, 1.2, 1] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold">$GABE</h3>
                                    <p className="text-gray-400">GabeDotSui</p>
                                </div>
                            </div>

                            <p className="text-gray-300 mb-6 leading-relaxed">
                                The heavenly memecoin revolutionizing the Sui Network. Join our community
                                and be part of the angelic revolution in DeFi.
                            </p>

                            <div className="space-y-3">
                                <div className="flex items-center space-x-3 text-sm text-gray-400">
                                    <MapPin size={16} />
                                    <span>Sui Network</span>
                                </div>
                                <div className="flex items-center space-x-3 text-sm text-gray-400">
                                    <Mail size={16} />
                                    <span>community@gabedotsui.com</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Quick Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <h4 className="text-xl font-bold mb-6 text-heavenGold">Quick Links</h4>
                            <ul className="space-y-3">
                                {['Home', 'About', 'Tokenomics', 'Community', 'Buy Guide', 'Roadmap'].map((item) => (
                                    <li key={item}>
                                        <motion.button
                                            onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                                            className="text-gray-300 hover:text-heavenGold transition-colors cursor-pointer"
                                            whileHover={{ x: 5 }}
                                        >
                                            {item}
                                        </motion.button>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Community */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <h4 className="text-xl font-bold mb-6 text-suiBlue">Community</h4>
                            <ul className="space-y-4">
                                {footerLinks.community.map((link) => (
                                    <li key={link.name}>
                                        <motion.a
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors group"
                                            whileHover={{ x: 5 }}
                                        >
                                            <link.icon size={20} className="group-hover:text-heavenGold transition-colors" />
                                            <span>{link.name}</span>
                                            <ExternalLink size={14} className="opacity-50" />
                                        </motion.a>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-8">
                                <h5 className="text-lg font-semibold mb-4">Resources</h5>
                                <ul className="space-y-2">
                                    {footerLinks.resources.map((link) => (
                                        <li key={link.name}>
                                            <motion.a
                                                href={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-gray-400 hover:text-heavenGold transition-colors text-sm"
                                                whileHover={{ x: 3 }}
                                            >
                                                {link.name}
                                            </motion.a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>

                        {/* Newsletter & Legal */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h4 className="text-xl font-bold mb-6 text-heavenGold">Stay Updated</h4>
                            <p className="text-gray-300 mb-4 text-sm">
                                Get the latest updates and announcements from the $GABE community.
                            </p>

                            <div className="mb-8">
                                <div className="flex">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-heavenGold text-white"
                                    />
                                    <motion.button
                                        className="px-6 py-2 bg-gradient-to-r from-heavenGold to-suiBlue text-white rounded-r-lg hover:shadow-lg transition-all"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Subscribe
                                    </motion.button>
                                </div>
                            </div>

                            <div>
                                <h5 className="text-lg font-semibold mb-4">Legal</h5>
                                <ul className="space-y-2">
                                    {footerLinks.legal.map((link) => (
                                        <li key={link.name}>
                                            <motion.a
                                                href={link.url}
                                                className="text-gray-400 hover:text-heavenGold transition-colors text-sm"
                                                whileHover={{ x: 3 }}
                                            >
                                                {link.name}
                                            </motion.a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Contract Address Section */}
                <div className="border-t border-gray-700">
                    <div className="container mx-auto px-6 py-8">
                        <motion.div
                            className="text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <p className="text-gray-400 mb-4">Contract Address:</p>
                            <motion.div
                                className="bg-gray-800 rounded-lg p-4 max-w-4xl mx-auto cursor-pointer hover:bg-gray-700 transition-colors"
                                whileHover={{ scale: 1.02 }}
                                onClick={() => {
                                    navigator.clipboard.writeText('0x13cda3fa8bf4d4dbe2c87763e65c0638855b90dd2a9759be4dece8a69fb56f7b::gabe::GABE');
                                }}
                            >
                                <p className="font-mono text-sm text-gray-300 break-all">
                                    0x13cda3fa8bf4d4dbe2c87763e65c0638855b90dd2a9759be4dece8a69fb56f7b::gabe::GABE
                                </p>
                                <p className="text-xs text-gray-500 mt-2">Click to copy</p>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-700">
                    <div className="container mx-auto px-6 py-6">
                        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                            <motion.p
                                className="text-gray-400 text-sm"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                            >
                                © {currentYear} @GabeDotSui. All rights reserved.
                            </motion.p>

                            <motion.div
                                className="flex items-center space-x-6"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <span className="text-gray-400 text-sm">Built on</span>
                                <span className="text-suiBlue font-semibold">Sui Network</span>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
