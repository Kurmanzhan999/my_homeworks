import Form from './Form';
import React, { useState } from 'react';
import './Comment.css'
function Comment(){
    let DATA = []
    const [data, setData] = useState(DATA)
    function addToData(newData){
      setData([
        ...data,
        newData
      ])
    }
    return(
    <div>
        <Form add={addToData}/>
        <div>
        {
            data.map(item => {
                return <div>
                    <div>
                        <span className='user'>{item.name}</span>
                        <span className='date'>{item.date}</span>
                    </div>
                        <p className="comment">{item.comment}</p>
                        <hr/>

                    </div>
            })
        }
        </div>
    </div>
    )
}
export default Comment;