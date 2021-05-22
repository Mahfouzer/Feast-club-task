import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import Tag from '../Tag'

export default function TagsList({ tags }: { tags: any[] }) {
    return (
        <View style={styles.tagListContainer}>

            <FlatList
                data={tags}
                renderItem={(tag: any) => <Tag redtagText={tag.item} />}
                keyExtractor={(item) => item}
                horizontal
            />

        </View>
    )
}


const styles = StyleSheet.create({
    tagListContainer: { alignSelf: 'flex-start', paddingLeft: 20, marginBottom: 20 }
})