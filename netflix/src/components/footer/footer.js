import { FaFacebookF } from 'react-icons/fa';
import {AiOutlineInstagram, AiOutlineTwitter, AiFillYoutube} from 'react-icons/ai';
import "../../App.css";

function Footer(){
    return(
        <div className="footer-container">
            <div className="footer-brand-icon">
                <div className="facebook"><FaFacebookF/></div>
                <div className="instagram"> <AiOutlineInstagram/></div>
                <div className="twitter"> <AiOutlineTwitter/> </div>
                <div className="youtube"> <AiFillYoutube/></div>
            </div>
            <div className='grid-container-list'>
                <div className='grid-item'>Audio and subtitle</div>
                <div className='grid-item'>Audio Description</div>
                <div className='grid-item'>Help Center</div>
                <div className='grid-item'>Gift card</div>
                <div className='grid-item'>Media Center</div>
                <div className='grid-item'>Investor Relations</div>
                <div className='grid-item'>Jobs</div>
                <div className='grid-item'>Teams of Use</div>
                <div className='grid-item'>Privacy</div>
                <div className='grid-item'>Ledal Notices</div>
                <div className='grid-item'>Cookie Preferences</div>
                <div className='grid-item'>Corporate Information</div>
                <div className='grid-item'>Contact Us</div>
            </div>
            <div className='server-code'>
                <span className='server-code-btn'>Server code</span>
            </div>
            <div className='copyright-contain'>
                <span>© 1997-2022 Netflix, Inc.</span>
            </div>
        </div>
    )
}

export default Footer;