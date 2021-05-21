import React from 'react'
import { View, Text } from 'react-native'

export default function Tag({ redtagText }: { redtagText: string }) {
    return (
        <View>
            <Text>tag {redtagText}</Text>
        </View>
    )
}
