import React, { Component } from 'react';
import { getTopHeadlines } from '../../service/news'
import { FlatList, Image, View, Text } from 'react-native';

export default class Tabthree extends Component {

    state = {
        isLoading: true,
        data: null
    }

    componentDidMount = () => {
        getTopHeadlines().then(data => this.setState({ data, isLoading: false }))
    }

    render() {

        return (
            <FlatList
                ItemSeparatorComponent={(props) => {
                    return (<View style={{ height: 1, backgroundColor: 'green' }} />);
                }}
                data={this.state.data}
                keyExtractor={x => x.title}
                renderItem={({ item }) => {
                    return <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 2, paddingVertical: 2, }}>
                        <Image source={{ uri: item.urlToImage || 'https://i.pinimg.com/originals/01/3a/ff/013affc03f365278675d89949356c227.jpg' }} style={{ width: 50, height: 50, borderRadius: 25, marginRight: 10, marginLeft: 3 }} />
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontWeight: 'bold', }} numberOfLines={1}   >{item.title}</Text>
                            <Text style={{ color: 'grey' }} numberOfLines={2} >{item.description || '----- No more description found -----'}</Text>
                        </View>
                    </View>
                }}

            // renderItem={({ item }) => (
            //     <View>
            //         <Text>{item.title}</Text>
            //         <Text>{item.description}</Text>
            //     </View>
            // )}
            />
        );
    }
}