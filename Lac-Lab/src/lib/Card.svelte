<script>
	export let info;
	// import { page } from '$app/stores';

	// let arquivo = $page.route.id;
</script>

<a href="/modalidades/{info.slug}" class="card">
	<img src={info.img} alt="" width="120" height="120" />
	<h2>{info.nome}</h2>
</a>

<style>
	img {
		/* serve para que a imagem não fique distorcida dentro em comparação a altura e largura */
		object-fit: cover;
		border-radius: 4px;
	}
	h2 {
		padding: 8px 16px;
	}
	.card {
		border: solid 1px rgb(99, 96, 96);
		padding: 4px;
		display: flex;
		align-items: center;
		border-radius: 8px;
		flex-basis: calc(50% - 10px);
	}
	a {
		color: white;
		transition: 250ms;
	}
	a:hover {
		border-color: rgb(189, 126, 9);
		transition: 125ms;
	}
</style>
