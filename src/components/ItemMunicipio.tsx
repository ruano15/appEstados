import React from "react";
import { TouchableOpacity, View, Text, StyleSheet, TouchableOpacityProps } from "react-native";
import { Estado } from "../pages/Estado";
import { Municipio } from "../pages/Municipio";

interface ItemMunicipioProps extends TouchableOpacityProps{
    item: Municipio;
}

export function ItemMunicipio({item, ...rest}: ItemMunicipioProps){

    return(
        <TouchableOpacity style={styles.itemEstado}{...rest}>
          <View style={styles.stlSigla}>
            <Text style={styles.legSigla}>
              {item.nome.substring(0,2)}
            </Text>
          </View>
            <Text style={styles.legNome}>
              {item.nome}
            </Text>
        </TouchableOpacity>
      )
}
const styles = StyleSheet.create({
    itemEstado: {
      paddingVertical: 10,
      marginTop: 5,
      backgroundColor: '#FFFFFF',
      flexDirection:'row',
      borderRadius: 10
    },
    stlSigla:{
      width: 40,
      height: 40,
      backgroundColor: '#147EA9',
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 10
    },
    legSigla:{
      fontSize: 15,
      color: 'white'
    },
    legNome:{
      fontSize: 15,
      fontWeight: 'bold',
      color: '#002B3C',
      marginLeft: 10,
      alignSelf: 'center'
    }
})