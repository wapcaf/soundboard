
export default function AutoComplete(props) {
	const {autoCompleting, search, searchBy, from} = props;

	const results = _.filter(from, (item) => {
		return _.includes(item.friend.username, search);
	});

	const className = search.length == 0 ? 
		'auto-complete auto-complete--empty' : 
		'auto-complete';

	return (
		<div class="auto-complete-wrapper">
			<div class={className}>
			{
				search.length > 0 ? 
					results.length > 0 ?
						_.map(results, (result) => (
							<button>
								<i class="fas fa-plus"></i>
								{result.friend.username}
							</button>
						)):
					(
							<p>No matching friends</p>
					) : null
			}
			</div>
		</div>
	);
}