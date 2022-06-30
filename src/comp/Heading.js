import React from 'react';
import { useSelector } from 'react-redux';
export default function Heading() {
  const state = useSelector((s) => s);
  const { a } = state;
  return <h1>All topics : {a?.length || 0} </h1>;
}
