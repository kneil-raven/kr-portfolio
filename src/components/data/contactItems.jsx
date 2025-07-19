import { Mail, GithubIcon, LinkedinIcon } from 'lucide-react';

const contactItems = [
  {
    icon: <Mail className="mx-auto mb-4 text-blue-400" size={32} />,
    title: 'Email',
    text: 'example@example.com',
  },
  {
    icon: <GithubIcon className="mx-auto mb-4 text-blue-400" size={32} />,
    title: 'GitHub',
    text: 'github.com/sampleOnly',
  },
  {
    icon: <LinkedinIcon className="mx-auto mb-4 text-blue-400" size={32} />,
    title: 'LinkedIn',
    text: 'linkedin.com/in/sampleOnly',
  },
];

export default contactItems;


