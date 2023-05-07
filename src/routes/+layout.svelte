<script>
	import Header from './Header.svelte';
	import './style.css';
</script>

<div class="app bg-neutral-900 text-white min-h-screen">
	<Header />
	<main>
		<slot />
	</main>
</div>
