import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
export default function Insert() {
  const state = useSelector((s) => s);
  const dispatch = useDispatch();
  const [name, setname] = React.useState('');
  const insert = () => {
    let payload = [...state.a, name];
    dispatch({ type: 'insert', payload });
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
