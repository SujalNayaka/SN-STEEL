import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Eye, X } from 'lucide-react';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Function to get image path - will use actual image names from your folder
  const getImagePath = (imageName: string) => `/images/${imageName}`;

  const productCategories = [
    {
      id: 'construction-steel',
      title: 'Construction Steel',
      description: 'TMT bars and essential steel products for construction',
      products: [
        // TMT Bars
        {
          name: 'TMT Bars',
          image: 'tmt.jpg' // Replace with your actual filename
        },
        {
          name: 'Binding Wire',
          image: 'binding.png' // Replace with your actual filename
        },
        {
          name: 'Stirrups',
          image: 'stirrups.png' // Replace with your actual filename
        },
        {
          name: 'Plastering Mesh',
          image: 'pmesh.jpg' // Replace with your actual filename
        }
      ]
    },
    {
      id: 'fabrication-steel',
      title: 'Fabrication Steel / Structural Steel',
      description: 'Specialized steel for fabrication work',
      products: [
        {
          name: 'MS Rounds',
          image: '1.png' // Replace with your actual filename
        },
        {
          name: 'MS Angles',
          image: '2.png' // Replace with your actual filename
        },
        {
          name: 'MS Equal Angles',
          image: 'msequal.jpg' // Replace with your actual filename
        },
        {
          name: 'MS Squares',
          image: '3.png' // Replace with your actual filename
        },
        {
          name: 'MS Hexagons',
          image: 'mshex.jpg' // Replace with your actual filename
        },
        {
          name: 'MS Channel',
          image: '4.png' // Replace with your actual filename
        },
        {
          name: 'C Channels',
          image: '15.png' // Replace with your actual filename
        },
        {
          name: 'U Channels',
          image: '14.png' // Replace with your actual filename
        },
        {
          name: 'HR Sheets',
          image: '16.png' // Replace with your actual filename
        },
        {
          name: 'CR Sheets',
          image: '17.png' // Replace with your actual filename
        },
        {
          name: 'MS Plates',
          image: '5.png' // Replace with your actual filename
        },
        {
          name: 'MS Flats',
          image: '6.png' // Replace with your actual filename
        },
        {
          name: 'MS Joists',
          image: '10.png' // Replace with your actual filename
        },
        {
          name: 'Narrow Parallel Flange Beams',
          image: '11.png' // Replace with your actual filename
        },
        {
          name: 'Wide Parallel Flange Beams',
          image: '14.png' // Replace with your actual filename
        },
        {
          name: 'Universal Beams (UB)',
          image: '13.png' // Replace with your actual filename
        },
        {
          name: 'Universal Columns (UC)',
          image: '12.png' // Replace with your actual filename
        },
        {
          name: 'MS Rectangular Pipes and Tubes',
          image: '8.png' // Replace with your actual filename
        },
        {
          name: 'Light Pipes',
          image: 'light.jpg' // Replace with your actual filename
        },
        {
          name: 'Medium Pipes',
          image: 'medium.jpeg' // Replace with your actual filename
        },
        {
          name: 'Heavy Pipes',
          image: 'heavy.jpg' // Replace with your actual filename
        },
        {
          name: 'MS Square Pipes',
          image: '7.png' // Replace with your actual filename
        },
        {
          name: 'HR Pipes',
          image: 'hrpipe.jpg' // Replace with your actual filename
        },
        {
          name: 'HR Round and Rectangular Pipes & Tubes',
          image: 'hrmulti.jpg' // Replace with your actual filename
        },
        {
          name: 'HR Tubes',
          image: 'hrtube.jpg' // Replace with your actual filename
        },
        {
          name: 'HR Structural Steel',
          image: 'hrstruct.jpg' // Replace with your actual filename
        }
      ]
    },
    {
      id: 'special-steel',
      title: 'Special Steel',
      description: 'Specialized steel products for specific applications',
      products: [
        {
          name: 'EN Plates',
          image: 'enplate.png' // Replace with your actual filename
        },
        {
          name: 'EN Rounds',
          image: 'enround.png' // Replace with your actual filename
        },
        {
          name: 'HR Plates',
          image: 'hrplate.jpg' // Replace with your actual filename
        },
        {
          name: 'GP Sheets',
          image: 'gpsheet.png' // Replace with your actual filename
        },
        {
          name: 'Seamless Round Pipes',
          image: 'seamrr.jpg' // Replace with your actual filename
        },
        {
          name: 'Round Rods',
          image: 'roundrod.jpg' // Replace with your actual filename
        },
        {
          name: 'GP Square Pipes',
          image: 'gpsq.png' // Replace with your actual filename
        },
        {
          name: 'GP Rectangular Pipes',
          image: 'gprect.png' // Replace with your actual filename
        },
        {
          name: 'GP Round Pipes',
          image: 'gpround.png' // Replace with your actual filename
        }
      ]
    },
    {
      id: 'borewell-steel',
      title: 'Borewell Steel',
      description: 'Specialized pipes for borewell and water applications',
      products: [
        {
          name: 'MS Casing Pipe / Black Steel Tubes (6 Inch)',
          image: 'mscase.jpeg' // Replace with your actual filename
        },
        {
          name: 'GI Casing Pipe (6 Inch)',
          image: 'gicase.png' // Replace with your actual filename
        },
        {
          name: '2Inch GI Pipe',
          image: '2inchgi.png' // Replace with your actual filename
        }
      ]
    },
    {
      id: 'colour-coated-roofing',
      title: 'Colour Coated Roofing Sheet',
      description: 'Premium quality colour coated roofing solutions for all applications',
      products: [
        {
          name: 'PUF Pannel Sheet (All Sizes)',
          image: 'pufpanel.png' // Replace with your actual filename
        },
        {
          name: 'Cladding Colour Coated Sheets',
          image: 'clad.jpg' // Replace with your actual filename
        },
        {
          name: 'Colour Coated GI Roofing Sheet',
          image: 'colcoat.jpg' // Replace with your actual filename
        },
        {
          name: 'Colour Coated Steel Roofing Sheet',
          image: 'colourcoatedroofingsheet.png' // Replace with your actual filename
        },
        {
          name: 'Industrial Roofing Sheets',
          image: 'industry.jpg' // Replace with your actual filename
        }
      ]
    },
    {
      id: 'stainless-steel',
      title: 'Stainless Steel',
      description: 'High-grade stainless steel products for various applications',
      products: [
        {
          name: 'SS Roofing Sheet',
          image: 'ssroof.jpg' // Replace with your actual filename
        },
        {
          name: 'SS Pipes',
          image: 'sspipe.jpg' // Replace with your actual filename
        },
        {
          name: 'SS Tubes',
          image: 'sstube.jpg' // Replace with your actual filename
        },
        {
          name: 'SS Fittings',
          image: 'ssfit.jpg' // Replace with your actual filename
        },
        {
          name: 'SS Sheet',
          image: 'sssheet.jpg' // Replace with your actual filename
        },
        {
          name: 'SS Square Rods',
          image: 'sssquarerod.jpg' // Replace with your actual filename
        },
        {
          name: 'SS Railing Items',
          image: 'ssrail.jpg' // Replace with your actual filename
        }
      ]
    },
    {
      id: 'purlin',
      title: 'Purlin',
      description: 'Structural steel purlins for roofing applications',
      products: [
        {
          name: 'Z Purlin',
          image: 'z-purlin.jpg' // Replace with your actual filename
        },
        {
          name: 'C Purlin',
          image: 'c-purlin.jpg' // Replace with your actual filename
        }
      ]
    },
    {
      id: 'aluminium-pvc',
      title: 'Aluminium and PVC',
      description: 'Aluminium and PVC products for various applications',
      products: [
        {
          name: 'All Size Aluminium Tubes',
          image: 'altube.jpg' // Replace with your actual filename
        },
        {
          name: 'All Size PVC Pipes',
          image: 'pvcpipes.jpg' // Replace with your actual filename
        }
      ]
    },
    {
      id: 'centering-steel',
      title: 'Centering Steel',
      description: 'Centering steel products for construction applications',
      products: [
        {
          name: 'Centering Steel Sheets',
          image: 'centeringsteelsheet.jpeg' // Replace with your actual filename
        },
        {
          name: 'Centering Steel Plate',
          image: 'centeringplate.jpg' // Replace with your actual filename
        }
      ]
    },
    {
      id: 'crimping-sheets',
      title: 'Crimping Sheets',
      description: 'Crimping sheets and decking solutions',
      products: [
        {
          name: 'Crimping Sheet',
          image: 'crimp.jpeg' // Replace with your actual filename
        },
        {
          name: 'Crimping Sheets (Front Bend)',
          image: 'frontbend.jpg' // Replace with your actual filename
        },
        {
          name: 'Decking Sheet',
          image: 'deck.jpg' // Replace with your actual filename
        }
      ]
    }
  ];

  const categoryColors = [
    'from-blue-500 to-blue-600',
    'from-purple-500 to-purple-600',
    'from-orange-500 to-orange-600',
    'from-green-500 to-green-600',
    'from-red-500 to-red-600',
    'from-indigo-500 to-indigo-600',
    'from-pink-500 to-pink-600',
    'from-teal-500 to-teal-600',
    'from-yellow-500 to-yellow-600',
    'from-gray-500 to-gray-600'
  ];

  return (
    <section id="products" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
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
            Our Product Range
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-steel-900 mb-4 sm:mb-6 font-display">
            Our <span className="text-gradient">Products</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-steel-600 max-w-3xl mx-auto leading-relaxed px-4">
            Comprehensive range of steel products for all your construction and fabrication needs. 
            Quality assured products from authorized dealers.
          </p>
        </motion.div>

        {/* Product Categories */}
        <div className="space-y-8 sm:space-y-12 lg:space-y-16">
          {productCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              className="bg-steel-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Category Header */}
              <div className="flex flex-col space-y-4 mb-6 sm:mb-8">
                <div className="text-center sm:text-left">
                  <h3 className="text-2xl sm:text-3xl font-bold text-steel-900 mb-2">{category.title}</h3>
                  <p className="text-steel-600 text-base sm:text-lg">{category.description}</p>
                </div>
                <motion.button
                  onClick={() => setSelectedCategory(category.id)}
                  className={`w-full sm:w-auto bg-gradient-to-r ${categoryColors[categoryIndex % categoryColors.length]} text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center text-sm sm:text-base`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Eye className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  View All ({category.products.length})
                </motion.button>
              </div>

              {/* Products Grid - Mobile: 2 columns, Tablet: 3 columns, Desktop: 4 columns */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
                {category.products.slice(0, 4).map((product, productIndex) => (
                  <motion.div
                    key={product.name}
                    className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: productIndex * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -3 }}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={getImagePath(product.image)}
                        alt={product.name}
                        className="w-full h-32 sm:h-40 lg:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                        onError={(e) => {
                          // Fallback to placeholder if image doesn't exist
                          e.currentTarget.src = 'https://images.pexels.com/photos/162568/steel-rods-construction-site-metal-162568.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-steel-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-3 sm:p-4">
                      <h4 className="text-sm sm:text-base lg:text-lg font-semibold text-steel-900 text-center group-hover:text-primary-600 transition-colors leading-tight">
                        {product.name}
                      </h4>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal for View All Products */}
        <AnimatePresence>
          {selectedCategory && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Backdrop */}
              <motion.div
                className="absolute inset-0 bg-steel-900/80 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedCategory(null)}
              />

              {/* Modal Content */}
              <motion.div
                className="relative bg-white rounded-2xl sm:rounded-3xl max-w-6xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-hidden"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
              >
                {/* Modal Header */}
                <div className="flex items-center justify-between p-4 sm:p-6 border-b border-steel-200">
                  <div className="flex-1 pr-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-steel-900">
                      {productCategories.find(cat => cat.id === selectedCategory)?.title}
                    </h3>
                    <p className="text-sm sm:text-base text-steel-600 mt-1">
                      {productCategories.find(cat => cat.id === selectedCategory)?.description}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className="w-8 h-8 sm:w-10 sm:h-10 bg-steel-100 hover:bg-steel-200 rounded-full flex items-center justify-center transition-colors flex-shrink-0"
                  >
                    <X className="w-4 h-4 sm:w-5 sm:h-5 text-steel-600" />
                  </button>
                </div>

                {/* Modal Body */}
                <div className="p-4 sm:p-6 overflow-y-auto max-h-[calc(95vh-120px)] sm:max-h-[calc(90vh-120px)]">
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
                    {productCategories
                      .find(cat => cat.id === selectedCategory)
                      ?.products.map((product, index) => (
                        <motion.div
                          key={product.name}
                          className="bg-steel-50 rounded-xl sm:rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 group"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.03, duration: 0.3 }}
                          whileHover={{ y: -2 }}
                        >
                          <div className="relative overflow-hidden">
                            <img
                              src={getImagePath(product.image)}
                              alt={product.name}
                              className="w-full h-28 sm:h-32 lg:h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                              loading="lazy"
                              onError={(e) => {
                                // Fallback to placeholder if image doesn't exist
                                e.currentTarget.src = 'https://images.pexels.com/photos/162568/steel-rods-construction-site-metal-162568.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop';
                              }}
                            />
                          </div>
                          <div className="p-3 sm:p-4">
                            <h4 className="text-xs sm:text-sm lg:text-base font-semibold text-steel-900 text-center group-hover:text-primary-600 transition-colors leading-tight">
                              {product.name}
                            </h4>
                          </div>
                        </motion.div>
                      ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-steel-900 via-steel-800 to-steel-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 steel-pattern opacity-10"></div>
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">Need Custom Solutions?</h3>
              <p className="text-base sm:text-lg lg:text-xl text-steel-200 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
                We provide customized steel solutions for your specific requirements. 
                Get expert consultation and competitive pricing.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <motion.button
                  className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold transition-colors flex items-center justify-center text-sm sm:text-base"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => window.open('tel:+919900170311', '_self')}
                >
                  Contact Our Experts
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </motion.button>
                <motion.button
                  className="bg-white text-steel-900 hover:bg-steel-50 px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold transition-colors flex items-center justify-center text-sm sm:text-base"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => window.open('mailto:sales@snsteeltraders.com?subject=Free Quote Request&body=Hello, I would like to request a free quote for steel products.', '_self')}
                >
                  Get Free Quote
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;