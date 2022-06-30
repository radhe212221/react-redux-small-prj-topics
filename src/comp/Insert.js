import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
export default function Insert() {
  const state = useSelector((s) => s);
  const dispatch = useDispatch();
  const [name, setname] = React.useState('');
  const insert = () => {
    const condtition1 = state?.a?.some((x) => x === name?.trim()) === false;
    const condtition2 = name?.trim();
    if (condtition1 && condtition2) {
      let payload = [...state.a, name?.trim()];
      dispatch({ type: 'insert', payload });
    }
  };
  const handleChange = (e) => {
    let { value } = e.target;
    setname(value);
  };
  return (
    <div>
      <h1>Insert-Form</h1>
      <input
        name="name"
        placeholder="name"
        value={name}
        onChange={handleChange}
      />
      <button onClick={insert}>insert</button>
    </div>
  );
}
