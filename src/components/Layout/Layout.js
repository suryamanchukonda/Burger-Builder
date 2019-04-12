import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = (props) => (
    <Aux>
        {/* <React.Fragment> */}
        <Toolbar />
        <main className={classes.Content}>
            {props.children}
        </main>
        {/* </React.Fragment> */}
    </Aux>
);

export default layout;