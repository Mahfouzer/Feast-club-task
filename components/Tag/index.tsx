import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { COLORS } from '../../constants'

export default function Tag({ redtagText }: { redtagText: string }) {
    return (
        <View style={styles.tagStyle}>
            <Text style={styles.tagTextStyle}>{redtagText}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    tagStyle: {
        marginTop: 10, marginBottom: 10, backgroundColor: COLORS.GREY, marginRight: 10,
        padding: 17, paddingTop: 5, paddingBottom: 10, borderRadius: 20, height: 35
    },
    tagTextStyle: { fontWeight: "bold" }
})