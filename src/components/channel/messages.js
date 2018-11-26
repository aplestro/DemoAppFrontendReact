import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { 
	sendSimpleMessage,
	sendOpenGraphMessage
} from '../../providers/channelProvider';



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

class Messages extends React.Component {
	state = {
        simpleMessage: "",
        openGraphText:"",
        openGraphImg:"",
        openGraphUrl:""
	  };

	handleChange = name => event => {
		this.setState({
		  [name]: event.target.value,
		});
	};

	sendSimpleMessage = () => {
		sendSimpleMessage({
          channelID: this.props.channelID,
          text: this.state.simpleMessage
        })
	}

	sendOpenGraphText = () => {
		sendOpenGraphMessage({
          channelID: this.props.channelID,
          title: this.state.openGraphText,
          image: this.state.openGraphImg,
          url: this.state.openGraphUrl
        })
	}

	render() {
	    const { classes } = this.props;

	    return (
	    	<div className={classes.root}>
	    		<div className={classes.form}>
			    	<Paper className={classes.paper}>
			    		<Typography variant="h6" gutterBottom>
					        message - simple text
					    </Typography>
				    	<TextField
				          id="simpleMessage"
				          label="simple text"
	      				  value={this.state.simpleMessage}
	      				  onChange={this.handleChange('simpleMessage')}
				          margin="normal"
				          fullWidth
				        />	        
						<Button 
							onClick={this.sendSimpleMessage}
							variant="contained" 
							color="primary">
				          SEND SIMPLE MESSAGE
				        </Button>

				        <Divider className={classes.divider}/>

			    		<Typography variant="h6" gutterBottom>
					        message - open graph
					    </Typography>

				        <TextField
				          id="openGraphText"
				          label="open graph text"
	      				  value={this.state.openGraphText}
	      				  onChange={this.handleChange('openGraphText')}
				          margin="normal"
				          fullWidth
				        />	
				        <TextField
				          id="openGraphImg"
				          label="open graph url img"
	      				  value={this.state.openGraphImg}
	      				  onChange={this.handleChange('openGraphImg')}
				          margin="normal"
				          fullWidth
				        />
				        <TextField
				          id="openGraphUrl"
				          label="open graph url"
	      				  value={this.state.openGraphUrl}
	      				  onChange={this.handleChange('openGraphUrl')}
				          margin="normal"
				          fullWidth
				        />
						<Button 
							onClick={this.sendOpenGraphText}
							variant="contained" 
							color="primary">
				          SEND OPENGRAPH MESSAGE
				        </Button>
					</Paper>
				</div>	
			</div>		    
        )	
    }
}

export default withStyles(styles)(Messages);
