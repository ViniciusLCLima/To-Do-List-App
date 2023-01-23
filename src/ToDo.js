import React, {Component} from 'react';
import './ToDo.css'

class ToDo extends Component{
    state = {
        isEditing: false,
        toDo: this.props.toDo,
        isDone: false
    }

    toDoClickHandler = e => {
        this.setState({
            isDone: !this.state.isDone
        })
    }

    remClickHandler = e =>{
        this.props.remove(this.props.id)
    }

    changeHandler = evt =>{
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    submitHandler = evt =>{
        evt.preventDefault()
        this.props.edit({toDo: this.state.toDo, id: this.props.id})
        this.setState({ isEditing:false})
    }

    editClickHandler = e =>{
        this.setState({isEditing: true})
    }

    render(){
        const editForm = <form className='ToDo' onSubmit={this.submitHandler}>
            <input className='ToDo-textInput'type="text" name="toDo" value={this.state.toDo} onChange={this.changeHandler}/>
            <button>Save</button>
        </form>
        const item = <div className='ToDo'><li className={`ToDo-Li ${this.state.isDone && "isDone"}`} onClick={this.toDoClickHandler}>{this.props.toDo}</li>
        <button onClick={this.editClickHandler}><i class="fa-solid fa-pen"></i></button>
        <button onClick={this.remClickHandler}><i class="fa-solid fa-trash-can"></i></button>
        </div>
        return this.state.isEditing? editForm : item
    }
}
export default ToDo;