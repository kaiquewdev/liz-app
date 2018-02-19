const fetch = require('node-fetch');

fetch('https://api.zeit.co/v2/now/deployments', {
	'headers': {
		'Authorization': 'Bearer BBXkTp4BRab4f4YtVfXxlnCc'
	}
})
.then(res => res.json())
.then(json => {
	let deployments = json.deployments
	let url = ''

	deployments = deployments.filter(item => item.name === 'liz-app')
	deployments = deployments.filter(item => item.state.indexOf('READY') > -1)

	url = deployments[0]['url']

	console.log(url);
});