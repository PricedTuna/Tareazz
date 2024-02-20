import {View, Text} from 'react-native';
import React from 'react';
import {DataTable} from 'react-native-paper';
import {TasksTableStyle} from '../../../theme/appTheme';

interface Props {
  deadline: string | undefined;
}

const DataTableRowDeadline = ({deadline}: Props) => {
  return (
    <DataTable.Cell>
      <Text style={TasksTableStyle.taskTableTextRow}>
        {deadline ? deadline : 'undefined'}
      </Text>
    </DataTable.Cell>
  );
};

export default DataTableRowDeadline;
