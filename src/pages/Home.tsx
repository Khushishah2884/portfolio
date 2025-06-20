import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Github, Linkedin, Mail, Phone } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import myphoto from '../assets/myphoto.jpg';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-16 pb-12 px-4 sm:px-6 lg:px-8 relative">
        {/* Responsive photo: show above content on mobile, right on md+ */}
        <div className="md:hidden flex justify-center mb-8">
          <img
            src={myphoto}
            alt="Khushi Shah"
            className="w-40 h-52 object-cover rounded-[2rem_4rem_2rem_4rem] shadow-lg border-4 border-white"
            style={{
              maxWidth: '90vw',
              maxHeight: '60vw',
              minWidth: 120,
              minHeight: 150,
            }}
          />
        </div>
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 flex items-center justify-start">
            <AnimatedSection className="w-full text-left flex flex-col items-start justify-center">
              <div className="mb-8">
                <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-8 relative">
                  <div className="w-full h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl md:text-4xl font-bold shadow-xl">
                    KS
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-20 animate-ping"></div>
                </div>
                
                <h1 className="text-4xl md:text-7xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                    Khushi Shah
                  </span>
                </h1>
                
                <h2 className="text-xl md:text-3xl font-semibold text-gray-700 mb-6">
                  Software Developer
                </h2>
                
                <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
                  Passionate MERN stack developer with expertise in building full-stack web applications. 
                  Specialized in React, Node.js, and modern web technologies with a strong foundation in 
                  creating scalable, user-centric solutions.
                </p>
                
                {/* Move the buttons to the left */}
                <div className="flex flex-wrap gap-4 mb-8 md:mb-12 justify-start">
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-6 md:px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    Get In Touch
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  
                  <Link
                    to="/projects"
                    className="inline-flex items-center px-6 md:px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transform hover:scale-105 transition-all duration-300"
                  >
                    View Projects
                  </Link>
                </div>
                
                {/* Contact Info */}
                <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6">
                  <a
                    href="mailto:khushishah0804@gmail.com"
                    className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-300"
                  >
                    <Mail className="h-5 w-5" />
                    <span className="text-xs md:text-base">khushis2328@gmail.com</span>
                  </a>
                  
                  <a
                    href="tel:8799265744"
                    className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-300"
                  >
                    <Phone className="h-5 w-5" />
                    <span className="text-xs md:text-base">8799265744</span>
                  </a>
                  
                  <a
                    href="https://www.linkedin.com/in/khushi-shah-679071252/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-300"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="text-xs md:text-base">LinkedIn</span>
                  </a>
                  
                  <a
                    href="https://github.com/Khushishah2884"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-300"
                  >
                    <Github className="h-5 w-5" />
                    <span className="text-xs md:text-base">GitHub</span>
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
          {/* Spacer for right image on md+ screens */}
          <div className="hidden md:flex w-1/2 items-center justify-center">
            <div
              style={{
                width: '95%',
                height: '90%',
                minHeight: 380,
                minWidth: 280,
                borderTopLeftRadius: '4rem 8rem',
                borderBottomLeftRadius: '4rem 8rem',
                borderTopRightRadius: '2rem 4rem',
                borderBottomRightRadius: '2rem 4rem',
                overflow: 'hidden',
                boxShadow: '0 8px 32px 0 rgba(60,60,120,0.18), 0 1.5px 8px 0 rgba(80,80,180,0.10)',
                border: '6px solid #fff',
                background: `url(${myphoto}) center right/cover no-repeat`,
              }}
            />
          </div>
        </div>
      </section>

      {/* Featured Skills */}
      <section className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Technical Expertise
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {['React', 'Node.js', 'Express.js', 'MongoDB', 'MySQL', 'PHP'].map((skill) => (
                <div
                  key={skill}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{skill.charAt(0)}</span>
                  </div>
                  <p className="font-semibold text-gray-800">{skill}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h3 className="text-3xl font-bold mb-6 text-gray-800">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Let's collaborate on your next project and bring your ideas to life with modern web technologies.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Start a Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Home;