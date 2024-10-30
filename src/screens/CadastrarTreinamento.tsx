import React from 'react';
import { NativeBaseProvider, Box, Button, Input, Center } from 'native-base';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator'; // Importação da tipagem correta

type CadastrarTreinamentoProp = NativeStackNavigationProp<
  RootStackParamList,
  'CadastrarColaborador'
>;

type Props = {
  navigation: CadastrarTreinamentoProp;
};

const CadastrarTreinamento = ({ navigation }: Props) => {
  return (
    <NativeBaseProvider>
      <Center flex={1} bg="white">
        <Box>
          <Input placeholder="Título" mb={4} />
          <Input placeholder="Descrição" mb={4} />
          <Input placeholder="Data" mb={4} />
          <Input placeholder="Participantes" mb={4} />
          <Input placeholder="Instrutor" mb={4} />
          <Input placeholder="Duração" mb={4} />
          <Button onPress={() => navigation.navigate('Treinamentos')}>
            Registrar Treinamento
          </Button>
        </Box>
      </Center>
    </NativeBaseProvider>
  );
};

export default CadastrarTreinamento;