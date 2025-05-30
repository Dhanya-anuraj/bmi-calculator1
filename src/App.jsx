import './App.css'
import './bootstrap.min.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
function App() {

  const [weight , setWeight] = useState("")
  const [height , setHeight] = useState("")
  const [isWeight , setIsWeight] = useState(true)
  const [isHeight , setIsHeight] = useState(true)
  const [score , setScore]= useState("")
  const [verdict , setVerdict] = useState("")
  const validate = (e)=>{
    const {name , value} = e.target
    console.log(name);
    console.log(value);

    // console.log(!!value.match('^[0-9]*$'));

    if(!!value.match('^[0-9 .]*$')){
       if(name == "weight"){
        setWeight(value)
        setIsWeight(true)
       }
       else{
        setHeight(value)
        setIsHeight(true)
       }
    }else{
      if(name == "weight"){
        setWeight(value)
        setIsWeight(false)
       }
       else{
        setHeight(value)
        setIsHeight(false)
       }

    }
  }

  const handleReset = ()=>{
    setWeight("")
    setIsWeight(true)
    setHeight("")
    setIsHeight(true)
    setScore("")
    setVerdict("")
    
  }

  const handleCalculate = ()=>{
    setScore(weight/((height/100)*(height/100)) )
    if(score <18.5){
      setVerdict("Under Weight")
    }
    else if(score>=18.5 
      || score<=24.9){
      setVerdict("Normal")
    }
     else if(score>=25 ||score<=29.9){
      setVerdict("Over Weight")
    }
     else if (score>=30){
      setVerdict("Obesity")
    }
  }

  return (
    <>
      <div className='d-flex justify-content-center align-items-center px-2' style={{ height: "100vh" }}>
        <div className='bg-light p-2 rounded' style={{ width: '400px' }}>
          <h3 className=' text-center' style={{ color: "rgb(21,101,191" }}>BMI CALCULATOR</h3>
          <div className=' rounded p-2' style={{ backgroundColor: "rgb(21,101,191" }} >
            <h4>BMI Score : {score}</h4>
            <h4>Veridict : {verdict}</h4>
          </div>
          <form>
            <div className="mb-2 mt-2">
              <TextField name='weight' value={weight} id="outlined-basic" label="Enter Weight(Kg)" variant="outlined" className='w-100' onChange={(e)=>validate(e)}/>
               {!isWeight && <span style={{ color: "red" }}>*Invalid Input</span>}
            </div>
            <div className="mb-2">
              <TextField name='height' value={height}   id="outlined-basic" label="Enter Height(cm)" variant="outlined" className='w-100' onChange={(e)=>validate(e)} />
            {!isHeight && <span style={{ color: "red" }}>*Invalid Input</span>}

            </div>
            <div className="mb-2">
              <Button variant="contained" color="primary" className='w-100 p-1 ' onClick={handleCalculate}>CALCULATE BMI</Button>
            </div>
            <div className="mb-2">
              <Button variant="outlined" className='w-100 p-1' onClick={handleReset}>RESET</Button>
            </div>


          </form>
        </div>
      </div>

    </>
  )
}

export default App
