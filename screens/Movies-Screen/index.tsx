import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import MoviesList from '../../components/MoviesList'
import { COLORS } from '../../constants';

export default function index() {
    const [category, setCategory] = useState('UPCOMING');

    const handelCategoyChange = (categoryName: string) => {
        setCategory(categoryName);
    }

    return (
        <>
            <View style={styles.categoriesContainer}>
                <TouchableOpacity style={category === 'UPCOMING' ? [styles.categoryStyle, styles.activeCategory] : [styles.categoryStyle]} onPress={() => handelCategoyChange('UPCOMING')}>
                    <Text style={category === 'UPCOMING' ? [styles.categoryText, styles.categoryTextActive] : [styles.categoryText]}>Upcoming</Text>
                </TouchableOpacity>

                <TouchableOpacity style={category === 'POPULAR' ? [styles.categoryStyle, styles.activeCategory] : [styles.categoryStyle]} onPress={() => handelCategoyChange('POPULAR')}>
                    <Text style={category === 'POPULAR' ? [styles.categoryText, styles.categoryTextActive] : [styles.categoryText]}>Popular</Text>
                </TouchableOpacity>

                <TouchableOpacity style={category === 'TOPRATED' ? [styles.categoryStyle, styles.activeCategory] : [styles.categoryStyle]} onPress={() => handelCategoyChange('TOPRATED')}>
                    <Text style={category === 'TOPRATED' ? [styles.categoryText, styles.categoryTextActive] : [styles.categoryText]}>Top Rated</Text>
                </TouchableOpacity>
            </View>
            <MoviesList />
        </>
    )
};

const styles = StyleSheet.create({
    categoriesContainer: { flexDirection: "row", margin: 15, justifyContent: "space-between" },
    categoryStyle: { backgroundColor: COLORS.GREY, padding: 10, borderRadius: 15, flexGrow: 1, margin: 10, marginBottom: 0 },
    activeCategory: { backgroundColor: COLORS.GREEN },
    categoryText: { textAlign: "center", fontWeight: 'bold', color: COLORS.BLACK },
    categoryTextActive: { color: COLORS.WHITE }
});