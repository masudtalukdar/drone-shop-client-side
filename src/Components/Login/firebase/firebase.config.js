// const firebaseConfig = {
//   apiKey: 'AIzaSyDqv9EPy4Q3IRVmIOqEhSgQHW1IuacJU7E',
//   authDomain: 'drone-shop-2f2e9.firebaseapp.com',
//   projectId: 'drone-shop-2f2e9',
//   storageBucket: 'drone-shop-2f2e9.appspot.com',
//   messagingSenderId: '370366664621',
//   appId: '1:370366664621:web:36e6182a75e70fc6451b24',
// };
// export default firebaseConfig;

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};
export default firebaseConfig;
