import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Footer extends Component {
	renderFilter(filter, name) {
		if (filter === this.props.filter) {
			return name;
		}

		return (
			<a onClick={e => {
				e.preventDefault();
				this.props.onFilterChange(filter);
			}}>
				{name}
			</a>
		)
	}

	render() {
		return (
			<p>
				Show:
				{' '}
				{this.renderFilter('SHOW_ALL', '全部')}
				{', '}
				{this.renderFilter('SHOW_COMPLETED', '已完成')}
				{', '}
				{this.renderFilter('SHOW_ACTIVE', '未完成')}
				.
			</p>
		);
	}
}

Footer.propTypes = {
	onFilterChange: PropTypes.func.isRequired,
	filter: PropTypes.oneOf([
		'SHOW_ALL',
		'SHOW_COMPLETED',
		'SHOW_ACTIVE'
	]).isRequired
};