<script>
	import '@fontsource/ibm-plex-sans';
	let todo;
</script>

<h1>Eisenshower</h1>

<h2>Do more work by setting your priorities straight.</h2>

<section>
	<q> What is urgent is seldom important and what is important is seldom urgent.</q>
	<span> - Dwight Eisenhower, 34th U.S. President</span>
</section>

<form action="" on:submit|preventDefault>
	<input type="text" placeholder="Start now. Type your first task." />
</form>

<style lang="scss">
	$dark: #03045e;
	$light: #caf0f8;

	h1 {
		font-family: 'IBM Plex Mono', monospace;
		color: $dark;
		text-align: center;
	}

	h2 {
		font-family: 'IBM Plex Sans', sans-serif;
		font-style: normal;
		font-weight: bold;
		font-size: 32px;
		line-height: 42px;
		color: $dark;
	}

	section {
		font-family: 'IBM Plex Sans';
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		line-height: 21px;
	}

	input {
		height: 30px;
		width: 75vw;
		margin-top: 32px;
		display: block;
		margin-left: auto;
		margin-right: auto;
		font-size: 20px;
		padding: 12px;
		background-color: $light;
	}
</style>
