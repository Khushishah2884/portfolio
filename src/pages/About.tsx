import React from 'react';
import { GraduationCap, Briefcase, Award, MapPin } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const About = () => {
  const experiences = [
    {
      title: 'MERN Stack Intern',
      company: 'ZIDIO Development',
      period: 'June 2025 (1 Month)',
      description: 'Built a web-based Excel Analytics Platform inspired by Power BI using the MERN stack. Implemented dynamic dashboards with Chart.js and SheetJS for data visualization.',
      achievements: [
        'Developed full-stack architecture with RESTful APIs',
        'Created real-time data preview and filtering systems',
        'Built user-centric data visualization tools'
      ]
    },
    {
      title: 'PHP Developer Intern',
      company: 'SourceCube Technologies Pvt. Ltd',
      period: 'June 2024 (1 Month)',
      description: 'Worked on PHP web applications and database management, gaining practical backend development experience.',
      achievements: [
        'Wrote and maintained PHP scripts for web applications',
        'Optimized MySQL queries for better performance',
        'Collaborated on integrating PHP modules into larger projects'
      ]
    },
    {
      title: 'Data Analytics Intern',
      company: 'SmartSense Consulting Solution Pvt. Ltd',
      period: 'June 2023 (1 Month)',
      description: 'Engaged in the entire data project cycle, from gathering and refining data to deploying models.',
      achievements: [
        'Completed full data science workflow',
        'Gained insights into data collection and cleaning',
        'Contributed to data analysis and model deployment'
      ]
    }
  ];

  const skills = [
    { category: 'Frontend', items: ['React', 'HTML/CSS', 'JavaScript', 'Tailwind CSS'] },
    { category: 'Backend', items: ['Node.js', 'Express.js', 'PHP', 'RESTful APIs'] },
    { category: 'Database', items: ['MongoDB', 'MySQL', 'Database Design'] },
    { category: 'Mobile', items: ['Android Development', 'Java', 'XML'] },
    { category: 'Tools', items: ['Git/GitHub', 'Postman', 'VS Code', 'Power BI'] },
    { category: 'Languages', items: ['C/C++', 'Java', 'JavaScript', 'PHP'] }
  ];

  return (
    <div className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                About Me
              </span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A passionate developer with a strong foundation in modern web technologies and a drive for creating innovative solutions.
            </p>
          </div>
        </AnimatedSection>

        {/* Personal Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <AnimatedSection>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Who I Am</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Currently studying Information Technology at Birla Vishwakarma Mahavidyalaya, I'm a passionate MERN stack developer with a strong foundation in building full-stack web applications. 
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                I've developed a movie streaming platform with features like JWT authentication, subscriptions, and dynamic filtering. My experience spans across PHP development and Data Analytics, giving me a well-rounded perspective on both backend and data handling.
              </p>
              <p className="text-gray-600 leading-relaxed">
                I'm constantly learning and exploring new technologies to stay current with industry trends and best practices.
              </p>
              
              <div className="mt-6 flex items-center space-x-4">
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-5 h-5 mr-2 text-blue-600" />
                  <span>India</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <GraduationCap className="w-5 h-5 mr-2 text-blue-600" />
                  <span>Information Technology</span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Quick Facts</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Experience</span>
                  <span className="font-semibold text-blue-600">3+ Internships</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Projects Completed</span>
                  <span className="font-semibold text-blue-600">4+ Projects</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Technologies</span>
                  <span className="font-semibold text-blue-600">MERN Stack</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Languages Spoken</span>
                  <span className="font-semibold text-blue-600">English, Hindi, Gujarati</span>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Core Competencies</h3>
                <div className="grid grid-cols-2 gap-3">
                  {['Full-Stack Development', 'Problem Solving', 'Team Collaboration', 'Continuous Learning'].map((competency) => (
                    <div key={competency} className="bg-white rounded-lg p-3 text-center text-sm font-medium text-gray-700">
                      {competency}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Experience Section */}
        <AnimatedSection>
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Professional Experience
            </h2>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-800">{exp.title}</h3>
                        <span className="text-blue-600 font-medium">{exp.period}</span>
                      </div>
                      <p className="text-lg text-blue-600 mb-3">{exp.company}</p>
                      <p className="text-gray-600 mb-4">{exp.description}</p>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start text-gray-600">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Skills Section */}
        <AnimatedSection>
          <div>
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Skills & Technologies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skillGroup, index) => (
                <div key={skillGroup.category} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-lg font-bold text-gray-800 mb-4 text-center">
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-blue-50 text-blue-600 text-sm font-medium rounded-full hover:bg-blue-100 transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default About;