import { h, render, Component } from 'preact';

import Button from './Button';
import TextInput from './TextInput';

export default class InputButton extends Component {
	constructor(props) {
		super(props);
		console.log(props);
		this.state = {
			placeholder: props.placeholder || '',
			icon: props.icon || '',
			buttonText: props.buttonText || '',
			value: props.value || ''
		}
	}

	render() {
		return (
			<div class="input-button">
				<TextInput placeholder={this.state.placeholder} icon={this.state.icon} value={this.state.value} />
				<Button text={this.state.buttonText}/>
			</div>
		);
	}
}