import { useState } from "react";
import "./style.css";

const App = () => {
    const [name,setName] = useState('Your name...');
    const [bio,setBio] = useState('Your bio...');
    return(
        <div id="container">
            <img src="https://s359.kapook.com/r/600/auto/pagebuilder/616ae7e1-5001-4240-a6a9-e32f08210ecd.jpg" alt="Wang Yibo" width={300}/>
            <div id="get-input">
                <input type="text" name="name" id="name" placeholder="Type your name" onChange={(e) => setName(e.target.value)}/>
                <input type="text" name="name" id="name" placeholder="Tell us who you are" onChange={(e) => setBio(e.target.value)}/>
            </div>
            <div id="info-display">
                <h1>{name}</h1>
                <p>{bio}</p>
            </div>
            <div id="social">
                <a href="#">Facebook</a>
                <a href="#">Linkedin</a>
            </div>
        </div>
    )
    
}
















// const App = () => {
//     const [name,setName] = useState('Your name...');
//     const [bio,setBio] = useState('Your bio...');
//     return(
//         <div>
//             <img src="https://s359.kapook.com/r/600/auto/pagebuilder/616ae7e1-5001-4240-a6a9-e32f08210ecd.jpg" alt="Wang Yibo" width={300}/>
//             <GetInfo setProfileName = {setName} setShortBio = {setBio}/>
//             <ShowInfo displayName = {name} shortBio = {bio} />
//             <Social />
//         </div>
//     )
// }

// const GetInfo = ({setProfileName,setShortBio}) => {
//     return(
//         <div>
//             <input type="text" name="name" id="name" placeholder="Type your name" onChange={(e) => setProfileName(e.target.value)}/>
//             <input type="text" name="name" id="name" placeholder="Tell us who you are" onChange={(e) => setShortBio(e.target.value)}/>
//         </div>
//     )
// }

// const ShowInfo = ({displayName,shortBio}) => {
//     return(
//         <div>
//             <h1>{displayName}</h1>
//             <p>{shortBio}</p>
//         </div>
//     )
// }

// const Social = () => {
//     return(
//         <div>
//             <a href="">Facebook</a>
//             <a href="">Linkedin</a>
//         </div>
//     )
// }

export default App;