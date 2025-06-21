import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Wallet, ArrowRight, ExternalLink, Copy, CheckCircle, DollarSign, Heart, Star } from 'lucide-react';

const BuyGuideSection = () => {
    const [copiedStep, setCopiedStep] = useState(null);

    const steps = [
        {
            icon: Wallet,
            title: 'Get Your Wallet Ready! 👛',
            description: "Download Sui Wallet or Suiet - it's like getting your first piggy bank but cooler!",
            details: 'Pro tip: Keep that recovery phrase safer than your diary! Write it down and hide it well! 📝',
            emoji: '🔐'
        },
        {
            icon: DollarSign,
            title: 'Load Up on $SUI! 💰',
            description: "Buy some $SUI from Binance or KuCoin - think of it as getting tokens for the arcade!",
            details: "Transfer to your wallet address (double-check it, bestie - we don't want any oopsies!) 🎯",
            emoji: '🏦'
        },
        {
            icon: ArrowRight,
            title: 'Connect to the Magic Portal! ✨',
            description: "Visit Cetus or Moonbags and connect your wallet - it's like plugging in your phone!",
            details: "Make sure the URL is correct - we don't want any sneaky imposters! 🕵️‍♀️",
            emoji: '🔌'
        },
        {
            icon: ExternalLink,
            title: 'Find Our Angel! 😇',
            description: 'Use our contract address to find $GABE - like finding your bestie in a crowd!',
            details: "Always verify the address - there are copycats but we're the original angel! 👼",
            emoji: '🔍'
        },
        {
            icon: CheckCircle,
            title: 'Make the Swap! 🔄',
            description: "Trade your $SUI for $GABE - congratulations, you're about to join the family!",
            details: 'Review everything twice - we want this to be perfect for you! ✅',
            emoji: '🎉'
        },
        {
            icon: Heart,
            title: 'Welcome Home! 🏠',
            description: "Your $GABE tokens are now safe in your wallet - you're officially family!",
            details: 'Track your investment on DexScreener and celebrate with us! 🎊',
            emoji: '🥳'
        },
    ];

    const contractAddress = '0x13cda3fa8bf4d4dbe2c87763e65c0638855b90dd2a9759be4dece8a69fb56f7b::gabe::GABE';

    const copyToClipboard = (text, stepIndex) => {
        navigator.clipboard.writeText(text);
        if (stepIndex !== undefined) {
            setCopiedStep(stepIndex);
            setTimeout(() => setCopiedStep(null), 2000);
        }
    };

    return (
        <section id="buy-guide" className="py-20 bg-gradient-to-br from-white via-heavenGold/5 to-suiBlue/10 relative overflow-hidden">
            {/* Friendly Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {['🛒', '💳', '🎁', '🎈', '🌟', '💫', '✨', '🎯', '🎪', '🎭'].map((emoji, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-4xl opacity-10"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            x: [0, Math.random() * 20 - 10, 0],
                            rotate: [0, 360],
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: 8 + Math.random() * 4,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    >
                        {emoji}
                    </motion.div>
                ))}
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <motion.div
                        className="mb-6"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <span className="inline-block px-6 py-3 bg-gradient-to-r from-heavenGold/20 to-suiBlue/20 backdrop-blur-sm rounded-full text-gray-700 font-bold text-lg border border-heavenGold/30">
                            🛒 Let's Go Shopping Together!
                        </span>
                    </motion.div>

                    <h2 className="text-4xl md:text-6xl font-black text-gray-800 mb-6">
                        How to Get Your{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-heavenGold to-suiBlue">
                            $GABE
                        </span>
                        <motion.span
                            className="block text-4xl mt-2"
                            animate={{
                                rotate: [0, 10, -10, 0],
                                scale: [1, 1.1, 1]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            🛍️💕✨
                        </motion.span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
                        Don't worry bestie, we'll walk through this together step by step!
                        It's easier than ordering your favorite coffee! ☕💕
                    </p>
                </motion.div>

                {/* Super Friendly Quick Buy Button */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <div className="bg-gradient-to-r from-heavenGold/10 to-suiBlue/10 backdrop-blur-sm rounded-3xl p-8 border border-heavenGold/20 max-w-2xl mx-auto">
                        <motion.div
                            className="text-5xl mb-4"
                            animate={{
                                scale: [1, 1.2, 1],
                                rotate: [0, 10, -10, 0]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            🚀💎🔥
                        </motion.div>
                        <h3 className="text-2xl font-black text-gray-800 mb-4">
                            Too Excited to Wait? We Get It!
                        </h3>
                        <p className="text-gray-600 mb-6 font-medium">
                            Skip the tutorial and jump straight into the family!
                        </p>
                        <motion.a
                            href="https://raidenx.io/sui/moonbags-gabe-sui-261686"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-3 bg-gradient-to-r from-heavenGold to-suiBlue text-white px-8 py-4 rounded-full font-black text-xl shadow-2xl hover:shadow-heavenGold/50"
                            whileHover={{
                                scale: 1.05,
                                boxShadow: '0 20px 40px rgba(255, 215, 0, 0.3)'
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Star className="w-6 h-6" />
                            <span>🎉 BUY $GABE NOW!</span>
                            <ExternalLink className="w-6 h-6" />
                        </motion.a>
                        <p className="text-sm text-gray-500 mt-4">
                            One-click shopping on Moonbags - we made it super easy for you! 💕
                        </p>
                    </div>
                </motion.div>

                {/* Step-by-Step Guide with Personality */}
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-3xl font-black text-gray-800 mb-4">
                            Or Follow Our Friendly Step-by-Step Guide! 📚
                        </h3>
                        <p className="text-lg text-gray-600 font-medium">
                            We'll be right here with you every step of the way! 🤗
                        </p>
                    </motion.div>

                    <div className="space-y-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                className="relative"
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex items-start space-x-6 p-8 bg-white/70 backdrop-blur-sm rounded-3xl hover:shadow-xl transition-all border border-gray-200/50 group">
                                    {/* Step Number with Personality */}
                                    <div className="flex-shrink-0">
                                        <motion.div
                                            className="w-20 h-20 bg-gradient-to-r from-heavenGold to-suiBlue rounded-full flex items-center justify-center text-white font-black text-2xl relative overflow-hidden"
                                            whileHover={{ scale: 1.1, rotate: 360 }}
                                            transition={{ duration: 0.6 }}
                                        >
                                            <span className="relative z-10">{index + 1}</span>
                                            <motion.div
                                                className="absolute inset-0 bg-white/20"
                                                animate={{ scale: [1, 1.2, 1] }}
                                                transition={{ duration: 2, repeat: Infinity }}
                                            />
                                        </motion.div>
                                    </div>

                                    {/* Step Content */}
                                    <div className="flex-grow">
                                        <div className="flex items-center space-x-3 mb-4">
                                            <step.icon className="w-8 h-8 text-suiBlue" />
                                            <h3 className="text-2xl font-black text-gray-800">{step.title}</h3>
                                            <motion.span
                                                className="text-3xl"
                                                animate={{
                                                    scale: [1, 1.2, 1],
                                                    rotate: [0, 10, -10, 0]
                                                }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: Infinity,
                                                    delay: index * 0.3
                                                }}
                                            >
                                                {step.emoji}
                                            </motion.span>
                                        </div>
                                        <p className="text-lg text-gray-700 mb-3 font-medium">{step.description}</p>
                                        <p className="text-sm text-gray-600 font-medium">{step.details}</p>

                                        {/* Special handling for contract address step */}
                                        {index === 3 && (
                                            <motion.div
                                                className="mt-6 p-6 bg-gradient-to-r from-heavenGold/10 to-suiBlue/10 rounded-2xl border border-heavenGold/20"
                                                whileHover={{ scale: 1.02 }}
                                            >
                                                <div className="flex items-center justify-between mb-4">
                                                    <span className="text-lg font-black text-gray-700">
                                                        🏠 Our Home Address:
                                                    </span>
                                                    <motion.button
                                                        onClick={() => copyToClipboard(contractAddress, index)}
                                                        className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-suiBlue to-blue-500 text-white rounded-xl hover:from-blue-500 hover:to-suiBlue transition-all font-bold"
                                                        whileHover={{ scale: 1.05 }}
                                                        whileTap={{ scale: 0.95 }}
                                                    >
                                                        {copiedStep === index ? (
                                                            <>
                                                                <CheckCircle size={16} />
                                                                <span>Copied! 🎉</span>
                                                            </>
                                                        ) : (
                                                            <>
                                                                <Copy size={16} />
                                                                <span>Copy Address</span>
                                                            </>
                                                        )}
                                                    </motion.button>
                                                </div>
                                                <div className="font-mono text-sm text-gray-700 break-all bg-white/50 p-4 rounded-xl border border-gray-200/30">
                                                    {contractAddress}
                                                </div>
                                                <p className="text-xs text-gray-500 mt-3 text-center">
                                                    💡 This is our official address - accept no substitutes!
                                                </p>
                                            </motion.div>
                                        )}
                                    </div>

                                    {/* Floating Step Icon */}
                                    <div className="flex-shrink-0 opacity-20 group-hover:opacity-40 transition-opacity">
                                        <motion.div
                                            animate={{
                                                y: [0, -10, 0],
                                                rotate: [0, 5, -5, 0]
                                            }}
                                            transition={{
                                                duration: 3,
                                                repeat: Infinity,
                                                delay: index * 0.2
                                            }}
                                        >
                                            <step.icon className="w-16 h-16 text-suiBlue" />
                                        </motion.div>
                                    </div>
                                </div>

                                {/* Connecting Line with Personality */}
                                {index < steps.length - 1 && (
                                    <div className="flex justify-center py-4">
                                        <motion.div
                                            className="flex flex-col items-center"
                                            initial={{ scaleY: 0 }}
                                            whileInView={{ scaleY: 1 }}
                                            transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
                                            viewport={{ once: true }}
                                        >
                                            <div className="w-1 h-8 bg-gradient-to-b from-heavenGold to-suiBlue rounded-full" />
                                            <motion.div
                                                className="text-2xl my-2"
                                                animate={{
                                                    scale: [1, 1.2, 1],
                                                    rotate: [0, 360]
                                                }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: Infinity,
                                                    delay: index * 0.5
                                                }}
                                            >
                                                ⬇️
                                            </motion.div>
                                            <div className="w-1 h-8 bg-gradient-to-b from-suiBlue to-heavenGold rounded-full" />
                                        </motion.div>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Need Help Section with Extra Love */}
                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="bg-gradient-to-r from-heavenGold/10 to-suiBlue/10 backdrop-blur-sm rounded-3xl p-8 border border-heavenGold/20 max-w-4xl mx-auto">
                        <motion.div
                            className="text-6xl mb-4"
                            animate={{
                                scale: [1, 1.3, 1],
                                rotate: [0, 10, -10, 0]
                            }}
                            transition={{ duration: 3, repeat: Infinity }}
                        >
                            💖
                        </motion.div>
                        <h3 className="text-3xl font-black text-gray-800 mb-6">
                            Still Need Help, Bestie? We're Here! 🤗
                        </h3>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6 font-medium">
                            Join our friendly community on Discord or Telegram — we're always here to support you!
                        </p>
                        <motion.div className="flex justify-center space-x-8">
                            <a
                                href="https://discord.gg/yourserver"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2 text-suiBlue hover:text-heavenGold font-bold text-xl"
                            >
                                <ExternalLink className="w-6 h-6" />
                                <span>Discord</span>
                            </a>
                            <a
                                href="https://t.me/yourchannel"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2 text-suiBlue hover:text-heavenGold font-bold text-xl"
                            >
                                <ExternalLink className="w-6 h-6" />
                                <span>Telegram</span>
                            </a>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default BuyGuideSection;
