import './components/Calculator.css';
import React, { useState } from 'react';

const [placeBath, setPlaceBath] = useState(0)

function Calculator() {
const length = document.getElementById('length').value
const width = document.getElementById('width').value
const typeofFinish = document.getElementById('typeofFinish').value

if (length == 0 || width == 0)
    
    {alert('Длина и ширина не могут быть равны 0')}

const squareBath = length * width

  return (
    <div className="Calculator">
        <input id='length' type="text" placeholder='Длина' />
        <input id='width' type="text" placeholder='Ширина' />
        <input id='typeofFinish' type="text" placeholder='Тип отделки' />
       <div className='results'>
        <h3></h3>
       </div>
        <button onClick = {Calculator} />
    </div>
  );
}

export default Calculator;
