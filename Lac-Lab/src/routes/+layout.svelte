<script>
	import '../global.css';
	import '@fontsource/roboto-condensed';
	import '@fontsource-variable/cabin';
	import Menu from '$lib/Menu.svelte';
	import Rodape from '$lib/Rodape.svelte';
	import Creditos from '$lib/Creditos.svelte';
</script>

<Menu />
<slot />
<Rodape />
<Creditos />
