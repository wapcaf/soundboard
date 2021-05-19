import { h, render, Component } from 'preact';

export default class IconButton extends Component {
	constructor(props) {
		super(props);

		this.state = {
			icon: props.icon || 'fas fa-grin-beam',
			disabled: props.disabled ||  false,
			className: props.className || '',
			focused: false
		};

		this.props.onClick = this.props.onClick || null;
	}

	render() {
		const buttonClass = 'button button--icon ' + this.state.className;

		return (
			<button
				class={buttonClass}
				disabled={this.state.disabled}
				onClick={this.props.onClick}
			>
				<i class={this.state.icon}></i>
			</button>
		);
	}
}