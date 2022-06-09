import * as React from 'react';
import { useState } from 'react';

type AppProps = {
  setRating: (arg: number | null) => void;
  setSubmitted: (arg: boolean) => void;
  rating: number | null;
};

const Rate = ({ setRating, setSubmitted, rating }: AppProps): JSX.Element => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (rating === null) return;
    setSubmitted(true);
  };

  return (
    <div className='bg-blue-550 rounded-xl p-8 max-w-sm'>
      <img
        className='bg-blue-500 rounded-full p-4'
        src='./icon-star.svg'
        alt='star_icon'
      />
      <h1 className='text-white text-2xl my-2'>How did we do?</h1>
      <p className='text-gray-100'>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <form onSubmit={handleSubmit}>
        <div className='flex justify-between my-2'>
          {[1, 2, 3, 4, 5].map((number) => {
            return (
              <span key={number}>
                <input
                  onChange={(e) => setRating(+e.target.value || null)}
                  className='hidden peer'
                  type='radio'
                  name='rate'
                  value={`${number}`}
                  id={`${number}`}
                />
                <label
                  className='text-gray-200 peer-checked:bg-primary peer-checked:text-white transition-colors duration-150 hover:bg-gray-100 cursor-pointer hover:text-white rounded-full bg-blue-500 w-10 h-10 text-center items-center justify-center inline-flex'
                  htmlFor={`${number}`}>
                  {number}
                </label>
              </span>
            );
          })}
        </div>
        <button className='bg-primary my-2 text-white hover:bg-white hover:text-primary transition-colors duration-150 w-full p-3 rounded-full tracking-widest uppercase'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Rate;
