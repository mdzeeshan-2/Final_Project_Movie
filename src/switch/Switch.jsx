import { useState, useRef, useLayoutEffect } from "react";
import "./switch.css"
const Switch = ({items, onToggle, isToggled}) => {
// const[isToggled, setToggle] = useState(false);
const[item1Width, setItem1Width] = useState();
const[item2Width, setItem2Width] = useState();
const item1ref = useRef();
const item2ref = useRef();

// const[item3Width, setItem3Width] = useState();
// const[item3Width, setItem3Width] = useState();
// const item3ref = useRef();
// const item3ref = useRef();

useLayoutEffect(()=>{
setItem1Width(item1ref.current.offsetWidth);
setItem2Width(item2ref.current.offsetWidth);
},[])

const onClickHeader=(selectedItem)=>{
    // setToggle(!isToggled)
    onToggle(selectedItem);
}

return <div className="switch">

 <div ref={item1ref} onClick={onClickHeader.bind(null, items[0])}  className={`switch_item ${ isToggled ? '' : 'activecolor'}`}>{items[0]}</div>
 <div ref={item2ref} onClick={onClickHeader.bind(null,items[1])} className={`switch_items ${ isToggled ? 'activecolor': ''}`}>{items[1]}</div>
 <div className="bkg_item" style={
    isToggled?{
        left:`${item1Width}px`,
    width:`${item2Width+2}px`
        }:{
left:'0',
width:`${item1Width}px`
        }
    
 }>

</div>
</div>
}
export default Switch;
