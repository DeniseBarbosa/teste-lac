<script>
	import IconPlus from '$lib/assets/IconPlus.svelte';
	import autoAnimate from '@formkit/auto-animate';
	export let perguntas;
	export let respostas;

	let ativo;
	let ativar = () => {
		ativo = !ativo;
	};
</script>

<div class="info" role="button" on:click={ativar} on:keydown={ativar} tabindex="0" use:autoAnimate>
	<div class="perguntas" class:ativo>
		<h3>{perguntas}</h3>
		<IconPlus />
	</div>
	{#if ativo}
		<div class="respostas">
			<p>{respostas}</p>
		</div>
	{/if}
</div>

<style>
	.perguntas {
		display: flex;
		align-items: center;
		border: 1px solid rgb(124, 116, 116);
		padding: 17px 16px;
		/* height: 80px;  */
	}
	.perguntas :global(svg) {
		margin-left: auto;
		margin-right: 8px;
		/* evita que o icon exprema  */
		flex-shrink: 0;
		transition: 250ms;
	}
	.perguntas.ativo :global(svg) {
		transform: rotate(45deg);
		transition: 125ms;
	}
	.respostas {
		padding: 0 16px;
		border-left: 1px solid rgb(190, 85, 46);
		margin-top: 16px;
		margin-bottom: 16px;
		transition: 250ms;
	}
	.info {
		cursor: pointer;
	}
	.perguntas.ativo {
		border-color: aliceblue;
		transition: 125ms;
	}
</style>
