import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import PNavbar from './PNavbar';

const Footer = (props) => {

  const {id} = props.data
  
  return (
    <>
    <PNavbar/>
        {`user id is ${id}`}
        
      <div className='fContainer'>
        
        <h2 className='fTitle'>Contact Us: </h2>
        <div>
          <iframe className="ratio" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3380.5241713591568!2d72.69573341424501!3d32.08211622639965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392177b8390f46cb%3A0xe6434929405fb81a!2sSparkSolutionz!5e0!3m2!1sen!2s!4v1680591372795!5m2!1sen!2s"></iframe> 
        </div>
        <div className='fWrapper'>
          <li className='fListitems'><RoomIcon style = {{marginRight : "5px"}}/>Sharja, UAE</li >
          <li className='fListitems'><PhoneIcon style = {{marginRight : "5px"}}/>+971 6 536 1208</li >   
          <li className='fListitems'><PhoneIcon style = {{marginRight : "5px"}}/>+971 50 113 6980</li >
          <li className='fListitems'><EmailIcon style = {{marginRight : "5px"}}/>asim@telecom.com</li >  
        </div>
        </div>
    </>
    
    
  )
}

export default Footer


// App.js Code
// Before return()
// const location = useLocation()

  // const [showmodal, setShowmodal] = useState(false);

  //   useEffect(() => {
  //   console.log(location.pathname) 
  //   if(
  //       location.pathname === "/contacts"  ||
  //       location.pathname === "/contacts/"
  //   ){    
  //     setShowmodal(true)
  //   }
  // }, [location.pathname,]);
  // const handleClose = () =>{
  //   setShowmodal(false);
  // }

  {/* In return()
   { showmodal && <Modal show = {true}>
          <ModalHeader>Visit Us</ModalHeader>
          <ModalBody>
            <iframe className="ratio" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3380.5241713591568!2d72.69573341424501!3d32.08211622639965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392177b8390f46cb%3A0xe6434929405fb81a!2sSparkSolutionz!5e0!3m2!1sen!2s!4v1680591372795!5m2!1sen!2s"></iframe> 
          <ModalFooter>
            <Button onClick={handleClose}>
              Close
            </Button>
          </ModalFooter>
          </ModalBody>  
        </Modal>
      }
      <Routes>
        <Route path = '/' element = {<MainHeader/>}>
          <Route index element = {<Home image = '/assets/images/wallpaper1.jpg'/> }/>
          <Route path = 'newsletter' element = {<Newsletter/>}/>
          <Route path = 'contacts' element = {<Contacts onClick = {location.pathname} />}/>
          <Route path = '*' element = {<Error/>}/>
        </Route>
      </Routes> */}