import React from 'react';
import {
    translate,
    Datagrid,
    Edit,
    EditButton,
    List,
    NumberField,
    ReferenceManyField,
    SimpleForm,
    TextField,
    TextInput,
} from 'admin-on-rest';
import Icon from 'material-ui/svg-icons/action/bookmark';

import ThumbnailField from '../products/ThumbnailField';
import ProductRefField from '../products/ProductRefField';
import LinkToRelatedProducts from './LinkToRelatedProducts';

export const CategoryIcon = Icon;

export const CategoryList = (props) => (
    <List {...props} sort={{ field: 'name', order: 'ASC' }}>
        <Datagrid >
            <TextField source="name" style={{ padding: '0 12px 0 25px' }} />
            <EditButton />
        </Datagrid>
    </List>
);

const CategoryTitle = translate(({ record, translate }) => <span>{translate('resources.categories.name', { smart_count: 1 })} "{record.name}"</span>);

export const CategoryEdit = (props) => (
    <Edit title={<CategoryTitle />} {...props}>
        <SimpleForm>
            <TextInput source="name" />

        </SimpleForm>
    </Edit>
);
