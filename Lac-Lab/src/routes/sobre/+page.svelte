<script>
	import Introducao from '$lib/introducao.svelte';
	import Info from '$lib/Info.svelte';
</script>

<Introducao
	title="Chuva? Vc é feito de músculos e não de açucar"
	content="Não deixe que a preguiça seja mais forte do que a sua vontade de mudar."
	btn="Modalidade"
	href="modalidade"
	img="exer"
/>

<section class="faq">
	<div class="faq__wraper wrap">
		<Info
			perguntas="Quanto custa a mensalidade?"
			respostas="Aqui será dado uma resposta sobre a empresa e mensalidadeAqui será dado uma resposta sobre a empresa e mensalidadeAqui será dado uma resposta sobre a empresa e mensalidade"
		/>
		<Info
			perguntas="Quanto custa a mensalidade?"
			respostas="Aqui será dado uma resposta sobre a empresa e mensalidadeAqui será dado uma resposta sobre a empresa e mensalidadeAqui será dado uma resposta sobre a empresa e mensalidade"
		/>
		<Info
			perguntas="Quanto custa a mensalidade?"
			respostas="Aqui será dado uma resposta sobre a empresa e mensalidadeAqui será dado uma resposta sobre a empresa e mensalidadeAqui será dado uma resposta sobre a empresa e mensalidade"
		/>
	</div>
</section>

<style>
	.faq {
		margin-top: 60px;
	}
	.faq__wraper {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 20px;
	}
</style>
