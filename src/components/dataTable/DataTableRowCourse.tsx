import {View, Text} from 'react-native';
import React from 'react';
import {DataTable} from 'react-native-paper';
import {TasksTableStyle} from '../../../theme/appTheme';

interface Props {
  id_course: number | undefined;
}

const DataTableRowCourse = ({id_course}: Props) => {
  return (
    <DataTable.Cell>
      <Text style={TasksTableStyle.taskTableTextRow}>
        {id_course ? id_course : 'undefined'}
      </Text>
    </DataTable.Cell>
  );
};

export default DataTableRowCourse;
