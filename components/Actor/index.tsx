import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default function Actor({ ActorDetails }: { ActorDetails: any }) {
    return (
        <View style={styles.actor}>
            <Image style={styles.actorImage} source={{ uri: "https://w7.pngwing.com/pngs/851/649/png-transparent-amr-diab-cairo-القاهرة-al-qahira-omrena-ma-hanergea-others-tshirt-album-top.png" }} />
            <Text style={styles.actorName}>{ActorDetails.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    actor: { marginRight: 20, marginTop: 20, marginBottom: 20 },
    actorImage: { width: 90, height: 90, borderRadius: 100 },
    actorName: { alignSelf: "center", fontWeight: 'bold' }
});