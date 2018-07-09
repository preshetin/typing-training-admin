import React from 'react';
import { List, required, LongTextInput, Create, ReferenceManyField, EditButton, Datagrid, TextField, Edit, SimpleForm, DisabledInput, TextInput } from 'admin-on-rest';

export const LessonList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" />
            <EditButton />
        </Datagrid>
    </List>
);

export const LessonEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="title" validate={required} />
            <ReferenceManyField label="Exercises" reference="Exercises" target="lessonId">
                <Datagrid>
                    <TextField source="title" />
                    <TextField source="task" />
                    <EditButton />
                </Datagrid>
            </ReferenceManyField>
        </SimpleForm>
    </Edit>
);

export const LessonCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="title" validate={required} />
            <LongTextInput source="description" />
        </SimpleForm>
    </Create>
);



