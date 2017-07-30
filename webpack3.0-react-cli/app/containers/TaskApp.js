import React from 'react';
import Header from './Header/Header';
import PropTypes from 'prop-types';
class TaskApp extends React.Component {
	constructor() {
		super();
		this.state = {
			contents: []
		}
	}
	render() {
		return (<div className="app-all-wrapper">
			<Header/>{this.props.test}
		</div>)
	}
}
TaskApp.propTypes={
	test:PropTypes.string
}
export default TaskApp;