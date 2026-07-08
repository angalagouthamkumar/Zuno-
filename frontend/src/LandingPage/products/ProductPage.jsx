import React from 'react';
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';

const ProductsPage = () => {
  return (
    <div>
      <Hero />
      <LeftSection  imageUrl="/images/kite.png" Prod="Zuno" ProdDesc="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." tryDemo="/demo" learnMore="/learn-more" googlePlay="/google-play" appleStore="/apple-store"/>
      <RightSection imageUrl="/images/console.png" Prod="console" ProdDesc="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." learnMore="/learn-more"/>
      <LeftSection  imageUrl="/images/coin.png" Prod="Coin" ProdDesc="A cryptocurrency trading platform that offers a seamless experience for buying, selling, and managing your digital assets." tryDemo="/demo" learnMore="/learn-more" googlePlay="/google-play" appleStore="/apple-store"/>
      <RightSection imageUrl="/images/kiteconnect.png" Prod="Zuno Connect API" ProdDesc="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." learnMore="/learn-more"/>
      <LeftSection  imageUrl="/images/varsity.png" Prod="Varsity" ProdDesc="An educational platform that provides comprehensive resources and tools for traders of all levels." tryDemo="/demo" learnMore="/learn-more" googlePlay="/google-play" appleStore="/apple-store"/>

      <p style={{ textAlign: "center", margin: "2rem 0" ,textDecoration: "none"}}>Want to know more about our technology stack? Check out the <a href="https://zuno.tech">Zuno.tech blog.</a></p>
      <Universe />
    </div>
  );
};

export default ProductsPage;