import React,{useContext} from 'react';
import AuthhContext from '../../store/auth.contex';

import classes from './Navigation.module.css';
// user Login kylganda t.e isiLoggedIn true bolgono :users,Admin,logouttar chygat.Any biz 
const Navigation = () => {
  const ctData = useContext(AuthhContext);
  // ctData degen peremennyida bizdin AuthhContext turat (isLoggedIn: false)

  return (
           <nav className={classes.nav}>
           <ul>
             {ctData.isLoggedIn && (
               <li>
                 <a href="/">Users</a>
               </li>
             )}
             {ctData.isLoggedIn && (
               <li>
                 <a href="/">Admin</a>
               </li>
             )}
             {ctData.isLoggedIn && (
               <li>
                 <button onClick={ctData.onLogout}>Logout</button>
               </li>
             )}
           </ul>
         </nav>
  );
};

export default Navigation;
