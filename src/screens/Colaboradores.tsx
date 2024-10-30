import React from 'react';
import { NativeBaseProvider, Box, Button, Center, FlatList, Text } from 'native-base';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator'; // Importação da tipagem correta

type ColaboradoresProp = NativeStackNavigationProp<
  RootStackParamList,
  'Colaboradores'
>;

type Props = {
  navigation: ColaboradoresProp;
};

const mockColaboradores = [
  { id: '1', nome: 'João', email: 'joao@gmail.com', cargo: 'Analista', area: 'Recursos Humanos', matricula: '12345', treinamentos: 'Treinamento RH' },
  { id: '2', nome: 'Maria', email: 'maria@gmail.com', cargo: 'Gerente', area: 'Financeiro', matricula: '54321', treinamentos: 'Treinamento Financeiro' },
];

const Colaboradores = ({ navigation }: Props) => {
  return (
    <NativeBaseProvider>
      <Center flex={1} bg="white">
        <Box>
          <FlatList
            data={mockColaboradores}
            renderItem={({ item }) => (
              <Box borderBottomWidth="1" mb={4} p={2}>
                <Text>Consulta com {item.nome}</Text>
                <Text>Email: {item.email}</Text>
                <Text>Cargo: {item.cargo}</Text>
                <Text>Área: {item.area}</Text>
                <Text>Matrícula: {item.matricula}</Text>
                <Text>Treinamentos: {item.treinamentos}</Text>
                <Button mt={2} onPress={() => navigation.navigate('Index')}>
                  Voltar
                </Button>
              </Box>
            )}
            keyExtractor={(item) => item.id}
          />
        </Box>
      </Center>
    </NativeBaseProvider>
  );
};

export default Colaboradores;