import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            userInfo : {
                name:"Dummy",
                location:"default"
            }
        }

        
    }

    async componentDidMount(){
        const data = await fetch(" https://api.github.com/users/akshaymarch7");
        const json = await data.json();
        console.log(json);

        this.setState({
            userInfo : json,
        })
    }

    render(){
        return(
            <div className="user-card">
                <img src={this.state.userInfo.avatar_url}/>
                <h1>Name : {this.state.userInfo.name}</h1>
                <h2>Location : {this.state.userInfo.location}</h2>
                <h2>Contact : tharejavaibhav@gmail.com</h2>
                
            </div>
        );
    }
}

export default UserClass;