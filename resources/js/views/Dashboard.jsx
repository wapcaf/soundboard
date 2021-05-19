
import { h, render, Component } from 'preact';
import Rooms from '../components/Rooms/Rooms';
import Friends from '../components/Friends/Friends';

export default class Dashboard extends Component {
	constructor(props) {
		super(props);

		this.state = {
			user: {
				data: {},
				isFetching: false
			},
			userfriends: {
				data: [],
				isFetching: false
			},
			rooms: {
				data: [],
				isFetching: false
			}
		};
	}

	fetchAll() {
		this.setState({
			user: {
				isFetching: true
			},
			userfriends: {
				isFetching: true
			},
			rooms: {
				isFetching: true
			}
		});
		const userRequest = axios.get('/api/user');
		const userFriendsRequest = axios.get('/api/friends');
		const roomsRequest = axios.get('/api/rooms');
		axios.all([userRequest,userFriendsRequest,roomsRequest]).then(axios.spread((...responses) => {
			this.setState({
				user: {
					data: responses[0].data,
					isFetching: false
				},
				userfriends: {
					data: responses[1].data,
					isFetching: false
				},
				rooms: {
					data: responses[2].data,
					isFetching: false
				}
			});
		})).catch(errors => {
			console.log(errors);
		});
	}

	onAddFriend = (friend) => {
		this.setState({
			userfriends: {
				data: [...this.state.userfriends.data, friend],
				isFetching: false
			}
		});
	}

	onRemoveFriend = (friend) => {
		this.setState({
			userfriends: {
				data: _.without(this.state.userfriends.data, friend),
				isFetching: false
			}
		});
	}

	onAddRoom = (room) => {
		this.setState({
			rooms: {
				data: [...this.state.rooms.data, room],
				isFetching: false
			}
		});
	}

	componentDidMount() {
		this.fetchAll();
	}

	componentWillUnmount() {
		//clearInterval(this.poller);
	}

	render() {
		return (
			<>
				<h1>Dashboard</h1>
				{
					this.state.user.isFetching
					? (<p>Loading...</p>)
				 	: (<p>Welcome back {this.state.user.data.username}!</p>)
				}

				<div class="row">
					<div class="col-lg-6">
						<h2><i class="fas fa-users"></i>Rooms</h2>
						<Rooms rooms={this.state.rooms} onAddRoom={this.onAddRoom}/>
					</div>
					<div class="col-lg-6">
						<h2><i class="fas fa-user-friends"></i>Friends</h2>
						<Friends 
							userfriends={this.state.userfriends} 
							onAddFriend={this.onAddFriend}
							onRemoveFriend={this.onRemoveFriend}
						/>
					</div>
				</div>
			</>
		);
	}
}