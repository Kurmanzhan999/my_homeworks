import classes from './FetchList.module.css';

const FetchList = props => {
    return(
            < >
                <div className={classes.block}>
                    {props.photos.map((photo)=>
                      <div className={classes.cards}>
                           <div className={classes.start}>
                             <h2 className={classes.title}>{photo.title}</h2>
                               <b className={classes.id}>{photo.id}</b>
                            </div>
                             <div className={classes.end}>
                                <big className={classes.text}> Text</big>
                                 <a className={classes.url} href='.'>{photo.thumbnailUrl} </a>
                             </div>
                      </div>
                    )}
                </div>
            </>
    )
}

export default FetchList;