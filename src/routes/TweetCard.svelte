<script>
	import { onDestroy } from 'svelte';

	let { t, rebuild } = $props();
	let text = $state('Copy');
	let timeout = null;
	function copyText() {
		navigator.clipboard.writeText(t.text);
		text = '👍 Copied';
		timeout = setTimeout(() => {
			text = 'Copy';
		}, 10000);
	}
	onDestroy(() => {
		if (timeout) {
			clearTimeout(timeout);
		}
	});
</script>

<div class="card">
	<div class="p-4">
		<textarea
			on:input={() => {
				console.log('inputing');
				rebuild();
			}}
			class="textarea p-2"
			rows="3"
			bind:value={t.text}
		/>
		{t.text.split('').length}/{280}
		<div class="flex justify-end py-2 gap-2">
			{#if t.id == 0}
				<a
					target="_blank"
					class="btn variant-ghost-primary"
					href="https://twitter.com/intent/tweet?text={encodeURIComponent(t.text)}"
				>
					Tweet</a
				>
			{/if}

			<button onclick={copyText} class="btn variant-ghost-primary"> {text} </button>
		</div>
	</div>
</div>
