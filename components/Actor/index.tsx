import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default function Actor({ ActorDetails }: { ActorDetails: any }) {
    return (
        <View style={styles.actor}>
            <Image style={styles.actorImage} source={{ uri: `https://image.tmdb.org/t/p/w300/${ActorDetails.profile_path}` }} />
            <Text style={styles.actorName}>{ActorDetails.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    actor: { marginRight: 20 },
    actorImage: { width: 120, height: 120, borderRadius: 120 },
    actorName: { alignSelf: "center", fontWeight: 'bold', marginBottom: 10, marginTop: 10 }
});