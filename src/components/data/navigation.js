import { User, Code, Briefcase, MessageSquare } from 'lucide-react';

export const navItems = [
    { id: 'home', label: 'Home', icon: User },
    { id: 'about', label: 'About', icon: User },
    { id: 'projects', label: 'Projects', icon: Code },
    { id: 'skills', label: 'Skills', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: MessageSquare }
];

export const personalInfo = {
    name: 'Kneil Raven',
    title: 'Tech Enthusiast',
    email: 'email.1@example.com',
    github: 'github.com/sampleonly',
    linkedin: 'linkedin.com/sample',
    description: 'Building innovative solutions with modern technologies.',
    about: {
        intro: "I'm a passionate tech enthusiast with over 2 years of experience in Telecommunications industry, IT industry.",
        experience: "My journey spans from working in Telecommunications outside plant operations, Free Wi-Fi, to processing Digital Certificates of the Philippine National PKI. "
    }
}