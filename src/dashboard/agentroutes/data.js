import * as Icon from 'react-icons/fi'
import {RiExchangeLine} from 'react-icons/ri'
// import { icons } from 'react-icons/lib';


const data = [
  {
    title: 'Home',
    icon: <Icon.FiHome size={'20px'} color='gold'/>,
    link: '/vendor',
  },
  {
    title: 'Users accounts',
    icon: <Icon.FiUsers size={'20px'} color='gold'/>,
    link: '/admin/users',
  },
  {
    title: 'Trades',
    icon: <RiExchangeLine size={'20px'} color='gold'/>,
    link: '/admin/trades',
  },
  {
    title: 'Transactions',
    icon: <Icon.FiDollarSign size={'20px'} color='gold' />,
    link: '/admin/transactions',
  },
  {
    title: 'Cards and Rates ',
    icon: <Icon.FiCreditCard size={'20px'} color='gold'/>,
    link: '/admin/settings',
  },
  
];

export default data;
