import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import SvgComponent from 'react-native-svg-rendo'
import normalizedSize from 'react-native-normalized-size'

const RestaurantItem = () => {
    return (
        <View style={{
            backgroundColor: "#ffffff",
            marginTop: normalizedSize(25),
            borderRadius: normalizedSize(15),
            marginHorizontal: normalizedSize(15),
        }}>
            <RestaurantImage />
            <RestaurantInfo />
        </View>
    )
}

const RestaurantImage = () => {
    return (
        <View>
            <Image
                source={require("../../../assets/Images/pexels-chanwalrus-958545.jpg")}
                style={{ width: "100%", height: normalizedSize(180), borderTopLeftRadius: normalizedSize(15), borderTopRightRadius: normalizedSize(15) }}>
            </Image>
            <AddRestaurantToFavorite />
        </View>
    )
}
const RestaurantInfo = () => {
    return (
        <View style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: normalizedSize(10),
            alignItems: "center"
        }}>
            <View>
                <Text style={{
                    fontSize: normalizedSize(18),
                    fontWeight: "600"
                }}>
                    Restaurant Name</Text>
                <Text style={{
                    fontSize: normalizedSize(14),
                    color: "grey"
                }}>
                    30-45 min</Text>
            </View>
            <View style={{
                backgroundColor: "#eeeeee",
                padding: normalizedSize(10),
                borderRadius: normalizedSize(50)
            }}>
                <Text style={{
                    fontSize: normalizedSize(14),
                    fontWeight: "600"
                }}>
                    4.5</Text>
            </View>
        </View>
    )
}
const AddRestaurantToFavorite = () => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={{
                position: "absolute",
                backgroundColor: "#ffffff",
                padding: 10,
                borderRadius: 50,
                top: 10,
                right: 10
            }}>
            <SvgComponent
                svgKey="like-heart-like"
                width={24}
                height={24}
                stroke='#ff2200'
            />
        </TouchableOpacity>
    )
}
export default RestaurantItem