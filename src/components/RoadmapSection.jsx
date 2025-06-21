import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Circle, Clock, Star } from 'lucide-react';

const RoadmapSection = () => {
  const roadmapItems = [
    {
      phase: 'Phase 1',
      title: 'Foundation',
      status: 'completed',
      items: [
        'Token Launch on Sui Network',
        'Community Building & Social Media',
        'Initial DEX Listings',
        'Website & Branding Launch',
      ],
    },
    {
      phase: 'Phase 2',
      title: 'Growth',
      status: 'in-progress',
      items: [
        'Major Exchange Listings',
        'Community Governance Implementation',
        'Marketing Campaign Launch',
        'Partnership Announcements',
      ],
    },
    {
      phase: 'Phase 3',
      title: 'Expansion',
      status: 'upcoming',
      items: [
        'DeFi Protocol Integration',
        'NFT Collection Launch',
        'Cross-Chain Bridge Development',
        'Mobile App Release',
      ],
    },
    {
      phase: 'Phase 4',
      title: 'Innovation',
      status: 'upcoming',
      items: [
        'Metaverse Integration',
        'Gaming Platform Launch',
        'AI-Powered Features',
        'Global Expansion',
      ],
    },
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return CheckCircle;
      case 'in-progress':
        return Clock;
      default:
        return Circle;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'text-green-500';
      case 'in-progress':
        return 'text-heavenGold';
      default:
        return 'text-gray-400';
    }
  };

  const getCardColor = (status) => {
    switch (status) {
      case 'completed':
        return 'from-green-50 to-green-100 border-green-200';
      case 'in-progress':
        return 'from-heavenGold/10 to-suiBlue/10 border-heavenGold';
      default:
        return 'from-gray-50 to-gray-100 border-gray-200';
    }
  };

  return (
    <section id="roadmap" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-heavenGold to-suiBlue">
              Roadmap
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our journey to becoming the leading memecoin on Sui Network
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {roadmapItems.map((item, index) => {
              const StatusIcon = getStatusIcon(item.status);
              
              return (
                <motion.div
                  key={item.phase}
                  className={`relative p-6 bg-gradient-to-br ${getCardColor(item.status)} border-2 rounded-xl hover:shadow-lg transition-all`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Phase Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{item.phase}</h3>
                      <h4 className="text-2xl font-bold text-gray-800">{item.title}</h4>
                    </div>
                    <StatusIcon className={`w-8 h-8 ${getStatusColor(item.status)}`} />
                  </div>

                  {/* Status Badge */}
                  <div className="mb-6">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${
                      item.status === 'completed' 
                        ? 'bg-green-200 text-green-800'
                        : item.status === 'in-progress'
                        ? 'bg-heavenGold/20 text-heavenGold'
                        : 'bg-gray-200 text-gray-600'
                    }`}>
                      {item.status === 'completed' ? 'Completed' : 
                       item.status === 'in-progress' ? 'In Progress' : 'Coming Soon'}
                    </span>
                  </div>

                  {/* Items List */}
                  <ul className="space-y-3">
                    {item.items.map((task, taskIndex) => (
                      <motion.li
                        key={taskIndex}
                        className="flex items-start space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: (index * 0.2) + (taskIndex * 0.1) }}
                        viewport={{ once: true }}
                      >
                        <div className={`flex-shrink-0 w-2 h-2 rounded-full mt-2 ${
                          item.status === 'completed' ? 'bg-green-500' :
                          item.status === 'in-progress' ? 'bg-heavenGold' : 'bg-gray-400'
                        }`} />
                        <span className="text-gray-700 text-sm leading-relaxed">{task}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Special Effects for Active Phase */}
                  {item.status === 'in-progress' && (
                    <motion.div
                      className="absolute -inset-0.5 bg-gradient-to-r from-heavenGold to-suiBlue rounded-xl opacity-20 blur"
                      animate={{ opacity: [0.2, 0.4, 0.2] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}

                  {/* Connecting Line */}
                  {index < roadmapItems.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-1 bg-gradient-to-r from-heavenGold to-suiBlue transform -translate-y-1/2 z-10" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Additional Info */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-angelWhite to-gray-50 rounded-xl">
            <Star className="w-12 h-12 text-heavenGold mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Community-Driven Development
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our roadmap is not set in stone. We believe in community governance and will adapt 
              our plans based on feedback, market conditions, and new opportunities that arise. 
              Join our community to have your voice heard in shaping the future of $GABE.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RoadmapSection;
