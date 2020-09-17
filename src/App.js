import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router';

import Uploader from './components/Uploader.jsx';
import Uploading from './components/Uploading.jsx';
import Uploaded from './components/Uploaded.jsx';

function App() {
  return (
    <div className="App container ">
      <Router>
        <Switch>
          <Route exact path="/" component={Uploader} />
          <Route exact path="/uploading" component={Uploading} />
          <Route exact path="/uploaded" component={Uploaded} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
