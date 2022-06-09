import * as React from 'react';

type AppProps = {
  rating: number;
};

const Thanks = ({ rating }: AppProps): JSX.Element => {
  return (
    <div className='flex flex-col bg-blue-550 items-center max-w-sm p-8 rounded-3xl'>
      <img
        className='my-4'
        src='./illustration-thank-you.svg'
        alt='Thank you!'
      />
      <span className='my-4 text-primary bg-blue-500 py-2 px-4 rounded-full'>
        You selected a {rating} out of 5
      </span>
      <h1 className='text-white my-2 text-2xl'>Thank you!</h1>
      <p className='text-gray-100 text-center my-2'>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </div>
  );
};

export default Thanks;
