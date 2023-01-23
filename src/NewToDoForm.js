import React, { Component } from 'react';
import {v4 as uuidv4} from 'uuid'
import './NewToDoForm.css'

class NewToDoForm extends Component{
    state={
        toDo: ''
    }

    handleChange = evt =>{
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    handleSubmit = evt =>{
        evt.preventDefault()
        const newToDo = {...this.state, id:uuidv4()}
        this.props.addToDo(newToDo)
        this.setState({toDo:''})
    }

    render(){
        return <form className='NewToDoForm' onSubmit={this.handleSubmit}>
            <label htmlFor='toDo'>ToDo:</label>
            <input className='NewToDoForm-textInput' type="text" name="toDo" value={this.state.toDo} onChange={this.handleChange} />
            <input className='NewToDoForm-submit' type="submit" />
        </form>
    }
}

export default NewToDoForm;