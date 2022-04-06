module.exports = {
  images: {
    domains: ["links.papareact.com", "fakestoreapi.com", "www.junglescout.com"],
  },
  env: {
    stripe_public_key: process.env.STRIPE_PUBLIC_KEY,
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.measurementId,
  },
};
