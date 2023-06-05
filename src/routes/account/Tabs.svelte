<script lang="ts">
	import type { ComponentProps, SvelteComponent } from 'svelte';
	type TabItem = {
		label: string;
		value: number;
		component: ConstructorOfATypedSvelteComponent;
		props: ComponentProps<SvelteComponent>;
	};

	export let items: TabItem[] = [];
	export let activeTabValue = 1;

	const handleClick = (tabValue: number) => () => (activeTabValue = tabValue);
</script>

<div class="tabs mt-4">
	{#each items as item}
		<button
			on:click={handleClick(item.value)}
			class={`tab tab-bordered${activeTabValue === item.value ? ' tab-active ' : ''}`}
		>
			{item.label}
		</button>
	{/each}
</div>
{#each items as item}
	{#if activeTabValue == item.value}
		<div class="py-4">
			<svelte:component this={item.component} {...item.props} />
		</div>
	{/if}
{/each}
