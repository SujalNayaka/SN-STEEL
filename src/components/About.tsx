import { Shield, Truck, Award, Users, Target, Heart, Zap, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const features = [
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Premium quality iron and steel products with guaranteed durability and strength.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Quick and reliable delivery service to meet your project deadlines.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Award,
      title: 'Authorized Dealer',
      description: 'Official dealer for top brands like TATA, JINDAL, SAIL, and more.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: 'Professional guidance and expert advice for all your steel requirements.',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const values = [
    { icon: Target, title: 'Our Mission', text: 'To provide the highest quality iron and steel products with exceptional customer service.' },
    { icon: Heart, title: 'Our Values', text: 'Integrity, quality, reliability, and customer satisfaction are at the core of everything we do.' },
    { icon: Zap, title: 'Our Vision', text: 'To be the most trusted and preferred iron and steel dealer in South India.' },
  ];

  const achievements = [
    'Premium Quality Products',
    'Satisfied Customers',
    'Authorized Brand Partners',
    '24/7 Customer Support',
    'ISO Certified Quality',
    'Pan-India Delivery Network'
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 section-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12 lg:mb-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
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
              About Our Company
            </motion.div>

            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-steel-900 mb-4 sm:mb-6 font-display"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Iron & Steel
              <span className="block text-gradient">Experts</span>
            </motion.h2>

            <motion.p
              className="text-base sm:text-lg text-steel-600 mb-4 sm:mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
            >
              We offer the most extensive range of Structural Steel (S.S) & Mild Steel (M.S) 
              products including MS Channels, MS Angles, MS Pipes, MS Plates, MS Sheets, 
              Purlin items, PUF Sheets, and all kinds of iron and steel materials.
            </motion.p>

            <motion.p
              className="text-base sm:text-lg text-steel-600 mb-4 sm:mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
            >
              SN Steel Traders was established with a vision to become one of the leading 
              suppliers in the field of Iron and Steel. We have successfully built a reputation 
              for quality, reliability, and customer satisfaction.
            </motion.p>

            <motion.p
              className="text-base sm:text-lg text-steel-600 mb-6 sm:mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true }}
            >
              At SN Steel Traders, we strive to provide customers with the best service in 
              iron & steel trade. We believe in being responsive to your needs and treating 
              customers with equality and respect.
            </motion.p>

            {/* Achievements Grid */}
            <motion.div
              className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              viewport={{ once: true }}
            >
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-success-500 flex-shrink-0" />
                  <span className="text-steel-700 font-medium text-sm sm:text-base">{achievement}</span>
                </div>
              ))}
            </motion.div>

            <motion.button
              className="btn-primary text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Learn More About Us
            </motion.button>
          </motion.div>

          {/* Right Content - Features */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg card-hover group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className={`w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br ${feature.color} rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-steel-900 mb-2 sm:mb-3 group-hover:text-primary-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-steel-600 leading-relaxed text-sm sm:text-base">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 sm:gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              className="text-center p-6 sm:p-8 bg-white rounded-xl sm:rounded-2xl shadow-lg card-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <value.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-steel-900 mb-3 sm:mb-4">{value.title}</h3>
              <p className="text-steel-600 leading-relaxed text-sm sm:text-base">{value.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;