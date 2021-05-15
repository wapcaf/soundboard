
import { h, render, Component } from 'preact';
import FriendItem from './FriendItem';
import AddFriend from './AddFriend';

export default class Friends extends Component {
	constructor(props) {
		super(props);

		this.state = {
			userfriends: [],
			isFetching: false
		};
	}

	fetchFriends() {
		this.setState({ isFetching: true });
		axios.get('/api/friends', {})
			.then((response) => {
				this.setState({
					userfriends: response.data,
					isFetching: false
				});
			})
			.catch((error) => {
				console.log(error);
				this.setState({'isFetching': false});
			});
	}

	componentDidMount() {
		this.fetchFriends();
	}

	render() {
		return (
			<>
				<section class="friend-items">
				{
					this.state.isFetching ? 
					(<p>Loading friends...</p>) : 
					_.isEmpty(this.state.userfriends) ? 
					(<p>You've got none, you loser. Add some below, quickly!</p>) : 
					_.map(this.state.userfriends, (userfriend) => (
						<FriendItem userfriend={userfriend}/>
					))
				}
				</section>
				<h3>Add a friend</h3>
				<AddFriend/>
			</>
		);
	}
}


