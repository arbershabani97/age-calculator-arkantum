import { FC } from 'react';

import './index.css';

interface CounterProps {
  value: string | number;
}

const Counter: FC<CounterProps> = ({ value }) => {
  if (typeof value === 'string') {
    return value;
  }

  return (
    <span
      className="counter"
      style={{ '--from': 0, '--to': value, '--duration': '1s', '--timing': 'ease-in-out' } as never}
    />
  );
};

export default Counter;
