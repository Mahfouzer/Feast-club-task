import React from 'react'
import { View, Text } from 'react-native'

export default function Actor({ ActorDetails }: { ActorDetails: any }) {
    return (
        <View>
            <Text>{ActorDetails.name}</Text>
        </View>
    )
}
