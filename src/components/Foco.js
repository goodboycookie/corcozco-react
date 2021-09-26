import React, {useState, useEffect} from 'react'
import styles from './Foco.module.css'

import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";

export default function Foco() {


    var contentData = [
        {
            id: 0,
            title: "It's the first of the month",
            content: "welcome to the zonee",
            boxQuantity: 5,
            active: false,
        },
        {
            id: 1,
            title: "u doubted me",
            content: "but that's okay",
            boxQuantity: 3,
            active: false,
        },
        {
            id: 2,
            title: "It'sasdfadfg the month",
            content: "welcome to the zonee",
            boxQuantity: 6,
            active: false,
        },
        {
            id: 3,
            title: "It'asdfadsghsirst of the month",
            content: "welcome to the zonee",
            boxQuantity: 12,
            active: false,
        },
        {
            id: 4,
            title: "It's the asdfasdf of the month",
            content: "welcome to the zonee",
            boxQuantity: 0,
            active: false,
        }
    ]

    
    const [toggleGallery, setToggleGallery] = useState(false);
    

    const Gallery = ({id}) => {


        return(
            <div className="ContentBox" style={{backgroundColor: "rgb(255, 0, 0)"}}>
                <div onClick = {()=>{setToggleGallery(false)}}>click me!</div>
            </div>
        )

    }


    const Subsection = ({id, title, content, boxQuantity, isActive}) => {
        const [active, setActive] = useState(isActive);
        const [arrow, setArrow] = useState("downarrow.svg");


        //Individual Images
        const ImageBox = ({content})=>{
            return(
                <div style={{backgroundColor: "orange", border: "2px solid black", height: "250px", width: "300px"}}>
                    hi {content}
                </div>
            )
        }

        //returns a number of div's equal to a section's boxQuantity.
        const spawnImages = (num) => {
            var elements = [];
            for(var i=1; i<num+1; i++){
                elements.push(<div class="panel" style={{margin: "0px 10px"}}><ImageBox content={i} /></div>);
            }
            return elements;
        }





        //currently just adjusts the arrow direction next to Section Title
        useEffect(()=>{
            if(active){
                setArrow("rightarrow.svg");
                contentData[id].active = true;
                console.log([active]);
            }
            else if (!active){
                setArrow("downarrow.svg");
                contentData[id].active = false;
                console.log([active]);
            }
            // eslint-disable-next-line
        }, [active])

        return (
            <div className={styles.piecediv} >

                {/* title with dorito! */}
                <div className={styles.title}> 
                    <img onClick={()=>{setActive(!active)}} className={styles.arrow} alt="arrow" src={arrow} height={20}/>
                    <h1 onClick={()=>{setActive(!active)}} className={styles.titletext}>{title}</h1>
                </div>

            {/* /** hidden / toggle-able section */}
            {active && <>

                {/* description and see all option */}
                <h3 className={styles.hiddenContent}>{content}</h3>
                {/* see all */}
                <h4 onClick={()=>{setToggleGallery(true)}} id={styles["seeall"]} className={styles.hiddenContent}>
                    <i>see all</i>
                </h4>
                
                {/* image carousel */}
                <div className={styles.images}>
                    <Flicking align="prev" circular={false} style={{margin: "5px 3%"}} onMoveEnd={e => {console.log(e); }}>
                        {spawnImages(boxQuantity)}
                    </Flicking>
                </div>
                
            </>}

            </div>
        )
    }
    





    return (
        <div className="ContentBox" style={{backgroundColor: 'pink'}}>
            {toggleGallery && <Gallery />}
            {/* returns a Piece component for EACH item in the contentData array. */}
            {!toggleGallery && <>{contentData.map((item) =>
               {return (<Subsection id={item.id} title={item.title} content={item.content} boxQuantity={item.boxQuantity} isActive={contentData[item.id].active}/>) }
            )}</>}
           
        </div>
    )

    
}
