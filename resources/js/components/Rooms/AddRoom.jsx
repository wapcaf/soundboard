import TextInput from '../UI/TextInput';
import Button from '../UI/Button';
import { useState } from 'preact/hooks';

export default function AddRoom(properties) {
	let button = React.createRef();
	let input = React.createRef();

	const {onAddRoom} = properties;
	const [roomname, setRoomname] = useState('');

	const clickSubmit = (e) => {
		axios.post('/api/rooms', {
			title: roomname
		}).then((response) => {
			onAddRoom(response.data);
			setRoomname('');
		}).catch((error) => {
			console.log(error);
		});
	}

	return (
		<section class="room-items-add">
			<div class="row">
				<div class="col-lg-8">
					<TextInput 
						icon="fas fa-door-open" 
						onChange={setRoomname} 
						ref={input} 
						value={roomname}
						placeholder="Room name"/>
				</div>
				<div class="col-lg-4">
					<Button icon="fas fa-plus" onClick={clickSubmit} ref={button} text="Create"/>
				</div>
			</div>
		</section>
	);
}