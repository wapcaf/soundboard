
import { h, render, Component } from 'preact';

export default class Room extends Component {
	constructor(props) {
		super({});
		const roomId = parseInt(props.match.params.room, 10);
		this.state = {
			room: {},
			roomId: roomId,
			isFetching: false
		};
	}

	fetchRoom() {
		const fetchUrl = '/api/rooms/' + this.state.roomId;
		this.setState({ isFetching: true });
		axios.get(fetchUrl, {})
			.then((response) => {
				this.setState({
					room: response.data,
					isFetching: false
				});
			})
			.catch((error) => {
				console.log(error);
				this.setState({ isFetching: false });
			});
	}

	componentDidMount() {
		this.fetchRoom();
	}

	render() {
		return (
			<h1>{this.state.room ? this.state.room.title : 'Loading...'}</h1>
		);
	}

}