<x-layout>
	<x-slot name="content">

		<h1>Dashboard</h1>
		<p>Welcome back {{ $user->username }}!</p>

		<h2>Rooms</h2>

		@if (sizeof($rooms) < 1)
			<p>Your rooms will appear here</p>
		@else
			@foreach ($rooms as $room)
				<p>
					<a href="/rooms/{{ $room->id }}">
						{{ $room->title }}
					</a>
				</p>
			@endforeach
		@endif

		<form action="/rooms" method="POST">
			@csrf
			<div>
				<label for="title">Name</label>
				<input type="text" id="title" name="title">
			</div>

			<div>
				<button type="submit">Create</button>
			</div>
		</form>

		<h2>Friends</h2>

		@if (sizeof($userfriends) < 1)
			<p>Friends list will appear here</p>
		@else
			@foreach ($userfriends as $userfriend)
				<p>
					{{ $userfriend->friend->username }}
					- 
					{{ $userfriend->status }}
				</p>
			@endforeach
		@endif

		<form action="/friends/add" method="POST">
			@csrf
			<div>
				<label for="username">Username</label>
				<input type="text" id="username" name="username">
			</div>

			<div>
				<button type="submit">Add</button>
			</div>
		</form>
		
	</x-slot>
</x-layout>