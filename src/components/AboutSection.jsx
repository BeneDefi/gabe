import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Zap, Shield, Heart, Sparkles } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: Heart,
      title: 'Built with Love 💕',
      description: 'Every line of code written with pure love for our amazing community family!',
      emoji: '🥰'
    },
    {
      icon: Users,
      title: 'Fam First Always 👨‍👩‍👧‍👦',
      description: 'We\'re not just holders, we\'re family! Your success is our success, bestie!',
      emoji: '🤗'
    },
    {
      icon: Sparkles,
      title: 'Pure Magic ✨',
      description: 'Combining meme magic with serious tech to create something absolutely legendary!',
      emoji: '🪄'
    },
    {
      icon: Shield,
      title: 'Safe & Sound 🛡️',
      description: 'Your funds are safer than a diamond in a vault. We got your back, always!',
      emoji: '🔒'
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white via-heavenGold/5 to-suiBlue/10 relative overflow-hidden">
      {/* Friendly Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {['😇', '🌟', '💫', '🎈', '🦄', '🌈'].map((emoji, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
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
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-heavenGold/20 to-suiBlue/20 rounded-full text-gray-700 font-bold border border-heavenGold/30">
                🌟 Get to Know Your New Best Friend!
              </span>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-6xl font-black text-gray-800 mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Meet{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-heavenGold to-suiBlue">
                GabeDotSui
              </span>
              <motion.span
                className="block text-3xl mt-2"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                😇✨
              </motion.span>
            </motion.h2>

            <motion.p
              className="text-lg text-gray-700 mb-6 leading-relaxed font-medium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Hey there, beautiful soul! 👋 We're not just another memecoin - we're your{' '}
              <span className="text-heavenGold font-bold">friendly neighborhood angels</span> bringing{' '}
              <span className="text-suiBlue font-bold">pure joy and good vibes</span> to the Sui blockchain! 
            </motion.p>

            <motion.p
              className="text-lg text-gray-700 mb-8 leading-relaxed font-medium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Think of us as that friend who always has your back, celebrates your wins, and makes you laugh 
              when you need it most. We're building more than just a token - we're creating a{' '}
              <span className="text-heavenGold font-bold">wholesome community</span> where everyone belongs! 🤗💕
            </motion.p>

            <motion.div
              className="grid grid-cols-2 gap-6 mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="text-center bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-heavenGold/20"
                whileHover={{ scale: 1.05, rotate: 2 }}
              >
                <div className="text-4xl mb-2">👨‍👩‍👧‍👦</div>
                <div className="text-3xl font-black text-suiBlue mb-2">1K+</div>
                <div className="text-gray-600 font-bold">Happy Family Members</div>
              </motion.div>
              <motion.div 
                className="text-center bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-suiBlue/20"
                whileHover={{ scale: 1.05, rotate: -2 }}
              >
                <div className="text-4xl mb-2">💝</div>
                <div className="text-3xl font-black text-heavenGold mb-2">24/7</div>
                <div className="text-gray-600 font-bold">Love & Support</div>
              </motion.div>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              viewport={{ once: true }}
            >
              {['#Wholesome', '#FamilyFirst', '#GoodVibesOnly', '#AngelEnergy'].map((tag, index) => (
                <motion.span
                  key={tag}
                  className="px-4 py-2 bg-gradient-to-r from-heavenGold/20 to-suiBlue/20 rounded-full text-gray-700 font-bold border border-heavenGold/30"
                  whileHover={{ scale: 1.1 }}
                  animate={{ 
                    y: [0, -5, 0],
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2
                  }}
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Features */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="flex items-start space-x-4 p-6 bg-white/70 backdrop-blur-sm rounded-2xl hover:shadow-xl transition-all border border-gray-200/50 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, rotate: 1 }}
              >
                <div className="flex-shrink-0">
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-r from-heavenGold to-suiBlue rounded-2xl flex items-center justify-center relative overflow-hidden"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <feature.icon className="w-8 h-8 text-white relative z-10" />
                    <motion.div
                      className="absolute inset-0 bg-white/20"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.div>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center space-x-2 mb-3">
                    <h3 className="text-xl font-black text-gray-800">
                      {feature.title}
                    </h3>
                    <motion.span
                      className="text-2xl"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        rotate: [0, 10, -10, 0]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {feature.emoji}
                    </motion.span>
                  </div>
                  <p className="text-gray-600 leading-relaxed font-medium">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Fun Section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-heavenGold/10 to-suiBlue/10 backdrop-blur-sm rounded-3xl p-8 border border-heavenGold/20">
            <motion.div
              className="text-6xl mb-6"
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              🎪🎭🎨
            </motion.div>
            <h3 className="text-3xl font-black text-gray-800 mb-4">
              Ready to Join Our Amazing Family? 
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
              We promise you'll never feel alone in this crazy crypto world. 
              Come for the memes, stay for the friendships! 💕
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;