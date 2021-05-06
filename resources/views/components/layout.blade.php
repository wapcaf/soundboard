<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" href="/css/app.css">
	<title>Sound Board</title>
</head>
<body>
	<nav class="navigation">
		<a href="/"><img src="" class="navigation__logo"></a>

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
	</nav>
	<div class="container">
		{{ $content }}
	</div>

	<footer>
		&copy; 2021 my balls
	</footer>
</body>
</html>
<!-- https://laracasts.com/series/laravel-8-from-scratch/episodes/9?autoplay=true -->
<!-- https://laracasts.com/series/laravel-8-from-scratch/episodes/29?autoplay=true -->