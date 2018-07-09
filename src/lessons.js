import React from 'react';
import { List, Datagrid, TextField, Edit, SimpleForm, DisabledInput, TextInput } from 'admin-on-rest';

export const LessonList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" />
        </Datagrid>
    </List>
);

export const LessonEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="title" />
        </SimpleForm>
    </Edit>
);

