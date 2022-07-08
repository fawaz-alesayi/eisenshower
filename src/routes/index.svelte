<script lang="ts">
	import '@fontsource/ibm-plex-sans';
	import EisenhowerMatrix from '$lib/eisenhowerMatrix.svelte';
	import Logo from '$lib/Logo.svelte';
</script>

<header>
	<i class="ri-heavy-showers-line"></i>
	<h1>Eisenshower</h1>
	<i class="ri-heavy-showers-line"></i>
</header>
<h2>Be more productive by setting your priorities straight.</h2>

<section>
	<q> What is urgent is seldom important and what is important is seldom urgent.</q>
	<span> - Dwight Eisenhower, 34th U.S. President</span>
</section>

<h3>Add your tasks</h3>

<EisenhowerMatrix />

<footer>
	<div class="footer-info">
		<a href="https://github.com/fawaz-alesayi/eisenshower"><i class="ri-github-fill"></i></a>
		<p>Made with ❤️ by <a href="https://twitter.com/fawaztsa">Fawaz Alesayi</a></p>
	</div>
</footer>

<style lang="scss">
	header {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		text-align: center;
		margin: auto auto;
		gap: 24px;

		.ri-heavy-showers-line {
			font-size: 48px;
		}
	}

	h1 {
		font-family: 'IBM Plex Mono', monospace;
		text-align: center;
	}

	h2 {
		font-family: 'IBM Plex Sans', sans-serif;
		font-style: normal;
		font-weight: bold;
		font-size: 32px;
		line-height: 42px;

		@media (min-width: 768px) {
			text-align: center;
		}
	}

	h3 {
		font-family: 'IBM Plex Sans', sans-serif;
		font-size: 24px;

		@media (min-width: 768px) {
			text-align: center;
		}
	}

	section {
		font-family: 'IBM Plex Sans';
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		line-height: 21px;

		@media (min-width: 768px) {
			text-align: center;
		}
	}

	footer {
		margin-top: 128px;
		border-top: 1px dashed black;
		font-size: 0.85rem;
		font-family: 'IBM Plex Mono', monospace;
	}

	.footer-info {
		margin: auto;
		display: flex;
		flex-direction: row;
		justify-content: center;
		text-align: center;
		align-items: center;
		gap: 16px;
	}

	.ri-github-fill {
		font-size: 1.5rem;
	}
</style>
