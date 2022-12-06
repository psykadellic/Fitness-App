import { StyleSheet, Text, View, Image, ScrollView, Pressable } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import fitness from "../../data/fitness";

const WorkoutScreen = () => {
    const route = useRoute();
    console.log(route.params);

    const navigation = useNavigation();

    return (
        <>
        <ScrollView>
            <Image style = {{width: '100%', height: 170}} source = {{ uri: route.params.image }} />

            <Ionicons onPress={() => navigation.goBack()} style = {{ position: 'absolute', top: 8, left: 8}}name = "arrow-back-outline" size = {28} color = "white"/>

            {route.params.exercises.map((item, index) => (
                <Pressable style = {{ margin: 10, flexDirection: 'row', alignContent: 'center'}} key = {index}>
                    <Image style = {{ width: 90, height: 90 }} source = {{uri : item.image}}/>


                    <View style = {{ marginLeft: 10 }}>
                        <Text style ={{ fontSize: 17, fontWeight: 'bold'}}>{item.name}</Text>
                        <Text>{item.sets}</Text>
                    </View>
                </Pressable>
            ))}
        </ScrollView>

        <Pressable onPress={() => navigation.navigate("Fit", {exercises: route.params.exercises})} style = {{backgroundColor: 'dodgerblue', padding: 10, marginLeft:'auto', marginRight: 'auto', borderRadius: 25, width: 120, marginBottom: 5}}>
            <Text style = {{ textAlign: 'center', color: 'white', fontSize: 15, fontWeight: 'bold'}}>Begin</Text>
        </Pressable>

        </>
    );
};

export default WorkoutScreen

const styles = StyleSheet.create({})