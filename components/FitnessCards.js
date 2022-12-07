import { StyleSheet, Text, View, Pressable, Image, ScrollView } from "react-native";
import React from "react";
import fitness from "../data/data";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

export default function FitnessCards() {
    const FitnessData = fitness;
    const navigation = useNavigation();
    return (
        <>
        <View>
            <Text style = {{ fontWeight: 'bold', fontSize: 25, marginTop: 20, marginLeft: 10}}>Workouts</Text>
        </View>
        <ScrollView horizontal = {true}>
            {FitnessData.map((item, key) => (
                <Pressable
                    onPress={() => navigation.navigate('Workout', { image: item.image, exercises: item.exercises, id: item.id })}
                    style={{ justifyContent: 'space-between', margin: 10, flexDirection:'row' }} key={key}>
                    <Image
                        style={{ width: 320, height: 300, borderRadius: 30, marginTop: 5 }}
                        source={{ uri: item.image }}
                    />
                    <Text style={{ position: 'absolute', color: 'white', fontSize: 18, fontWeight: 'bold', left: 20, top: 25 }}>
                        {item.name}
                    </Text>
                    <AntDesign style={{ position: 'absolute', color: 'white', bottom: 20, left: 280 }} name="right" size={25} color="black" />
                </Pressable>
            ))}
        </ScrollView>
        </>
    )
}