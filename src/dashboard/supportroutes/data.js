import * as Icon from 'react-icons/fi'
import { RiExchangeLine } from 'react-icons/ri'
// import { icons } from 'react-icons/lib';


const data = [
    {
        title: 'Home',
        icon: <Icon.FiHome size={'20px'} color='gold' />,
        link: '/support/',
    },
    {
        title: 'Chats',
        icon: <Icon.FiUser size={'20px'} color='gold' />,
        link: '/support/chats',
    },
    {
        title: 'Transactions',
        icon: <Icon.FiDollarSign size={'20px'} color='gold' />,
        link: '/support/transactions',
    },
];

export default data;
