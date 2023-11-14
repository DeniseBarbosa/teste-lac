<script>
	export let data;
</script>

<div class="intro">
	<div class="intro__wraper wrap">
		<div class="intro__info">
			<h1>{data.nome}</h1>
			<p>{data.content}</p>
		</div>
		<div class="intro__img">
			<img src={data.img} alt="" />
		</div>
	</div>
</div>

<style>
	.intro__wraper {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 20px;
		align-items: center;
	}
	.intro__img {
		margin-right: -20px;
		position: relative;
	}
	.intro__img::before {
		content: '';
		display: block;
		position: absolute;
		inset: 0;
		background-color: rgba(65, 54, 54, 0.151);
		border-radius: 0 0 0 8px;
	}
	img {
		border-radius: 0 0 0 8px;
		height: 370px;
		object-fit: cover;
	}
	p {
		font-size: calc(18 / 16 * 1rem);
		margin-top: 18px;
	}
</style>
