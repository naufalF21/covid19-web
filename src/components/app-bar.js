class AppBar extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
			<nav class="navbar navbar-dark bg-info">
				<div class="container-fluid text-white" id="nav-list">
					<a class="navbar-brand" href="#"><i>COVID-19</i> Information</a>
					<span id="time"></span>
					<span id="date"></span>
				</div>
			</nav>
		`;
	}
}

customElements.define('app-bar', AppBar);
