import React, { useState } from 'react'
import { useEffect,useRef } from 'react'

const Tv = () => {
    let DVD = useRef(null)
    let [coordinate,setCoordinate] = useState([0,0]) 
    let TV = useRef(null);
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
        let dirL = 12
        let dirT = 12
        
        tvEl.style.position = 'relative'
        el.style.position = 'absolute'

        

        let i = setInterval(()=>{
            setCoordinate(([x,y])=>{
                
                let left = x+dirL;
                let top = y+dirT;
                if(left<0 || left>tvEl.clientWidth-el.offsetWidth){
                  dirL*=-1
                  left = x+dirL;
                }
                if(top<0 || top>tvEl.clientHeight-el.offsetHeight){
                  dirT*=-1
                  top = y+dirT;
                }
                if((left <= 0 && top <= 0)||(left<=0 && top >= tvEl.clientHeight-el.offsetHeight) 
                  || (left >= tvEl.clientWidth-el.offsetWidth && top <= 0) 
                  || (left >= tvEl.clientWidth-el.offsetWidth && top>=tvEl.clientHeight-el.offsetHeight)){
                    alert('yeahh!')  
                  }
                
                el.style.left = `${left}px`;
                el.style.top = `${top}px`;
                return [left,top];
            });
        },1);
        return ()=> clearInterval(i)
        console.log('hello:',el.style.left,el.style.top)
    },[])
    
  return (
    <div className='TV' ref={TV}>
      <div ref = {DVD} className='DVD' >
        DVD
      </div>
    </div>
  )
}

export default Tv
