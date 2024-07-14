import { View, Text } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import normalizedSize from 'react-native-normalized-size';
import SvgComponent from 'react-native-svg-rendo';

const SearchBar = () => {
    return (
        <View style={{
            marginTop: normalizedSize(15),
            flexDirection: "row"
        }}>
            <GooglePlacesAutocomplete
                placeholder='Search'
                styles={{
                    textInput: {
                        backgroundColor: "#f5f5f5",
                        borderRadius: normalizedSize(20),
                        marginTop: normalizedSize(5),
                        fontWeight: "700",
                    },
                    textInputContainer: {
                        backgroundColor: "#f5f5f5",
                        borderRadius: normalizedSize(50),
                        flexDirection: "row",
                        alignItems: "center",
                        marginRight: normalizedSize(10)
                    }
                }}
                renderLeftButton={() => (
                    <View style={{ marginLeft: normalizedSize(10) }}>
                        <SvgComponent
                            svgKey="location-map-pin-1"
                            stroke="#ffffff"
                            strokeWidth={1.5}
                            width={normalizedSize(24)}
                            height={normalizedSize(24)}
                            fill='#252525'
                        />
                    </View>
                )}
                renderRightButton={() => (
                    <View style={{
                        marginRight: normalizedSize(10),
                        flexDirection: "row",
                        alignItems: "center",
                        backgroundColor: "#ffffff",
                        borderRadius: normalizedSize(30),
                        padding: normalizedSize(9),
                        gap: normalizedSize(5)
                    }}>
                        <SvgComponent
                            svgKey="speedometer-clock-timer-2"
                            stroke="#ffffff"
                            strokeWidth={1.5}
                            width={normalizedSize(12)}
                            height={normalizedSize(12)}
                            fill='#252525'
                        />
                        <Text>Search</Text>
                    </View>
                )}
            />
        </View>
    )
}

export default SearchBar