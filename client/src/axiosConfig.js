import axios from 'axios';

console.log( window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'? process.env.REACT_APP_API_LOCAL_PATH: process.env.REACT_APP_API_LIVE_PATH, // Set your default base URL here condition is imosed on live and local port
)


const instance = axios.create({
    baseURL: window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'? process.env.REACT_APP_API_LOCAL_PATH: process.env.REACT_APP_API_LIVE_PATH, // Set your default base URL here condition is imosed on live and local port
    timeout: 5000, // Set the default timeout in milliseconds
    // Add any other default configurations you need
  });
  
  export default instance;