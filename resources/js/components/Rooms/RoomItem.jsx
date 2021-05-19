import ConfirmationButton from '../UI/ConfirmationButton';

export default function RoomItem(properties) {
	const {room} = properties;
	const url = '/rooms/' + room.id;

	const removeRoom = () => {
		console.log(room);
	}

	return (
		<article class="room-item">
			<h3>{room.title}</h3>

			<div class="room-item__buttons">
				<a href={url}>
					<i class="fas fa-sign-in-alt"></i>
				</a>
				<ConfirmationButton icon="fas fa-trash" onConfirm={removeRoom}/>
			</div>

			<hr/>

			INVITE STUFF HERE
		</article>
	);
}