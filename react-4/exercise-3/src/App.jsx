import React, { useState, useEffect } from "react";
import './style.css';
const App = () => {
    const [fullname, setFullName] = useState();
    const [age, setAge] = useState();
    const [image, setImage] = useState();
    const [displayData, setDisplayData] = useState();
    const [displayCondition, setDisplayCondition] = useState();

    const getName = (e) => {
        setFullName(e.target.value)
    }
    const getAge = (e) => {
        setAge(e.target.value)
    }
    const getImage = (e) => {
        setImage(e.target.value)
    }
    useEffect(() => {
        switch (displayCondition) {
            case 'FULLNAME' :
                setDisplayData(fullname);
                break;
            case 'AGE' :
                setDisplayData(age);
                break;
            case 'IMAGE' :
                setDisplayData(<img src={image} />);
                break;
            default : 
                setDisplayData('Please input data'); 
                break;
        }
    },[displayCondition])

    return (
        <div className="main-app">
            <div className="inp-data">
                <input type="text" name="fullname" id="fullname" placeholder="Type your name" value={fullname} onChange={getName}/>
                <input type="text" name="age" id="age" placeholder="Type your age" value={age} onChange={getAge}/>
                <input type="text" name="image-url" id="image-url" placeholder="Paste image url" value={image} onChange={getImage}/>
                <div className="showDetail">
                    <button onClick={() => setDisplayCondition("FULLNAME")} >Fullname</button>
                    <button onClick={() => setDisplayCondition("AGE")}>Age</button>
                    <button onClick={() => setDisplayCondition("IMAGE")}>Image</button>
                </div>
            </div>
            <div className="display-data">
                <p>{displayData}</p>
            </div>
        </div>
    )
}


export default App;