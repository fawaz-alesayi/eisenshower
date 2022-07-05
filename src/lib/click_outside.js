/**
 * @param {{ contains: (arg0: any) => any; dispatchEvent: (arg0: CustomEvent<any>) => void; }} node
 */
export function clickOutside(node) {
	const handleClick = (/** @type {{ target: any; }} */ event) => {
		if (!node.contains(event.target)) {
			node.dispatchEvent(new CustomEvent("outclick"));
		}
	};

	document.addEventListener("click", handleClick, true);

	return {
		destroy() {
			document.removeEventListener("click", handleClick, true);
		}
	};
}
