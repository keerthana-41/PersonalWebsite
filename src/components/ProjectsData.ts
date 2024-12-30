import { Project } from '../types/portfolio';

export const projects: Project[] = [
  {
    id: 1,
    title: 'AI Chat Assistant',
    description: 'A ChatGPT-like application with voice functionality, real-time responses, and conversation history. Features include voice commands, text-to-speech, speech-to-text, and context-aware conversations.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'OpenAI API'],
    githubUrl: '#',
  },
  {
    id: 2,
    title: 'Real-time Sign Language Detection',
    description: 'An application that detects and translates sign language gestures in real-time using computer vision and machine learning, making communication more accessible for the deaf community.',
    image: 'https://images.unsplash.com/photo-1599134842279-fe807d23316e?w=800&h=600&fit=crop',
    technologies: ['python', 'Django', 'javascript'],
    githubUrl: '#',
  },
  {
    id: 3,
    title: 'Project Demo Website',
    description: 'A comprehensive platform showcasing various project demonstrations with interactive features, code snippets, and live previews.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    technologies: ['HTML','CSS','Javascript','PHP','MySQL'],
    githubUrl: '#',
  },
  {
    id: 4,
    title: 'Customer Management System',
    description: 'A full-featured customer relationship management system with user authentication, role-based access control, and real-time analytics dashboard.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    githubUrl: '#',
  },
];