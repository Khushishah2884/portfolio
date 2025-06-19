import React from 'react';
import { ExternalLink, Github, Play } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'MovieFlix - MERN Movie Streaming Platform',
      description: 'A complete movie streaming web application built with the MERN stack featuring real-time movie browsing, user authentication, subscription management, and dynamic filtering. Replicates core Netflix-like functionality.',
      image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT Auth'],
      liveUrl: 'https://lnkd.in/dFg-Gc8A',
      category: 'Full Stack'
    },
    {
      id: 2,
      title: 'Excel Analytics Platform',
      description: 'Web-based Excel Analytics Platform inspired by Power BI using MERN stack. Features dynamic dashboards with Chart.js and SheetJS for data visualization, real-time data preview, filtering, and chart generation.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'Chart.js', 'SheetJS', 'MongoDB'],
      category: 'Data Analytics'
    },
    {
      id: 3,
      title: 'Event Management Website',
      description: 'Professional event website developed for a crystal company using HTML, CSS, and JavaScript. Features seamless event organization tools and responsive design for optimal user experience.',
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      liveUrl: 'https://khushishah2884.github.io/project/event.html',
      category: 'Frontend'
    },
    {
      id: 4,
      title: 'Android Movie Streaming App',
      description: 'Feature-rich movie streaming application built with Android Studio and Java. Includes user authentication, video playback, search and filter functionality, and clean responsive UI with API integration.',
      image: 'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Java', 'Android Studio', 'XML', 'API Integration'],
      category: 'Mobile Development'
    }
  ];

  return (
    <div className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                My Projects
              </span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore my portfolio of web applications, mobile apps, and data analytics projects. 
              Each project demonstrates my skills in modern technologies and problem-solving abilities.
            </p>
          </div>
        </AnimatedSection>
          
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection key={project.id} delay={index * 100}>
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-50 text-blue-600 text-sm font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    )}
                    
                    <button className="inline-flex items-center px-4 py-2 border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-600 hover:text-white transform hover:scale-105 transition-all duration-300">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </button>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Want to See More?
            </h3>
            <p className="text-gray-600 mb-6">
              Check out my GitHub profile for more projects and contributions to open source.
            </p>
            <a
              href="https://github.com/Khushishah2884"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <Github className="w-5 h-5 mr-2" />
              Visit GitHub
            </a>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Projects;