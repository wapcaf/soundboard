
import { h, render, Component } from 'preact';
import FriendItem from './FriendItem';
import AddFriend from './AddFriend';

export default function Friends(properties) {
	const {userfriends, onAddFriend, onRemoveFriend} = properties;

	return (
		<>
			<section class="friend-items">
			{
				userfriends.isFetching ? 
				(<p>Loading friends...</p>) : 
				_.isEmpty(userfriends.data) ? 
				(<p>You've got none, you loser. Add some below, quickly!</p>) : 
				_.map(userfriends.data, (userfriend) => (
					<FriendItem userfriend={userfriend} onRemoveFriend={onRemoveFriend}/>
				))
			}
			</section>
			<h3>Add a friend</h3>
			<AddFriend onAddFriend={onAddFriend}/>
		</>
	);
}


