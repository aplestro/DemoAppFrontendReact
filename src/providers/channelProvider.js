import axios from 'axios'
import { getUserToken } from '../helpers/aplestro'

export const editChannel = (input) => {
	axios.post('/editChannel',{
	    channelID: input.channelID,
      channelName: input.channelName,
      channelAvatar: input.channelAvatar,
      userToken: getUserToken(),
      channelNameForUser: input.channelNameForUser,
    })
    .then((response) => {
    })
    .catch((error) => {
    });
}


const MessageType = {
  TEXT: "TEXT",
  OPEN_GRAPH: "OPEN_GRAPH"
}

export const sendSimpleMessage = (input) => {sendMessgae(input, MessageType.TEXT)}
export const sendOpenGraphMessage = (input) => {sendMessgae(input, MessageType.OPEN_GRAPH)}

const sendMessgae = (input, messageType) => {
  input.messageType = messageType;

  axios.post('/createNewMessage',input)
    .then((response) => {
    })
    .catch((error) => {
    });
}


export const createNewResource = (channelID, code, url) => {
  axios.post('/createNewResource',{
    url,
    code,
    channelID
  })
  .then((response) => {
  })
  .catch((error) => {
  });
}

export const requestResourceFlow = (code, text) => {
  const message = JSON.stringify({action: 'REQUEST_RESOURCE_FLOW', params:{
    code,
    text
  }})
  window.parent.postMessage(message, '*');
}

export const sendIntention = (code, title, image, data) => {
  const message = JSON.stringify({action: 'SEND_INTENTION', params:[{
    preview: {
      type: "OPEN_GRAPH",
      title,
      image
    },
    intentions: [{
      code,
      data
    }]    
  }]})
  window.parent.postMessage(message, '*');  
}
