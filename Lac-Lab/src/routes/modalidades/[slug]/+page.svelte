<script>
	import { page } from '$app/stores';
	import { modalidades } from '$lib/stores';
	import IntroSingle from '$lib/IntroSingle.svelte';
	import Card from '$lib/Card.svelte';
	import autoAnimate from '@formkit/auto-animate';

	export let data;
</script>

<IntroSingle {data} />

<section class="related">
	<div class="related__wraper wrap">
		<h3>Outras modalidades</h3>
		<div class="lista" use:autoAnimate>
			{#each $modalidades as info}
				{#if info.slug !== $page.params.slug}
					<Card {info} />
				{/if}
			{/each}
		</div>
	</div>
</section>

<style>
	.related {
		margin-top: 40px;
	}
	.lista {
		display: flex;
		flex-wrap: wrap;
		gap: 20px;
		justify-content: center;
		margin-top: 16px;
	}
</style>
