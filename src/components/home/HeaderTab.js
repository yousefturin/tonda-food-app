import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import normalizedSize from 'react-native-normalized-size';
const HeaderTab = () => {
    const [activeTap, setActiveTap] = React.useState("Delivery");
    return (
            <View style={{ flexDirection: "row", alignSelf: "center" }}>
                <HeaderButton
                    text="Delivery"
                    btnColor="#252525"
                    textColor="#ffffff"
                    activeTap={activeTap}
                    setActiveTap={setActiveTap} />
                <HeaderButton
                    text="Pickup"
                    btnColor="#ffffff"
                    textColor="#252525"
                    activeTap={activeTap}
                    setActiveTap={setActiveTap} />
            </View>
    )
}

export default HeaderTab


const HeaderButton = (props) => {
    return (

        <TouchableOpacity style={{
            paddingVertical: normalizedSize(6),
            paddingHorizontal: normalizedSize(16),
            backgroundColor: props.activeTap === props.text ? "#252525": "#ffffff",
            alignItems: "center",
            borderRadius: normalizedSize(30),
        }}
            activeOpacity={0.6}
            onPress={() => props.setActiveTap(props.text)}>
            <Text
                style={{
                    fontSize: normalizedSize(16),
                    color: props.activeTap === props.text ? "#ffffff":"#252525",
                    fontWeight: props.activeTap === props.text ? "bold" : "normal",
                }}>
                {props.text}</Text>
        </TouchableOpacity>

    )
}