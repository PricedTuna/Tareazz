import {View, Text} from 'react-native';
import React from 'react';
import {DataTable} from 'react-native-paper';
import {TasksTableStyle} from '../../../theme/appTheme';

interface Props {
  text: string;
}

const DataTableRowTitle = ({text}: Props) => {
  return (
    <DataTable.Cell>
      <Text style={TasksTableStyle.taskTableTextRow}>{text}</Text>
    </DataTable.Cell>
  );
};

export default DataTableRowTitle;
