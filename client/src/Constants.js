// Constants.js
const production = {
    url: 'https://quotes-cc-api.onrender.com/quotes'
  };
  const development = {
    url: 'http://localhost:9000/quotes'
  };
  export const config = process.env.NODE_ENV === 'development' ? development : production;