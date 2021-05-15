import { h, render, Component } from 'preact';

export default class Button extends Component {
	constructor(props) {
		super(props);

		this.state = {
			text: props.text || '',
			icon: props.icon || '',
			focused: false
		};
	}

	render() {
		return (
			<button>
				{ 
					this.state.icon != '' ?
					(<i class={this.state.icon}></i>) :
					''
				}
				{this.state.text}
			</button>
		);
	}

}