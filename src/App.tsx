import React, { useState } from 'react';
import Rate from './components/Rate';
import Thanks from './components/Thanks';

const App = (): JSX.Element => {
  const [rating, setRating] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  return (
    <div className='h-full flex items-center justify-center'>
      {submitted ? (
        <Thanks rating={rating!} />
      ) : (
        <Rate
          setSubmitted={setSubmitted}
          setRating={setRating}
          rating={rating}
        />
      )}
    </div>
  );
};

export default App;
