import React, {useState, useEffect} from 'react'
import styles from './Foco.module.css'

import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import image0 from "../assets/images/0/0.JPG";
import image1 from "../assets/images/0/1.JPG";
import image2 from "../assets/images/0/2.JPG";
import image3 from "../assets/images/0/3.JPG";
import image4 from "../assets/images/0/4.JPG";

export default function Foco() {


    var contentData = [
        {
            id: 0,
            title: "Desktop Fotoset001",
            content: "I promise I've taken more than five photos. Just pulled some from throwaways my desktop to make this carousel work. Will add more,, but check this clean scroll :)",
            boxQuantity: 5,
            active: false,
        },
        // {
        //     id: 1,
        //     title: "u doubted me",
        //     content: "but that's okay",
        //     boxQuantity: 3,
        //     active: false,
        // },
        // {
        //     id: 2,
        //     title: "It'sasdfadfg the month",
        //     content: "welcome to the zonee",
        //     boxQuantity: 6,
        //     active: false,
        // },
        // {
        //     id: 3,
        //     title: "It'asdfadsghsirst of the month",
        //     content: "welcome to the zonee",
        //     boxQuantity: 12,
        //     active: false,
        // },
        // {
        //     id: 4,
        //     title: "It's the asdfasdf of the month",
        //     content: "welcome to the zonee",
        //     boxQuantity: 0,
        //     active: false,
        // }
    ]


    const imgList = [image0, image1, image2, image3, image4];
    
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

        const imgstyle = {
           
            maxHeight: "300px",
            border: '3px solid #fffff5',
            borderRadius: '5px',
        }


        //returns a number of div's equal to a section's boxQuantity.
        const spawnImages = (num) => {
            var elements = [];
            imgList.map((img)=>{
                elements.push(<div class="panel" style={{margin: "0px 5px"}}><img alt="img" src={img} style={imgstyle}/></div>);
                return 0;
            })
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
                {/* <h4 onClick={()=>{setToggleGallery(true)}} id={styles["seeall"]} className={styles.hiddenContent}><i>see all</i></h4> */}
                
                {/* image carousel */}
                <div className={styles.images}>
                    <Flicking align="prev" circular={true} style={{margin: "5px 3%", overflow: "auto"}} >
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
