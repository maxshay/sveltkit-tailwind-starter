<script lang="ts">
	import type { PageData } from './$types';

	import Profile from './Profile.svelte';
	import Tabs from './Tabs.svelte';

	export let data: PageData;

	// https://svelte.dev/repl/cf05bd4a4ca14fb8ace8b6cdebbb58da?version=3.17.0

	let items = [
		{
			label: 'Profile',
			value: 1,
			component: Profile,
			props: {
				user: data.user
			}
		}
	];
</script>

<section
	id="features"
	aria-label="Features for running your books"
	class="relative overflow-hidden bg-blue-600 py-16 h-full text-white"
>
	<img
		alt=""
		loading="lazy"
		width="2245"
		height="1636"
		decoding="async"
		data-nimg="1"
		class="absolute left-1/2 top-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]"
		style="color:transparent"
		src="https://salient.tailwindui.com/_next/static/media/background-features.5f7a9ac9.jpg"
	/>
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
		<div class="max-w-2xl md:mx-auto  xl:max-w-none">
			<h2 class="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
				Your Account
			</h2>
			<Tabs {items} />
		</div>
	</div>
</section>
