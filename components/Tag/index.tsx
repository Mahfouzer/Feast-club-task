import React from 'react'
import { View, Text } from 'react-native'

export default function Tag({ redtagText }: { redtagText: string }) {
    return (
        <View style={{ marginTop: 10, backgroundColor: "#DEDEDE", marginRight: 10, padding: 17, paddingTop: 5, paddingBottom: 10, borderRadius: 20 }}>
            <Text style={{ fontWeight: "bold" }}>tag {redtagText}</Text>
        </View>
    )
}
