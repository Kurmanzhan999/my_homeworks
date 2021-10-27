import React from 'react';

import './CourseGoalItem.css';

const CourseGoalItem = props => {
console.log(props); // zdes' inputka jazylgan znacheniyalardy chygaryp jatat

  const deleteHandler = () => {

    // console.log(props.onDelete); // kogda my najimaem na input values(inputan chykkan znacheniyalarga) ,to udalyaet ix
    props.onDelete(props.id);
  };
  console.log(props.children);

  return (
    <li className="goal-item" onClick={deleteHandler}>
      {props.children}
      
    </li>
  );
};


export default CourseGoalItem;
