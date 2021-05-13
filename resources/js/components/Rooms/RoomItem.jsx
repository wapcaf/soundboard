
export default function RoomItem(properties) {
	const {title, id} = properties;
	const url = '/rooms/' + id;

	return (
		<p><a href={url}>{title}</a></p>
	);
}