<script>
	import logo from '$lib/assets/logo.png';
</script>

<header class="header">
	<div class="header__wraper wrap">
		<a href="/" class="logo"><img src={logo} alt="Logo da academia" /></a>
		<nav>
			<ul>
				<li><a href="/">Home</a></li>
				<li><a href="/sobre">Sobre</a></li>
				<li><a href="/modalidades">Modalidades</a></li>
				<li><a class="btn header__btn" href="#contato">Contato</a></li>
			</ul>
		</nav>
	</div>
</header>

<style>
	.header__btn {
		border-color: rgb(83, 79, 79);
	}
	.header__wraper {
		display: flex;
		align-items: center;
		min-width: 120px;
	}
	.logo {
		max-width: 277px;
	}
	nav {
		margin-left: auto;
	}
	ul {
		display: flex;
		align-items: center;
		gap: 24px;
	}
	a {
		color: white;
	}
	a:not(.btn):hover {
		text-decoration: underline;
	}
</style>
