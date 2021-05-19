import ConfirmationButton from '../UI/ConfirmationButton';

export default function FriendItem(props) {
	const {userfriend, onRemoveFriend} = props;
	const {friend} = userfriend;
	const online = true;

	const removeFriend = () => {
		axios.delete(`/api/friends/${userfriend.id}`, {
		}).then((response) => {
			onRemoveFriend(userfriend);
			console.log(response);
		}).catch((error) => {
			console.log(error);
		});
	}

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
					<>
						<span class="friend-item__status">
							({userfriend.status})
						</span>
					</>
				): !online ?
				(
					<span class="friend-item__status">
						(offline)
					</span>
				) : ''
			}
			<div class="friend-item__buttons">
				<ConfirmationButton icon="fas fa-user-times" onConfirm={removeFriend}/>
			</div>
			
		</article>
	);
}