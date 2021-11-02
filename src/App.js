import React, { useState } from 'react';

import CourseGoalList from './components/CourseGoals/CourseGoalList/CourseGoalList';
import CourseInput from './components/CourseGoals/CourseInput/CourseInput';
import './App.css';
 //Appta baaryn chogultup jatabyz ,addGoalHandler,deleteItemHandler degen metotordu koshup
const App = () => {  
  const [courseGoals, setCourseGoals] = useState([ // бул стейттин ичинде 2 object saktait,esli obnovim staranisu to vyhodit eti 2 objects
    { text: 'Do all exercises!', id: 'g1' },
    { text: 'Finish the course!', id: 'g2' }
  ]);
  const addGoalHandler = enteredText => {
    setCourseGoals(prevGoals => {
      const updatedGoals = [...prevGoals]; //murunku maanilerdi koshup chygaryp jatat
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedGoals;
    });
  };

  const deleteItemHandler = goalId => {
    setCourseGoals(prevGoals => {
      const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
      return updatedGoals;
    });
  };

  let content = (
    <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>  //bul peremennyi ,ushundai teksti kamtyit
  );

  if (courseGoals.length > 0) { // goaldardyn baar chygat jana jany jazylgandarda,egerde oshol goaldardy bassak delete bolot dagy,
    //  baary ochkondon kiin ustudogг contentegi text chygat
    content = (
      <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} /> 
    );
  }
  return (
    <div>

      <section id="goal-form">
        <CourseInput onAddGoal={addGoalHandler} /> 
        {/* bul jerde user inputka  jazgan goaldar jana addGoalHandler chakyrylyp jatat al jany koshulgan goaldardy chygarat */}
      </section>
      <section id="goals">
        {content}
        {/* {courseGoals.length > 0 && (
          <CourseGoalList
            items={courseGoals}
            onDeleteItem={deleteItemHandler}
          />
        ) // <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
        } */}
      </section>
    </div>

  );
};


export default App;

