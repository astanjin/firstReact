
import { render } from '@testing-library/react';
import React from 'react';

class College extends React.Component{
    constructor(){
        super()
        this.state = {collegeName :"George Brown College"}
}
    render(){
        return(
            <h6>{this.state.collegeName}</h6>
        )
    }
}

// College.defaultProps = {
//     collegeName :"college"
// }

export default College