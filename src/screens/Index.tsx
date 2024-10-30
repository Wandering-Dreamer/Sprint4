import React from 'react';
import { NativeBaseProvider, Box, Button, Center } from 'native-base';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator'; // Certifique-se de importar isso

type IndexProp = NativeStackNavigationProp<
  RootStackParamList,
  'Index'
>;

type Props = {
  navigation: IndexProp;
};

const Index = ({ navigation }: Props) => {
  return (
    <NativeBaseProvider>
      <Center flex={1} bg="white">
        <Box>
          <Button bgColor={'pink.500'} margin={5} onPress={() => navigation.navigate('Colaboradores')} >
            Ir para a tela de Colaboradores
          </Button>
          <Button bgColor={'purple.500'} margin={5} onPress={() => navigation.navigate('Treinamentos')}>
            Ir para a tela de Treinamentos
          </Button>
          <Button bgColor={'emerald.500'} margin={5} onPress={() => navigation.navigate('CadastrarColaborador')}>
            Ir para a tela de Cadastro de Colaborador
          </Button>
          <Button bgColor={'blue.500'} margin={5} onPress={() => navigation.navigate('CadastrarTreinamento')}>
            Ir para a tela de Cadastro de Treinamento
          </Button>
        </Box>
      </Center>
    </NativeBaseProvider>

    
  );
};



export default Index;