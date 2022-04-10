import * as Icon from 'react-icons/fi'
import {RiExchangeLine} from 'react-icons/ri'
// import { icons } from 'react-icons/lib';


const data = [
  {
    title: 'Home',
    icon: <Icon.FiHome size={'20px'} color='gold'/>,
    link: '/agent/',
  },
  {
    title: 'Cards and Rates',
    icon: <Icon.FiCreditCard size={'20px'} color='gold'/>,
    link: '/agent/cards',
  },
  {
    title: 'Trades',
    icon: <RiExchangeLine size={'20px'} color='gold' />,
    link: '/agent/trade',
  },
  {
    title: 'Transactions',
    icon: <Icon.FiDollarSign size={'20px'} color='gold'/>,
    link: '/agent/transactions',
  },
  {
    title: 'Users accounts',
    icon: <Icon.FiUsers size={'20px'} color='gold'/>,
    link: '/agent/users',
  },
];

export default data;
