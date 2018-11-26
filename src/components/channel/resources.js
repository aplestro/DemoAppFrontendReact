import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { createNewResource, requestResourceFlow } from '../../providers/channelProvider'
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';


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
  divider: {
    marginTop: '24px'
  },
});

class ChangeChannel extends React.Component {
	state = {
        newCode: "",
        url:"",
        targetCode:"",
		hint:"",
	  };

	handleChange = name => event => {
		this.setState({
		  [name]: event.target.value,
		});
	};

	createNewResource = () => {
		createNewResource(
			this.props.channelID,
          	this.state.newCode,
            this.state.url
        )        
	}


	requestResourceFlow = () => {
		requestResourceFlow(
          	this.state.targetCode,
            this.state.hint
        )        
	}

	render() {
	    const { classes } = this.props;

	    return (
	    	<div className={classes.root}>
	    		<div className={classes.form}>
			    	<Paper className={classes.paper}>
			    		<Typography variant="h6" gutterBottom>
					        Create new resource
					    </Typography>

					    <div><span>The Sticker app and the Chat app use a code STICKER_IMG. Paste the code to send to the Chat app or receive resources from the Sticker app</span></div>

				    	<TextField
				          id="Code"
				          label="Code"
	      				  value={this.state.newCode}
	      				  onChange={this.handleChange('newCode')}
				          margin="normal"
				          fullWidth
				        />
				        <TextField
				          id="url"
				          label="data (url recomended)"
	      				  value={this.state.url}
	      				  onChange={this.handleChange('url')}
				          margin="normal"
				          fullWidth
				        />				        
						<Button 
							onClick={this.createNewResource}
							variant="contained" 
							color="primary">
				          CREATE NEW RESOURCE
				        </Button>

				        
				        <Divider className={classes.divider}/>

				        <Typography variant="h6" gutterBottom>
					        Request resource flow
					    </Typography>

				    	<TextField
				          id="targetCode"
				          label="Code"
	      				  value={this.state.targetCode}
	      				  onChange={this.handleChange('targetCode')}
				          margin="normal"
				          fullWidth
				        />
				        <TextField
				          id="hint"
				          label="Message for the dialog"
	      				  value={this.state.hint}
	      				  onChange={this.handleChange('hint')}
				          margin="normal"
				          fullWidth
				        />				        
						<Button 
							onClick={this.requestResourceFlow}
							variant="contained" 
							color="primary">
				          REQUEST RESOURCE FLOW
				        </Button>
					</Paper>
				</div>	
			</div>		    
        )	
    }
}

export default withStyles(styles)(ChangeChannel);