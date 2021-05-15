import { h, render, Component } from 'preact';

export default class TextInput extends Component {
	constructor(props) {
		super(props);

		this.state = {
			value: props.value || '',
			icon: props.icon,
			placeholder: props.placeholder || '',
			focused: false
		};

		this.textInput = React.createRef();
	}

	focusInput = () => {
		this.focusedInput()
		this.textInput.current.focus();
	}

	focusedInput = () => {
		this.setState({
			focused: true
		});
	}

	blurInput = () => {
		this.setState({
			focused: false
		});
	}

	changeInput = () => {
		this.setState({
			value: this.textInput.current.value
		});
	}

	render() {
		let inputClass = 'input input-text';
		inputClass = this.state.focused ? inputClass + ' input-text--focus' : inputClass;
		inputClass = this.state.value.length > 0 ? inputClass + ' input-text--filled' : inputClass;

		return (
			<label class={inputClass} onclick={this.focusInput}>
				<i class={this.state.icon}></i>
				<input
					ref={this.textInput}
					value={this.state.value}
					onblur={this.blurInput}
					onchange={this.changeInput}
					onfocus={this.focusedInput}
					placeholder={this.state.placeholder}
					type="text"
				/>
			</label>
		);
	}
}