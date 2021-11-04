import React from "react";
import Card from "../UI/Card";
import classes from "./UserList.module.css";
import Button from "../UI/Button";
 
const UserList = props=> {
     return(
         <Card className ={classes.users}>
            <ul>
                {props.users.map(user =>
                    <li key ={user}> 
                        {user.name} ({user.age} years old)
                    </li>

                    )}

                </ul> 
         </Card>
     )
}

export default UserList;
