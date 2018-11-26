export const openChannel = (response) => {
	const newChannelPublicID = response.data.publicID;
	const message = JSON.stringify({action: 'OPEN_CHANNEL', params:{publicID: newChannelPublicID}})
	window.parent.postMessage(message, '*');
}

export const getUserToken = () => {
	var url = new URL(window.location);
	return url.searchParams.get("aplestro_user_token");
}