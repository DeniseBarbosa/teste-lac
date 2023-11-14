<script>
	import Introducao from '$lib/introducao.svelte';
	import Card from '$lib/Card.svelte';
	import { modalidades } from '$lib/stores';
</script>

<Introducao
	title="Toda modalidade certa para voce"
	content="Não deixe que a preguiça seja mais forte do que a sua vontade de mudar."
	img="alongamento"
/>
<section class="modalidade">
	<div class="modalidades__wraper wrap">
		{#each $modalidades as modalidade}
			<Card info={modalidade} />
		{/each}
	</div>
</section>

<style>
	.modalidade {
		margin-top: 60px;
	}
	.modalidades__wraper {
		display: flex;
		flex-wrap: wrap;
		gap: 20px;
		justify-content: center;
	}
</style>
