import React, {Component} from "react";

class ErrorBoundary extends Component {
    // seting state with class
    state = {
        hasError: false,
        errorMessage: ''
    }

    //Adding new method which receives pottential error and some additional info passed
    componentDidCatch = (error, info) => {
    //setting errorMessage equal to the error which should be the message
        this.setState({hasError: true, errorMessage: error});
    }
    
    render() {
        // possible outcomes 
        // outcome 1
        if (this.state.hasError) {
            return <h1>{this.state.errorMessage}</h1>;
        } else {
            return this.props.children;
        }
        
    }
}
export default ErrorBoundary;