
import NoteContext from "./NoteContext";

const NoteState = (props)=>{
   

    const s1= {
        color : "#5D7183",
        title : "CUSTOM LOGO DESIGN",
        image : 'assets/images/logo-image.png',
        para : 'In this age of technology as online business is becoming more and more Paraopular  businesses need to ensure they have a secure andeasy system to be able to charge customers online Our service provides you with a merchant account with the ability of accepting online payments through payment gateway.'
    }
   

    return(
        <NoteContext.Provider value = {s1}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState





// const s1= {
//     "name" : 'Mahtab',
//     "class" : 'BSSE'
// }
// const [state, setState] = useState(s1);
// const update =()=>{
//     setTimeout(()=>{
//         setState({
//             "name" : 'Maryam',
//             "class" : '8th-self'
//         })
//     }, 3000)
// }