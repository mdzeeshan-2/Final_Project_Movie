import "./circle.css"


const ProgressCircle = ({percent})=>{

const dashArray = Math.PI * 100

const dashOffset = Math.PI * (100-percent)

const bar={
    low:"#db2360",
    medium:"#d2d531",
    high:"#21d07a",
    none:"#d4d4d4,"
}


const track={
    low:"#571435",
    medium:"#423d0f",
    high:"#204529",
    none:"#666666"
}


const getColor=(rating)=>{
if(rating>=70) return "high";
if(rating>=40) return "medium";
if(rating>0) return "low";
return "none"
}



    return <div className="circle">

<svg className="svg" viewBox="0 0 100 100" >
    <circle cx={52.5} cy={52.5} r={50} strokeDasharray={dashArray} 
     fill="transparent" stroke={track[getColor(percent)]} strokeWidth={6}  className="circle_inner"/>

    <circle cx={52.5} cy={52.5} r={50} strokeDasharray={dashArray} 
    strokeDashoffset={dashOffset}
     fill="transparent" stroke={bar[getColor(percent)]} strokeWidth={6} strokeLinecap="round" className="circle_inner"/>
     
</svg>
<div className="percent">{percent?<div>{percent}<span className="show_percent">%</span></div>:"NR"}

</div>
</div>
}
export default ProgressCircle
