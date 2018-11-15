import './../scss/go.scss'

// Base React modules.
const React = require('react');
const createReactClass = require('create-react-class');
const PropTypes = require('prop-types');

import NotificationCard from './NotificationCard';

import {AlchemyContext} from './AlchemyContext';

import {RuleDataService} from './data/RuleDataService';
import { ToastContainer, toast } from 'react-toastify';

const InteractiveBoard = createReactClass({

	/**
	 * Define the component's properties and their PropTypes.
	 * @type {Object}
	 */
	propTypes: {
		data: PropTypes.object,
		visible: PropTypes.bool
	},

	/**
	 * Define the component's default properties pre-data.
	 * @type {Object}
	 */
	getDefaultProps: function() {
		return {
			data: {}
		};
	  },

	/**
	 * Define the default component state.
	 * @return {Object} The default `this.state` object.
	 */
	getInitialState() {
		return {
			visible: false,
			active: false
		};
	},

	/**
	 * Method called when component has mounted successfully to the ReactDOM.
	 * @return {null} Method doesn't return a value.
	 */
	componentDidMount() {
		
	},

	/**
	 * Method called when component will successfully unmount from the ReactDOM.
	 * @return {null} Method doesn't return a value.
	 */
	componentWillUnmount() {},

	kickOffRules(){
		var ruleDataService = new RuleDataService();
		let rulesPromise = ruleDataService.ReadRules();
		let thisClass = this;

		if(!thisClass.props.data)
		{
			thisClass.props.data = {};
		}
		
		rulesPromise.then(function (result) {
			thisClass.props.data.ruleSet = [];
			thisClass.props.data.ruleSet.push(result.data);

			for (let i = 0; i<thisClass.props.data.ruleSet.length; i++) {
				let ruleSet = thisClass.props.data.ruleSet[i];
				for (let j = 0; j<ruleSet.length; j++) {
					let whoKnows = ruleSet[j];	
					
					for (let key in whoKnows) {
						if (whoKnows.hasOwnProperty(key)) {
							//console.log(key + ": " + whoKnows[key]);
							toast(whoKnows[key].Name);
						  }
						
					}
					
					//toast(ruleSet[j].Name);
				}
			}

		});
	},

	/**
	 * Render the component to the ReactDOM.
	 * @return {Object} JSX Expression.
	 */
	render() {
		if(this.props.visible)
		{
			this.kickOffRules();

			return (
				<div id="interactive-board">
						<div className={"container"}>
							<NotificationCard visible={true} />
						</div>					
				</div>
				);
		}
		return (null);		
	}
});

module.exports = InteractiveBoard;
