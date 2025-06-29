import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Calendar, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: ['+91 63635 66216', '+91 63635 66216'],
      color: 'from-green-500 to-green-600',
      action: 'Call Now',
      actionHandler: () => window.open('tel:+916363566216', '_self')
    },
    {
      icon: Mail,
      title: 'Email Address',
      details: ['sales@snsteeltraders.com', 'info@snsteeltraders.com'],
      color: 'from-blue-500 to-blue-600',
      action: 'Send Email',
      actionHandler: () => window.open('mailto:sales@snsteeltraders.com?subject=Steel Products Inquiry&body=Hello, I am interested in your steel products. Please provide more information.', '_self')
    },
    {
      icon: MapPin,
      title: 'Head Office',
      details: ['#16, New Bamboo Bazaar Road', 'Kalasipalayam New Extension, Bangalore 560 002'],
      color: 'from-red-500 to-red-600',
      action: 'Get Directions',
      actionHandler: () => window.open('https://maps.google.com/?q=16,+New+Bamboo+Bazaar+Road,+Kalasipalayam+New+Extension,+Bangalore+560+002', '_blank')
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Saturday: 9:00 AM - 7:00 PM', 'Sunday: 10:00 AM - 5:00 PM'],
      color: 'from-purple-500 to-purple-600',
      action: 'Visit Us',
      actionHandler: () => window.open('https://maps.google.com/?q=16,+New+Bamboo+Bazaar+Road,+Kalasipalayam+New+Extension,+Bangalore+560+002', '_blank')
    }
  ];

  const quickActions = [
    {
      icon: MessageCircle,
      title: 'WhatsApp Chat',
      description: 'Get instant responses',
      color: 'from-green-500 to-green-600',
      action: () => window.open('https://wa.me/916363566216?text=Hello! I am interested in your steel products. Please provide more information.', '_blank')
    },
    {
      icon: Calendar,
      title: 'Schedule Visit',
      description: 'Book a site visit',
      color: 'from-blue-500 to-blue-600',
      action: () => window.open('tel:+916363566216', '_self')
    },
    {
      icon: Award,
      title: 'Get Certificate',
      description: 'Quality certificates',
      color: 'from-purple-500 to-purple-600',
      action: () => window.open('mailto:sales@snsteeltraders.com?subject=Quality Certificate Request&body=Hello, I would like to request quality certificates for your steel products.', '_self')
    }
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-white">
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
            Get In Touch
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-steel-900 mb-4 sm:mb-6 font-display">
            Contact <span className="text-gradient">Us</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-steel-600 max-w-3xl mx-auto leading-relaxed">
            Get in touch with us for all your iron and steel requirements. 
            We're here to help you with expert advice, competitive pricing, and exceptional service.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 mb-12 sm:mb-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-steel-900 mb-6 sm:mb-8">Get In Touch</h3>
            
            <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  className="flex items-start space-x-3 sm:space-x-4 p-4 sm:p-6 bg-steel-50 rounded-xl sm:rounded-2xl hover:bg-steel-100 transition-colors group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className={`w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br ${info.color} rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <info.icon className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg sm:text-xl font-semibold text-steel-900 mb-2">{info.title}</h4>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-steel-600 mb-1 text-sm sm:text-base">{detail}</p>
                    ))}
                    <button 
                      onClick={info.actionHandler}
                      className="text-primary-600 font-semibold hover:text-primary-700 transition-colors mt-2 text-sm sm:text-base"
                    >
                      {info.action} →
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
              {quickActions.map((action, index) => (
                <motion.button
                  key={action.title}
                  onClick={action.action}
                  className={`p-3 sm:p-4 bg-gradient-to-br ${action.color} text-white rounded-lg sm:rounded-xl text-center hover:shadow-lg transition-all duration-300`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <action.icon className="w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-2" />
                  <div className="text-xs sm:text-sm font-semibold">{action.title}</div>
                  <div className="text-xs opacity-90">{action.description}</div>
                </motion.button>
              ))}
            </div>

            {/* CTA Section */}
            <motion.div
              className="p-6 sm:p-8 bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl sm:rounded-2xl text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl sm:text-2xl font-bold mb-3">Need A Free Estimate?</h4>
              <p className="text-primary-100 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                Get a free quote for all your Iron and Steel requirements. 
                We provide prompt delivery at competitive prices with quality assurance.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <motion.button
                  className="bg-white text-primary-700 px-4 py-3 sm:px-6 sm:py-3 rounded-lg sm:rounded-xl font-semibold hover:bg-primary-50 transition-colors flex items-center justify-center text-sm sm:text-base"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open('mailto:sales@snsteeltraders.com?subject=Free Estimate Request&body=Hello, I would like to request a free estimate for steel products. Please provide more information.', '_self')}
                >
                  Get Free Estimate
                </motion.button>
                <motion.button
                  className="border-2 border-white text-white px-4 py-3 sm:px-6 sm:py-3 rounded-lg sm:rounded-xl font-semibold hover:bg-white hover:text-primary-700 transition-colors flex items-center justify-center text-sm sm:text-base"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open('tel:+916363566216', '_self')}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call 63635 66216
                </motion.button>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary-600/10 to-accent-500/10 rounded-2xl sm:rounded-3xl blur-3xl"></div>
            <div className="relative bg-steel-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-steel-200">
              <h3 className="text-2xl sm:text-3xl font-bold text-steel-900 mb-4 sm:mb-6 text-center">Send Us A Message</h3>
              
              <form className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-sm font-medium text-steel-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-3 sm:px-4 sm:py-4 border border-steel-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-white text-sm sm:text-base"
                      placeholder="Enter your first name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-steel-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-3 sm:px-4 sm:py-4 border border-steel-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-white text-sm sm:text-base"
                      placeholder="Enter your last name"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-steel-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-3 sm:px-4 sm:py-4 border border-steel-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-white text-sm sm:text-base"
                    placeholder="Enter your email address"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-steel-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    className="w-full px-3 py-3 sm:px-4 sm:py-4 border border-steel-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-white text-sm sm:text-base"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-steel-700 mb-2">
                    Product Interest
                  </label>
                  <select className="w-full px-3 py-3 sm:px-4 sm:py-4 border border-steel-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-white text-sm sm:text-base">
                    <option>Select a product</option>
                    <option>Construction Steel</option>
                    <option>Fabrication Steel</option>
                    <option>Special Steel</option>
                    <option>Borewell Steel</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-steel-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-3 sm:px-4 sm:py-4 border border-steel-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none bg-white text-sm sm:text-base"
                    placeholder="Tell us about your requirements, quantity needed, delivery location, etc."
                    required
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl font-semibold hover:from-primary-700 hover:to-primary-800 transition-all duration-300 flex items-center justify-center text-sm sm:text-base"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Send Message
                </motion.button>
              </form>

              <div className="mt-4 sm:mt-6 text-center">
                <p className="text-xs sm:text-sm text-steel-600">
                  We typically respond within 2 hours during business hours
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          className="bg-steel-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl sm:text-2xl font-bold text-steel-900 mb-4">Visit Our Store</h3>
          <p className="text-steel-600 mb-4 sm:mb-6 text-sm sm:text-base">
            #16, New Bamboo Bazaar Road, Kalasipalayam New Extension, Bangalore 560 002
          </p>
          <div className="bg-steel-200 rounded-xl sm:rounded-2xl h-48 sm:h-64 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-8 h-8 sm:w-12 sm:h-12 text-steel-500 mx-auto mb-4" />
              <p className="text-steel-600 text-sm sm:text-base">Interactive Map Coming Soon</p>
              <motion.button
                className="mt-4 btn-primary text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('https://maps.google.com/?q=16,+New+Bamboo+Bazaar+Road,+Kalasipalayam+New+Extension,+Bangalore+560+002', '_blank')}
              >
                Get Directions
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;