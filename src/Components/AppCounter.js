import Button from './Button/Button';
import {useState} from 'react'
import Counter from './Counter/Counter';
import './AppCounter.css'

function AppCounter() {
  const [counters,setCounters] = useState([]);
  const [index,setIndex] = useState(0);
  
  const deleteCounter = (indexValue) => {
    console.log('delete counter',indexValue);
    let newCounter = [...counters];
    console.log("newCounter",newCounter);
    let dumArr =  newCounter.filter((shiva)=> shiva !== indexValue)
    console.log("dum arr",dumArr);
   // newCounter = dumArr;
    setCounters(dumArr)
  }
   
 const displayCounter = () => { 
   const newArr = [...counters,index];
   console.log("new Arr",newArr)
   console.log(index)
   setCounters(newArr);
   setIndex((prev) => prev + 1); 
 }

  return (
   <>
   <h1 > Click on the "+" button to add the counter</h1>
    <div className = "addBtn" >
     <Button  click = {displayCounter} name = "+" />
    </div>
    <div  className = "counters">

    {counters.map((item) => <div key = {item} > <Counter index = {item + 1} deleteCounter = {()=>deleteCounter(item)} />  </div> )}
    </div>
   </>
  );
}

export default AppCounter;
