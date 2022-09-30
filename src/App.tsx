import './App.css';
import { useState,useEffect } from 'react'
//components
import { getData } from './Components/Data';
import { Label } from './Components/Label';
import { Button } from './Components/Button';

function App() {
  const [data,setData] = useState([])
  useEffect(()=>{
    getData(setData);
  },[])
  const [show,setShow] = useState<boolean>(false)
  const showDropdown = () => {
      setShow(!show)
  }
  return (
    <div>
      <div>
        <Button onClick = {() => {showDropdown()}}/>
      </div>
      <div>
        {show && <Label/>}
      </div>
    </div>
  );
}

export default App;
