import { motion } from 'framer-motion';
import { CheckCircle, Award, Shield, Star, Phone } from 'lucide-react';

const AuthorizedDealers = () => {
  // Function to get logo path - will use actual logo names from your folder
  const getLogoPath = (logoName: string) => `/images/logos/${logoName}`;

  const dealers = [
    {
      name: 'SUNVIK GOLD TMT',
      logo: 'sunvik.jpg', // Replace with your actual logo filename
      description: 'Premium TMT bars with superior strength and earthquake resistance',
      speciality: 'TMT Bars & Rebars',
      rating: 4.9
    },
    {
      name: 'APOLLO',
      logo: 'Appolo.jpg', // Replace with your actual logo filename
      description: 'Trusted steel products for construction and infrastructure projects',
      speciality: 'Structural Steel',
      rating: 4.8
    },
    {
      name: 'TATA',
      logo: 'TATA.jpg', // Replace with your actual logo filename
      description: 'India\'s leading steel manufacturer with global quality standards',
      speciality: 'All Steel Products',
      rating: 5.0
    },
    {
      name: 'JINDAL',
      logo: 'Jindal.jpg', // Replace with your actual logo filename
      description: 'Quality steel solutions worldwide with innovative technology',
      speciality: 'Stainless Steel',
      rating: 4.7
    },
    {
      name: 'SAIL',
      logo: 'Sail.jpg', // Replace with your actual logo filename
      description: 'Steel Authority of India Limited - Government enterprise',
      speciality: 'Heavy Steel Products',
      rating: 4.6
    },
    {
      name: 'SURYA PRAKASH',
      logo: 'Surya.jpg', // Replace with your actual logo filename
      description: 'Reliable steel products supplier with consistent quality',
      speciality: 'MS Products',
      rating: 4.5
    },
    {
      name: 'MALUR TUBES',
      logo: 'Malur.png', // Replace with your actual logo filename
      description: 'Specialized in tube manufacturing with precision engineering',
      speciality: 'Pipes & Tubes',
      rating: 4.8
    },
    {
      name: 'PURVA METALS',
      logo: 'purva.jpg', // Replace with your actual logo filename
      description: 'Premium metal products provider with extensive range',
      speciality: 'Metal Sheets',
      rating: 4.7
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: 'Genuine Products',
      description: '100% authentic products directly from manufacturers',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Award,
      title: 'Quality Assured',
      description: 'All products come with manufacturer quality certificates',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Shield,
      title: 'Warranty Coverage',
      description: 'Comprehensive warranty support from authorized dealers',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Star,
      title: 'Best Prices',
      description: 'Competitive pricing with dealer margins and bulk discounts',
      color: 'from-accent-500 to-accent-600'
    }
  ];

  return (
    <section id="dealers" className="py-12 sm:py-16 lg:py-20 section-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 bg-primary-100 rounded-full text-primary-700 font-semibold mb-4 sm:mb-6 text-sm"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Trusted Partners
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-steel-900 mb-4 sm:mb-6 font-display">
            Authorized <span className="text-gradient">Dealers</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-steel-600 max-w-3xl mx-auto leading-relaxed">
            We are proud to be authorized dealers for India's most trusted steel brands, 
            ensuring you get genuine products with manufacturer warranties and support.
          </p>
        </motion.div>

        {/* Dealers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {dealers.map((dealer, index) => (
            <motion.div
              key={dealer.name}
              className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 text-center card-hover group border border-steel-100"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="relative mb-4 sm:mb-6 overflow-hidden rounded-xl">
                <img
                  src={getLogoPath(dealer.logo)}
                  alt={`${dealer.name} Logo`}
                  className="w-full h-20 sm:h-24 object-contain bg-steel-50 p-2 group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                  onError={(e) => {
                    // Fallback to placeholder if logo doesn't exist
                    e.currentTarget.src = 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-steel-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Rating Badge */}
                <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center space-x-1">
                  <Star className="w-3 h-3 text-yellow-500 fill-current" />
                  <span className="text-xs font-semibold text-steel-900">{dealer.rating}</span>
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-steel-900 mb-2 group-hover:text-primary-600 transition-colors">
                {dealer.name}
              </h3>
              
              <div className="mb-3">
                <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full">
                  {dealer.speciality}
                </span>
              </div>
              
              <p className="text-sm text-steel-600 leading-relaxed mb-4">
                {dealer.description}
              </p>
              
              <motion.div
                className="w-full h-1 bg-gradient-to-r from-primary-500 to-primary-700 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
              />
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="text-center p-4 sm:p-6 bg-white rounded-2xl shadow-lg card-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4`}>
                <benefit.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-steel-900 mb-2">{benefit.title}</h3>
              <p className="text-sm sm:text-base text-steel-600 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 steel-pattern opacity-10"></div>
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">Ready to Get Started?</h3>
              <p className="text-base sm:text-lg lg:text-xl text-primary-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
                Contact us today to get the best prices on authentic steel products 
                from our authorized dealer network.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <motion.button
                  className="bg-white text-primary-700 px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold hover:bg-primary-50 transition-colors flex items-center justify-center text-sm sm:text-base"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open('mailto:sales@snsteeltraders.com?subject=Free Estimate Request&body=Hello, I would like to request a free estimate for steel products from your authorized dealers.', '_self')}
                >
                  Get Free Estimate
                </motion.button>
                <motion.button
                  className="border-2 border-white text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold hover:bg-white hover:text-primary-700 transition-colors flex items-center justify-center text-sm sm:text-base"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open('tel:+916363566216', '_self')}
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Call +91 63635 66216
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AuthorizedDealers;