import React from 'react';
import { NativeBaseProvider, Box, Button, Input, Center } from 'native-base';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator'; // Importação da tipagem correta

type CadastrarColaboradorProp = NativeStackNavigationProp<
  RootStackParamList,
  'CadastrarColaborador'
>;

type Props = {
  navigation: CadastrarColaboradorProp;
};

const CadastrarColaborador = ({ navigation }: Props) => {
  return (
    <NativeBaseProvider>
      <Center flex={1} bg="white">
        <Box>
          <Input placeholder="Nome" mb={4} />
          <Input placeholder="Email" mb={4} />
          <Input placeholder="Cargo" mb={4} />
          <Input placeholder="Área" mb={4} />
          <Input placeholder="Matrícula" mb={4} />
          <Input placeholder="Treinamentos" mb={4} />
          <Button onPress={() => navigation.navigate('Colaboradores')}>
            Registrar Colaborador
          </Button>
        </Box>
      </Center>
    </NativeBaseProvider>
  );
};

export default CadastrarColaborador;