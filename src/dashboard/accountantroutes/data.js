import { FiUserPlus, FiDollarSign, FiActivity } from 'react-icons/fi'
import * as Icon from 'react-icons/fi'


const data = [
    {
        title: 'Overview',
        icon: <Icon.FiHome size={'20px'} color="gold" />,
        link: '/accountant',
    },
    {
        title: 'Transactions',
        icon: <Icon.FiDollarSign size={'20px'} color='gold' />,
        link: '/accountant/transactions',
    },
];

export default data;
