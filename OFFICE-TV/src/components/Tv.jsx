import React, { useState } from 'react'
import { useEffect,useRef } from 'react'

const Tv = ({speed}) => {
    let DVD = useRef(null)
    let [coordinate,setCoordinate] = useState([0,0]) 
    let TV = useRef(null);
    
    let dirL = useRef(10)
    let dirT = useRef(10)

    useEffect(()=>{
        const el = DVD.current;
        const tvEl = TV.current;
        
        
        let elPos = el.getBoundingClientRect();
        let tvElPos = tvEl.getBoundingClientRect();
        let l = elPos.left-tvElPos.left;
        let t = elPos.top-tvElPos.top;
        
        setCoordinate(([x,y])=>{
            return [l,t]
        })

        el.style.left = `${l}px`;
        el.style.top = `${t}px`;
        
        let idx = 0;
        // let dir = [[10,10],[-10,10],[-10,-10],[10,-10]]
        // let dirL = 1
        // let dirT = 1
        
        tvEl.style.position = 'relative'
        el.style.position = 'absolute'

        

        let i = setInterval(()=>{
            setCoordinate(([x,y])=>{
                
                let left = x+dirL.current*1/speed;
                let top = y+dirT.current*1/speed;
                if((left <= 0 && top <= 0)||(left<=0 && top >= tvEl.clientHeight-el.offsetHeight) 
                  || (left >= tvEl.clientWidth-el.offsetWidth && top <= 0) 
                  || (left >= tvEl.clientWidth-el.offsetWidth && top>=tvEl.clientHeight-el.offsetHeight)){
                    el.style.left = `${left}px`;
                    el.style.top = `${top}px`;
                    alert('yeahh!')  
                    location.reload()
                  }
                if(left<0 || left>tvEl.clientWidth-el.offsetWidth){
                  dirL.current*=-1
                  left = x+dirL;
                }
                if(top<0 || top>tvEl.clientHeight-el.offsetHeight){
                  dirT.current*=-1
                  top = y+dirT;
                }
                
                
                el.style.left = `${left}px`;
                el.style.top = `${top}px`;
                // console.log(speed)
                return [left,top];
            });
        },16);
        console.log(speed)
        return ()=> clearInterval(i)
    },[speed])
    
  return (
    <div className='TV' ref={TV}>
      <div ref = {DVD} className='DVD' >
        <span style={{color:"black"}}>DVD</span>
        <span style={{color:"white"}}>VIDEOS</span>
      </div>
    </div>
  )
}

export default Tv
