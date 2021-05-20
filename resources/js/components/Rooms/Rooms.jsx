
import { h, render, Component } from 'preact';
import RoomItem from './RoomItem';
import AddRoom from './AddRoom';

export default function Rooms(properties) {
	const {rooms, onAddRoom, onRemoveRoom, friends} = properties;

	return (
		<>
			<AddRoom onAddRoom={onAddRoom}/>
			<hr/><br/>
			<section class="room-items">
			{
				rooms.isFetching ? 
				(<p>Loading rooms...</p>) : 
				_.isEmpty(rooms.data) ? 
				(<p>Create one to start your adventure.</p>) : 
				_.map(rooms.data, (room) => (
					<RoomItem room={room} friends={friends} onRemoveRoom={onRemoveRoom}/>
				))
			}
			</section>
		</>
	);
}


