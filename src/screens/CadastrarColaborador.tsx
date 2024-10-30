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
        </Box>
        <Box>
        <Button bgColor={"red.500"} margin={5} onPress={() => navigation.navigate('Index')}>
                    Tela Inicial
                </Button>
                
                <Button bgColor={'pink.500'} margin={5} onPress={() => navigation.navigate('Colaboradores')}>
                    Lista de Colaboradores
                </Button>
                <Button bgColor={'blue.500'} margin={5} onPress={() => navigation.navigate('CadastrarTreinamento')}>
                    Cadastrar Treinamentos
                </Button>
                <Button bgColor={'purple.500'} margin={5} onPress={() => navigation.navigate('Treinamentos')}>
                    Lista de Treinamentos
                </Button>
        </Box>
      </Center>
    </NativeBaseProvider>
  );
};

export default CadastrarColaborador;