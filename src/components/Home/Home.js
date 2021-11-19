import React from 'react';
import Button from '../UI/Button/Button';

import Card from '../UI/Card/Card';
import classes from './Home.module.css';
// posle proverki baary jaiynda bolup kod ishtese, Home kelet ichindegi 'Welcome back!' teksti mn , Buttondu chakyryp agada onLogout propstu bersek oshol jerden any baskanda dele login kyla turgan jeribiz kaira achylat

const Home = (props) => {
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <Button onClick={props.onLogout}>Logout</Button>
    </Card>
  );
};

export default Home;
