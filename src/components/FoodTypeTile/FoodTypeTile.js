import React, {Component, useState} from 'react';
import food from './FoodTypeTile.module.css';

const FoodTypeTile = (props) => {

    const [mouseState, setMouseEntered] = useState(false);
    const mouseEnterHandler = () => {
        setMouseEntered(true);
    }
    const mouseLeaveHandler = () => {
        setMouseEntered(false);
    }

    return (
        <div
            className={food.outer}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            style={{ backgroundColor : !mouseState ? "red" : "black", color: "white"}}

        >
            <div className={food.image}>
                <i className="fa-solid fa-mug-saucer"></i>
            </div>
            <div className={food.names}>
                <div className={food.mainTitle}>{props.heading}</div>
                <span className={food.subTitle}>13 Items</span>
            </div>

        </div>
    );
}

export default FoodTypeTile;