import { FiUserPlus, FiDollarSign, FiActivity } from 'react-icons/fi'
import * as Icon from 'react-icons/fi'


const data = [
  {
    title: 'Users',
    icon: <FiUserPlus size={'20px'} color="gold"/>,
    link: '/agent',
  },
  {
    title: 'Cards and Rates ',
    icon: <Icon.FiCreditCard size={'20px'} color='gold' />,
    link: '/agent/cards',
  },
  {
    title: 'Transactions',
    icon: <Icon.FiDollarSign size={'20px'} color='gold' />,
    link: '/agent/transactions',
  },
  {
    title: 'Users accounts',
    icon: <Icon.FiUsers size={'20px'} color='gold' />,
    link: '/agent/users',
  },
  // {
  //   title: 'Archives',
  //   icon: <ArchivesIcon />,
  //   link: '/admin/archives',
  // },
  // {
  //   title: 'Credits',
  //   icon: <CreditsIcon />,
  //   link: '/admin/credits',
  // },
  // {
  //   title: 'Settings',
  //   icon: <SettingsIcon />,
  //   link: '/admin/settings',
  // },
  // {
  //   title: 'Documentation',
  //   icon: <DocumentationIcon />,
  //   link: '/admin/documentation',
  // },
];

export default data;
