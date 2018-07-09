import React, { Component } from 'react';
import { jsonServerRestClient, Admin, Resource, Delete } from 'admin-on-rest';
import loopbackRestClient from 'aor-loopback';
import { LessonList, LessonEdit, LessonCreate } from './lessons';
import { ExersciseList, ExerciseEdit, ExerciseCreate } from './exercises';

const App = () => (
  <Admin restClient={loopbackRestClient('http://localhost:3000/api')}>
      <Resource name="Lessons" list={LessonList}  edit={LessonEdit} create={LessonCreate} remove={Delete} />
      <Resource name="Exercises" list={ExersciseList} edit={ExerciseEdit} create={ExerciseCreate} remove={Delete} />
  </Admin>
)

export default App;
