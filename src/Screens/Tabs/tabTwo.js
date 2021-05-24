import React, { Component } from 'react';
import { getTechnologyArticles } from '../../service/news'
import { FlatList, Image, View, Text } from 'react-native';
import RenderList from '../../Components/RenderList';
import Loading from '../../Components/Loading';

export default class Tabtwo extends Component {

    state = {
        isLoading: true,
        data: null
    }

    componentDidMount = () => {
        getTechnologyArticles().then(data => this.setState({ data, isLoading: false }))
    }

    render() {

        if (this.state.isLoading)
        return <Loading />

        return (
            <FlatList showsVerticalScrollIndicator={false}
            style={{ marginHorizontal: 10 }}
            ItemSeparatorComponent={(props) => {
                return (<View style={{ height: 1, backgroundColor: 'white' }} />);
            }}
            data={this.state.data}
            keyExtractor={x => x.title}
            renderItem={({ item }) => {
                return <RenderList
                    imageUrl={item.urlToImage}
                    title={item.title}
                    description={item.description}
                    date={item.publishedAt}
                />
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