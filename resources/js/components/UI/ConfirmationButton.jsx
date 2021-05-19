import { h, render, Component } from 'preact';

import IconButton from './IconButton';

export default class ConfirmationButton extends Component {
	constructor(props) {
		super(props);

		this.state = {
			icon: props.icon || 'fas fa-grin-beam',
			confirmIcon: props.confirmIcon || 'fas fa-check',
			rejectIcon: props.rejectIcon || 'fas fa-times',
			prompt: false
		};

		this.props.onConfirm = this.props.onConfirm || null;
		this.props.onReject = this.props.onReject || null;

		this.wrapperRef = React.createRef();
	}

	componentDidMount() {
		document.addEventListener('mousedown', this.handleClickOutside);
	}

	componentWillUnmount() {
		document.addEventListener('mousedown', this.handleClickOutside);
	}

	handleClickOutside = (event) => {
		if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
			this.setState({
				prompt: false
			});
		}
	}

	confirm = (e) => {
		this.setState({
			prompt: false
		});
		this.props.onConfirm ? this.props.onConfirm() : null;
	}

	reject = (e) => {
		this.setState({
			prompt: false
		});
		this.props.onReject ? this.props.onReject() : null;
	}

	prompt = (e) => {
		this.setState({
			prompt: true
		});
	}

	render() {
		return (
			<div class="confirmation-buttons" ref={this.wrapperRef}>
			{ 
				this.state.prompt ?
				(
					<>
						<IconButton icon={this.state.confirmIcon} className="button--confirm" onClick={this.confirm}/>
						<IconButton icon={this.state.rejectIcon} className="button--reject" onClick={this.reject}/>
					</>
				) :
				(
					<IconButton icon={this.state.icon} onClick={this.prompt}/>
				)
			}
			</div>
		); 
	}
}