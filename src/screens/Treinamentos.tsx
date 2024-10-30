import React from 'react';
import { NativeBaseProvider, Box, Button, Center, FlatList, Text } from 'native-base';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator'; // Importação da tipagem correta

type TreinamentosProp = NativeStackNavigationProp<
  RootStackParamList,
  'Treinamentos'
>;

type Props = {
  navigation: TreinamentosProp;
};

const mockTreinamentos = [
  { id: '1', titulo: 'Treinamento RH', descricao: 'Treinamento de softwares RH', data: '01/12/2024', participantes: 'João', instrutor: 'Carla', duracao: '1h30min' },
  { id: '2', titulo: 'Treinamento Financeiro', descricao: 'Treinamento de softwares Financeiro', data: '10/12/2024', participantes: 'Maria', instrutor: 'Pedro', duracao: '2h' },
];

const Treinamentos = ({ navigation }: Props) => {
  return (
    <NativeBaseProvider>
      <Center flex={1} bg="white">
        <Box>
          <FlatList
            data={mockTreinamentos}
            renderItem={({ item }) => (
              <Box borderBottomWidth="1" mb={4} p={2}>
                <Text>Consulta com {item.titulo}</Text>
                <Text>Descrição: {item.descricao}</Text>
                <Text>Data: {item.data}</Text>
                <Text>Participantes: {item.participantes}</Text>
                <Text>Instrutor: {item.instrutor}</Text>
                <Text>Duração: {item.duracao}</Text>
              </Box>
            )}
            keyExtractor={(item) => item.id}
          />
        </Box>
        <Box>
        <Button bgColor={"red.500"} margin={5} onPress={() => navigation.navigate('Index')}>
                    Tela Inicial
                </Button>                
                <Button bgColor={'blue.500'} margin={5} onPress={() => navigation.navigate('CadastrarTreinamento')}>
                    Cadastrar Treinamentos
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

export default Treinamentos;