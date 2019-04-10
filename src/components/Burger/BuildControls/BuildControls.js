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
            <BuildControl key={ctrl.label} type={ctrl.label} />
        ))}
    </div>
);

export default buildConrols;