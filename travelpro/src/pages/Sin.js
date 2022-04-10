import Register from "../components/loreg/Register"
import Sliders from "../components/Sliders";
import {RemoveScrollBar} from 'react-remove-scroll-bar';

export default function Sin() {
  return (
    <>
        <Register />
        <Sliders />
        <RemoveScrollBar/>
    </>
  );
}