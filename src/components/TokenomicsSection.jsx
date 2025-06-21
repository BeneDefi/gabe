import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, Copy, ExternalLink, DollarSign } from 'lucide-react';

const TokenomicsSection = () => {
  const tokenData = [
    { label: 'Community', percentage: 60, color: 'from-heavenGold to-yellow-400' },
    { label: 'Liquidity', percentage: 25, color: 'from-suiBlue to-blue-400' },
    { label: 'Development', percentage: 10, color: 'from-purple-500 to-purple-400' },
    { label: 'Marketing', percentage: 5, color: 'from-green-500 to-green-400' },
  ];

  const contractAddress = '0x13cda3fa8bf4d4dbe2c87763e65c0638855b90dd2a9759be4dece8a69fb56f7b::gabe::GABE';

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <section id="tokenomics" className="py-20 bg-gradient-to-br from-angelWhite to-gray-50">
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
              Tokenomics
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transparent distribution designed for sustainable growth and community ownership
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Chart Visualization */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative w-80 h-80 mx-auto">
              {/* Pie Chart Simulation */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-heavenGold to-suiBlue p-4">
                <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <PieChart className="w-16 h-16 text-suiBlue mx-auto mb-4" />
                    <div className="text-2xl font-bold text-gray-800">$GABE</div>
                    <div className="text-sm text-gray-600">Distribution</div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              {tokenData.map((item, index) => (
                <motion.div
                  key={item.label}
                  className={`absolute w-20 h-20 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center text-white font-bold shadow-lg`}
                  style={{
                    top: `${20 + index * 15}%`,
                    left: `${10 + index * 20}%`,
                  }}
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                >
                  {item.percentage}%
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Details */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Distribution Breakdown */}
            <div className="space-y-4">
              {tokenData.map((item, index) => (
                <motion.div
                  key={item.label}
                  className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${item.color}`} />
                    <span className="font-semibold text-gray-800">{item.label}</span>
                  </div>
                  <span className="text-2xl font-bold text-gray-800">{item.percentage}%</span>
                </motion.div>
              ))}
            </div>

            {/* Key Stats */}
            <motion.div
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <DollarSign className="w-8 h-8 text-heavenGold mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-800">1B</div>
                <div className="text-sm text-gray-600">Total Supply</div>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <ExternalLink className="w-8 h-8 text-suiBlue mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-800">0%</div>
                <div className="text-sm text-gray-600">Tax Fee</div>
              </div>
            </motion.div>

            {/* Contract Address */}
            <motion.div
              className="p-6 bg-white rounded-lg shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-800">Contract Address</h3>
                <motion.button
                  onClick={() => copyToClipboard(contractAddress)}
                  className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-heavenGold to-suiBlue text-white rounded-lg hover:shadow-lg transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Copy size={16} />
                  <span>Copy</span>
                </motion.button>
              </div>
              <div className="p-4 bg-gray-100 rounded-lg font-mono text-sm break-all">
                {contractAddress}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TokenomicsSection;
