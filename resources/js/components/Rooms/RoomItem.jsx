
export default function RoomItem(properties) {
	const {title, id} = properties;
	const url = '/rooms/' + id;

	return (
		<article class="room-item">
			<h3>{title}</h3>

			<div class="room-item__buttons">
				<a href={url}>
					<i class="fas fa-sign-in-alt"></i>
				</a>
			</div>
		</article>
	);
}