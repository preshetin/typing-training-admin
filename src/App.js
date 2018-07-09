import React, { Component } from 'react';
import { jsonServerRestClient, Admin, Resource } from 'admin-on-rest';
import loopbackRestClient from 'aor-loopback';
import { ExersciseList, ExerciseEdit, ExerciseCreate } from './exercises';
import { LessonList, LessonEdit } from './lessons';

class App extends Component {
  render() {
    return (
      <Admin restClient={loopbackRestClient('http://localhost:3000/api')}>
          <Resource name="Exercises" list={ExersciseList} edit={ExerciseEdit} create={ExerciseCreate}/>
          <Resource name="Lessons" list={LessonList} edit={LessonEdit} />
      </Admin>
    );
  }
}

export default App;
