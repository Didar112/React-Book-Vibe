import React from 'react';
import bookImg from '../../assets/hero_img.jpg'

const Banner = () => {
    return (
        <div>
            <div className="hero  bg-base-200 min-h-[70vh] mt-[50px] rounded-2xl container mx-auto">
  <div className="hero-content flex-col justify-between w-full lg:flex-row-reverse">
    <img
      src={bookImg}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div className='flex flex-col gap-10'>
      <h1 className="text-5xl font-bold">Books to freshen <br /> up yourself</h1>
      
      <button className="btn btn-accent w-50">Get Started</button>
    </div>
  </div>
</div>
        </div>


);
};

export default Banner;