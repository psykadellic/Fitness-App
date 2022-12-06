import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React from "react";
import fitness from "../data/fitness";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

export default function FitnessCards () {
    const FitnessData = fitness;
    const navigation = useNavigation();
    return (
        <View>
        {FitnessData.map((item, key) => (
            <Pressable 
            onPress={() => navigation.navigate('Workout', {image: item.image, exercises: item.exercises, id:item.id})}
            style = {{alignItems: 'center', justifyContent: 'center', margin: 10 }} key = {key}>
                <Image 
                style = {{ width: '95%', height: 120, borderRadius: 30, marginTop: 15}}
                source = {{ uri: item.image }}
                />
                <Text style = {{position: 'absolute', color: 'white', fontSize: 18, fontWeight: 'bold', left: 20, top: 25}}>
                    {item.name}
                </Text>
                <AntDesign style = {{position: 'absolute', color: 'white', bottom: 10}} name="ellipsis1" size={25} color="black" />
            </Pressable>
        ))}     
    </View>
    )
}