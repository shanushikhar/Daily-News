import React, { Component } from 'react';
import { getTechnologyArticles } from '../../service/news'
import { FlatList, RefreshControl, View, } from 'react-native';
import RenderList from '../../Components/RenderList';
import Loading from '../../Components/Loading';
import { colors } from '../../Constants';

export default class Tabtwo extends Component {

    state = {
        isLoading: true,
        data: null,
        refreshing: true
    }

    componentDidMount = () => {
        this.getData()
    }

    showDescription = (data) => {
        this.props.navigationFromTab.navigate('details', {
            data
        })
    }

    getData = () => {
        getTechnologyArticles().then(data => this.setState({ data, isLoading: false, refreshing: false }))
    }

    onRefresh = () => {
        //Clear old data of the list
        this.setState({ data: [] })
        //Call the Service to get the latest data
        this.getData();
    };

    render() {

        if (this.state.isLoading)
            return <Loading />

        return (
            <FlatList showsVerticalScrollIndicator={false}
                style={{ marginHorizontal: 10 }}
                ItemSeparatorComponent={(props) => {
                    return (<View style={{ height: 1, backgroundColor: colors.secondary }} />);
                }}
                data={this.state.data}
                keyExtractor={x => x.title}
                renderItem={({ item }) => {
                    return <RenderList
                        imageUrl={item.urlToImage}
                        title={item.title}
                        description={item.description}
                        date={item.publishedAt}
                        onClick={() => this.showDescription(item)}
                    />
                }}
                refreshControl={
                    <RefreshControl
                        //refresh control used for the Pull to Refresh
                        // title="Pull to refresh"
                        // tintColor="red" titleColor="red"
                        colors={[colors.primary]}
                        refreshing={this.state.refreshing}
                        onRefresh={this.onRefresh.bind(this)}
                    />
                }

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