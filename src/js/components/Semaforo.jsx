import React , {useState} from 'react' 
import '../components/index.css'
const Semaforo = () => {
    const[color, setcolor ]=useState("Red")
    return (
    <div className='Cuerpo'>
    <div className='Traffic'>
        <div onClick={()=> setcolor("Red")} className={'light Red'+(color==="Red"?" Glow":"")}></div>
        <div onClick={()=> setcolor("Yellow")} className={'light Yellow'+(color==="Yellow"?" Glow":"")}></div>
        <div onClick={()=> setcolor("Green")} className={'light Green'+(color==="Green"?" Glow":"")}></div>
    </div>
    </div>
    
  )
}

export default Semaforo