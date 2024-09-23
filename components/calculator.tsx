"use client"
import React, { useState } from 'react'

const Calculator:React.FC = () => {
    const [expression, setExpression] = useState("")
    const handleButtonClick = (value:string)=>{
        setExpression((prevExpression)=>prevExpression + value)
    }
    const handleCalculate = () => {
        try{
           setExpression(eval(expression))
        }catch (error) {
           setExpression('Error')
        }
    }
    const handleClear = () => {
        setExpression("")
    }
  return (
    <div className='flex justify-center item-center pt-11 '>
    <div className='w-96  bg-green-200 rounded-lg shadow-lg p-6 '> 
    
    <input
    type='text'
    className='w-full mb-4 p-2 text-x1 text-right bg-white rounded-lg border-none'
    value={expression}
    readOnly
    />
   <div className='grid grid-cols-4 gap-2 '>
    {['7','8','9','/'].map((value, index)=>(
        <button
        key={index}
        className='p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-2xl'
       onClick={()=>handleButtonClick(value)}
       >
            {value}
        </button>
    ))}

{['4','5','6','*'].map((value, index)=>(
        <button
        key={index}
        className='p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-2xl'
       onClick={()=>handleButtonClick(value)}
       >
            {value}
        </button>
    ))}

{['1','2','3','-'].map((value, index)=>(
        <button
        key={index}
        className='p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-2xl'
       onClick={()=>handleButtonClick(value)}
       >
            {value}
        </button>
    ))}

{['0','.','=','+'].map((value, index)=>(
        <button
        key={index}
        className='p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600'
       onClick={()=>value === '=' ? handleCalculate() : handleButtonClick(value)}
       >
            {value}
        </button>
    ))}
   </div>
    <button 
    className='mt-4 w-full p-2 bg-red-500 text-white rounded-lg hover:bg-red-600'
    onClick={handleClear}
    >
    Clear
    </button>
    </div>
    
    </div>

)
}

export default Calculator