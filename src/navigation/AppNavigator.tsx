import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Index from '../screens/Index';
import CadastrarColaborador from '../screens/CadastrarColaborador';
import CadastrarTreinamento from '../screens/CadastrarTreinamento';
import Colaboradores from '../screens/Colaboradores';
import Treinamentos from '../screens/Treinamentos';

// Definindo o RootStackParamList com todas as telas do projeto
export type RootStackParamList = {
  Index: undefined;
  CadastrarColaborador: undefined;
  CadastrarTreinamento: undefined;
  Colaboradores: undefined;
  Treinamentos: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Index">
      <Stack.Screen name="Index" component={Index} />
      <Stack.Screen name="CadastrarColaborador" component={CadastrarColaborador} />
      <Stack.Screen name="CadastrarTreinamento" component={CadastrarTreinamento} />
      <Stack.Screen name="Colaboradores" component={Colaboradores} />
      <Stack.Screen name="Treinamentos" component={Treinamentos} />
    </Stack.Navigator>
  );
};

export default AppNavigator;