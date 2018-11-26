import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import AppContent from './app/index.js'
import ChannelContent from './channel/index.js'

const ChannelContentWrapper = ({ match }) => (
	<ChannelContent channelID={match.params.channelID}/>
);

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={AppContent}/>
      <Route path="/channel/:channelID" component={ChannelContentWrapper}/>
    </div>
  </Router>
)
export default App
