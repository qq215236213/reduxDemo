import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddTodo extends Component {
	render() {
		return (
			<div>
				<input type='text' ref={el => this.input = el} />
				<button onClick={e => this.handleClick(e)}>
					Add
				</button>
			</div>
		);
	}

	handleClick() {
		const text = this.input.value.trim();
		if(text === '')
			return;
		this.props.onAddClick(text);
		this.input.value = '';
	}
}

AddTodo.propTypes = {
	onAddClick: PropTypes.func.isRequired
}