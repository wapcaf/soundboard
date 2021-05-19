<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" href="/css/app.css">
	<script src="https://kit.fontawesome.com/64e758f49c.js" crossorigin="anonymous"></script>
	{{-- https://getbootstrap.com/docs/4.0/layout/grid/ --}}
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-4-grid@3.4.0/css/grid.min.css" integrity="sha256-raGUlaaCI4l2GoQ6cxLH8ODuDTwuQVL9RU06sSvpD6w=" crossorigin="anonymous">

	{{-- https://dev.to/ostap/preact-laravel-4g5 --}}
	<meta name="csrf-token" content="{{ csrf_token() }}">

	<title>Sound Board</title>
</head>
<body>
	<nav class="navigation">
		<div class="container">
			<a href="/" class="navigation__logo"><img src="/img/logo.png"> CriticalTone</a>

			<ul>
				@auth
					<li><a href="/dashboard">Dashboard</a></li>
					<li>Account</li>
					<li>
						<form method="POST" action="{{ route('logout') }}">
							@csrf
							<a href="{{ route('logout') }}" onclick="event.preventDefault(); 
							this.closest('form').submit();">Logout</a>
						</form>
					</li>
				@else
					<li><a href="/register">Register</a></li>
					<li><a href="/login">Login</a></li>
				@endauth
			</ul>
		</div>
	</nav>

	<hr>

	<div>
		{{ $content }}
	</div>

	<br><br>
	<hr>

	<footer>
		<div class="container">
			&copy; 2021 my balls
		</div>
	</footer>
	<div id="modal">

	</div>
</body>
</html>
<!-- https://laracasts.com/series/laravel-8-from-scratch/episodes/9?autoplay=true -->
<!-- https://laracasts.com/series/laravel-8-from-scratch/episodes/29?autoplay=true -->