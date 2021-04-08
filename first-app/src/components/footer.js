import React, {Component} from 'react';
import {CtxConsumer} from '../index'


class Footer extends Component
{
    createAlert()
    {
        alert('Hello. You clicked me');
    }

    state = {
        name: " ",
        age: 31
    }

    componentDidMount()
    {
        this.setState({name:'Murilo'});
    }

    changed = evt => 
    {
        this.setState({name: evt.target.value});
        //console.log(this.state.name);
    }
    render()
    {
        const animals = ['cat','dog','horse'];
        return (
            <CtxConsumer>
                {(context)=> {
                    <div>
                        {context.animals.map(animal=>{
                            return <h1>{animal}</h1>
                        })}
                    </div>
                }}
            </CtxConsumer>
        )
        
    }
}

export default Footer;