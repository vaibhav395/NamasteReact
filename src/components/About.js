import User from "./User";
import UserClass from "./UserClass";
import React from "react";


class About extends React.Component
{
    constructor(props){
        super(props);

        console.log("Parent Constructor");
    }

    componentDidMount(){
        console.log("Parent Component did mount");
    }

    render(){
        return(
            <div>
                {console.log("Parent Render")}
                <h1>About</h1>
                <h2>Learning React</h2>
                <UserClass name = {"First (class component)"}/> 
            </div>
        )
    }
}


export default About;