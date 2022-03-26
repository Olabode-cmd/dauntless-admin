import * as Icon from 'react-icons/fi'
import { RiExchangeLine } from 'react-icons/ri'
// import { icons } from 'react-icons/lib';


const data = [
    {
        title: 'Chats',
        icon: <Icon.FiHome size={'20px'} color='gold' />,
        link: '/support/',
    },
    {
        title: 'Mailbox',
        icon: <Icon.FiUsers size={'20px'} color='gold' />,
        link: '/support/mail',
    },
    {
        title: 'Transactions',
        icon: <Icon.FiDollarSign size={'20px'} color='gold' />,
        link: '/support/transactions',
    },
];

export default data;
