import "./Searchinput.css";
import { forwardRef } from "react";
const SearchInput = forwardRef((props, ref) => {
    return <>
    <input type="text" {...props} ref={ref} className="input"  placeholder="Search for a movie, tv show, person......" />
</>
})
export default SearchInput;