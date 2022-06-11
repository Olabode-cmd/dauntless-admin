import axios from 'axios';
export const Server = axios.create({
    baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
    withCredentials: true
});

export const imageLoader = ({ src, width, quality }) => {
    return `https://res.cloudinary.com/dauntless-exchange/${src}.jpg?w=${width}&q=${quality || 75}`;
};

export const CardLoader = (data, id) => data.filter(card => card.id === id);

