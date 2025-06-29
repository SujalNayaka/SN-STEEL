import { motion } from 'framer-motion';
import { ArrowRight, Facebook, Instagram, Mail, MapPin, Phone, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Our Products', href: '#products' },
    { name: 'Authorized Dealers', href: '#dealers' },
    { name: 'Contact Us', href: '#contact' }
  ];

  const products = [
    'SS Steel',
    'MS Section Items',
    'MS Pipes & Tubes',
    'MS Plates & Sheets',
    'Borewell Casing Pipes',
    'GI Pipes',
    'Purlin Items',
    'PUF Sheets'
  ];

  const services = [
    'Wholesale Supply',
    'Retail Sales',
    'Custom Cutting',
    'Quality Testing',
    'Fast Delivery',
    'Technical Support',
    'Bulk Orders',
    'Project Consultation'
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:text-blue-500', name: 'Facebook' },
    { icon: Twitter, href: '#', color: 'hover:text-blue-400', name: 'Twitter' },
    { icon: Youtube, href: '#', color: 'hover:text-red-500', name: 'YouTube' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-500', name: 'Instagram' }
  ];

  return (
    <footer className="bg-steel-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-4 sm:mb-6">
              <div className="relative">
                <img 
                  src="sn-steel-traders-logo.png" 
                  alt="SN Steel Traders Logo" 
                  className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold">SN Steel Traders</h3>
                <p className="text-accent-400 text-xs sm:text-sm font-medium">Strong Foundations in Every Bar</p>
                {/* GST Number */}
                <p className="text-steel-300 text-sm sm:text-base font-semibold mt-1 bg-steel-800 px-2 py-1 rounded-md inline-block">
                  GST: 29XXXXX1234X1ZX
                </p>
              </div>
            </div>
            
            <p className="text-steel-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              SN Steel Traders is a leading Iron and Steel dealer offering the most extensive 
              range of Iron & Steel products with quality assurance and competitive pricing.
            </p>

            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className={`w-10 h-10 sm:w-12 sm:h-12 bg-steel-800 rounded-xl flex items-center justify-center text-steel-400 transition-all duration-300 ${social.color} hover:bg-steel-700`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  title={social.name}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-white">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    className="text-steel-300 hover:text-accent-400 transition-colors flex items-center group text-sm sm:text-base"
                    whileHover={{ x: 5 }}
                  >
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Our Products */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-white">Our Products</h4>
            <ul className="space-y-2 sm:space-y-3">
              {products.map((product) => (
                <li key={product}>
                  <motion.span
                    className="text-steel-300 hover:text-accent-400 transition-colors cursor-pointer flex items-center group text-sm sm:text-base"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary-500 rounded-full mr-3 group-hover:bg-accent-500 transition-colors"></div>
                    {product}
                  </motion.span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-white">Contact Info</h4>
            
            <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-accent-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-steel-300 text-xs sm:text-sm leading-relaxed">
                    #, Near Karnataka Antibiotics Pharmaceuticals Limited,<br />
                    Seegehalli Gate, Gidfenahalli Main Road, Manchanabele Colony,<br />
                    Bangalore, Karnataka - 562 130
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-accent-400" />
                <div>
                  <p className="text-steel-300 text-sm sm:text-base">+91 63635 66216</p>
                  <p className="text-steel-300 text-sm sm:text-base">+91 63635 66216</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-accent-400" />
                <div>
                  <p className="text-steel-300 text-xs sm:text-sm">sales@snsteeltraders.com</p>
                  <p className="text-steel-300 text-xs sm:text-sm">info@snsteeltraders.com</p>
                </div>
              </div>
            </div>

            <motion.button
              className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg sm:rounded-xl font-semibold hover:from-primary-700 hover:to-primary-800 transition-all duration-300 flex items-center text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://maps.google.com/?q=16,+New+Bamboo+Bazaar+Road,+Kalasipalayam+New+Extension,+Bangalore+560+002', '_blank')}
            >
              Get Directions
              <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4" />
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Services Section */}
      <div className="border-t border-steel-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-center text-white">Our Services</h4>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
              {services.map((service) => (
                <span
                  key={service}
                  className="px-3 py-1 sm:px-4 sm:py-2 bg-steel-800 text-steel-300 rounded-full text-xs sm:text-sm hover:bg-steel-700 hover:text-accent-400 transition-colors cursor-pointer"
                >
                  {service}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-steel-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <motion.p
              className="text-steel-400 text-xs sm:text-sm text-center md:text-left"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              © 2024 SN Steel Traders. All rights reserved. | Designed with ❤️ for excellence in steel trading
            </motion.p>
            
            <motion.div
              className="flex items-center space-x-4 sm:space-x-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <a href="#" className="text-steel-400 hover:text-accent-400 text-xs sm:text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-steel-400 hover:text-accent-400 text-xs sm:text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-steel-400 hover:text-accent-400 text-xs sm:text-sm transition-colors">
                Sitemap
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;