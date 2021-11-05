import React from "react";
import Card from "../UI/Card";
import classes from "./UserList.module.css";
import { ConfirmDelete } from "./ConfirmDelete"; 
const UserList = props=> {
     return(
         <div>
         <Card className ={classes.users}>
            <ul>
                {props.users.map(user =>
                    <ConfirmDelete key ={user.id} id={user.id} onDelete={props.onDelete}> 
                        {user.name} ({user.age} years old)
                    </ConfirmDelete>

                    )}

                </ul> 
         </Card>
         </div>
     )
}

export default UserList;

