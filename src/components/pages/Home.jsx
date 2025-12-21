import { useRef } from 'react';
import Spline from '@splinetool/react-spline';

export default function Home() {
  const splineRef = useRef();

  function onLoad(splineApp) {
    // This connects the Spline runtime to your React ref
    splineRef.current = splineApp;
    console.log('Spline scene loaded!');
  }

  function triggerAnimation() {
    // Replace 'Cube' with the exact name of the object in your Spline editor
    if (splineRef.current) {
      splineRef.current.emitEvent('mouseHover', 'Cube');
    }
  }

  return (
    <div className="home-container">
      {/* 1. Trigger button */}
      

      {/* 2. Wrapper with defined height is required */}
      <div style={{ width: '100%', height: '100vh', background: '#000' }}>
        <Spline 
          scene="https://prod.spline.design/JH2CmZopIAJ2Cu1q/scene.splinecode" 
          onLoad={onLoad} 
        />
      </div>
    </div>
  );
}
