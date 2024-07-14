import { SafeAreaView, ScrollView, View } from 'react-native'
import React from 'react'
import HeaderTab from '../components/home/HeaderTab'
import SearchBar from '../components/home/SearchBar'
import normalizedSize from 'react-native-normalized-size';
import Categories from '../components/home/Categories';
import RestaurantItem from '../components/home/RestaurantItem';

const Home = () => {
    return (
        <SafeAreaView style={{ backgroundColor: "#f5f5f5" }}>
            <View style={{
                backgroundColor: "#ffffff",
                padding: normalizedSize(15)
            }}>
                <HeaderTab />
                <SearchBar />
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}>
                <Categories />
                <RestaurantItem />
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home