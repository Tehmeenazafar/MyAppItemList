import React , {FC} from 'react'
import { View, TextInput, StyleSheet, Dimensions } from 'react-native'
const {height,width} =Dimensions.get('screen');

interface Props{
    placeholder: string;
    onChangeText: (text:string) => void;
    secureTextEntry?:boolean;
}
const Input : FC<Props> = (props)=>{
    return(
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder={props.placeholder} secureTextEntry={props.secureTextEntry || false} onChangeText={props.onChangeText} />

            
        </View>

    )
}
export default Input;
const styles = StyleSheet.create({
    container:{
        width:width/1.1,
        alignSelf:'center',
        backgroundColor:"#e3e3e3",
        borderRadius:5
    },
    input:{
        padding:15
    }
})