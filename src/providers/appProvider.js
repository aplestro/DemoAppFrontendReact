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
  axios.post('/requestUserInfo',{
    userToken: getUserToken()
  });
}

export const requestServerUserInfo = async () => {
  const user = await axios.post('/requestServerUserInfo',{
    userToken: getUserToken()
  });

  return user.data
}