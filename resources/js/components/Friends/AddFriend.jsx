import TextInput from '../UI/TextInput';
import Button from '../UI/Button';
import { useState } from 'preact/hooks';

export default function AddFriend(props) {
	let button = React.createRef();
	let input = React.createRef();

	const {onAddFriend} = props;
  	const [username, setUsername] = useState('');

	const clickSubmit = (e) => {
		axios.post('/api/friends', {
			username: username
		}).then((response) => {
			onAddFriend(response.data);
			setUsername('');
		}).catch((error) => {
			console.log(error);
		});
	};

	return (
		<section class="friend-items-add">
			<div class="row">
				<div class="col-lg-8">
					<TextInput 
						icon="fas fa-user-plus" 
						onChange={setUsername} 
						ref={input} 
						value={username}
						placeholder="Username"/>
				</div>
				<div class="col-lg-4">
					<Button icon="fas fa-plus" onClick={clickSubmit} ref={button} text="Add"/>
				</div>
			</div>
		</section>
	);
}