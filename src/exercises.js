import React from 'react';
import { List, Datagrid, TextField } from 'admin-on-rest';

export const ExersciseList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="task" />
        </Datagrid>
    </List>
);
