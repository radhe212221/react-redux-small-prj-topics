import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
export default function AllData() {
  const state = useSelector((s) => s);
  const dispatch = useDispatch();

  const handleClick = (item) => {
    let payload = state?.a?.filter((x) => x !== item);
    dispatch({ type: 'delete', payload });
  };
  return (
    <ol>
      {state?.a?.map((x, i) => (
        <li onClick={() => handleClick(x)}>{x}</li>
      ))}
    </ol>
  );
}
