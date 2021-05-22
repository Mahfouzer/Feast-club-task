import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import Actor from '../Actor'

export default function Actorslist({ actors }: { actors: any[] }) {
    return (

        <View style={styles.ActorsCont}>
            <FlatList
                data={actors}
                renderItem={(tag: any) => <Actor ActorDetails={tag.item} />}
                keyExtractor={(item: any) => item.name}
                horizontal
            />

        </View>
    )
}

const styles = StyleSheet.create({
    ActorsCont: { alignSelf: "flex-start", marginLeft: 20 }
})