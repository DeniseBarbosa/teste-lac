<script>
	import home from '$lib/assets/musculacao.jpg';
	import exercicio from '$lib/assets/exer.jpg';
	import alongamento from '$lib/assets/alongamento.jpg';

	export let title;
	export let content;
	export let btn = 'Saiba mais';
	export let href = false;
	export let img;
	if (img === 'musculacao') img = home;
	if (img === 'exer') img = exercicio;
	if (img === 'alongamento') img = alongamento;
</script>

<section class="introducao" style="background-image: url({img});">
	<div class="introducao__wraper wrap">
		<h1>{@html title}</h1>
		<p>{content}</p>
		{#if btn && href}
			<a class="btn" href="/{href}">{btn}</a>
		{/if}
	</div>
</section>

<style>
	.introducao {
		min-height: 360px;
		background-size: cover;
		background-position: center;
		display: grid;
		align-content: center;
		justify-content: start;
		position: relative;
	}
	.introducao::after {
		content: '';
		position: absolute;
		inset: 0;
		background-color: rgba(0, 0, 0, 0.55);
	}
	.introducao__wraper {
		z-index: 1;
		max-width: 450px;
	}
	.btn {
		margin-top: 24px;
	}
	p {
		font-size: calc(18 / 16 * 1rem);
		margin-top: 18px;
	}
</style>
