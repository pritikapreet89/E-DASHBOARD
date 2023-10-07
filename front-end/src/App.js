import { Button } from 'react-bootstrap';
import './App.css';
import { useState } from 'react';

function App()
{
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [Add, setAdd] = useState('');

  function calSum(e)
  {
    e.preventDefault();
    console.log(e);

    if (num1===0 || num2===0) {
      alert("Please enter your num1 and num2")
    } else {
      let Add = parseInt(num1)+parseInt(num2);
      setAdd(parseInt(Add));
    }
  }
  return(
    <div className='container'>
     <h2>Sum Calculator</h2>
     <form onSubmit={calSum}>
       <div>
        <label>First Number</label><br />
        <input type='text' placeholder='Enter First Number' value={num1} 
        onChange={(e)=>setNum1(e.target.value)} />
       </div> <br />  
       <div>
        <label>Second Number</label><br />
        <input type='text' placeholder='Enter Second Number' value={num2} 
        onChange={(e)=>setNum2(e.target.value)} />
       </div><br />
       <div>
        <Button type='submit'>Submit</Button>
       </div><br />
       <div>
        <h3>Your Sum is : {Add}</h3>
       </div>
     </form>
    </div>
  )
}
export default App;