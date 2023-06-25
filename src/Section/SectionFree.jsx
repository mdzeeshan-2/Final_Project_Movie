import "./section.css"
import SwitchFree from "../switch/switchFree"
const SectionFree = ({title, children, ...props}) =>{
    return <section className="section">
      <div className="div_title">
      <h2 className="title">{title}</h2>
     <SwitchFree {...props}/>
      </div> 
      <div>{children}</div> 
    </section>
}
export default SectionFree