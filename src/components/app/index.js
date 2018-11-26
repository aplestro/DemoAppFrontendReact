import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import { 
	createChannel, 
	requestAplestroUserInfo, 
	requestServerUserInfo 
} from '../../providers/appProvider'

const styles = theme => ({
  form: {
  	marginTop: 16,
  	justifyContent: 'center',
  	display: 'flex'
  },
  paper: {
    flexGrow: 1,
    maxWidth: 600,
    padding: theme.spacing.unit * 2,
  },
  avatar: {
    margin: 10,
  },
});

class AppContent extends React.Component {
	state = {
        channelName: "",
        channelAvatar:"",
        channelIntentions:"",
        isPrivate: false,
        userData: null
	  };

	handleChange = name => event => {
		this.setState({
		  [name]: event.target.value,
		});
	};

	handleChangeСhecked = name => event => {
		this.setState({ [name]: event.target.checked });
	};

	save = () => {
		createChannel({
          channelName: this.state.channelName,
          channelAvatar: this.state.channelAvatar,
          channelIntentions: this.state.channelIntentions,
          isPrivate: this.state.isPrivate,
          success: ()=>{},
          error: ()=>{}
        })
	}

	requestAplestroUserInfo = () => {
		requestAplestroUserInfo()
	}

	requestServerUserInfo = async () => {
		const userData = await requestServerUserInfo()
		this.setState({
		  userData
		});
	}


	render() {
	    const { classes } = this.props;

	    return (
	    	<div className={classes.root}>
	    		<div className={classes.form}>
			    	<Paper className={classes.paper}>
				    	<TextField
				          id="channelName"
				          label="Channel name"
	      				  value={this.state.channelName}
	      				  onChange={this.handleChange('channelName')}
				          margin="normal"
				          fullWidth
				        />
				        <TextField
				          id="channelAvatar"
				          label="Channel avatar"
	      				  value={this.state.channelAvatar}
	      				  onChange={this.handleChange('channelAvatar')}
				          margin="normal"
				          fullWidth
				        />
				        <TextField
				          id="channelIntentions"
				          label="intentions"
	      				  value={this.state.channelIntentions}
	      				  onChange={this.handleChange('channelIntentions')}
				          margin="normal"
				          multiline
				          rows="4"
				          fullWidth
				        />
				        <div><span>The Bookmark app uses a code SHARE_OPEN_GRAPH. Paste the code to receive intentions from RSS app</span></div>
				        
				        <FormControlLabel
				          control={
				            <Checkbox
				              checked={this.state.isPrivate}
				              onChange={this.handleChangeСhecked('isPrivate')}
				              value="isPrivate"
				              color="primary"
				            />
				          }
				          label="Private channel"
				        />	
				        <div></div>			        
						<Button 
							onClick={this.save}
							variant="contained" 
							color="primary">
				          Ceate channel
				        </Button>
					</Paper>					
				</div>	

	    		<div className={classes.form}>
					<Paper className={classes.paper}>
						<div className={classes.form}>		        
							<Button 
								onClick={this.requestAplestroUserInfo}
								variant="contained" 
								color="primary">
					          REQUEST USER INFO
					        </Button>		        
							<Button 
								onClick={this.requestServerUserInfo}
								variant="contained" 
								color="primary">
					          SERVER HAS USER INFO
					        </Button>
				        </div>
				        { this.state.userData &&
							<div className={classes.form}>
								<Avatar src={this.state.userData.userimg} className={classes.avatar} />
								<p>{this.state.userData.username}</p>
					        </div>
				        }
					</Paper>				
				</div>	
			</div>		    
        )	
    }
}

export default withStyles(styles)(AppContent);