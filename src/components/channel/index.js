import React from 'react';
import ChangeChannel from './changeChannel.js'
import Messages from './messages.js'
import Resources from './resources.js'
import Intentions from './intentions.js'

class ChannelContent extends React.Component {
	
	render() {
	    const { channelID } = this.props;

	    return (
	    	<div>
	    		<ChangeChannel channelID={channelID}/>
	    		<Messages channelID={channelID}/>	
	    		<Resources channelID={channelID}/>	
	    		<Intentions/>	
			</div>		    
        )	
    }
}

export default ChannelContent;