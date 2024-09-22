import React from 'react';

const Logo = ({ src, alt }) => {
  return (
    <div className="flex justify-center items-center py-4 lg:top-8 padding-20">
      <img src={src || '/logosushi.svg'} alt={alt || 'logo de ledex'} className="w-32 h-auto sm:w-32 md:w-40 lg:w-50" />
    </div>
  );
};

export default Logo;
