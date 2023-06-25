import "./section.css"
import Switch from "../switch/Switch"
const Section = ({title, children, ...props}) =>{
    return <section className="section">
      <div className="div_title">
      <h2 className="title">{title}</h2>
     <Switch {...props}/>
      </div> 
      <div>{children}</div> 
    </section>
}
export default Section