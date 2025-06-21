import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Zap, Star, Sparkles, Heart, Rocket } from 'lucide-react';

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const carouselRef = useRef(null);

  const memeImages = [
    {
      url: 'https://pbs.twimg.com/media/Gt9WGYkXUAAvaIk?format=jpg&name=240x240',
      title: '🚀 TO THE MOON!',
      description: 'When $GABE hits different and your portfolio goes BRRRR',
      memeText: 'HODL GANG RISE UP',
      emoji: '🚀',
      color: 'from-purple-500 to-pink-500'
    },
    {
      url: 'https://pbs.twimg.com/media/Gt9ZHT0WsAATu9T?format=jpg&name=240x240',
      title: '💎 DIAMOND HANDS',
      description: 'This is the way. $GABE believers never sell!',
      memeText: 'DIAMOND HANDS ONLY',
      emoji: '💎',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      url: 'https://pbs.twimg.com/media/Gt5gCPOXcAA7Klt?format=jpg&name=240x240',
      title: '🔥 THIS IS FINE',
      description: 'Market dips? We buy more $GABE. This is fine.',
      memeText: 'BUY THE DIP',
      emoji: '🔥',
      color: 'from-orange-500 to-red-500'
    },
    {
      url: 'https://pbs.twimg.com/media/Gt368VDWsAAkcGm?format=jpg&name=240x240',
      title: '⚡ WAGMI ENERGY',
      description: 'We All Gonna Make It with $GABE on Sui!',
      memeText: 'WAGMI FOREVER',
      emoji: '⚡',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      url: 'https://pbs.twimg.com/media/Gt0f-hiXkAAKwxs?format=jpg&name=360x360',
      title: '🎯 BASED ALERT',
      description: 'Absolutely based memecoin on the most based chain',
      memeText: 'STAY BASED',
      emoji: '🎯',
      color: 'from-green-500 to-teal-500'
    },
  ];

  const floatingIcons = [Zap, Star, Sparkles, Heart, Rocket];

  useEffect(() => {
    if (!isAutoPlaying || isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex(prevIndex =>
        prevIndex === memeImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [memeImages.length, isAutoPlaying, isHovered]);

  const handleMouseMove = (e) => {
    if (carouselRef.current) {
      const rect = carouselRef.current.getBoundingClientRect();
      setMousePosition({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      });
    }
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? memeImages.length - 1 : currentIndex - 1);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === memeImages.length - 1 ? 0 : currentIndex + 1);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Meme Icons */}
        {[...Array(15)].map((_, i) => {
          const IconComponent = floatingIcons[i % floatingIcons.length];
          return (
            <motion.div
              key={i}
              className="absolute text-4xl opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                color: ['#FFD700', '#4B5CFA', '#FF6B6B', '#4ECDC4', '#45B7D1'][Math.floor(Math.random() * 5)],
              }}
              animate={{
                y: [0, -50, 0],
                x: [0, Math.random() * 30 - 15, 0],
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            >
              <IconComponent />
            </motion.div>
          );
        })}

        {/* Glowing Orbs */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute w-32 h-32 rounded-full blur-xl opacity-30"
            style={{
              background: `radial-gradient(circle, ${['#FFD700', '#4B5CFA', '#FF6B6B'][i % 3]} 0%, transparent 70%)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
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
          <motion.h2
            className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-heavenGold via-white to-suiBlue mb-6"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            🎭 MEME GALLERY 🎭
          </motion.h2>
          <motion.p
            className="text-2xl text-white/90 max-w-4xl mx-auto font-bold"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Experience the <span className="text-heavenGold">LEGENDARY</span> meme culture of{' '}
            <span className="text-suiBlue">$GABE</span> 🚀
          </motion.p>
        </motion.div>

        <div className="relative max-w-7xl mx-auto">
          {/* Main 3D Carousel Container */}
          <motion.div
            ref={carouselRef}
            className="relative h-[600px] md:h-[700px] perspective-1000"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              transform: `rotateX(${(mousePosition.y - 0.5) * 5}deg) rotateY(${(mousePosition.x - 0.5) * 5}deg)`,
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="absolute inset-0 transform-gpu"
                initial={{ 
                  opacity: 0, 
                  rotateY: 90, 
                  scale: 0.8,
                  z: -200 
                }}
                animate={{ 
                  opacity: 1, 
                  rotateY: 0, 
                  scale: 1,
                  z: 0 
                }}
                exit={{ 
                  opacity: 0, 
                  rotateY: -90, 
                  scale: 0.8,
                  z: -200 
                }}
                transition={{ 
                  duration: 0.8, 
                  ease: "easeInOut",
                  type: "spring",
                  stiffness: 100
                }}
              >
                <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                  {/* Main Image with 3D Effect */}
                  <motion.div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ 
                      backgroundImage: `url(${memeImages[currentIndex].url})`,
                      transform: `translateZ(${isHovered ? '20px' : '0px'})`,
                    }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Animated Overlay Effects */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    
                    {/* Glitch Effect Overlay */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${memeImages[currentIndex].color} mix-blend-multiply opacity-30`}
                      animate={{
                        opacity: [0.3, 0.5, 0.3],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />

                    {/* Floating Particles */}
                    {[...Array(20)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-heavenGold rounded-full"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                          y: [0, -100, -200],
                          opacity: [0, 1, 0],
                          scale: [0, 1, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: Math.random() * 3,
                        }}
                      />
                    ))}
                  </motion.div>

                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                    {/* Floating Emoji */}
                    <motion.div
                      className="absolute top-8 right-8 text-6xl md:text-8xl"
                      animate={{
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {memeImages[currentIndex].emoji}
                    </motion.div>

                    {/* Meme Text Banner */}
                    <motion.div
                      className="mb-6"
                      initial={{ x: -100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <div className={`inline-block px-6 py-3 bg-gradient-to-r ${memeImages[currentIndex].color} rounded-full transform -rotate-2`}>
                        <span className="text-white font-black text-lg md:text-xl tracking-wider">
                          {memeImages[currentIndex].memeText}
                        </span>
                      </div>
                    </motion.div>

                    {/* Main Title */}
                    <motion.h3
                      className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight"
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      style={{
                        textShadow: '0 0 20px rgba(255, 215, 0, 0.5)',
                      }}
                    >
                      {memeImages[currentIndex].title}
                    </motion.h3>

                    {/* Description */}
                    <motion.p
                      className="text-xl md:text-2xl text-white/90 font-bold max-w-2xl"
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      {memeImages[currentIndex].description}
                    </motion.p>

                    {/* Animated Border */}
                    <motion.div
                      className="absolute inset-0 border-4 border-heavenGold rounded-3xl"
                      animate={{
                        borderColor: ['#FFD700', '#4B5CFA', '#FFD700'],
                        boxShadow: [
                          '0 0 20px rgba(255, 215, 0, 0.5)',
                          '0 0 20px rgba(75, 92, 250, 0.5)',
                          '0 0 20px rgba(255, 215, 0, 0.5)',
                        ],
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* 3D Navigation Arrows */}
            <motion.button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-heavenGold to-yellow-500 hover:from-yellow-500 hover:to-heavenGold text-black p-4 rounded-full shadow-2xl z-20"
              whileHover={{ 
                scale: 1.2, 
                rotateY: 15,
                boxShadow: '0 10px 30px rgba(255, 215, 0, 0.5)' 
              }}
              whileTap={{ scale: 0.9 }}
              style={{ transform: 'translateZ(50px)' }}
            >
              <ChevronLeft size={32} className="font-black" />
            </motion.button>

            <motion.button
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-suiBlue to-blue-500 hover:from-blue-500 hover:to-suiBlue text-white p-4 rounded-full shadow-2xl z-20"
              whileHover={{ 
                scale: 1.2, 
                rotateY: -15,
                boxShadow: '0 10px 30px rgba(75, 92, 250, 0.5)' 
              }}
              whileTap={{ scale: 0.9 }}
              style={{ transform: 'translateZ(50px)' }}
            >
              <ChevronRight size={32} className="font-black" />
            </motion.button>
          </motion.div>

          {/* 3D Thumbnail Navigation */}
          <div className="flex justify-center mt-12 space-x-4 perspective-500">
            {memeImages.map((image, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                className={`relative group ${
                  index === currentIndex 
                    ? 'scale-125 z-10' 
                    : 'opacity-70 hover:opacity-100'
                }`}
                whileHover={{ 
                  scale: index === currentIndex ? 1.25 : 1.1,
                  rotateY: 10,
                  z: 20
                }}
                whileTap={{ scale: 0.95 }}
                style={{
                  transform: `rotateY(${index === currentIndex ? '0deg' : '15deg'}) translateZ(${index === currentIndex ? '20px' : '0px'})`,
                }}
              >
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden shadow-xl border-4 border-transparent group-hover:border-heavenGold transition-all">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Emoji Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-3xl">{image.emoji}</span>
                  </div>
                </div>

                {/* Active Indicator */}
                {index === currentIndex && (
                  <motion.div
                    className="absolute -inset-2 bg-gradient-to-r from-heavenGold to-suiBlue rounded-2xl opacity-50 blur-sm"
                    layoutId="activeThumb"
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Meme Progress Bar */}
          <div className="flex justify-center mt-8 space-x-2">
            {memeImages.map((_, index) => (
              <motion.div
                key={index}
                className={`h-3 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-gradient-to-r from-heavenGold to-suiBlue w-12' 
                    : 'bg-white/30 w-3'
                }`}
                initial={false}
                animate={{
                  width: index === currentIndex ? 48 : 12,
                  scale: index === currentIndex ? 1.2 : 1,
                }}
                transition={{ duration: 0.3 }}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block p-8 bg-gradient-to-r from-purple-900/50 to-blue-900/50 backdrop-blur-lg rounded-3xl border border-heavenGold/30"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-3xl font-black text-white mb-4">
              🎪 JOIN THE MEME REVOLUTION! 🎪
            </h3>
            <p className="text-xl text-white/80 mb-6">
              Don't just watch the memes, BE the meme! 
            </p>
            <motion.button
              className="bg-gradient-to-r from-heavenGold to-suiBlue text-black px-8 py-4 rounded-full font-black text-xl shadow-2xl"
              whileHover={{ 
                scale: 1.1,
                boxShadow: '0 20px 40px rgba(255, 215, 0, 0.4)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              🚀 BUY $GABE NOW 🚀
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImageCarousel;
