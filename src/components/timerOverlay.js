import React, {useEffect, useState} from 'react'

export function BeginningTimer(props){
    


    let name = ''
    let timeVisability = 'visable'

//set the visability of the overlay.
    if(props.visable == true){
        name='endgame-overlay--visable'
    } else {
        name='endgame-overlay'
    }
   
        const [secs, setTime] = useState(3);
        const [trigger, setTrigger] = useState(false)



        const tick = () => {  
                setTime(secs - 1);
                
                if(props.begin === true && trigger !== true){
                    setTime(3)
                    setTrigger(true)
                }

                if(secs==='Go!'){
                    setTime(-1)
                }
        };
          
       useEffect(() => {
            const timerId = setInterval(() => tick(), 1000);
            return () => clearInterval(timerId);
        });

        if(secs === 0){
            setTime('Go!')
        }

        if(secs < 0){
            name = 'endgame-overlay'
        }
    return(
        <div className={name}>
            <h1 style={{fontSize:'20rem', visibility:timeVisability }}>{secs}</h1> 
        </div>
        )
}