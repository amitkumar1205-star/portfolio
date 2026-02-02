import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

export const PERSONAL_INFO = {
    name: "Amit Kumar",
    role: "Frontend Web Developer",
    description: "I craft responsive, high-performance web applications using React, Next.js, and modern CSS. Turning ideas into interactive reality.",
    experience: "2 Years",
    email: "ak93068185@gmail.com",
    social: {
        github: "https://github.com/amitkumar1205-star",
        linkedin: "http://www.linkedin.com/in/amit-kumar-295a07298",
    }
};

export const NAV_LINKS = [
    { title: 'Home', href: '#home' },
    { title: 'About', href: '#about' },
    { title: 'Skills', href: '#skills' },
    { title: 'Portfolio', href: '#projects' },
    { title: 'Contact', href: '#contact' },
];

export const PROJECTS = [
    {
        title: "E-Commerce Dashboard",
        tech: ["Next.js", "Tailwind", "PostgreSQL"],
        description: "A comprehensive admin dashboard for managing products, orders, and customers with real-time analytics.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
        links: {
            github: "#",
            live: "#"
        }
    },
    {
        title: "Social Media App",
        tech: ["React", "Redux", "Firebase"],
        description: "Real-time chat and feed application allowing users to share updates and connect with friends.",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800",
        links: {
            github: "#",
            live: "#"
        }
    },
    {
        title: "Portfolio Website",
        tech: ["React", "Framer Motion", "Tailwind"],
        description: "A modern, animated portfolio website to showcase developer skills and projects.",
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800",
        links: {
            github: "#",
            live: "#"
        }
    }
];

export const SOCIAL_LINKS = [
    {
        Icon: Github,
        href: PERSONAL_INFO.social.github,
        label: "GitHub Profile"
    },
    {
        Icon: Linkedin,
        href: PERSONAL_INFO.social.linkedin,
        label: "LinkedIn Profile"
    },
    {
        Icon: Mail,
        href: `mailto:${PERSONAL_INFO.email}`,
        label: "Email Contact"
    }
];
