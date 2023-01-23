import React, { Component } from 'react';
import ToDo from './ToDo';
import NewToDoForm from './NewToDoForm';
import './ToDoList.css'

class ToDoList extends Component{
    state={
        toDos: []
    }

    addToDo = toDo =>{
        this.setState(st=>{
           return{ toDos: [...st.toDos, toDo]}
        })
    }

    editToDo = toDo=>{
        this.setState(st=>{
            const newToDos = st.toDos.map(oldToDo=>{
                if(oldToDo.id=== toDo.id){
                    return toDo;
                }
                return oldToDo;
            })
            return {toDos: newToDos}
        })
    }

    removeToDo = id =>{
        this.setState(st=>{
            const newToDos = st.toDos.filter(toDo => toDo.id !==id)
            return {toDos: newToDos}
        })
    }

    render(){
        const toDos= this.state.toDos.map(toDo=>{
            return <ToDo toDo={toDo.toDo} key={toDo.id} id={toDo.id} remove={this.removeToDo} edit={this.editToDo}></ToDo>
        })

        return <div className='ToDoList'>
            <h1 className='ToDoList-header'>ToDo List</h1>
            <ul className='ToDoList-list'>
                {this.state.toDos.length===0? <p>Start adding ToDos and they will appear here.</p>:toDos}
            </ul>
            <h1 className='ToDoList-header addToDo'>Add a new ToDo</h1>
            <NewToDoForm addToDo={this.addToDo}/>
        </div>
        
    }
}

export default ToDoList;