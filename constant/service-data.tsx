import { Icon } from '@iconify/react';

type Service = {
  icon: React.ReactNode;
  title: string;
  description: string;
};
const serviceData: Service[] = [
  {
    icon: <Icon icon='fluent:desktop-20-filled' />,
    title: 'Web Development',
    description:
      'We build fast, secure, and user-friendly websites to boost your online presence.',
  },
  {
    icon: <Icon icon='bxs:mobile' />,
    title: 'Mobile App Development',
    description:
      'We create smooth, feature-rich mobile apps optimized for user experience.',
  },
  {
    icon: <Icon icon='fluent:paint-brush-20-filled' />,
    title: 'UI/UX Design',
    description:
      'We craft beautiful and user-friendly interfaces to enhance customer experience.',
  },
  {
    icon: <Icon icon='material-symbols-light:cloud' />,
    title: 'Cloud Solutions',
    description:
      'Optimize efficiency with flexible and cost-effective cloud solutions.',
  },
  {
    icon: <Icon icon='fluent:desktop-cursor-28-filled' />,
    title: 'Software Development',
    description:
      'We develop innovative, scalable, and tailored software solutions.',
  },
  {
    icon: <Icon icon='mdi:git' />,
    title: 'IT Infrastructure',
    description:
      'Improve system performance with DevOps, CI/CD, and optimized infrastructure.',
  },
  {
    icon: <Icon icon='material-symbols:security' />,
    title: 'Cybersecurity Services',
    description:
      'We provide reliable security solutions to safeguard your data and systems.',
  },
  {
    icon: <Icon icon='mingcute:ai-fill' />,
    title: 'AI Solutions',
    description:
      'Leverage AI and big data to drive business growth and insights.',
  },
  {
    icon: <Icon icon='fluent:person-support-28-filled' />,
    title: 'IT Consulting & Support',
    description:
      'We help businesses optimize technology with strategic consulting and reliable support.',
  },
];

export default serviceData;
