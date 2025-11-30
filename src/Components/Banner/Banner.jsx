import React from 'react';
import bookimage from '../../assets/books.jpg'

const Banner = () => {
    return (
      <div className='flex justify-around items-center p-16'>
        <div>
          <h1>Banner</h1>
          <button className="btn btn-primary">Banner Button</button>
        </div>
        <div>
          <img className=' w-3/12' src={bookimage} alt="" />
        </div>
      </div>
    );
};

export default Banner;