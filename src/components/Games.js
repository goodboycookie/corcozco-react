import React, {useState, useEffect} from 'react'


import tv from '../assets/realtv.png';
import noise from '../assets/channel.gif';
import bigblock from '../assets/bigblock.gif';
import Kaleidoscope from '../assets/kaleidoscope.gif';


function Games({channel, setChannel, link, setLink}) {

    const contentData = [
        {
            id: 0,
            title: "BIG BLOCK'S OFFICE",
            description: "A (still unfinished) game made with React. Join an office run by a big baby, Big Block! The narrative can still use some work, but Im proud of the UI and loop. Check it out!",
            img: bigblock,
            link: "https://goodboycookie.github.io/bigblocksoffice/",
            type: "game",
            year: 2020,
            
        },
        {
            id: 1,
            title: "SPACE KALEIDOSCOPE",
            description: "A fun little project made with p5.js -- Speed up time and see some pretty colors! \n I know its off-center...",
            img: Kaleidoscope,
            link: "games/kaleidoscope",
            type: "game",
            year: 2018,
            
        },
        
    ]


    // STYLES
    const tvstyle = {
        height: '100%',
        zIndex: 2,
        
    }
    const staticstyle = {
        zIndex: 1,
        // margin: '0px 5px',
        left: 0,
        height: '80%',
        minWidth: '80%',
        maxWidth: '100%',
        position: 'absolute'
    }
    const tvWrapper = {
        backgroundColor: '#6d326d',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        alignSelf: 'center',
        height: '27vw',
        width: '36vw',
        position: 'relative',
    }
    const title = {
        fontFamily: 'VCR OSD Mono',
        color: '#F5F5F5',
        fontSize: '3vw',
        margin: '20px 0px',
    }
    const desc = {
        margin: '10px 45px',
        fontFamily: 'Inconsolata',
        fontWeight: '700',
        fontSize: '1.5vw',
        color: '#f6f6f6',
    }

    //consts and useEffect for changing channel and timing tv noise
    const tvGuide = [bigblock, Kaleidoscope]
    const [tvDisplay, setTvDisplay] = useState(tvGuide[channel]);
    
    useEffect(()=>{

        setTvDisplay(noise);
        const timeout = setTimeout(() => {
            setTvDisplay(tvGuide[channel]);
        }, 300);
        return () => clearTimeout(timeout);
        // eslint-disable-next-line
    }, [channel])





    return (
        <div className="ContentBox" style={{backgroundColor: '#6d326d', display: 'flex', flexDirection: 'space-evenly', justifyContent: 'center', alignItems: 'center',}}>
            <div style={title}>{contentData[channel].title}</div>
            <div style={tvWrapper}className="teevee">
                <img alt="tv" style={tvstyle} src={tv} />
                <img alt="tv content" style={staticstyle} src={tvDisplay} /> 
            </div>
            <div style={desc}>{contentData[channel].description}</div>
            <span style={{fontFamily: "Inconsolata", fontweight: "200", color: "#f6f6f6"}}>last edited: {contentData[channel].year}</span>

            <div >
                <div onClick={()=>{setChannel(channel+1 >= contentData.length ? 0 : channel+1)}} style={{backgroundColor: 'pink', display: 'inline-block', width: '70px', margin: '10px', padding: '5px 10px', borderRadius: '5px' }}>
                    <span className="select"><u>SELECT</u></span>
                </div>
                <div  style={{backgroundColor: 'pink', display: 'inline-block', width: '70px', margin: '10px', padding: '5px 10px', borderRadius: '5px' }}>
                    <a href={contentData[channel].link}><span onClick={setLink(contentData[channel].link)}>START</span></a>
                </div>
            </div>
            
        </div>
    )
}

export default Games
