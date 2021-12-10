import firebase from 'firebase/compat'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { getFirestore } from "firebase/firestore"
import { collection, addDoc } from "firebase/firestore"; 


import React, { useState } from 'react'
import { View, Text, StyleSheet, Dimensions, Image, ScrollView, FlatList, TextInput, Alert } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Input,Button } from '../components'
// interface Props {
//     visible: false
// }
const db = getFirestore();
 const App: React.FC = (props) => {
     const [title , setTitle] = useState<string | null>(null);
     const [descrption , setDescription] = useState<string | null>(null);

    const addItem = async() =>{
        console.log("i am here ")
        if(title && descrption){
            console.log("i am here 2")
            const data = {
                title,
                descrption,
                timeStamp:Date.now(),
                favourite:false,
            }
            // try{
            //     console.log("i am here 3: ",data)
            //     firebase.firestore().collection('Items').add(data).then((resp)=>{
            //         console.log('here in add item')
            //     },(err)=>{
            //         console.log("here in error===>",err)
            //     })
            // }catch(err){   
            //     console.log(err);
            // }

            try {
                const docRef = await addDoc(collection(db, "Items"), {
                    title,
                    descrption,
                    timeStamp:Date.now(),
                    favourite:false,
                });
                console.log("Document written with ID: ", docRef.id);
              } catch (e) {
                console.error("Error adding document: ", e);
              }
              

        }else{
            Alert.alert('error', 'Missing Fields');
        }

    }
    return (
            <View style={{margin:'2%', flex:1}}>
                <View>
                    <Text>
                        Title
                    </Text>
                    <Input placeholder="title"  onChangeText ={(text) => setTitle(text)}/>
                    
                </View>
                <View>
                    <Text>
                        Description
                    </Text>
                    <Input placeholder="descrption"  onChangeText ={(text) => setDescription(text)}/>
                </View>
                <Button title="Add" onPress={addItem} />
            </View>
        )
    }
    export default App;
    const styles = StyleSheet.create({})