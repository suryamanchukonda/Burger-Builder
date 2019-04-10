import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildContol';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
];

const buildConrols = (props) => (
    <div className={classes.BuildControls}>
        {controls.map(ctrl => (
            <BuildControl
                added = {() => props.ingredientAdded(ctrl.type)}
                key={ctrl.label}
                label={ctrl.label}
                removed={() => props.ingredientRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]} />
        ))}
    </div>
);

export default buildConrols;