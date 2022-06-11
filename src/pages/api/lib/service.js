import axios from 'axios';
const connect = axios.create({
    baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
    withCredentials: true,
    timeout: 30000
})
// connect.interceptors.response.use((res)=>{
//     console.log("olamide")
// , (error)=>{
//     console.log("motigbana")
// }});

export const Server = connect;



export const imageLoader = ({ src, width, quality }) => {
    return `https://res.cloudinary.com/dauntless-exchange/${src}.jpg?w=${width}&q=${quality || 75}`;
};

export const isBrowser = ()=> {
    return typeof window !== 'undefined'
  }
  
  export const nextLocalStorage = () => {
    if (isBrowser()) {
      return window.localStorage
    }
  }

export const CardLoader = (data, id) => data.filter(card => card.id === id);

