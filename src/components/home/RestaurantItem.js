import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import SvgComponent from 'react-native-svg-rendo'
import normalizedSize from 'react-native-normalized-size'
import CustomSvgComponent from '../../utils/CustomSvgComponent'
import { LinearGradient } from 'expo-linear-gradient';

const RestaurantItem = () => {
    return (
        <TouchableOpacity
            activeOpacity={1}
            style={{
                backgroundColor: "#ffffff",
                marginTop: normalizedSize(25),
                borderRadius: normalizedSize(15),
                marginHorizontal: normalizedSize(15),
                marginBottom: normalizedSize(15),
            }}>
            <RestaurantImage />
            <RestaurantInfo />
        </TouchableOpacity>
    )
}

const RestaurantImage = () => {
    return (
        <>
            <Image
                source={require("../../../assets/Images/pexels-chanwalrus-958545.jpg")}
                style={{ width: "100%", height: normalizedSize(180), borderTopLeftRadius: normalizedSize(15), borderTopRightRadius: normalizedSize(15) }}>
            </Image>
            <AddRestaurantToFavorite />
        </>
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
                    fontSize: normalizedSize(16),
                    fontWeight: "600"
                }}>
                    Restaurant Name</Text>
                <View style={{ flexDirection: "row", gap: normalizedSize(5) }}>
                    <CustomSvgComponent
                        svgKey="FoodTruck"
                        width={normalizedSize(15)}
                        height={normalizedSize(15)}
                    />
                    <Text style={{
                        fontSize: normalizedSize(12),
                        color: "grey"
                    }}>
                        30-45 min - Burger</Text>
                </View>
            </View>
            <LinearGradient
                style={{
                    padding: normalizedSize(10),
                    borderRadius: normalizedSize(50),
                    flexDirection: "row",
                    alignItems: "center",
                    gap: normalizedSize(5)
                }}
                colors={['#09A129', '#14CC60']}
            >
                <SvgComponent
                    svgKey="star-rating"
                    width={normalizedSize(15)}
                    height={normalizedSize(15)}
                    fill='#ffffff'
                    stroke='#ffffff'
                />
                <Text style={{
                    fontSize: normalizedSize(12),
                    fontWeight: "600",
                    color: "#ffffff"
                }}>
                    4.5</Text>
            </LinearGradient>
        </View>
    )
}
const AddRestaurantToFavorite = () => {
    return (
        <TouchableOpacity
            activeOpacity={0.9}
            style={{
                position: "absolute",
                backgroundColor: "#ffffff",
                padding: 6,
                borderRadius: 50,
                top: 10,
                right: 10
            }}>
            <SvgComponent
                svgKey="like-heart-like"
                width={16}
                height={16}
                stroke='#ff2200'
            />
        </TouchableOpacity>
    )
}
export default RestaurantItem