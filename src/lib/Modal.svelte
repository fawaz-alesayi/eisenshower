<script lang="ts">
	export const toggleModal = () => {
		hidden = !hidden;
	};
	import { clickOutside } from './click_outside.js';

	let hidden = true;
</script>

<div class="modal" class:hidden>
	<slot {hidden} />
</div>

<style lang="scss">
	// Modal Logic
	.modal {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		z-index: 9999;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.hidden {
		display: none;
	}
</style>
