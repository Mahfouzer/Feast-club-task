import React from 'react'
import { View, Text } from 'react-native'
import Tag from '../Tag'

export default function TagsList({ tags }: { tags: any[] }) {
    return (
        <View>
            {tags?.map((tag: any) =>
                <Tag redtagText={tag} key={tag} />
            )}
        </View>
    )
}
