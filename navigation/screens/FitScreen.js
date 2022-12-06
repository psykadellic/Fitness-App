import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'

const FitScreen = () => {
    const route = useRoute();
    console.log(route.params);

    const navigation = useNavigation();
    const [index, setIndex] = useState(0);
    const exercise = route.params.exercises;
    const current = exercise[index];
    console.log(current, 'first exercise');

  return (
    <SafeAreaView>
      <Text>FitScreen</Text>
    </SafeAreaView>
  )
}

export default FitScreen

const styles = StyleSheet.create({})