import React, {useState, useLayoutEffect} from 'react'
import styles from './Bubble.module.css'



export default function NewBubble(props) {

    //boof handmade random function. big number first
    const random = (bigint, smallint) => {
        return Math.floor(Math.random() * bigint + smallint);
    }




    //sets the size & position of bubble using random function above.
    //they don't really change, so no second half to hook implemented.
    //can change when necessary!
    const [size] = useState(random(200, 50));
    const [position] = useState([random(70, 10), random(60, 10)]);

    

    //sets CSS class of bubble. takes from NewBubble CSS module.
    const [bubbleClass, setBubbleClass] = useState(styles.bubbleStyle);
    const [bubbleStyle, changeBubbleStyle] = useState();
    //whether or not the bubble's activated by a "click".
    const [activated, setActivated] = useState(false);


    const [offState] = useState({
        backgroundColor: props.color,
        height: size,             
        width: size,            
        fontSize: size/4,
        left: position[0] + '%',
        top: position[1] + '%',
        zIndex: 1,
    });

    const [onState] = useState({
        backgroundColor: props.color,
    });
    
    useLayoutEffect(()=>{
        //activation entails changing the Selected State, 
        //the Styles State, and the CSS module.
        //thus deactivation (w/ an exit button) must entail these three
        if(activated){
            props.changeSelected(props.index);
            setBubbleClass(styles.activatedBubble);
            changeBubbleStyle(onState);
            props.onclick();
             
            
        }
        else if (!activated){
            props.changeSelected(0);
            setBubbleClass(styles.bubbleStyle);
            changeBubbleStyle(offState);
        }


        if (!props.activatable){
            props.changeSelected(0);
            setBubbleClass(styles.bubbleStyle);
            changeBubbleStyle(offState);
        }
        // eslint-disable-next-line
    }, [activated, offState, onState])

    return (

            <div onClick={()=>{setActivated(!activated)}} style={bubbleStyle} className={bubbleClass}>

                <div className={styles.innerStyle}>
                    {(!activated || !props.activatable) && props.title}
                    <div className={styles.children}>{activated && props.children}</div>
                </div>

            </div>

    )
}
