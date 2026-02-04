import quizhubVideo from '../assets/video/quizhub.mp4';
import papertradingVideo from '../assets/video/papertrading.mp4';
import nepmartVideo from '../assets/video/nepmart.mp4';
import votingVideo from '../assets/video/voting.mp4';

export const projects = [
    {
        id: 1,
        title: 'Online Voting System',
        description: 'A secure and simple platform for digital elections, built to understand core web flows.',
        story: 'I built this project to help my friends and inspired by the upcoming elections. I wanted to see if I could digitize the basic voting process in a secure way, making it easier and more reliable for users.',
        tech: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL'],
        category: 'fullstack',
        video: votingVideo,
        github: 'https://github.com/sijanKc/Online_voting_system',
        demo: 'https://online-voting-system-flame-delta.vercel.app/',
        lesson: 'This project taught me how to manage user sessions and protect data integrity using PHP. Ensuring that no one could vote twice was more challenging than I expected, but it strengthened my understanding of secure web development.'
    },
    {
        id: 2,
        title: 'Nepmart',
        description: 'An e-commerce experiment focused on showcasing authentic Nepali products with a clean UI.',
        story: 'I wanted to improve my skills by building a real project, but I wasn’t sure what to make. One day, I got inspired by Daraz and decided to create a platform to showcase local Nepali products, combining a modern design with the traditional Nepali vibe.',
        tech: ['React.js', 'Vite', 'Framer Motion', 'Tailwind CSS'],
        category: 'frontend',
        video: nepmartVideo,
        github: 'https://github.com/sijanKc/Nepmart',
        demo: 'https://nep-mart-teal.vercel.app/',
        lesson: 'Through this project, I learned how smooth animations and UI design can make a platform feel more polished and professional, while still keeping the local cultural touch.'
    },
    {
        id: 3,
        title: 'QuizHub',
        description: 'A platform for students to test their knowledge and track progress.',
        story: 'This was my very first major project. In my 4th semester, I had to build a project for my course, and I decided to create an online quiz platform. That’s how Quizhub was born—a platform to practice quizzes in different subjects. This project became the starting point of my journey into real-world web development.',
        tech: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL'],
        category: 'fullstack',
        video: quizhubVideo,
        github: 'https://github.com/sijanKc/Quizhub',
        demo: 'https://quizhub-two.vercel.app/',
        lesson: `How to design and structure a MySQL database efficiently.

                Implementing user registration, login, and session management in PHP.

                Using HTML, CSS, and JavaScript to create interactive and user-friendly interfaces.

                Handling form validations and user input securely.

                Understanding the full flow of a web application—from front-end to back-end.

                The importance of planning, organizing, and testing code before deployment.`
    },
    {
        id: 4,
        title: 'Paper Trading Platform',
        description: 'A risk-free environment to practice stock trading and learn market dynamics.',
        story: 'I’ve always been interested in the share market, but I wanted a safe way to practice without risking real money. During my 6th semester, we had a compulsory project, and I saw it as the perfect opportunity. One day, I discovered a paper trading app on the Play Store made by a Nepali developer, which inspired me to build my own platform. That’s how I created PaperTrading, a simulator to practice trading with virtual money.',
        tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
        category: 'fullstack',
        video: papertradingVideo,
        github: 'https://github.com/sijanKc/PaperTrading',
        demo: '#',
        lesson: 'Building this project taught me how to integrate real-time data flow using the MERN stack. I also learned about handling user interactions, managing virtual transactions, and structuring both the front-end and back-end efficiently for a full-stack application.'
    }
];
