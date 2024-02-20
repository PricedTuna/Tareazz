import {View} from 'react-native';
import React from 'react';
import {DataTable} from 'react-native-paper';
import DataTableTitle from './dataTable/DataTableTitle';
import {tasksList} from '../../api/tasksList';
import DataTableRowTitle from './dataTable/DataTableRowTitle';
import DataTableRowCourse from './dataTable/DataTableRowCourse';
import DataTableRowDeadline from './dataTable/DataTableRowDeadline';
import {GlobalStyles} from '../../theme/appTheme';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParams} from '../navigator/Navigator';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParams, 'Home'>;

const TasksTable = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <View style={{...GlobalStyles.globalMargin}}>
      <DataTable>
        <DataTable.Header>
          <DataTableTitle title="Tarea" />
          <DataTableTitle title="Curso" />
          <DataTableTitle title="Entrega" />
        </DataTable.Header>

        {tasksList.map(task => (
          <TouchableOpacity
            key={task.id_task}
            activeOpacity={0.5}
            onPress={() => {
              navigation.navigate('TaskDetails', task);
            }}>
            <DataTable.Row>
              <DataTableRowTitle text={task.title} />
              <DataTableRowCourse id_course={task.id_course} />
              <DataTableRowDeadline deadline={task.deadline} />
            </DataTable.Row>
          </TouchableOpacity>
        ))}
      </DataTable>
    </View>
  );
};

export default TasksTable;
