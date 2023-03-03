import React, {Component} from 'react';
import container from './FoodTileContainer.module.css';
import FoodTypeTile from "../FoodTypeTile/FoodTypeTile";

const FoodTileContainer = () =>{

        return (
            <div className={container.outer}>
                <FoodTypeTile heading={"Breakfast"}/>
                <FoodTypeTile heading={"Dinner"}/>
                <FoodTypeTile heading={"Lunch"}/>
                <FoodTypeTile heading={"Drinks"}/>
                <FoodTypeTile heading={"Desserts"}/>
                <FoodTypeTile heading={"Soup"}/>

            </div>
        );

}

export default FoodTileContainer;