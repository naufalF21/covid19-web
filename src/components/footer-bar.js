class FooterBar extends HTMLElement {
	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
			<div class="navbar bg-info">
				<small>This website is made with <i class="fas fa-heart"></i> by me</small>
			</div>
		`;
	}
}

customElements.define('footer-bar', FooterBar);
