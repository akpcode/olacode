import React from "react";
// This is one method of creating an high other component
//const WithClass = props => (
 //   <div className={props.classes}>{props.children}</div>
//);

//Another way of creating which allow us ato add styling and some other properties from the hocis below
// Return a function Component from a function
// This is using spread operator to spread all our props value intp the wrappedComponent so they can be rendered
const withClass = (WrappedComponent, className) => {
    return props => ( 
        <div className={className}>
            
            <WrappedComponent {...props}/>
        </div>
    );
};
export default withClass;