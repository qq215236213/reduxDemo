import React, { Component } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Footer from './Footer';
import {connect} from 'react-redux';
import {addTodo,setVisibilityFilter,toggleTodo,VisibilityFilters} from "../redux/actions";
import PropTypes from 'prop-types';

class App extends Component {
	render() {
		const { dispatch,visibleTodos,visibilityFilter } = this.props;
		return (
			<div>
				<AddTodo
					onAddClick={text =>
						dispatch(addTodo(text))
					} />
				<TodoList
					todos={visibleTodos}
					onTodoClick={index =>
						dispatch(toggleTodo(index))
					} />
				<Footer
					filter={visibilityFilter}
					onFilterChange={nextfilter =>
						dispatch(setVisibilityFilter(nextfilter))
					} />
			</div>
		);
	}
}
App.propTypes = {
	visibleTodos: PropTypes.arrayOf(PropTypes.shape({
		text: PropTypes.string.isRequired,
		completed: PropTypes.bool.isRequired
	})),
	visibilityFilter: PropTypes.oneOf([
		'SHOW_ALL',
		'SHOW_COMPLETED',
		'SHOW_ACTIVE'
	]).isRequired
}

function selectTodos(todos, filter) {
	switch (filter) {
		case VisibilityFilters.SHOW_ALL:
			return todos;
		case VisibilityFilters.SHOW_COMPLETED:
			return todos.filter(todo => todo.completed);
		case VisibilityFilters.SHOW_ACTIVE:
			return todos.filter(todo => !todo.completed);
		default:
			return todos;
	}
}

function select(state) {
	return {
		visibleTodos: selectTodos(state.todos, state.visibilityFilter),
		visibilityFilter: state.visibilityFilter
	};
}

export default connect(select)(App);