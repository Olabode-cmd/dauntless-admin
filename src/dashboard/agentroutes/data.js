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
    title: 'Trades',
    icon: <RiExchangeLine size={'20px'} color='gold'/>,
    link: '/agent/trade',
  },
  {
    title: 'Cards and Rates',
    icon: <Icon.FiCreditCard size={'20px'} color='gold'/>,
    link: '/agent/cards',
  },
];

export default data;
