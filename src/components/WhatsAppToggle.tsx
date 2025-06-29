import React, { useState } from 'react';
import { MessageCircle, X, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const WhatsAppToggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  const contactOptions = [
    {
      icon: MessageCircle,
      label: 'WhatsApp Chat',
      action: () => window.open('https://wa.me/916363566216?text=Hello! I am interested in your steel products. Please provide more information.', '_blank'),
      color: 'from-green-500 to-green-600',
      description: 'Chat with us instantly'
    },
    {
      icon: Phone,
      label: 'Call Now',
      action: () => window.open('tel:+916363566216', '_self'),
      color: 'from-blue-500 to-blue-600',
      description: '+91 63635 66216'
    },
    {
      icon: Mail,
      label: 'Email Us',
      action: () => window.open('mailto:sales@snsteeltraders.com?subject=Steel Products Inquiry&body=Hello, I am interested in your steel products. Please provide more information.', '_self'),
      color: 'from-purple-500 to-purple-600',
      description: 'Send us an email'
    }
  ];

  return (
    <>
      {/* Main WhatsApp Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
      >
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center relative overflow-hidden"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={isOpen ? {} : {
            scale: [1, 1.1, 1],
            boxShadow: [
              "0 10px 25px rgba(34, 197, 94, 0.3)",
              "0 15px 35px rgba(34, 197, 94, 0.5)",
              "0 10px 25px rgba(34, 197, 94, 0.3)"
            ]
          }}
          transition={isOpen ? {} : {
            duration: 2,
            repeat: Infinity,
            repeatDelay: 3
          }}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6 sm:w-7 sm:h-7" />
              </motion.div>
            ) : (
              <motion.div
                key="whatsapp"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Pulse animation */}
          {!isOpen && (
            <motion.div
              className="absolute inset-0 bg-green-500 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.7, 0, 0.7]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1
              }}
            />
          )}
        </motion.button>
      </motion.div>

      {/* Contact Options Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 z-40 space-y-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            {contactOptions.map((option, index) => (
              <motion.div
                key={option.label}
                initial={{ opacity: 0, x: 20, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 20, scale: 0.8 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                className="flex items-center space-x-3"
              >
                {/* Label */}
                <motion.div
                  className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg border border-steel-200"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-steel-900 font-semibold text-sm">{option.label}</div>
                  <div className="text-steel-600 text-xs">{option.description}</div>
                </motion.div>

                {/* Button */}
                <motion.button
                  onClick={option.action}
                  className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r ${option.color} text-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <option.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default WhatsAppToggle;