<x-layout>
	<x-slot name="content">
		<div class="container">
			<a href="{{ route('dashboard.index') }}">
				<i class="fas fa-chevron-left"></i>
				Back
			</a>
			<h1>{{ $room->title }}</h1>
			<p>Here you will be able to play sounds and invite friends to listen along.</p>
		</div>
	</x-slot>
</x-layout>
