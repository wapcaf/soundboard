import TextInput from '../UI/TextInput';
import Button from '../UI/Button';

export default function AddFriend(properties) {

	return (
		<div class="row">
			<div class="col-md-8">
				<TextInput icon="fas fa-user-plus" placeholder="Username"/>
			</div>
			<div class="col-md-4">
				<Button icon="fas fa-plus" text="Add"/>
			</div>
		</div>
	);
}