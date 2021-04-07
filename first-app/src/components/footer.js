import React, {Component} from 'react';

class Footer extends Component
{
    createAlert()
    {
        alert('Hello. You clicked me');
    }
    render()
    {
        return (
            <div>
                <h2 onClick={this.createAlert}>
                {this.props.trademark}
                </h2>
                <input type="text"/>
            </div>
            
        )
        
    }
}

export default Footer;