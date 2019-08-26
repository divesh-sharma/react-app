import React from 'react';
import ReactDOM from 'react-dom';

// const App = ()=>{
//     return <div>HI there</div>
// };
function getButtonText(){
    return 'my function button';
}
const App =()=>{
    const buttonText = {text:'click me'};
    const style = {backgroundColor: 'blue',color:'white'}
    return (
        <div>
            <label htmlFor="name">Enter Name:</label>
            <input id="name"/>
            <button 
            style={{backgroundColor:'red' , color:'white'}}>
                hi</button>
                <button style ={style}>{buttonText.text}</button>
        </div>
    )
}

ReactDOM.render(
    <App />, 
    document.querySelector('#root')
);






 