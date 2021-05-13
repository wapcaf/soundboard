<x-layout>
	<x-slot name="content">
		<div class="container">
			<div id="app"></div>


			<h1>Dashboard</h1>
			<p>Welcome back {{ $user->username }}!</p>

			<div class="row">
				<div class="col">
					<h2><i class="fas fa-users"></i> Rooms</h2>

					@if (sizeof($rooms) < 1)
						<p>Your rooms will appear here</p>
					@else
						@foreach ($rooms as $room)
							<p>
								<a href="/rooms/{{ $room->id }}">
									{{ $room->title }}
								</a>
								<form action="{{ route('room.remove') }}" method="POST">
									@csrf
									<input type="hidden" name="room" value="{{ $room->id }}">
									<button type="submit">
										<i class="fas fa-trash"></i>
									</button>
								</form>
							</p>
						@endforeach
					@endif

					<hr>

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
				</div>
				<div class="col">
					<h2><i class="fas fa-user-friends"></i> Friends</h2>

					@if (sizeof($userfriends) < 1)
						<p>Friends list will appear here</p>
					@else
						@foreach ($userfriends as $userfriend)
							<p>

								{{ $userfriend->friend->username }}
								- 
								{{ $userfriend->status }}
								@if ($userfriend->status == 'pending')
								<form action="{{ route('friends.cancel') }}" method="POST">
									@csrf
									<input type="hidden" name="friend" value="{{ $userfriend->username }}">
									<button type="submit">
										Cancel
									</button>
								</form>
								@endif
							</p>
						@endforeach
					@endif

					<hr>

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
				</div>
			</div>

		</div>

		<script src="{{ mix('js/app.js') }}"></script>
	</x-slot>
</x-layout>