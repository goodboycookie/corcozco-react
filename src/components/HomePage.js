import React, {useState} from 'react'
import NewBubble from './NewBubble';
import useSound from 'use-sound';
import ilySfx from '../sounds/ily.mp3';

export default function HomePage() {

    const changelogData = [
        {
            id: 0,
            date: "5 aug 18",
            message: "i buy the corcoz.co domain",
        },
        {
            id: 1,
            date: "18 sept 21",
            message: "i finally decide to do something with the domain; i find out its been expired and purchased from someone else. i hit them up and try to sell it back to me for 3x the original price. ",
        },
        {
            id: 2,
            date: "20 sept 21",
            message: "corcozco goes live under a new domain name!",
        },
        {
            id: 3,
            date: "25 sept 21",
            message: "table the triple buttons idea (you'll see) for now. cleaned up the design and added foco and teevee",
        }
    ]

    //if zero is selected, deactivate all.
    const [selected, changeSelected] = useState(0);
    
    const [play] = useSound(ilySfx);
    const Changelog = () =>{
        return(
            <div className="bubbleChild">
                
                    {
                        changelogData.map((item) => {
                            return(
                                <><div >{item.date}</div> <div>{item.message}</div></>
                            )
                        })
                    }
                
            </div>
        )
    }
    // const LastOne = () => {
    //     return (
    //         <div className="bubbleChild">
    //             <h1 style={{color: "blue", display: "flex", alignItems: 'center', alignSelf: 'center'}}>b</h1>
    //         </div>
    //     )
    // }
    






    
  

    return (
        <div className="ContentBox" style={{backgroundColor: '#E8A122'}}>
            {/* SECRET! */}
            {(selected === 0 || selected === 1) && <NewBubble index={1} onclick={()=>{return ;}}title="change log" color="pink" activatable={true} selected={selected} changeSelected ={changeSelected}>
                <Changelog />
            </NewBubble> }
            {/* LAST ONE */}
            {(selected === 0 || selected === 2) && <NewBubble index={2} onclick={play} title="ily" activatable = {false} color="purple" selected={selected} changeSelected ={changeSelected}>
                
            </NewBubble>}
        </div>
    )
}
