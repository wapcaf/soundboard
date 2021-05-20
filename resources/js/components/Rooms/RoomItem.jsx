import { useState } from 'preact/hooks';
import ConfirmationButton from '../UI/ConfirmationButton';
import TextInput from '../UI/TextInput';
import Button from '../UI/Button';
import AutoComplete from '../UI/AutoComplete';

export default function RoomItem(properties) {
	const {room, onRemoveRoom, friends} = properties;
	const url = '/rooms/' + room.id;

	const [username, setUsername] = useState('');
	const [autoCompleting, setAutoCompleting] = useState(false);

	const removeRoom = () => {
		axios.delete(`/api/rooms/${room.id}`, {
		}).then((response) => {
			onRemoveRoom(room);
			console.log(response);
		}).catch((error) => {
			console.log(error);
		});
	}

	return (
		<article class="room-item">
			<header>
				<h3><a href={url}><i class="fas fa-door-open"></i>{room.title}</a></h3>

				<div class="room-item__buttons">
					<a href={url}>
						<i class="fas fa-sign-in-alt"></i>
					</a>
					<ConfirmationButton icon="fas fa-trash" onConfirm={removeRoom}/>
				</div>
			</header>

			<hr/>
			<div class="row">
				<div class="col-md-6">
					<TextInput
						icon="fas fa-user-plus"
						placeholder="Invite by username"
						hasAutoComplete={true}
						onChange={setUsername}
						value={username}
					/>
					<AutoComplete
						autoCompleting={autoCompleting}
						search={username}
						searchBy="username"
						from={friends} />
				</div>
				<div class="col-md-6">
					<Button
						text="Invite Link"
						icon="fas fa-link"
					/>
				</div>
			</div>
		</article>
	);
}