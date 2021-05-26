//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView, ActivityIndicator, TouchableOpacity, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { colors } from '../Constants';

// create a component
class Details extends Component {

    state = {
        loading: true
    }

    render() {
        const { navigation } = this.props
        const data = navigation.getParam('data')
        return (
            <View style={{ flex: 1, backgroundColor: colors.secondary }}>

                <ImageBackground resizeMode='cover' style={{ width: '100%', height: 350 }}

                    onLoadStart={() => this.setState({ loading: true })}
                    onLoadEnd={() => {
                        this.setState({ loading: false })
                    }}
                    source={{ uri: data.urlToImage || 'https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found.jpg' }} >

                    <TouchableOpacity
                        onPress={() => navigation.goBack()} style={styles.background}>
                        <FontAwesome
                            name="arrow-left"
                            size={20}
                            color={colors.accent}
                        />
                    </TouchableOpacity>

                </ImageBackground>

                {this.state.loading && <ActivityIndicator style={styles.loader} size="small" color="#FFD700" />}



                <View style={styles.desc}>
                    <View style={styles.heart}>
                        <FontAwesome
                            name="heart"
                            size={25}
                            color={colors.primary}
                        />
                    </View>

                    <ScrollView showsVerticalScrollIndicator={false}>
                        {/* <Text style={styles.source}>{data.source.name}</Text>
                        <Text style={{ fontWeight: 'bold', }}>{data.content.split('').slice(0, 150) || '----- No description found -----'}</Text> */}
                        <Text style={styles.source}> {data.source.name}</Text>
                        <Text style={{ fontWeight: 'bold', }}>{data.content || '----- No description found -----'}</Text>
                    </ScrollView>
                </View>

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
    desc: {
        marginTop: -10, flex: 1,
        backgroundColor: "white",
        borderTopLeftRadius: 12, borderTopRightRadius: 12, paddingHorizontal: 20
    },
    loader: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        opacity: 0.7,
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
    },
    background: {
        marginTop: 30, height: 40, backgroundColor: "white", width: 40, marginLeft: 20,
        justifyContent: 'center', alignItems: 'center', borderRadius: 20
    },
    heart: {
        position: 'absolute',
        right: 20, top: -25, overflow: 'visible',
        backgroundColor: colors.accent, width: 50,
        borderRadius: 25, height: 50, justifyContent: 'center', alignItems: 'center',
    },
    source: { color: colors.accent, fontWeight: 'bold', alignSelf: 'flex-start', paddingVertical: 10 }
});

//make this component available to the app
export default Details;
