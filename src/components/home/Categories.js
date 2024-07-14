import { ScrollView, Text, View } from 'react-native'
import React from 'react'
import { CategoriesItems } from '../../Constants/CategoriesItems'
import CustomSvgComponent from '../../utils/CustomSvgComponent'
import normalizedSize from 'react-native-normalized-size'

const Categories = () => {
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginTop: normalizedSize(15) }}>

            {CategoriesItems.map((item, index) => (
                <View
                    key={index}
                    style={{
                        alignItems: "center",
                        gap: normalizedSize(5),
                        marginRight: normalizedSize(30),
                        marginLeft: index == 0 ? normalizedSize(15) : 0,
                        backgroundColor: "#ffffff",
                        padding: normalizedSize(10),
                        borderRadius: normalizedSize(15),
                        width: normalizedSize(100),
                        justifyContent: "center"
                    }}>

                    <CustomSvgComponent
                        svgKey={item.svgName}
                        width={normalizedSize(60)}
                        height={normalizedSize(60)} />

                    <Text style={{
                        fontSize: normalizedSize(16),
                        fontWeight: "600"
                    }}>
                        {item.text}</Text>
                </View>
            ))}

        </ScrollView>
    )
}

export default Categories