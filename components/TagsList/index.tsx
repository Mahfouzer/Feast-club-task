import React from 'react'
import { View, Text, FlatList } from 'react-native'
import Tag from '../Tag'

export default function TagsList({ tags }: { tags: any[] }) {
    return (
        <View style={{ alignSelf: 'flex-start', paddingLeft: 20, marginBottom: 20 }}>

            <FlatList
                data={tags}
                renderItem={(tag: any) => <Tag redtagText={tag.item} />}
                keyExtractor={(item) => item}
                horizontal
                contentContainerStyle={{ alignContent: "flex-start" }}
            />

        </View>
    )
}
