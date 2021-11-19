import React, { useState,useRef,useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthhContext from './store/auth.contex';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);  // pervonochal'noe sostoyanie "false" 
 
 
useEffect(()=> {
  const storedUserLogged = localStorage.getItem('isLoggedIn')
  if (storedUserLogged === '1') {
    setIsLoggedIn(true);
  }
},[])
// console.log(isLoggedIn);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
   
  localStorage.setItem('isLoggedIn', '1')

    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn')
    setIsLoggedIn(false);
  };

  return (
  
    <React.Fragment>
      {/* AuthhContexttin ichinde kandai svoistva bolso oshogo Mainheader,Login,Home dostup ala alat antkeni biz alardy AuthhContext menen orop koiduk,azyr isLoggedIn:false degen svoistva barbar */}
      <AuthhContext.Provider value ={{isLoggedIn:isLoggedIn}}> 
           {/* MainHeader kelet ichinde navigation bar,oshondo MainHeader props mn navigationga otkozup berbeit. Provaiderdegi valueni navigation ozuno alysh uchun,NAvigationdo useContex achyp aga AuthContexti berebiz*/}
            <MainHeader />
            <main>
              {/* App Logindi ozuno chakyryp jatat onLogin degen props bar al ustudogu loginHandlerdi ishtetip jatat */}
              {!isLoggedIn && <Login onLogin={loginHandler} />}  
              {/* bul jerde Homdu chakyryp ,Logouttu ishtetip jatat ,login kylganda  */}
              {isLoggedIn && <Home onLogout={logoutHandler} />}
            </main>
      </AuthhContext.Provider>
      
    </React.Fragment>
  
  );
}

export default App;

export default App;
