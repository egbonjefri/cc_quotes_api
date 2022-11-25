// Constants.js
const production = {
    url: 'https://cc-quotes-api.onrender.com/quotes'
  };
  const development = {
    url: 'https://cc-quotes-api.onrender.com/quotes'
  };
  export const config = process.env.NODE_ENV === 'development' ? development : production;