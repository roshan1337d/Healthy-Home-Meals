import classes from "./index.module.css";
import timeImg from "../../assets/time.svg";
import knifeFormImg from "../../assets/knifefork.svg";
import CusButton from "../button";
import { HashLink } from "react-router-hash-link";

export default function RecipeCard(props) {
    return (
        <div className={classes.card}>
            <div>
                <div className={classes.imgWrap}>
                    <img src={props.image} alt="recipe" />
                </div>
                <div className={classes.name}>{props.name}</div>
            </div>
            <div>
                <div className={classes.item}>
                    <img src={timeImg} alt="icon" className={classes.icon} />
                    <span>Cooking time: </span>
                    <span>{props.time} mins</span>
                </div>
                <div className={classes.item}>
                    <img src={knifeFormImg} alt="icon" className={classes.icon} />
                    <span>Cuisine: </span>
                    <span>{props.cuisine}</span>
                </div>
                <div className={classes.btn}>
                    <HashLink to={"/recipe/" + props.id}>
                        <CusButton text="View recipe" />
                    </HashLink>
                </div>
            </div>
        </div>
    );
}