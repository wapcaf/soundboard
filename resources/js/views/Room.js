
import { h, render, Component } from 'preact';

class Room extends Component {
	constructor(props) {
		super({});
		console.log(props);
	}

	render() {
		return (
			<h1>Room app is open</h1>
		);
	}

}

export default Room;