<x-layout>
	<x-slot name="content">

		<h1>Dashboard</h1>
		<p>Here you will find your friends and rooms.</p>

		<h2>Rooms</h2>

		@foreach ($rooms as $room)
			<p>
				<a href="/rooms/{{ $room->id }}">
					{{ $room->title }}
				</a>
			</p>
		@endforeach (true)

		<form action="/rooms" method="POST">
			@csrf
			<div>
				<label for="name">Name</label>
				<input type="text" id="name" name="name">
			</div>

			<div>
				<button type="submit">Create</button>
			</div>
		</form>
		
	</x-slot>
</x-layout>