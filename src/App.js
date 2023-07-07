import logo from './logo.svg';
import './App.css';
import S from  "./style.module.css"
import { useState } from 'react';

function App() {
const Execute=()=>{
  setInput(eval(Input))
}

const Handler=(a)=>{
setInput(Input+a)
}

  const [Input,setInput]=useState('');

  return (
    <div>
      <div className={S.line}>
      <input 
      onChange={(e)=>{/^\d+$/.test(e.target.value)?setInput(e.target.value):setInput(Input)}} 
      value={Input} className={S.Input}/>
         </div>
    
         <div style={{marginLeft:'-130px'}} className={S.line}>
         <div onClick={()=>{setInput('')}} className={S.erase}>C</div>
         <div onClick={()=>{setInput(Input.slice(0,Input.length-1))}} className={S.erase}>←</div>
           </div> 

  <div className={S.line}>
    <div onClick={()=>{Handler(1)}} className={S.digit}>1</div>
    <div onClick={()=>{Handler(2)}} className={S.digit}>2</div>
    <div onClick={()=>{Handler(3)}} className={S.digit}>3</div>
    <div onClick={()=>{Handler("+")}} style={{backgroundColor:"orange"}} className={S.digit}>+</div>
  </div> 

  <div className={S.line}>
    <div onClick={()=>{Handler(4)}} className={S.digit}>4</div>
    <div onClick={()=>{Handler(5)}} className={S.digit}>5</div>
    <div onClick={()=>{Handler(6)}} className={S.digit}>6</div>
    <div  onClick={()=>{Handler('-')}} style={{backgroundColor:"orange"}} className={S.digit}>-</div>
  </div> 
  <div className={S.line}>
    <div onClick={()=>{Handler(7)}} className={S.digit}>7</div>
    <div onClick={()=>{Handler(8)}} className={S.digit}>8</div>
    <div onClick={()=>{Handler(9)}} className={S.digit}>9</div>
    <div onClick={()=>{Handler("*")}} style={{backgroundColor:"orange"}} className={S.digit}>*</div>
  </div> 
  <div className={S.line}>
 
    <div onClick={()=>{Handler(0)}} className={S.digit}>0</div>
    <div onClick={()=>{Handler('/')}} style={{backgroundColor:"orange"}} className={S.digit}>/</div>
    <div onClick={Execute} className={S.eq}>=</div>
  </div> 


    </div>
  );
}

export default App;
