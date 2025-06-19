import React from 'react';
import { Code, Smartphone, Database, BarChart3, Globe, Zap } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Full-Stack Web Development',
      description: 'Complete web application development using MERN stack (MongoDB, Express.js, React, Node.js) with modern best practices and responsive design.',
      features: ['React Applications', 'Node.js Backend', 'RESTful APIs', 'Database Design'],
      color: 'from-blue-500 to-blue-600'
    },
    /*{ 
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native Android application development using Java and Android Studio with clean UI/UX design and seamless user experience.',
      features: ['Android Apps', 'Java Development', 'XML Layouts', 'API Integration'],
      color: 'from-green-500 to-green-600'
    }, */
    {
      icon: Database,
      title: 'Database Solutions',
      description: 'Database design and optimization for both SQL and NoSQL databases, ensuring efficient data storage and retrieval.',
      features: ['MongoDB', 'MySQL', 'Database Design', 'Query Optimization'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: BarChart3,
      title: 'Data Analytics',
      description: 'Data visualization and analytics solutions using modern tools and libraries to transform raw data into actionable insights.',
      features: ['Chart.js', 'Power BI', 'Data Visualization', 'Excel Analytics'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Globe,
      title: 'Frontend Development',
      description: 'Modern, responsive frontend development with focus on user experience, performance, and cross-browser compatibility.',
      features: ['React.js', 'Tailwind CSS', 'Responsive Design', 'Performance Optimization'],
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: Zap,
      title: 'API Development',
      description: 'RESTful API development and integration with secure authentication, data validation, and comprehensive documentation.',
      features: ['REST APIs', 'JWT Authentication', 'API Documentation', 'Third-party Integration'],
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  return (
    <div className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                My Services
              </span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              I offer comprehensive software development services with expertise in modern technologies. 
              From full-stack web applications to mobile apps and data analytics solutions.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <AnimatedSection key={service.title} delay={index * 100}>
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 group hover:transform hover:scale-105">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Technical Skills Section */}
        <AnimatedSection>
          <div className="mt-20 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Technical Skills & Tools
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Frontend</h4>
                <div className="space-y-2">
                  {['React', 'JavaScript', 'HTML/CSS', 'Tailwind CSS'].map((skill) => (
                    <div key={skill} className="flex items-center justify-between">
                      <span className="text-gray-600">{skill}</span>
                      <div className="w-24 h-2 bg-gray-200 rounded-full">
                        <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full w-4/5"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Backend</h4>
                <div className="space-y-2">
                  {['Node.js', 'Express.js', 'PHP', 'REST APIs'].map((skill) => (
                    <div key={skill} className="flex items-center justify-between">
                      <span className="text-gray-600">{skill}</span>
                      <div className="w-24 h-2 bg-gray-200 rounded-full">
                        <div className="h-full bg-gradient-to-r from-green-500 to-teal-500 rounded-full w-4/5"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Database & Tools</h4>
                <div className="space-y-2">
                  {['MongoDB', 'MySQL', 'Git/GitHub', 'Postman'].map((skill) => (
                    <div key={skill} className="flex items-center justify-between">
                      <span className="text-gray-600">{skill}</span>
                      <div className="w-24 h-2 bg-gray-200 rounded-full">
                        <div className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full w-4/5"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Call to Action */}
        <AnimatedSection className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-600 mb-6">
              Let's discuss your requirements and create something amazing together.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Get Started
            </a>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Services;