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
      <Stack.Screen name="Index" component={Index} options={{ title: 'Tela Inicial' }} />

      <Stack.Screen name="CadastrarColaborador" component={CadastrarColaborador} options={{ title: 'Cadastre o Colaborador' }} />

      <Stack.Screen name="CadastrarTreinamento" component={CadastrarTreinamento} options={{ title: 'Cadastre o Treinamento' }} />

      <Stack.Screen name="Colaboradores" component={Colaboradores} options={{ title: 'Lista de Colaboradores' }}/>

      <Stack.Screen name="Treinamentos" component={Treinamentos} options={{ title: 'Lista de Treinamentos' }}/>

    </Stack.Navigator>
  );
};

export default AppNavigator;