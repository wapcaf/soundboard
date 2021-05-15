
import { h, render, Component } from 'preact';
import RoomItem from './RoomItem';
import AddRoom from './AddRoom';

export default class Rooms extends Component {
	constructor(props) {
		super(props);

		this.state = {
			rooms: [],
			isFetching: false
		};
	}

	componentDidMount() {
		this.setState({ isFetching: true });
		axios.get('/api/rooms', {})
			.then((response) => {
				this.setState({
					rooms: response.data,
					isFetching: false
				});
			})
			.catch((error) => {
				console.log(error);
				this.setState({ isFetching: false });
			});
	}

	render() {
		return (
			<>
				<section class="room-items">
				{
					this.state.isFetching
					? (<p>Loading rooms...</p>)
					: _.map(this.state.rooms, (room) => (
						<RoomItem id={room.id} title={room.title}/>
					))
				}
				</section>
				<h3>Create a new room</h3>
				<AddRoom />
			</>
		);
	}
}


