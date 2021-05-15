
export default function FriendItem(properties) {
	const {userfriend} = properties;
	const {friend} = userfriend;
	const online = true;

	console.log(userfriend.status);

	return (
		<article class="friend-item">
			{ 
				online ?
				(<i class="fas fa-user"></i>) :
				(<i class="far fa-user"></i>)
			}
			<span class="friend-item__username">
				{friend.username}
			</span>
			{
				userfriend.status == 'pending' ?
				(
					<span class="friend-item__status">
						({userfriend.status})
					</span>
				): !online ?
				(
					<span class="friend-item__status">
						(offline)
					</span>
				) : ''
			}
			
		</article>
	);
}