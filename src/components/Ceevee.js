import React, {useState} from 'react'
import pdf from '../assets/resume.pdf';
export default function Ceevee() {

    const [activeThing, changeThing] = useState(0);
    const [clicky, activateclicky] = useState(0);
    return (
        <div className="ContentBox" style={{backgroundColor: '#fffff0', fontFamily: "roboto mono", textAlign: "left"}}>
            {activeThing === 0 && <div onMouseEnter={()=>{changeThing(1)}} style={{top: '50%', left: '50%'}}className="cvli">download resume</div>}
            {activeThing === 1 && <div onMouseEnter={()=>{changeThing(2)}} style={{top: "25px", left: "100px"}}className="cvli">download resume</div>}
            {activeThing === 2 && <div onMouseEnter={()=>{changeThing(3)}} style={{top: "250px", left: "100px"}}className="cvli">download resume</div>}
            {activeThing === 3 && <div onMouseEnter={()=>{changeThing(4)}} style={{top: "500px", right: "40px"}}className="cvli">download resume</div>}
            {activeThing === 4 && <div onMouseEnter={()=>{changeThing(0)}} style={{bottom: "350px", right: "200px"}}className="cvli">download resume</div>}

            {clicky === 0 && <div onClick={()=>{activateclicky(1); changeThing(6);}} className="seeelvi" style={{top: "100px", left: "300px"}}>actually download resume</div>}
            {clicky === 1 && <a href={pdf} rel="noreferrer" target ="_blank"><div style={{bottom: "25px", right: "100px", color: "red"}}>here!</div></a>}
        </div>
    )
}
