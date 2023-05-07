<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	import ProductsList from './ProductsList.svelte';
</script>

<svelte:head>
	<title>Products</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<ProductsList {data} />
