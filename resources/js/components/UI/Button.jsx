import { h, render, Component } from 'preact';

export default class Button extends Component {
	constructor(props) {
		super(props);

		this.state = {
			text: props.text || '',
			icon: props.icon || '',
			disabled: props.disabled || false,
			focused: false
		};

		this.props.onClick = this.props.onClick || null;
	}

	render() {
		const buttonClass = 'button';
		
		return (
			<button
				class={buttonClass}
				disabled={this.state.disabled}
				onClick={this.props.onClick}
			>
				{this.state.icon != '' ? (<i class={this.state.icon}></i>) : ''}
				{this.state.text}
			</button>
		);
	}

}