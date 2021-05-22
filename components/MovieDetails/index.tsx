
import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View, Text, TouchableWithoutFeedback, StyleSheet, Image, ScrollView } from 'react-native';
import { FONT_SIZES } from '../../constants';
import Actorslist from '../ActorsList';
import TagsList from '../TagsList';


export default function MovieDetails() {

    const { navigate } = useNavigation();

    return (
        <ScrollView contentContainerStyle={styles.Container}>
            <Image style={styles.moviePoster} source={require('../../assets/images/movieThumbnail.png')} />
            <Text style={styles.movieName}>Movie name</Text>
            <Text style={styles.rating}>70%</Text>
            <Text style={styles.headerText}>Overview</Text>
            <Text style={styles.overviewText}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat ad provident facere deserunt illo omnis dolorum harum dolore, maxime reiciendis. Earum saepe et quidem voluptate, ipsum corrupti? Optio, reiciendis aut.</Text>
            <Text style={styles.headerText}>Genres</Text>
            <TagsList tags={['new', 'old', 'modern']} />
            <Text style={styles.headerText}>Credits</Text>
            <Actorslist actors={[{ name: 'jack' }, { name: 'jimmy' }]} />
            <Actorslist actors={[{ name: 'jack' }, { name: 'jimmy' }]} />
            <Actorslist actors={[{ name: 'jack' }, { name: 'jimmy' }]} />


        </ScrollView>
    );
}


const styles = StyleSheet.create({
    Container: { alignItems: 'center', backgroundColor: 'white', overflow: "scroll" },
    headerText: { alignSelf: "flex-start", fontSize: FONT_SIZES.SUBHEADING, fontWeight: "bold", paddingLeft: 20 },
    movieName: { fontSize: FONT_SIZES.HEADING, fontWeight: "bold", marginTop: 20, marginBottom: 10 },
    moviePoster: { width: 200, height: 250 },
    rating: { color: "green", fontSize: FONT_SIZES.SUBHEADING, fontWeight: "bold", marginBottom: 20 },
    overviewText: { fontSize: FONT_SIZES.NORMAL, paddingLeft: 20, paddingRight: 20, alignSelf: "flex-start", marginBottom: 20 },
});