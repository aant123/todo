import React, { Component } from 'react'
import {postRequersted,getRequersted} from '../actions/todoAction'
import {connect} from 'react-redux'
import TodoList from './todoList'

class todo extends Component {
    constructor(props){
        super (props);
        this.state={
            inputData:''
        };
    }
    changeInputTask = text => {
        this.setState({inputData:text.target.value});
    }
    addToDoButtonFn = data =>{
        this.setState({inputData:''});
        this.props.postRequersted(data);
    }
    render() {
        // const {getRequersted} = this.props;
        // getRequersted();
        return (
            <form className="form-inline container">
                <div className="form-group">
                    <label for="exampleInputName2"> Input Task </label>
                    <input type="text" className="form-control" id="inputTask" value={this.state.inputData} onChange={this.changeInputTask} placeholder="Input Task"/>
                </div>
                <button type="button" className="btn btn-default" onClick={() => this.addToDoButtonFn(this.state.inputData)}>Add Todo</button>
                <TodoList/>
            </form>
                    )
                }
}

const mapStateToProps = state =>({
    task:state.todoReducer.task
})

const mapDispatchToProps = dispatch =>({
    postRequersted : task => dispatch(postRequersted(task)),
    // getRequersted: () => dispatch(getRequersted())
})
            
export default connect(mapStateToProps,mapDispatchToProps)(todo);