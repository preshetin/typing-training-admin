import React, { Component } from 'react';
import { jsonServerRestClient, Admin, Resource } from 'admin-on-rest';
import loopbackRestClient from 'aor-loopback';
import { ExersciseList } from './exercises';

class App extends Component {
  render() {
    return (
      <Admin restClient={loopbackRestClient('http://localhost:3000/api')}>
          <Resource name="exercises" list={ExersciseList} />
      </Admin>
    );
  }
}

export default App;
