import axios from 'axios'
import { openChannel, getUserToken } from '../helpers/aplestro'

export const createChannel = (input) => {
    axios.post('/newChannel',{
      channelName: input.channelName,
      channelAvatar: input.channelAvatar,
      channelIntentions: input.channelIntentions,
      isPrivate: input.isPrivate
    })
    .then((response) => {
      input.success();	
      openChannel(response);
    })
    .catch((error) => {
      input.error();
      console.log(error);
    });
}

export const requestAplestroUserInfo = () => {
  const message = JSON.stringify({
    action: 'PERMISSIONS_REQUEST',
    params: {
      permissions:[{
        code: "USER_INFO",
        userText: "the text where the app explains why it needs the user info"
      }]
    }})
  window.parent.postMessage(message, '*');
}

export const requestServerUserInfo = async () => {
  const user = await axios.post('/requestServerUserInfo',{
    userToken: getUserToken()
  });

  return user.data
}