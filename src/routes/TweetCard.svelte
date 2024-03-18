<script>
	let { t, rebuild } = $props();

	function copyText() {
		navigator.clipboard.writeText(t.text);
	}
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

			<button onclick={copyText} class="btn variant-ghost-primary"> Copy </button>
		</div>
	</div>
</div>
