import React ,{ Component } from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

class TodoList extends Component{
    render(){
        const {todos,onTodoClick} = this.props;
        const li = todos && todos.map((item,index)=>{
            return (
                <Todo key={index} {...item} onClick={()=>onTodoClick}/>
            );
        })
        return (
            <ul>
                { li }
            </ul>
        );
    }
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    onTodoClick: PropTypes.func.isRequired
}

export default TodoList;