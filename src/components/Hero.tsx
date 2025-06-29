import { motion } from 'framer-motion';
import { Phone, Shield, Star, Truck } from 'lucide-react';

const Hero = () => {
  const stats = [
    { icon: Shield, label: 'Quality Products', value: '100%', color: 'from-accent-500 to-accent-600' },
    { icon: Truck, label: 'Fast Delivery', value: '24hrs', color: 'from-success-500 to-success-600' },
    { icon: Star, label: 'Best Prices', value: 'Always', color: 'from-primary-500 to-primary-600' },
  ];

  const features = [
    { icon: Shield, text: 'Quality Assured Products' },
    { icon: Truck, text: 'Fast & Reliable Delivery' },
    { icon: Star, text: 'Authorized Dealer Network' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background with transparent overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://www.indiabusinesstrade.in/wp-content/uploads/2023/06/shutterstock_2119130636.jpg')`
          }}
        />
        {/* Dark overlay for transparency effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-steel-900/85 via-steel-800/80 to-steel-900/85"></div>
        <div className="absolute inset-0 steel-pattern opacity-10"></div>
      </div>
      
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-20 left-4 w-20 h-20 sm:w-32 sm:h-32 bg-accent-500/20 rounded-full blur-3xl"
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-4 w-24 h-24 sm:w-40 sm:h-40 bg-primary-500/20 rounded-full blur-3xl"
        animate={{
          y: [0, 40, 0],
          scale: [1, 0.8, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 bg-white/10 backdrop-blur-md rounded-full text-accent-400 font-semibold mb-4 sm:mb-6 border border-white/20 text-sm"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <Star className="w-4 h-4 mr-2" />
            Premium Steel Products
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 sm:mb-8 font-display leading-tight max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Leading Iron & Steel
            <span className="block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 via-accent-500 to-primary-400">
                Dealers
              </span>
            </span>
          </motion.h1>
          
          <motion.p
            className="text-lg sm:text-xl lg:text-2xl text-steel-200 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Your trusted partner for all kinds of iron and steel products. 
            We offer premium quality materials at wholesale and retail prices 
            with guaranteed satisfaction.
          </motion.p>

          {/* Features */}
          <motion.div
            className="flex flex-wrap gap-3 sm:gap-4 mb-12 sm:mb-16 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-3 rounded-full border border-white/20">
                <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 text-accent-400" />
                <span className="text-white text-sm sm:text-base font-medium">{feature.text}</span>
              </div>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-3 gap-4 sm:gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.8 }}
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                className="text-center"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="glass-effect rounded-xl sm:rounded-2xl p-4 sm:p-8 mb-2 group hover:bg-white/20 transition-all duration-300">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${stat.color} rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-sm sm:text-base lg:text-lg text-steel-300 font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="mt-12 sm:mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <motion.p
              className="text-lg sm:text-xl text-steel-200 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.8 }}
            >
              Ready to get started? Contact us for the best prices and quality steel products.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.8 }}
            >
              <motion.a
                href="#contact"
                className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-4 rounded-xl font-semibold hover:from-primary-700 hover:to-primary-800 transition-all duration-300 flex items-center justify-center text-lg shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us Today
              </motion.a>
              
              <motion.a
                href="tel:+916363566216"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-steel-900 transition-all duration-300 flex items-center justify-center text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call +91 63635 66216
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;