import React from 'react';
import { useSelector } from 'react-redux';
export default function Heading() {
  const state = useSelector((s) => s);
  const { a } = state;
  const calc = (num) => {
    if (num === 1) {
      return 'lime';
    }
    if (num === 0) {
      return 'tomato';
    }
  };

  return (
    <h1 style={{ color: calc(state?.status) }}>
      All topics : {a?.length || 0}{' '}
    </h1>
  );
}
