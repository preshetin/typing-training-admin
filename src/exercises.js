import React from 'react';
import { List, Filter, Datagrid, TextField, EditButton, EditField, ReferenceField, ReferenceInput, NumberField, DisabledInput, Edit, SimpleForm, required, SelectInput, TextInput, LongTextInput, Create  } from 'admin-on-rest';
import "./Exercises.css";

const ExerciseFilter = (props) => (
    <Filter {...props}>
        <ReferenceInput label="Lesson" source="lessonId" reference="Lessons" alwaysOn>
            <SelectInput optionText="title" />
        </ReferenceInput>
    </Filter>
);

export const ExersciseList = (props) => (
    <List {...props} filters={<ExerciseFilter />} >
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" />
            <NumberField source="sort" />
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
            <SelectInput source="sort" choices={Array.from(Array(50).keys()).map((_, index) => ({ id: index + 1, name: index + 1 }))} allowEmpty />
            <ReferenceInput label="Lesson" source="lessonId" reference="Lessons" >
                <SelectInput optionText="title" />
            </ReferenceInput>
            <TextInput source="title" validate={required} />
            <LongTextInput source="task" validate={required}  inputProps={{ spellcheck: false }} />
        </SimpleForm>
    </Edit>
);

export const ExerciseCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <SelectInput source="sort" choices={Array.from(Array(50).keys()).map((_, index) => ({ id: index + 1, name: index + 1 }))} allowEmpty />
            <ReferenceInput label="Lesson" source="lessonId" reference="Lessons" allowEmpty>
                <SelectInput optionText="title" />
            </ReferenceInput>
            <TextInput source="title" />
            <LongTextInput source="task" />
        </SimpleForm>
    </Create>
);
