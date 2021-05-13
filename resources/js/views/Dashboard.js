
import { h, render, Component } from 'preact';
import Rooms from '../components/Rooms/Rooms';
import Friends from '../components/Friends/Friends';

export default class Dashboard extends Component {
	constructor(props) {
		super(props);

		this.state = {
			user: {},
			isFetching: false
		};
	}

	fetchUser() {
		this.setState({'isFetching': true});
		axios.get('/api/user', {})
			.then((response) => {
				this.setState({
					user: response.data,
					isFetching: false
				});
			})
			.catch((error) => {
				console.log(error);
				this.setState({'isFetching': false});
			});
	}

	componentDidMount() {
		this.fetchUser();
	}

	componentWillUnmount() {
		//clearInterval(this.poller);
	}

	render() {
		return (
			<>
				<h1>Dashboard</h1>
				{
					this.state.isFetching
					? (<p>Loading...</p>)
				 	: (<p>Welcome back {this.state.user.username}!</p>)
				}

				<h2>Rooms</h2>
				<Rooms/>

				<h2>Friends</h2>
				<Friends/>
			</>
		);
	}
}