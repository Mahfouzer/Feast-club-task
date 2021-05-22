import React from 'react'
import { View, Text } from 'react-native'
import Actor from '../Actor'

export default function Actorslist({ actors }: { actors: any[] }) {
    return (
        <View>
            {actors.map((actor: any) => <Actor ActorDetails={actor} key={actor.name} />)}
            <Text></Text>
        </View>
    )
}
