import React from 'react';
import classes from './Modal.css';
import Auxilliary from '../../../hoc/Auxilliary';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => (

        <Auxilliary>   
            <Backdrop visible={props.visible} clicked={props.modalClosed}/>
             <div 
            className={classes.Modal}
            style={{
                transform: props.visible ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.visible ? '1': '0'
            }}>
                {props.children}
            </div>
     </Auxilliary>
);


export default modal;