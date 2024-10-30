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
        </Box>
        <Box>
        <Button bgColor={"red.500"} margin={5} onPress={() => navigation.navigate('Index')}>
                    Tela Inicial
                </Button>
                <Button bgColor={'purple.500'} margin={5}  onPress={() => navigation.navigate('Treinamentos')}>
                    Lista de Treinamentos
                </Button>
                <Button bgColor={'emerald.500'} margin={5} onPress={() => navigation.navigate('CadastrarColaborador')}>
                    Cadastrar Colaboradores
                </Button>
                <Button bgColor={'pink.500'} margin={5} onPress={() => navigation.navigate('Colaboradores')}>
                    Lista de Colaboradores
                </Button>
                
        </Box>
      </Center>
    </NativeBaseProvider>
  );
};

export default CadastrarTreinamento;