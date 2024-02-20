import {View, Text} from 'react-native';
import React from 'react';
import {DataTable} from 'react-native-paper';
import {GlobalStyles} from '../../../theme/appTheme';

interface Props {
  title: string;
}

const DataTableTitle = ({title}: Props) => {
  return (
    <DataTable.Title>
      <Text style={GlobalStyles.globalText}>{title}</Text>
    </DataTable.Title>
  );
};

export default DataTableTitle;
