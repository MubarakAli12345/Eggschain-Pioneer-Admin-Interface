const prodConfig = {
  // apiKey: "AIzaSyCJsKmXNI2b3HzBmbChyOnkR8MVX4XG-yk",
  // authDomain: "pre-alignment-staging.firebaseapp.com",
  // databaseURL: "https://pre-alignment-staging.firebaseio.com",
  // projectId: "pre-alignment-staging",
  // storageBucket: "pre-alignment-staging.appspot.com",
  // messagingSenderId: "451768652768",
  // appId: "1:451768652768:web:addf9a8cea4ac4c3e01185",
  // measurementId: "G-CF3926RMMM"
  // apiKey: "AIzaSyDSoTJTTzPQ16100toRBm7pNc2gWZ1TY1M",
  // authDomain: "operation-eggschain-pioneer.firebaseapp.com",
  // projectId: "operation-eggschain-pioneer",
  // storageBucket: "operation-eggschain-pioneer.appspot.com",
  // messagingSenderId: "991657867777",
  // appId: "1:991657867777:web:87009a51e33636090a1e00",
  // measurementId: "G-MPE4VKMYJ0",
  apiKey: "AIzaSyAaoqvr_EenXIjDXXO7ImLuLbxnZjpuM3s",
  authDomain: "eggschain-pioneer-phase-ii.firebaseapp.com",
  projectId: "eggschain-pioneer-phase-ii",
  storageBucket: "eggschain-pioneer-phase-ii.appspot.com",
  messagingSenderId: "1089316138153",
  appId: "1:1089316138153:web:f16bb7fa9962f164a54db8",
  measurementId: "G-Y4PNYT7JXT"
};

const devConfig = {
  // apiKey: "AIzaSyCJsKmXNI2b3HzBmbChyOnkR8MVX4XG-yk",
  // authDomain: "pre-alignment-staging.firebaseapp.com",
  // databaseURL: "https://pre-alignment-staging.firebaseio.com",
  // projectId: "pre-alignment-staging",
  // storageBucket: "pre-alignment-staging.appspot.com",
  // messagingSenderId: "451768652768",
  // appId: "1:451768652768:web:addf9a8cea4ac4c3e01185",
  // measurementId: "G-CF3926RMMM"
  // apiKey: "AIzaSyDSoTJTTzPQ16100toRBm7pNc2gWZ1TY1M",
  // authDomain: "operation-eggschain-pioneer.firebaseapp.com",
  // projectId: "operation-eggschain-pioneer",
  // storageBucket: "operation-eggschain-pioneer.appspot.com",
  // messagingSenderId: "991657867777",
  // appId: "1:991657867777:web:87009a51e33636090a1e00",
  // measurementId: "G-MPE4VKMYJ0",
  apiKey: "AIzaSyAaoqvr_EenXIjDXXO7ImLuLbxnZjpuM3s",
  authDomain: "eggschain-pioneer-phase-ii.firebaseapp.com",
  projectId: "eggschain-pioneer-phase-ii",
  storageBucket: "eggschain-pioneer-phase-ii.appspot.com",
  messagingSenderId: "1089316138153",
  appId: "1:1089316138153:web:f16bb7fa9962f164a54db8",
  measurementId: "G-Y4PNYT7JXT"
};

const config = process.env.NODE_ENV === "production" ? prodConfig : devConfig;

export default config;
