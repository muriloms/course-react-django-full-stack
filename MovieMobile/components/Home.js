import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View, Button, FlatList, Platform } from 'react-native';

export default function Home(props) {

    const [name, setName] = useState('Murilo  Mazzotti Silvestrini');

    return (
        <View style={styles.home}>
            <Text>{props.msg}</Text>
            <Text>
                {Platform.OS == "android" ? "I'm androd" : "I'm IOS"}
            </Text>
            <Button
                title="Go to Details"
                onPress={() => props.navigation.navigate('Detail')}
            ></Button>
        </View>
    );
}

const styles = StyleSheet.create(
    {
        home: {
        flex: 1,
        backgroundColor: Platform.OS == 'android' ?  '#fff' : '#00ff00',
        alignItems: 'center',
        justifyContent: 'center',
        },
        text:{
            color: '#00ff00',
            marginTop: 10,
            fontSize: 50,
            textAlign: 'center',
        }
  });
  