
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PNavbar from './PNavbar';


const Newsletter = () => {
    
  return (
    <>
    <PNavbar/>
      <div className='nlContainer'>
        <div className='nlIcon'>
            <MailOutlineIcon/>
        </div> 
        <div className='nlTitle'>Get On The List</div>
        <div className='nlDesc'>Get more updates of your desired product</div>
        <div className='nlInputContainer'>
            <input className='nlInput' placeholder='Your Email'/>
            <button className='nlButton'>
                Subscribe
            </button>
        </div>
      </div>
    </>
    
  )
}

export default Newsletter