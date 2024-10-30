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
          <Button onPress={() => navigation.navigate('Colaboradores')}>
            Ir para a tela de Colaboradores
          </Button>
          <Button onPress={() => navigation.navigate('Treinamentos')}>
            Ir para a tela de Treinamentos
          </Button>
        </Box>
      </Center>
    </NativeBaseProvider>

    
  );
};



export default Index;