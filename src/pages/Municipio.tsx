import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { ItemMunicipio } from '../components/ItemMunicipio';
import { api } from '../services/api';
import { Estado } from './Estado';

interface Params{
    estado:Estado;
}

export interface Municipio{
    id:number;
    nome:string;
}

export function Municipio() {

    const route = useRoute();
    const {estado} = route.params as Params;
    const [municipios, setMunicipios] = useState<Municipio[]>([])
    const navigation = useNavigation();

    async function carregaMunicipios(){
        const response = await api.get<Municipio[]>(`/${estado.id}/municipios?orderBy=name`)
        setMunicipios(response.data)
      }
      useEffect(() => {
        carregaMunicipios();
        navigation.setOptions({title: estado.nome})
      },[])

      return (
        <View style={styles.container} >
        <FlatList<Municipio>
        style={{flex:1}}
        data={municipios}
        keyExtractor={(municipio)=> String(municipio.id)}
        renderItem={({item})=>
        <ItemMunicipio item={item} />
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