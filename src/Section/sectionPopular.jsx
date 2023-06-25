import "./section.css"
import SwitchPopular from "../switch/switchPopular";
const SectionPopular = ({title, children, ...props}) =>{
    return <section className="section">
      <div className="div_title">
      <h2 className="title">{title}</h2>
     <SwitchPopular {...props}/>
      </div> 
      <div>{children}</div> 
    </section>
}
export default SectionPopular;