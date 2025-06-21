import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Download, Star, Zap, Heart, Rocket } from 'lucide-react';
import Hero3D from './Hero3D';

const HeroSection = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <Hero3D />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {['🚀', '💎', '🔥', '⚡', '🎯', '💰', '🌙', '⭐', '🎪', '🎭'].map((emoji, i) => (
          <motion.div
            key={i}
            className="absolute text-6xl opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, Math.random() * 30 - 15, 0],
              rotate: [0, 360],
              scale: [1, 1.3, 1],
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

        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-gradient-to-r from-heavenGold to-suiBlue rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              scale: [0, 1.5, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 6 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-6 py-3 bg-gradient-to-r from-heavenGold/20 to-suiBlue/20 backdrop-blur-sm rounded-full text-white font-bold text-lg border border-heavenGold/30">
            👋 Hey there, future millionaire!
          </span>
        </motion.div>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-6xl md:text-9xl font-black mb-6 leading-none"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-heavenGold via-white to-suiBlue bg-300% animate-gradient-x">
              $GABE
            </span>
            <motion.span
              className="block text-4xl md:text-6xl mt-4"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🚀💎🔥
            </motion.span>
          </motion.h1>

          <motion.div
            className="text-2xl md:text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="text-heavenGold">@GabeDotSui</span> - Your Friendly Neighborhood Angel 😇
          </motion.div>

          <motion.p
            className="text-xl md:text-3xl text-white/90 max-w-4xl mx-auto leading-relaxed font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Welcome to the <span className="text-heavenGold">MOST WHOLESOME</span> memecoin revolution on{' '}
            <span className="text-suiBlue">Sui Network!</span>
            <br />
            <span className="text-2xl">We're not just going to the moon... we're going to HEAVEN! 🌙➡️☁️</span>
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-8 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {[
            { label: 'Believers 🙏', value: '15K+', emoji: '👥' },
            { label: 'Vibes ✨', value: 'IMMACULATE', emoji: '🔥' },
            { label: 'Energy 💪', value: 'OVER 9000!', emoji: '⚡' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-heavenGold/30"
              whileHover={{ scale: 1.05, rotate: 2 }}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: index * 0.5,
              }}
            >
              <div className="text-4xl mb-2">{stat.emoji}</div>
              <div className="text-2xl md:text-3xl font-black text-heavenGold mb-2">
                {stat.value}
              </div>
              <div className="text-white/80 font-bold">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <motion.a
            href="https://raidenx.io/sui/moonbags-gabe-sui-261686"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-heavenGold to-yellow-400 text-black px-8 py-4 rounded-full font-black text-xl shadow-2xl flex items-center space-x-3 hover:shadow-heavenGold/50"
            whileHover={{
              scale: 1.1,
              rotate: 2,
              boxShadow: '0 20px 40px rgba(255, 215, 0, 0.4)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Star className="w-6 h-6" />
            <span>🚀 JOIN THE PARTY!</span>
            <ExternalLink className="w-6 h-6" />
          </motion.a>

          <motion.button
            onClick={() => scrollToSection('about')}
            className="border-3 border-suiBlue text-suiBlue bg-suiBlue/10 backdrop-blur-sm px-8 py-4 rounded-full font-black text-xl hover:bg-suiBlue hover:text-white transition-all flex items-center space-x-3"
            whileHover={{ scale: 1.05, rotate: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Heart className="w-6 h-6" />
            <span>💙 LEARN MORE</span>
          </motion.button>
        </motion.div>

        <motion.div
          className="mb-8 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.div
            className="flex space-x-8 text-white/70 font-bold text-lg"
            animate={{ x: [0, -1000] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            {['WAGMI 🚀', 'DIAMOND HANDS 💎', 'TO THE MOON 🌙', 'HODL GANG 💪', 'BASED AF 🔥', 'LFG! ⚡', 'BULLISH 📈', 'DEGEN LIFE 🎯'].map((phrase, i) => (
              <span key={i} className="whitespace-nowrap">{phrase}</span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-heavenGold/30 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <p className="text-white/80 mb-3 font-bold">
            🏠 Our Home Address (Don't be a stranger!):
          </p>
          <motion.div
            className="font-mono text-sm md:text-base text-heavenGold bg-black/30 p-4 rounded-lg cursor-pointer hover:bg-black/50 transition-colors border border-heavenGold/20"
            whileHover={{ scale: 1.02 }}
            onClick={() => {
              navigator.clipboard.writeText('0x13cda3fa8bf4d4dbe2c87763e65c0638855b90dd2a9759be4dece8a69fb56f7b::gabe::GABE');
            }}
          >
            0x13cda3fa8bf4d4dbe2c87763e65c0638855b90dd2a9759be4dece8a69fb56f7b::gabe::GABE
          </motion.div>
          <p className="text-sm text-white/60 mt-3">
            👆 Click to copy (We made it easy for you, fren!)
          </p>
        </motion.div>

        <div className="absolute top-20 right-10 hidden lg:block">
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              rotate: { duration: 10, repeat: Infinity, ease: 'linear' },
              scale: { duration: 2, repeat: Infinity },
            }}
            className="text-6xl"
          >
            🎪
          </motion.div>
        </div>

        <div className="absolute bottom-20 left-10 hidden lg:block">
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="text-5xl"
          >
            🎭
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
