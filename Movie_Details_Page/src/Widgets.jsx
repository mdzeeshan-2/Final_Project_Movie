import "./widgets.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import ChangeHistoryIcon from '@mui/icons-material/ChangeHistory';
const Widgets = ()=>{
return <div className='icon'>
<div className="socials">
        <FacebookIcon />
        <TwitterIcon />
        <InstagramIcon />
        <ChangeHistoryIcon />
        <AllInclusiveIcon />
        </div>
        <div>
            <h4 className="sFont">Status</h4>
            <p className="parafont">Released</p>
        </div>
        <div>
            <h4 className="sFont">Original Language</h4>
            <p className="parafont">English</p>
        </div>
        <div>
            <h4 className="sFont">Budget</h4>
            <p className="parafont">$90,000,000.00</p>
        </div>
        <div>
            <h4 className="sFont">Revenue</h4>
            <p className="parafont">$431,796,198.00</p>
        </div>

</div>
}
export default Widgets;