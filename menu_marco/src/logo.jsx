import React from 'react';

const Logo = ({ src, alt }) => {
  return (
    <div className="absolute top-9 left-[40%] sm:top-4 sm:left-4  lg:top-8 padding-20">
      <img src={src || '/ledex.svg'} alt={alt || 'logo de ledex'} className="w-16 h-auto sm:w-24 md:w-24 lg:w-32" />
    </div>
  );
};

export default Logo;