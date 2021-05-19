
import { h, render, Component } from 'preact';
import RoomItem from './RoomItem';
import AddRoom from './AddRoom';

export default function Rooms(properties) {
	const {rooms, onAddRoom, onRemoveRoom, friends} = properties;

	return (
		<>
			<h3>Create a new room</h3>
			<AddRoom onAddRoom={onAddRoom}/>
			<section class="room-items">
			{
				rooms.isFetching
				? (<p>Loading rooms...</p>)
				: _.map(rooms.data, (room) => (
					<RoomItem room={room} friends={friends} onRemoveRoom={onRemoveRoom}/>
				))
			}
			</section>
		</>
	);
}


