import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

const FrontPage = () => {
  const today = new Date();
  const formattedDate = `${today.getFullYear()}`;

  const src = '/public/img/astronout.gif';
  const src1 = '/public/img/Land.png';
  const src2 = '/public/img/starsNew.jpg';

  return (
    <div className="w-full h-screen">
      <Parallax pages={3} className="bg-black">
        {/* First Layer */}
        <ParallaxLayer
          offset={0}
          speed={1}
          className="bg-[url('/img/moon.jpg')] bg-cover bg-center"
          factor={2.5}
        />

        <ParallaxLayer offset={0} speed={0.5} sticky={{ start: 0, end: 2 }}>
          <div className="flex flex-col min-h-screen px-4 py-6 tracking-tighter text-white sm:px-6 lg:px-12">
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-custom-gray-2 font-robotoRegular">
              Dev Rapi &copy;{formattedDate}
            </h1>
          </div>www
        </ParallaxLayer>

        <ParallaxLayer offset={0.5} speed={0.3} sticky={{ start: 0, end: 1.9 }}>
          <div className="flex items-end justify-center min-h-screen">
            <img
              src={src}
              alt="Astronaut"
              className="w-1/2 h-auto sm:w-1/3 md:w-1/4 lg:w-1/5"
            />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1.9} speed={0.5} factor={2}>
          <div className="relative w-full h-full">
            <img
              src={src2}
              alt="Stars"
              className="absolute object-cover w-full h-full"
            />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={0.3} factor={2}>
          <div className="relative w-full h-full">
            <img
              src={src1}
              alt="Land"
              className="object-cover w-full h-auto"
            />
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default FrontPage;
