import { ProjectData } from '../types';

const projects: ProjectData[] = [
  {
    id: 1,
    title: 'AI Image Recognition App',
    description: 'A mobile application that uses deep learning models to identify objects in images. Built with React Native and TensorFlow.js.',
    image: 'https://images.pexels.com/photos/6105396/pexels-photo-6105396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['React Native', 'TensorFlow.js', 'Python', 'Flask'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com'
  },
  {
    id: 2,
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce platform with product catalog, shopping cart, and payment integration. Features user authentication and order tracking.',
    image: 'https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com'
  },
  {
    id: 3,
    title: 'Smart Home Dashboard',
    description: 'An IoT dashboard for monitoring and controlling smart home devices. Supports real-time data visualization and device automation.',
    image: 'https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['Vue.js', 'Firebase', 'MQTT', 'Chart.js'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com'
  },
  {
    id: 4,
    title: 'Sentiment Analysis Tool',
    description: 'A web application that analyzes sentiment in text using NLP techniques. Processes data from social media, reviews, and user feedback.',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['Python', 'NLTK', 'spaCy', 'Flask', 'React'],
    githubUrl: 'https://github.com',
  },
  {
    id: 5,
    title: 'Fitness Tracking App',
    description: 'A mobile app for tracking workouts, nutrition, and health metrics. Features include customizable workout plans and progress analytics.',
    image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['Flutter', 'Firebase', 'RESTful API', 'SQLite'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com'
  }
];

export default projects;