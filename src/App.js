import React from "react";
import "./style.css";
import Insert from './comp/Insert'
import Heading from './comp/Heading'
import AllData from './comp/AllData'
export default function App() {
  return (
    <div>
        <Insert/>
        <Heading/>
        <AllData/>
    </div>
  );
}
