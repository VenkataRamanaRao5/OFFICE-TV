import React from 'react'

const Speed = ({speed,setSpeed}) => {
  return (
    <div className='controlBar'>
      <button onClick={()=>setSpeed((s)=>
        {if(s>0.1) return s/10
            return 0.01
        })

        }>Inc</button>
      <button onClick={()=>setSpeed((s)=>{
        if(s<100) return s*10
        return 100
        })}>Dec</button>
    </div>
  )
}

export default Speed
