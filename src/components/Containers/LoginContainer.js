import React from 'react';
import Login from '../../components/Login/Login';
import Visualizer from '../Visualizer/Visualizer';


export default class LoginContainer extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            emailInput: '',
            passwordInput: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    
    handleInputChange(event){
        this.setState({[event.target.name] : event.target.value});
    }

    render(){
        return(
            <div>
                <Login inputChange={this.handleInputChange} />
                <Visualizer email={this.state.emailInput} password={this.state.passwordInput}/>
            </div>
        )
    }
}