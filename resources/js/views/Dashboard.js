
import { h, render, Component } from 'preact';

class Dashboard extends Component {

	constructor(props) {
		super({});
		axios.get('/api/rooms', {})
			.then(function(response) {
				console.log(response);
			})
			.catch(function (error) {
				console.log(error.response);
			});
	}

	render() {
		return (
			<h1>Dashboard app is open</h1>
		);
	}
}

export default Dashboard;