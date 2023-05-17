<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<div>your account: {data.user?.email}</div>
