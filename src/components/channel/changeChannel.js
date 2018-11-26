import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { editChannel } from '../../providers/channelProvider'
import Typography from '@material-ui/core/Typography';

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
});

class ChangeChannel extends React.Component {
	state = {
        channelName: "",
        channelAvatar:"",
        channelNameForUser:"",
	  };

	handleChange = name => event => {
		this.setState({
		  [name]: event.target.value,
		});
	};

	save = () => {
		editChannel({
          channelID: this.props.channelID,
          channelName: this.state.channelName,
          channelAvatar: this.state.channelAvatar,
          channelNameForUser: this.state.channelNameForUser
        })        
	}

	render() {
	    const { classes } = this.props;

	    return (
	    	<div className={classes.root}>
	    		<div className={classes.form}>
			    	<Paper className={classes.paper}>
			    		<Typography variant="h6" gutterBottom>
					        change channel info
					    </Typography>
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
				          id="channelNameForUser"
				          label="Channel name for user"
	      				  value={this.state.channelNameForUser}
	      				  onChange={this.handleChange('channelNameForUser')}
				          margin="normal"
				          fullWidth
				        />
				        <div></div>			        
						<Button 
							onClick={this.save}
							variant="contained" 
							color="primary">
				          Save
				        </Button>
					</Paper>
				</div>	
			</div>		    
        )	
    }
}

export default withStyles(styles)(ChangeChannel);