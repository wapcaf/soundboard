
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

	onRemoveRoom = (room) => {
		this.setState({
			rooms: {
				data: _.without(this.state.rooms.data, room),
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

	getFriends() {
		return _.filter(this.state.userfriends.data, {status: 'accepted'});
	}

	render() {
		console.log(this.getFriends());
		return (
			<>
				<div class="row">
					<div class="col-lg-1"></div>
					<div class="col-lg-10">
						<h1>Dashboard</h1>
						{
							this.state.user.isFetching
							? (<p>Loading...</p>)
						 	: (<p>Welcome back {this.state.user.data.username}!</p>)
						}
					</div>
				</div>

				<div class="row">
					<div class="col-lg-1"></div>
					<div class="col-lg-5">
						<h2><i class="fas fa-door-closed"></i>Rooms</h2>
						<Rooms
							friends={this.getFriends()}
							rooms={this.state.rooms} 
							onAddRoom={this.onAddRoom}
							onRemoveRoom={this.onRemoveRoom}
						/>
					</div>
					<div class="col-lg-1"></div>
					<div class="col-lg-5">
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