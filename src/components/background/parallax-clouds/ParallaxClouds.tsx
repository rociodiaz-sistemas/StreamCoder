import React from 'react';
import './ParallaxClouds.css';

const CloudParallax: React.FC = () => {
  return (
    <>
      <div className="static-stars" />
      <div className="parallax-container">
        <div className="cloud-layer layer1" />
        <div className="cloud-layer layer2" />
        <div className="cloud-layer layer3" />
      </div>
    </>
  );
};

export default CloudParallax;
