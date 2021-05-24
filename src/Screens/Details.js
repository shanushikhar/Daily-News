//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native';

// create a component
class Details extends Component {
    render() {
        console.log(this.props.navigation.getParam('data'))
        return (
            <View style={{ flex: 1 }}>

                <ImageBackground resizeMode='cover' style={{ width: '100%', height: 300 }}
                    source={{ uri: 'https://images.unsplash.com/photo-1610555248279-adea4c523fb3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80' }} >

                    <View style={{
                        marginTop: 30, height: 40, backgroundColor: "white", width: 40, marginLeft: 20,
                        justifyContent: 'center', alignItems: 'center', borderRadius: 20
                    }}>
                        <Text style={{ color: 'red', }}> 👈 </Text>
                    </View>

                    <View style={{ position: 'absolute', top: 30, right: 20, backgroundColor: "white", width: 40, borderRadius: 20, height: 40, justifyContent: 'center', alignItems: 'center', }}>
                        <Text style={{ color: 'red', }}> ♥ </Text>
                    </View>

                </ImageBackground>

                <ScrollView style={{ top: -10, elevation: 17, backgroundColor: "yellow", borderTopLeftRadius: 35, borderTopRightRadius: 35, overflow: 'hidden', }}>
                    <View style={{ padding: 10, alignItems: 'center' }}>
                        <Text>hello.....</Text>
                        <Text>hello.....</Text>
                        <Text>hello.....</Text>
                        <Text>hello.....</Text>
                        <Text>hello.....</Text>
                        <Text>hello.....</Text>
                        <Text>hello.....</Text>
                        <Text>hello.....</Text>
                        <Text>hello.....</Text>
                        <Text>hello.....</Text>
                        <Text>hello.....</Text>
                        <Text>hello.....</Text>
                        <Text>hello.....</Text>
                        <Text>hello.....</Text>
                        <Text>hello.....</Text>
                        <Text>hello.....</Text>
                        <Text>hello.....</Text>
                        <Text>hello.....</Text>
                        <Text>hello.....</Text>
                        <Text>hello.....</Text>
                        <Text>hello.....</Text>
                        <Text>hello.....</Text>
                        <Text>hello.....</Text>
                        <Text>hello.....</Text>
                        <Text>hello.....</Text>
                        <Text>hello.....</Text>
                        <Text>hello.....</Text>
                    </View>

                </ScrollView>

            </View >
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
});

//make this component available to the app
export default Details;
