//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image'
import moment from 'moment'
import { colors } from '../Constants';

// demo image => 'https://i.pinimg.com/originals/01/3a/ff/013affc03f365278675d89949356c227.jpg'
class RenderList extends Component {

    dateModifier = (index) => {
        //console.log(index)

        function insertVal(val, index, str) {
            return val.slice(0, index) + str + val.slice(index)
        }

        function date() {
            var a = new Date(index).toDateString().substring(4)
            return insertVal(a, -5, ',')
        }

        return <Text style={{ fontWeight: 'bold', color: colors.fontColor, flex: 1 }}>{date()}   .   {moment(index).format('LT')} </Text>
    }

    render() {
        return (
            <View >
                <TouchableOpacity activeOpacity={0.6} style={styles.container} onPress={this.props.onClick}>
                    <FastImage
                        style={styles.image}
                        source={{
                            uri: this.props.imageUrl || 'https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found.jpg',
                            priority: FastImage.priority.normal,
                            cache: FastImage.cacheControl.immutable
                        }}
                    />
                    <View style={{ flex: 1 }}>
                        <Text style={styles.title} numberOfLines={2}   >{this.props.title}</Text>


                        {this.dateModifier(this.props.date)}

                        {/* <Text style={styles.description} numberOfLines={2} >{this.props.description || '----- No more description found -----'}</Text> */}
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: 2, paddingVertical: 8,
    },
    image: { width: 80, height: 80, borderRadius: 20, marginRight: 10 },
    title: {
        fontWeight: 'bold', marginVertical: 8
    },
    description: {
        color: colors.fontColor
    }
});

//make this component available to the app
export default RenderList;
