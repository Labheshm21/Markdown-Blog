// components/AboutHero.jsx
"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';

const AboutHero = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const showcaseProjects = [
    {
      id: 1,
      title: "Project 1",
      image: "/placeholder1.jpg",
      description: "Description of project 1"
    },
    {
      id: 2,
      title: "Project 2",
      image: "/placeholder2.jpg",
      description: "Description of project 2"
    },
    {
      id: 3,
      title: "Project 3",
      image: "/placeholder3.jpg",
      description: "Description of project 3"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.section 
        className="container mx-auto px-4 py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1 
          className="text-6xl font-bold text-gray-800 mb-6"
          {...fadeInUp}
        >
          About Our Blog
        </motion.h1>
        
        <motion.p 
          className="text-xl text-gray-600 max-w-2xl mb-12"
          {...fadeInUp}
          transition={{ delay: 0.2 }}
        >
          Welcome to our programming blog, where we share insights, tutorials, and the latest 
          trends in software development. Our mission is to make programming knowledge 
          accessible to everyone.
        </motion.p>

        <motion.div 
          className="flex gap-4"
          {...fadeInUp}
          transition={{ delay: 0.4 }}
        >
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
            Learn More
          </button>
          <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition">
            Contact Us
          </button>
        </motion.div>
      </motion.section>

      {/* Showcase Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <motion.h2 
  className="text-4xl font-bold text-center mb-16 text-black"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
>
  Featured Projects
</motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {showcaseProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-gray-50 rounded-xl overflow-hidden shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-6">
  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
    {project.title}
  </h3>
  <p className="text-gray-600 dark:text-gray-400">{project.description}</p>
</div>

              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section with Animation */}
      <motion.section 
        className="bg-blue-600 text-white py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <h3 className="text-4xl font-bold mb-2">500+</h3>
              <p>Articles Published</p>
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            >
              <h3 className="text-4xl font-bold mb-2">50K+</h3>
              <p>Monthly Readers</p>
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
            >
              <h3 className="text-4xl font-bold mb-2">100+</h3>
              <p>Contributing Writers</p>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutHero;