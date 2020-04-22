function Main() {
	const data = {
		confirmed: '',
		recovered: '',
		deaths: '',
		countries: [],
	};

	const formatNum = (num) => new Intl.NumberFormat().format(num);

	const options = {
		header: {
			'Access-Control-Allow-Headers': 'Authorization, Content-Type',
			'Access-Control-Allow-Origin': '*',
			'Content-Type': 'application/json; charset=utf-8',
		},
	};

	const getGlobalData = () => {
		return fetch('https://covid.mathdro.id/api')
			.then((response) => response.json())
			.then((responseJson) => {
				data.confirmed = responseJson.confirmed.value;
				data.recovered = responseJson.recovered.value;
				data.deaths = responseJson.deaths.value;
			})
			.catch((error) => console.log(error));
	};

	const getAllCountryData = () => {
		return fetch('https://api.kawalcorona.com', options)
			.then((response) => response.json())
			.then((responseJson) => (data.countries = responseJson));
	};

	const renderGlobalData = () => {
		$('#confirmed-value').html(`${formatNum(data.confirmed)} people`);
		$('#recovered-value').html(`${formatNum(data.recovered)} people`);
		$('#deaths-value').html(`${formatNum(data.deaths)} people`);
		console.log(data);
	};

	const renderAllCountryData = () => {
		let output = '';
		$.each(data.countries, (index, country) => {
			output += `
				<tr>
		      <th scope="row">${(index += 1)}</th>
		      <td>${country.attributes.Country_Region}</td>
		      <td>${formatNum(country.attributes.Confirmed)}</td>
		      <td>${formatNum(country.attributes.Recovered)}</td>
		      <td>${formatNum(country.attributes.Deaths)}</td>
		    </tr>
			`;
		});
		$('#country').html(output);
	};

	$(document).on('DOMContentLoaded', () => {
		getGlobalData().then(() => renderGlobalData());
		getAllCountryData().then(() => renderAllCountryData());
	});
}

export default Main;
