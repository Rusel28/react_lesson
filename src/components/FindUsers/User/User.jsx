import classes from './Users.module.css';
import userFoto from "../../../images/pngwing.png"


function Users(props) {

    return (

        <li className={classes.user}>
            <div className={classes.users_icon}>
                <img className={classes.users_icon_img} src={props.photos.small ?  props.photos.small : userFoto} alt="userFoto" />
                {props.followed ?
                    <button onClick={() => { props.follow(props.id) }} className={classes.users_icon_btn}>Folowed</button>
                    : <button onClick={() => { props.unFollow(props.id) }} className={classes.users_icon_btn}>Unfolowed</button>}

            </div>
            <div className={classes.users_data}>
                <div className={classes.users_data_name}>
                    <div className={classes.users_name}>{props.name}</div>
                    <div>{props.status}</div>
                </div>
                <div >
                    {/* <div>{props.city},{props.country}</div> */}

                </div>

            </div>
        </li>


    )
   
}
export default Users