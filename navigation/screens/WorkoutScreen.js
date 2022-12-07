import { StyleSheet, Text, View, Image, ScrollView, Pressable } from "react-native";
import React, { useContext } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { FitnessItems } from "../../Context";
import { AntDesign } from '@expo/vector-icons';

const WorkoutScreen = () => {
    const route = useRoute();
    //console.log(route.params);

    const {completed, setCompleted} = useContext(FitnessItems);

    const navigation = useNavigation();

    return (
        <>
            <ScrollView>
                <Image style={{ width: '100%', height: 250, }} source={{ uri: route.params.image }} />

                <Ionicons onPress={() => navigation.goBack()} style={{ position: 'absolute', top: 8, left: 8 }} name="arrow-back-outline" size={28} color="white" />

                {route.params.exercises.map((item, index) => (
                    <Pressable style={{ margin: 10, flexDirection: 'row', alignContent: 'center' }} key={index}>
                        <Image style={{ width: 135, height: 100, borderRadius: 25}} source={{ uri: item.image }} />


                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ fontSize: 17, fontWeight: 'bold' }}>{item.name}</Text>
                            <Text>{item.sets} sets</Text>
                        </View>

                        {completed.includes(item.name) ? (<AntDesign name="Trophy" size={24} color="black" />) : (null)}
                    </Pressable>
                ))}
            </ScrollView>

            <Pressable onPress={() => navigation.navigate("Fit", { exercises: route.params.exercises })} style={{ backgroundColor: 'dodgerblue', padding: 15, marginLeft: 'auto', marginRight: 'auto', borderRadius: 25, width: 120, marginBottom: 5 }}>
                <Text style={{ textAlign: 'center', color: 'white', fontSize: 15, fontWeight: 'bold' }}>Begin</Text>
            </Pressable>

        </>
    );
};

export default WorkoutScreen

const styles = StyleSheet.create({})