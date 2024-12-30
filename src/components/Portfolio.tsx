// // import React,  { RefObject , useRef } from 'react';
// import { motion, useInView } from 'framer-motion';
// import React, { ReactNode, RefObject,useRef } from 'react';
// import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
// import { Button } from './ui/button';
// import profile from '../assets/profile.jpg';
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "./ui/card";
// import { Badge } from "./ui/badge";
// import { FaReact, FaNodeJs, FaPython, FaJava, FaHtml5, FaCss3, FaJs, FaDatabase, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
// import { SiMongodb, SiMysql, SiTypescript, SiDocker } from 'react-icons/si';
// interface SectionWrapperProps {
//   children: ReactNode;
//   refProp: RefObject<HTMLElement>;
// }

// const projects = [
//   {
//     id: 1,
//     title: 'E-commerce Platform',
//     description: 'A full-stack e-commerce solution with React and Node.js',
//     image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
//     technologies: ['React', 'Node.js', 'MongoDB', 'Redux'],
//     demoUrl: '#',
//     githubUrl: '#',
//   },
//   {
//     id: 2,
//     title: 'Task Management App',
//     description: 'A React-based task management application with drag-and-drop functionality',
//     image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=800&h=600&fit=crop',
//     technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind'],
//     demoUrl: '#',
//     githubUrl: '#',
//   },
//   {
//     id: 3,
//     title: 'Social Media Dashboard',
//     description: 'A responsive dashboard for social media analytics using React and D3.js',
//     image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
//     technologies: ['React', 'D3.js', 'Node.js', 'Express'],
//     demoUrl: '#',
//     githubUrl: '#',
//   },
// ];

// const skills = [
//   { name: 'React', icon: FaReact, level: 90 },
//   { name: 'Node.js', icon: FaNodeJs, level: 85 },
//   { name: 'Python', icon: FaPython, level: 80 },
//   { name: 'TypeScript', icon: SiTypescript, level: 85 },
//   { name: 'HTML5', icon: FaHtml5, level: 95 },
//   { name: 'CSS3', icon: FaCss3, level: 90 },
//   { name: 'JavaScript', icon: FaJs, level: 90 },
//   { name: 'MongoDB', icon: SiMongodb, level: 80 },
//   { name: 'MySQL', icon: SiMysql, level: 85 },
//   { name: 'Docker', icon: SiDocker, level: 75 },
// ];

// const services = [
//   {
//     title: 'Full Stack Development',
//     description: 'End-to-end web application development using modern technologies.',
//     icon: FaReact,
//   },
//   {
//     title: 'Frontend Development',
//     description: 'Creating responsive and interactive user interfaces with React.',
//     icon: FaJs,
//   },
//   {
//     title: 'Backend Development',
//     description: 'Building robust server-side applications and APIs.',
//     icon: FaNodeJs,
//   },
//   {
//     title: 'Database Design',
//     description: 'Designing and implementing efficient database solutions.',
//     icon: FaDatabase,
//   },
// ];

// const Portfolio = () => {
//   const aboutRef = useRef(null);
//   const skillsRef = useRef(null);
//   const servicesRef = useRef(null);
//   const projectsRef = useRef(null);

//   // const scrollToSection = (ref) => {
//   //   ref.current.scrollIntoView({ behavior: 'smooth' });
//   // };
//   const scrollToSection = (ref: RefObject<HTMLElement>) => {
//     if (ref && ref.current) {
//       ref.current.scrollIntoView({ behavior: 'smooth' });
//     }
//   };
//   const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, refProp }) => {
//     const isInView = useInView(refProp, { once: true, amount: 0.2 });
  
//     return (
//       <motion.section
//         ref={refProp}
//         initial={{ opacity: 0, y: 50 }}
//         animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//         transition={{ duration: 0.8, ease: 'easeOut' }}
//         className="flex flex-col items-center justify-center w-full p-4 mb-16"
//       >
//         {children}
//       </motion.section>
//     );
//   };

//   const container = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1
//       }
//     }
//   };

//   const item = {
//     hidden: { opacity: 0, y: 20 },
//     show: { opacity: 1, y: 0 }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200">
//       <motion.header 
//         initial={{ y: -100 }}
//         animate={{ y: 0 }}
//         transition={{ type: "spring", stiffness: 100 }}
//         className="flex items-center justify-between w-full p-4 bg-white/80 backdrop-blur-sm shadow-md sticky top-0 z-10"
//       >
//         <Avatar>
//           <AvatarImage src={profile} alt="Profile" />
//           <AvatarFallback>CN</AvatarFallback>
//         </Avatar>
//         <nav className="flex items-center space-x-4">
//           <Button variant="link" className="text-indigo-600 hover:text-indigo-800" onClick={() => scrollToSection(aboutRef)}>About</Button>
//           <Button variant="link" className="text-indigo-600 hover:text-indigo-800" onClick={() => scrollToSection(skillsRef)}>Skills</Button>
//           <Button variant="link" className="text-indigo-600 hover:text-indigo-800" onClick={() => scrollToSection(servicesRef)}>Services</Button>
//           <Button variant="link" className="text-indigo-600 hover:text-indigo-800" onClick={() => scrollToSection(projectsRef)}>Projects</Button>
//         </nav>
//       </motion.header>
      
//       <main className="flex flex-col items-center justify-center w-full p-4 max-w-6xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.5 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <h1 className="text-5xl font-bold mb-4 text-indigo-800">Vayalapalli Keerthana</h1>
//           <p className="text-xl text-indigo-600">Full Stack Developer</p>
//         </motion.div>
        
//         <SectionWrapper refProp={aboutRef}>
//           <h2 className="text-3xl font-bold mb-8 text-indigo-700">About Me</h2>
//           <motion.div 
//             className="grid md:grid-cols-2 gap-8 items-center"
//             variants={container}
//             initial="hidden"
//             animate="show"
//           >
//             <motion.div variants={item} className="text-xl text-gray-700">
//               <p className="mb-4">
//                 I'm a passionate full-stack developer with over 5 years of experience in building web applications. 
//                 I specialize in React, Node.js, and modern web technologies.
//               </p>
//               <p>
//                 My goal is to create beautiful, efficient, and user-friendly applications that solve real-world problems.
//               </p>
//             </motion.div>
//             <motion.div variants={item} className="flex justify-center">
//               <img 
//                 src={profile}
//                 alt="Profile"
//                 className="rounded-full w-64 h-64 object-cover shadow-lg"
//               />
//             </motion.div>
//           </motion.div>
//         </SectionWrapper>
        
//         <SectionWrapper refProp={skillsRef}>
//           <h2 className="text-3xl font-bold mb-8 text-indigo-700">Skills</h2>
//           <motion.div 
//             className="grid grid-cols-2 md:grid-cols-5 gap-8"
//             variants={container}
//             initial="hidden"
//             animate="show"
//           >
//             {skills.map((skill, index) => (
//               <motion.div 
//                 key={index}
//                 variants={item}
//                 whileHover={{ scale: 1.1, rotate: 5 }}
//                 className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
//               >
//                 <skill.icon className="text-4xl text-indigo-600 mb-2" />
//                 <p className="text-lg font-semibold text-gray-800">{skill.name}</p>
//                 <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
//                   <div 
//                     className="bg-indigo-600 h-2.5 rounded-full transition-all duration-1000"
//                     style={{ width: `${skill.level}%` }}
//                   />
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </SectionWrapper>
        
//         <SectionWrapper refProp={servicesRef}>
//           <h2 className="text-3xl font-bold mb-8 text-indigo-700">Services</h2>
//           <motion.div 
//             className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full"
//             variants={container}
//             initial="hidden"
//             animate="show"
//           >
//             {services.map((service, index) => (
//               <motion.div 
//                 key={index}
//                 variants={item}
//                 whileHover={{ scale: 1.05 }}
//                 className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
//               >
//                 <service.icon className="text-4xl text-indigo-600 mb-4" />
//                 <h3 className="text-xl font-bold text-indigo-600 mb-2">{service.title}</h3>
//                 <p className="text-gray-700">{service.description}</p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </SectionWrapper>
        
//         <SectionWrapper refProp={projectsRef}>
//           <h2 className="text-3xl font-bold mb-8 text-indigo-700">Projects</h2>
//           <motion.div 
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
//             variants={container}
//             initial="hidden"
//             animate="show"
//           >
//             {projects.map((project, index) => (
//               <motion.div
//                 key={project.id}
//                 variants={item}
//                 whileHover={{ scale: 1.05, y: -10 }}
//               >
//                 <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
//                   <CardHeader>
//                     <CardTitle className="text-xl text-indigo-700">{project.title}</CardTitle>
//                     <CardDescription>{project.description}</CardDescription>
//                   </CardHeader>
//                   <CardContent className="flex-grow">
//                     <img 
//                       src={project.image} 
//                       alt={project.title} 
//                       className="rounded-lg w-full h-48 object-cover mb-4" 
//                     />
//                     <div className="flex flex-wrap gap-2">
//                       {project.technologies.map((tech, i) => (
//                         <Badge key={i} variant="secondary">{tech}</Badge>
//                       ))}
//                     </div>
//                   </CardContent>
//                   <CardFooter className="flex gap-4">
//                     <Button
//                       variant="default"
//                       className="flex-1 bg-indigo-500 text-white hover:bg-indigo-600"
//                       onClick={() => window.open(project.demoUrl, '_blank')}
//                     >
//                       Live Demo
//                     </Button>
//                     <Button
//                       variant="outline"
//                       className="flex-1"
//                       onClick={() => window.open(project.githubUrl, '_blank')}
//                     >
//                       Source Code
//                     </Button>
//                   </CardFooter>
//                 </Card>
//               </motion.div>
//             ))}
//           </motion.div>
//         </SectionWrapper>
//       </main>
      
//       <motion.footer 
//         initial={{ y: 100 }}
//         animate={{ y: 0 }}
//         transition={{ type: "spring", stiffness: 100 }}
//         className="flex flex-col md:flex-row items-center justify-between w-full p-8 bg-white shadow-md mt-16 gap-4"
//       >
//         <p className="text-gray-600">&copy; 2024 John Doe Portfolio</p>
//         <nav className="flex items-center space-x-4">
//           <Button variant="ghost" className="text-indigo-600 hover:text-indigo-800" onClick={() => window.open('https://github.com', '_blank')}>
//             <FaGithub className="mr-2" /> GitHub
//           </Button>
//           <Button variant="ghost" className="text-indigo-600 hover:text-indigo-800" onClick={() => window.open('https://linkedin.com', '_blank')}>
//             <FaLinkedin className="mr-2" /> LinkedIn
//           </Button>
//           <Button variant="ghost" className="text-indigo-600 hover:text-indigo-800" onClick={() => window.open('https://twitter.com', '_blank')}>
//             <FaTwitter className="mr-2" /> Twitter
//           </Button>
//         </nav>
//       </motion.footer>
//     </div>
//   );
// };

// export default Portfolio;



import React, { RefObject, useRef,ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from './ui/button';
import { FaReact, FaEnvelope,FaNodeJs, FaPython, FaJava, FaHtml5, FaCss3, FaJs, FaDatabase, FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { SiMongodb, SiMysql, SiTypescript, SiDocker } from 'react-icons/si';
import {ProjectCard} from './ProjectCard';
import { projects } from './ProjectsData';
import profile from '../assets/profile.jpg';

interface SectionWrapperProps {
  children: ReactNode;
  refProp: RefObject<HTMLElement>;
}

const skills = [
  { name: 'React', icon: FaReact, level: 80 },
  { name: 'Node.js', icon: FaNodeJs, level: 85 },
  { name: 'Python', icon: FaPython, level: 80 },
  { name: 'Java', icon: SiTypescript, level: 85 },
  { name: 'HTML5', icon: FaHtml5, level: 85 },
  { name: 'CSS3', icon: FaCss3, level: 90 },
  { name: 'JavaScript', icon: FaJs, level: 90 },
  { name: 'MongoDB', icon: SiMongodb, level: 80 },
  { name: 'MySQL', icon: SiMysql, level: 85 },
];

const services = [
  {
    title: 'Full Stack Development',
    description: 'End-to-end web application development using modern technologies.',
    icon: FaReact,
  },
  {
    title: 'Frontend Development',
    description: 'Creating responsive and interactive user interfaces with React.',
    icon: FaJs,
  },
  {
    title: 'Backend Development',
    description: 'Building robust server-side applications and APIs.',
    icon: FaNodeJs,
  },
  {
    title: 'Database Design',
    description: 'Designing and implementing efficient database solutions.',
    icon: FaDatabase,
  },
];

const Portfolio = () => {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const servicesRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null); 

  const scrollToSection = (ref: RefObject<HTMLElement>) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, refProp }) => {
    const isInView = useInView(refProp, { once: true, amount: 0.2 });
  
    return (
      <motion.section
        ref={refProp}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="flex flex-col items-center justify-center w-full p-4 mb-16"
      >
        {children}
      </motion.section>
    );
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200">
      {/* Header */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="flex items-center justify-between w-full p-4 bg-white/80 backdrop-blur-sm shadow-md sticky top-0 z-10"
      >
        <Avatar>
          <AvatarImage src={profile} alt="Profile" />
          <AvatarFallback>VK</AvatarFallback>
        </Avatar>
        <nav className="flex items-center space-x-4">
          <Button variant="link" className="text-indigo-600 hover:text-indigo-800" onClick={() => scrollToSection(aboutRef)}>About</Button>
          <Button variant="link" className="text-indigo-600 hover:text-indigo-800" onClick={() => scrollToSection(skillsRef)}>Skills</Button>
          <Button variant="link" className="text-indigo-600 hover:text-indigo-800" onClick={() => scrollToSection(servicesRef)}>Services</Button>
          <Button variant="link" className="text-indigo-600 hover:text-indigo-800" onClick={() => scrollToSection(projectsRef)}>Projects</Button>
          <Button 
  variant="link" 
  className="text-indigo-600 hover:text-indigo-800" 
  onClick={() => scrollToSection(contactRef)}>
  Contact
</Button>
        </nav>
      </motion.header>
      
      <main className="flex flex-col items-center justify-center w-full p-4 max-w-6xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4 text-indigo-800">Vayalapalli Keerthana</h1>
          <p className="text-xl text-indigo-600">Full Stack Developer</p>
        </motion.div>
        
        {/* About Section */}
        <SectionWrapper refProp={aboutRef}>
          <h2 className="text-3xl font-bold mb-8 text-indigo-700">About Me</h2>
          <motion.div 
            className="grid md:grid-cols-2 gap-8 items-center"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={item} className="text-xl text-gray-700">
              <p className="mb-4">
                I'm a passionate full-stack developer with over 6 months of experience in building web applications. 
                I specialize in React, Node.js, Express.js and modern web technologies.
              </p>
              <p>
                My goal is to create beautiful, efficient, and user-friendly applications that solve real-world problems.
              </p>
            </motion.div>
            <motion.div variants={item} className="flex justify-center">
              <img 
                src={profile}
                alt="Profile"
                className="rounded-full w-64 h-64 object-cover shadow-lg"
              />
            </motion.div>
          </motion.div>
        </SectionWrapper>
        
        {/* Skills Section */}
        <SectionWrapper refProp={skillsRef}>
          <h2 className="text-3xl font-bold mb-8 text-indigo-700">Skills</h2>
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-5 gap-8"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {skills.map((skill, index) => (
              <motion.div 
                key={index}
                variants={item}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <skill.icon className="text-4xl text-indigo-600 mb-2" />
                <p className="text-lg font-semibold text-gray-800">{skill.name}</p>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                  <div 
                    className="bg-indigo-600 h-2.5 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </SectionWrapper>
        
        {/* Services Section */}
        <SectionWrapper refProp={servicesRef}>
          <h2 className="text-3xl font-bold mb-8 text-indigo-700">Services</h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {services.map((service, index) => (
              <motion.div 
                key={index}
                variants={item}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <service.icon className="text-4xl text-indigo-600 mb-4" />
                <h3 className="text-xl font-bold text-indigo-600 mb-2">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </SectionWrapper>
        
        {/* Projects Section */}
        <SectionWrapper refProp={projectsRef}>
          <h2 className="text-3xl font-bold mb-8 text-indigo-700">Projects</h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} variants={item} />
            ))}
          </motion.div>
        </SectionWrapper>
        <SectionWrapper refProp={contactRef}>
    <h2 className="text-3xl font-bold mb-8 text-indigo-700">Contact Me</h2>
    <motion.div 
      className="w-full max-w-2xl mx-auto"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.div 
        variants={item}
        className="bg-white p-8 rounded-lg shadow-md"
      >
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-indigo-600 mb-2">Let's Connect!</h3>
          <p className="text-gray-600">Feel free to reach out for collaborations or just a friendly chat.</p>
        </div>
        
        <div className="space-y-4">
        <div className="flex items-center space-x-3">
  <FaEnvelope className="text-indigo-600 w-5 h-5" />
  <a href="mailto:vayalapallik@gmail.com" className="text-gray-700 hover:text-indigo-600 transition-colors">
    vayalapallik@gmail.com
  </a>
</div>
          
          <div className="flex items-center space-x-3">
            <FaLinkedin className="text-indigo-600 w-5 h-5" />
            <a 
              href="https://www.linkedin.com/in/vayalapalli-keerthana/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-indigo-600 transition-colors"
            >
              LinkedIn Profile
            </a>
          </div>
          
          <div className="flex items-center space-x-3">
            <FaGithub className="text-indigo-600 w-5 h-5" />
            <a 
              href="https://github.com/keerthana-41" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-indigo-600 transition-colors"
            >
              GitHub Profile
            </a>
          </div>
          
          <div className="flex items-center space-x-3">
            <FaYoutube className="text-indigo-600 w-5 h-5" />
            <a 
              href="https://www.youtube.com/@aapkecoder" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-indigo-600 transition-colors"
            >
              YouTube Channel
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  </SectionWrapper>
      </main>
      
      
      {/* Footer */}
      <motion.footer 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="flex flex-col md:flex-row items-center justify-between w-full p-8 bg-white shadow-md mt-16 gap-4"
      >
        <p className="text-gray-600">&copy; 2024 Vayalapalli Keerthana</p>
        <nav className="flex items-center space-x-4">
          <Button variant="ghost" className="text-indigo-600 hover:text-indigo-800" onClick={() => window.open('https://github.com/keerthana-41', '_blank')}>
            <FaGithub className="mr-2" /> GitHub
          </Button>
          <Button variant="ghost" className="text-indigo-600 hover:text-indigo-800" onClick={() => window.open('https://www.linkedin.com/in/vayalapalli-keerthana/', '_blank')}>
            <FaLinkedin className="mr-2" /> LinkedIn
          </Button>
          <Button variant="ghost" className="text-indigo-600 hover:text-indigo-800" onClick={() => window.open('https://www.youtube.com/@aapkecoder', '_blank')}>
            <FaYoutube className="mr-2" /> Youtube
          </Button>
        </nav>
      </motion.footer>
    </div>
  );
};

export default Portfolio;