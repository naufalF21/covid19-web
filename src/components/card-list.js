class CardList extends HTMLElement {
	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
			<div class="col-lg-3 text-white" id="card-wrapper">
				<div class="card" style="background-color: #F9BF40">
					<div class="card-body">
						<p>Total Confirmed (Global)</p>
						<h5 id="confirmed-value"></h5>
					</div>
				</div>
				<div class="card" style="background-color: #30A499">
					<div class="card-body">
						<p>Total Recovered (Global)</p>
						<h5 id="recovered-value"></h5>
					</div>
				</div>
				<div class="card" style="background-color: #EC5554">
					<div class="card-body">
						<p>Total Deaths (Global)</p>
						<h5 id="deaths-value"></h5>
					</div>
				</div>
			</div>
		`;
	}
}

customElements.define('card-list', CardList);
