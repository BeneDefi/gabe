import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Users, Twitter, Send, ExternalLink, Heart, Star } from 'lucide-react';

const CommunitySection = () => {
  const socialLinks = [
    {
      name: 'X (Twitter)',
      icon: Twitter,
      url: 'https://x.com/gabedotsui?s=21',
      followers: '25K+',
      description: 'Daily memes, wholesome content, and community love! 💕',
      color: 'from-blue-500 to-blue-600',
      emoji: '🐦',
      vibe: 'Meme Central HQ'
    },
    {
      name: 'Telegram',
      icon: Send,
      url: 'https://t.me/Gabedotsuii',
      followers: '15K+',
      description: 'Our cozy family chat where everyone belongs! 🏠',
      color: 'from-blue-400 to-blue-500',
      emoji: '💬',
      vibe: 'Family Hangout'
    },
  ];

  const communityStats = [
    { label: 'Beautiful Souls', value: '40K+', icon: Users, emoji: '👥' },
    { label: 'Daily Hugs', value: '∞', icon: Heart, emoji: '🤗' },
    { label: 'Good Vibes', value: 'MAXIMUM', icon: Star, emoji: '✨' },
  ];

  return (
    <section id="community" className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Friendly Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {['🌈', '🦄', '🎈', '🎪', '🎭', '🎨', '🌟', '💫', '✨', '💝'].map((emoji, i) => (
          <motion.div
            key={i}
            className="absolute text-5xl opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 20 - 10, 0],
              rotate: [0, 360],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 10 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 3,
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
              👨‍👩‍👧‍👦 Come Meet Your New Family!
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-black text-gray-800 mb-6">
            Our Amazing{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-heavenGold to-suiBlue">
              Community
            </span>
            <motion.span
              className="block text-4xl mt-2"
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🤗💕✨
            </motion.span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
            We're not just a community - we're a <span className="text-heavenGold font-bold">chosen family</span> of 
            dreamers, believers, and absolute legends! Come join the most wholesome corner of crypto! 🌟
          </p>
        </motion.div>

        {/* Community Stats with Personality */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {communityStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-8 bg-white/70 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-xl transition-all border border-gray-200/50 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              <motion.div
                className="text-6xl mb-4"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.5
                }}
              >
                {stat.emoji}
              </motion.div>
              <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-heavenGold to-suiBlue mb-3">
                {stat.value}
              </div>
              <div className="text-gray-700 font-bold text-lg">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Social Platforms with Personality */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {socialLinks.map((social, index) => (
            <motion.div
              key={social.name}
              className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all border border-gray-200/50 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, rotate: 1 }}
            >
              <div className={`h-40 bg-gradient-to-r ${social.color} flex items-center justify-center relative overflow-hidden`}>
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-20">
                  {[...Array(30)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute text-3xl"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0.3, 1, 0.3],
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                      }}
                    >
                      {social.emoji}
                    </motion.div>
                  ))}
                </div>
                
                <motion.div
                  className="relative z-10 text-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <social.icon className="w-20 h-20 text-white mb-2 mx-auto" />
                  <div className="text-white font-bold text-lg">{social.vibe}</div>
                </motion.div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-black text-gray-800">{social.name}</h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-3xl">{social.emoji}</span>
                    <span className="text-xl font-bold text-suiBlue">{social.followers}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 font-medium leading-relaxed">{social.description}</p>
                
                <motion.a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r ${social.color} text-white rounded-2xl font-bold hover:shadow-lg transition-all`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Join the Fun!</span>
                  <ExternalLink size={18} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Community Features with Meme Energy */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-black text-gray-800 mb-8">
            Why Our Family is the BEST Family! 🏆
          </h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Daily Dose of Joy 😊',
                description: 'Fresh memes, positive vibes, and wholesome content delivered daily!',
                emoji: '🌈',
              },
              {
                title: 'Always Got Your Back 🤝',
                description: 'Questions? Concerns? Feeling down? We\'re here 24/7 with love and support!',
                emoji: '💪',
              },
              {
                title: 'Your Voice Matters 🗣️',
                description: 'Every family member has a say in our future. Democracy with good vibes!',
                emoji: '🗳️',
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                className="p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-lg transition-all border border-gray-200/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03, rotate: 1 }}
              >
                <motion.div
                  className="text-5xl mb-4"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3
                  }}
                >
                  {feature.emoji}
                </motion.div>
                <h4 className="text-xl font-black text-gray-800 mb-3">{feature.title}</h4>
                <p className="text-gray-600 font-medium">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          className="mt-16 text-center"
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
              What are you waiting for, bestie? 
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium mb-6">
              Your seat at the family table is ready! Come join the most wholesome, 
              supportive, and fun-loving community in all of crypto! 💕
            </p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              whileHover={{ scale: 1.02 }}
            >
              <motion.a
                href="https://t.me/Gabedotsuii"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-suiBlue to-blue-500 text-white hover:from-blue-500 hover:to-suiBlue rounded-2xl font-bold transition-all shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>🏠 Join Our Home</span>
                <ExternalLink size={18} />
              </motion.a>
              <motion.a
                href="https://x.com/gabedotsui?s=21"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-heavenGold to-yellow-400 text-black hover:from-yellow-400 hover:to-heavenGold rounded-2xl font-bold transition-all shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>🐦 Follow the Fun</span>
                <ExternalLink size={18} />
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunitySection;