import Form from './Form';
import React, { useState } from 'react';
function Comment(props){
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
                        <span className='Author'>{item.name}</span>
                        <span> • </span>
                        <span className='Time'>{item.date}</span>
                    </div>
                        <p>{item.comment}</p>
                    </div>
            })
        }
        </div>
    </div>
    )
}
export default Comment;