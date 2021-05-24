import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { COLORS } from '../../constants';
import PopualrMovies from './Sub-Movies-Screen/PopualrMovies';
import UpComingMovies from './Sub-Movies-Screen/UpComingMovies';
import TopRatedMovies from './Sub-Movies-Screen/TopRatedMovies';

export default function index() {
    const [category, setCategory] = useState('UPCOMING');

    const isCategoryUpcomming = category === 'UPCOMING';
    const isCategoryPopular = category === 'POPULAR';
    const isCategoryTopRated = category === 'TOPRATED';
    const categoryStyleSelector = (activeStyleIndicator: boolean) => activeStyleIndicator ?
        [styles.categoryStyle, styles.activeCategory] : [styles.categoryStyle];
    const categoryTextStyleSelector = (activeStyleIndicator: boolean) => activeStyleIndicator ?
        [styles.categoryText, styles.categoryTextActive] : [styles.categoryText];

    const handelCategoyChange = (categoryName: string) => {
        setCategory(categoryName);
    }

    return (
        <>
            <View style={styles.categoriesContainer}>
                <TouchableOpacity style={categoryStyleSelector(isCategoryUpcomming)} onPress={() => handelCategoyChange('UPCOMING')}>
                    <Text style={categoryTextStyleSelector(isCategoryUpcomming)}>Upcoming</Text>
                </TouchableOpacity>

                <TouchableOpacity style={categoryStyleSelector(isCategoryPopular)} onPress={() => handelCategoyChange('POPULAR')}>
                    <Text style={categoryTextStyleSelector(isCategoryPopular)}>Popular</Text>
                </TouchableOpacity>

                <TouchableOpacity style={categoryStyleSelector(isCategoryTopRated)} onPress={() => handelCategoyChange('TOPRATED')}>
                    <Text style={categoryTextStyleSelector(isCategoryTopRated)}>Top Rated</Text>
                </TouchableOpacity>
            </View>

            {isCategoryUpcomming && <UpComingMovies />}
            {isCategoryPopular && <PopualrMovies />}
            {isCategoryTopRated && <TopRatedMovies />}

        </>
    )
};

const styles = StyleSheet.create({
    categoriesContainer: { flexDirection: "row", margin: 15, justifyContent: "space-between" },
    categoryStyle: { backgroundColor: COLORS.GREY, padding: 10, borderRadius: 15, flexGrow: 1, margin: 10, marginBottom: 0, color: COLORS.BLACK },
    activeCategory: { backgroundColor: COLORS.GREEN },
    categoryText: { textAlign: "center", fontWeight: 'bold', color: COLORS.BLACK },
    categoryTextActive: { color: COLORS.WHITE }
});