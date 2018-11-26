import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { sendIntention } from '../../providers/channelProvider'
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
        code: "",
        previewText:"",
        previewImg:"",
		data:"",
	  };

	handleChange = name => event => {
		this.setState({
		  [name]: event.target.value,
		});
	};

	sendIntention = () => {
		sendIntention(
			this.state.code,
          	this.state.previewText,
            this.state.previewImg,
            this.state.data
        )        
	}

	render() {
	    const { classes } = this.props;

	    return (
	    	<div className={classes.root}>
	    		<div className={classes.form}>
			    	<Paper className={classes.paper}>
			    		<Typography variant="h6" gutterBottom>
					        Intentions
					    </Typography>

					    <div><span>The Bookmark app uses the code SHARE_OPEN_GRAPH. Paste this code to send the intention to the Bookmark app. Insert the RSS intent data you received earlier</span></div>

				    	<TextField
				          id="code"
				          label="intention code"
	      				  value={this.state.code}
	      				  onChange={this.handleChange('code')}
				          margin="normal"
				          fullWidth
				        />
				        <TextField
				          id="previewText"
				          label="preview text"
	      				  value={this.state.previewText}
	      				  onChange={this.handleChange('previewText')}
				          margin="normal"
				          fullWidth
				        />			
				    	<TextField
				          id="previewImg"
				          label="preview img (url)"
	      				  value={this.state.previewImg}
	      				  onChange={this.handleChange('previewImg')}
				          margin="normal"
				          fullWidth
				        />
				        <TextField
				          id="data"
				          label="intention data"
	      				  value={this.state.data}
	      				  onChange={this.handleChange('data')}
				          margin="normal"
				          fullWidth
				        />				        
						<Button 
							onClick={this.sendIntention}
							variant="contained" 
							color="primary">
				          Send
				        </Button>
					</Paper>
				</div>	
			</div>		    
        )	
    }
}

export default withStyles(styles)(ChangeChannel);