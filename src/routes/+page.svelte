<script>
	import { tick } from 'svelte';
	import TweetCard from './TweetCard.svelte';
	import { Tweet } from './tweet.svelte';
	let tweet = new Tweet(
		`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
	);
	async function rebuild() {
		console.log('rebuilding');
		tweet.createText();
	}
</script>

<header id="hero" class=" bg">
	<div class="pt-24 max-w-7xl mx-auto text-center">
		<h1 class="h1 !text-5xl md:!text-6xl">Twitter Breaker</h1>
		<p class="!text-xl mt-4">This is twitter thread splitter that can split text into tweets</p>
	</div>
	<main class="max-w-4xl mx-auto mt-4">
		<div class=" max-w-4xl mx-auto card p-4">
			<label class="label">
				<span class="text-2xl">Enter your long tweet here</span>
				<textarea
					class="textarea p-4"
					bind:value={tweet.text}
					rows="8"
					on:input={() => {
						console.log('changed');
						tweet.createTweets();
					}}
					placeholder="Enter your long tweet here...."
				>
				</textarea>
			</label>
			{tweet.totalCount}
			<div class="text-center mt-4">
				<button
					onclick={() => {
						tweet.createTweets();
					}}
					class="btn variant-filled"
				>
					Create
				</button>
				<button
					onclick={() => {
						tweet.clear();
					}}
					class="btn variant-ghost-error"
				>
					Clear
				</button>
			</div>
		</div>

		<div class="grid gap-4 mt-8">
			{#each tweet.tweets as t}
				<TweetCard {t} {rebuild} />
			{/each}
		</div>
	</main>
</header>

<style>
	.bg {
		background-image: radial-gradient(
				at 0% 0%,
				rgba(var(--color-secondary-500) / 0.33) 0px,
				transparent 50%
			),
			radial-gradient(at 98% 1%, rgba(var(--color-error-500) / 0.33) 0px, transparent 50%);
	}
</style>
