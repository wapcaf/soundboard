import TextInput from '../UI/TextInput';
import Button from '../UI/Button';

export default function AddRoom(properties) {

	return (
		<div class="row">
			<div class="col-md-8">
				<TextInput icon="fas fa-plus-square" placeholder="Room name"/>
			</div>
			<div class="col-md-4">
				<Button icon="fas fa-plus-square" text="Create"/>
			</div>
		</div>
	);
}