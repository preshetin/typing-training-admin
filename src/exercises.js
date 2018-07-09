import React from 'react';
import { List, Datagrid, TextField, EditButton, EditField, ReferenceField, ReferenceInput, DisabledInput, Edit, SimpleForm, required, SelectInput, TextInput, LongTextInput, Create  } from 'admin-on-rest';

export const ExersciseList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" />
            <ReferenceField label="Lesson" source="lessonId" reference="Lessons">
                <TextField source="title" />
            </ReferenceField>
            <TextField source="task" />
            <EditButton />
        </Datagrid>
    </List>
);

export const ExerciseEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <ReferenceInput label="Lesson" source="lessonId" reference="Lessons" validate={required}>
                <SelectInput optionText="title" />
            </ReferenceInput>
            <TextInput source="title" />
            <LongTextInput source="task" />
        </SimpleForm>
    </Edit>
);

export const ExerciseCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput label="Lesson" source="lessonId" reference="Lessons" validate={required} allowEmpty>
                <SelectInput optionText="title" />
            </ReferenceInput>
            <TextInput source="title" />
            <LongTextInput source="task" />
        </SimpleForm>
    </Create>
);
