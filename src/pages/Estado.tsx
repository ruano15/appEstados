import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { ItemEstado } from '../components/ItemEstado';
import { api } from '../services/api';

export interface Estado{
    id:number;
    nome:string;
    sigla:string;
    regiao:string;
}

export function Estado() {

    const [estados, setEstados] = useState<Estado[]>([]);
    const navigation = useNavigation();

    function handleToMunicipio(item:Estado){
        navigation.navigate('Municipio', {estado:item})
      }
      async function carregaEstados(){
        const response = await api.get('?orderBy=name')
        setEstados(response.data)
      }
      useEffect(() => {
        carregaEstados();
      },[])

    return (
      <View style={styles.container} >
        <FlatList<Estado>
          style={{flex:1}}
          data={estados}
          keyExtractor={(estado)=> String(estado.id)}
          renderItem={({item})=>
        <ItemEstado 
          item={item} 
          onPress={() => handleToMunicipio(item)} />
        }>
        </FlatList>
      </View>
    );
}

  const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#eeeeee',
        justifyContent:'center'
      }
  })