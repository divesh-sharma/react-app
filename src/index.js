import React from 'react';
import ReactDOM from'react-dom';
//class can have many method and borrow from react.compoenent
class App extends React.Component{
    constructor(props){
        super(props);
//this is the oonly time we do direct assihnment to this.state
        this.state={lat:null,
        errorMessage:''}//initialize state object we not lat so take it null
        window.navigator.geolocation.getCurrentPosition(
            (position)=>{
        //we called  setstate when we have to update out state
            this.setState({lat:position.coords.latitude});
        // we did not this.state.lat =position.coords.latitude
        },
            (err)=>this.setState({errorMessage:err.message})
           );
    }
    render(){
       
    
         if(this.state.errorMessage&&!this.state.lat){
             return <div>Error:{this.state.errorMessage}</div>;
         }
         if(!this.state.errorMessage&& this.state.lat){
             return <div>Latitude:{this.state.lat}</div>;
         }
         return <div>Loading!</div>
    }
} 
   


ReactDOM.render(
    <App />,
    document.querySelector('#root')
)

