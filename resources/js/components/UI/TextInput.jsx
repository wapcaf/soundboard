import { h, render, Component } from 'preact';

export default class TextInput extends Component {
	constructor(props) {
		super(props);

		this.state = {
			icon: props.icon || '',
			placeholder: props.placeholder || '',
			focus: false
		};

		this.textInput = React.createRef();
	}

	onFocus = () => {
		this.setState({focus: true});
	}

	onBlur = () => {
		this.setState({focus: false});
	}

	handleChange = () => {
		const text = this.textInput.current.value;
		this.props.onChange ? this.props.onChange(text) : null;
	}

	render() {
		let inputClass = 'input input-text';
		if (this.props.value)
			this.props.value.length > 0 ? inputClass += ' input-text--filled' : null;
		this.state.focus ? inputClass += ' input-text--focus' : null;
		return (
			<label class={inputClass} onclick={this.focusInput}>
				<i class={this.state.icon}></i>
				<input
					ref={this.textInput}
					placeholder={this.state.placeholder}
					onChange={this.handleChange}
					onFocus={this.onFocus}
					onBlur={this.onBlur}
					value={this.props.value || ''}
					type="text"
				/>
			</label>
		);
	}
}