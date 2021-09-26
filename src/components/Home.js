import React, {useState} from 'react'



import sidebarstyles from './Sidebarstyle.module.css';
// import topbarstyles from './Topbarstyle.module.css';

import HomePage from './HomePage';
import Foco from './Foco';
import Title from './Title';
import Games from './Games';




export default function Home() {


    const [content, updateContent] = useState(0);

    const [channel, updateChannel] = useState(0);
    const [startLink, updateStartLink] = useState();

    const contentList = [
        {
            id: 0,
            title: "cozco",
            buttonOne: "button",
            buttonTwo: "butty",
            buttonThree: "bottom"
        },
        {
            id: 1,
            title: "foco",
            buttonOne: "asas",
            buttonTwo: "adfg",
            buttonThree: "ywrh"
        },
        {
            id: 2,
            title: "teevee",
            buttonOne: "SELECT",
            buttonTwo: "START",
            buttonThree: "three"
        }
    ]



    // const buttonPress = (key) =>{
    //     switch(key){
    //         case "button":
    //             console.log("oops?");
                
    //             break;
    //         case "SELECT":
    //             updateChannel(channel+1 >= 2 ? 0 : channel+1);
    //             break;
    //         case "START":
    //             window.open(startLink, "_blank")
    //             break;
    //         default:
    //             console.log("oops?");
    //             break;
    //     }
    // }

    

    const Topbar = () => {
        return(
            <div className="Topbar">
                <Title />
                {/* <div className={topbarstyles.Buttons}>
                    <div onClick={()=>{buttonPress(contentList[content].buttonOne)}}className={topbarstyles.Button}>{contentList[content].buttonOne}</div>

                    <div className={topbarstyles.Button}>{contentList[content].buttonTwo}</div>

                    <div className={topbarstyles.Button}>{contentList[content].buttonThree}</div>
                </div> */}
            </div>
        )
    }

    const Sidebar = () => {
        return(
            <div className={sidebarstyles.Sidebar}>
                <div onClick={()=>updateContent(0)}>{contentList[0].title}</div>
                <div onClick={()=>updateContent(1)}>{contentList[1].title}</div>
                <div onClick={()=>updateContent(2)}>{contentList[2].title}</div>
            </div>
        )
    }

    


    return (
        <div className="HomeWrapper">

            <Topbar />
            <div className="MainSection">
                <Sidebar />
                <div className="Content">
                    {content === 0 && <HomePage />}
                    {content === 1 && <Foco />}
                    {content === 2 && <Games channel={channel} setChannel={updateChannel} link={startLink} setLink={updateStartLink} />}
                </div>
            </div>
        </div>
    )
}
