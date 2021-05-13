
export default function FriendItem(properties) {
	const {userfriend} = properties;
	const {friend} = userfriend;

	return (
		<p>{friend.username} - {userfriend.status}</p>
	);
}