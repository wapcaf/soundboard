
export default function AutoComplete(props) {
	const {autoCompleting, search, searchBy, from} = props;

	const results = _.filter(from, (item) => {
		return _.includes(item.friend.username, search);
	});


	return (
		<div class="auto-complete">
		{ 
			search.length > 0 ?
				results.length > 0 ?
					_.map(results, (result) => (
							<p>{result.friend.username}</p>
					)):
				(<p>No matching friends</p>) : null
		}
		</div>
	);
}