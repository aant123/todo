import React, { Component } from 'react'
import {connect} from 'react-redux'
import {clickCheckbox,getRequersted,deleteRequesed} from '../actions/todoAction'

class todoList extends Component {

    constructor(props){
        super(props);
        this.state={
            checkedCheckBox : this.props.todo.done
        }
        const {getRequersted} = this.props;
        getRequersted();
    }
    changeCheckbox = ev =>{
        
    }
    render() {
        const {todo,deleteRequesed} = this.props
        console.log("todoja",todo);
        return (
           <div>
               <ul className="list-group container col-sm-4 col-sm-offset-4">
               <br></br>
               {todo.map((nameTask,index) => {
               return ( 
                    <li className="text-left list-group-item " keys={nameTask.uid}>
                        <label>
                            <input type="checkbox" id={nameTask.uid} checked={this.state.checkedCheckBox} onChange={this.changeCheckbox}/> {nameTask.title}
                        </label>
                        <span className="glyphicon glyphicon-trash" onClick={() => deleteRequesed(nameTask)}/>
                    </li>
               )
               })}
               </ul>
           </div>
        )
                }
}

const mapStateToProps = state =>({
    todo:state.todoReducer.todo
})
const mapDispatchToProps = dispatch =>({
    clickCheckbox : data => dispatch(clickCheckbox(data)),
    getRequersted: () => dispatch(getRequersted()) ,
    deleteRequesed:data => dispatch(deleteRequesed(data))
})
export default connect(mapStateToProps,mapDispatchToProps)(todoList);