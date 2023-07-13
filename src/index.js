import { SafeAreaView, StyleSheet, View,ActivityIndicator  } from 'react-native';
import { Categories, Products } from './screens';
import { Header } from './componentes';
import { useState } from 'react';
import { useFonts } from 'expo-font';
import { FONTS,COLORS } from './themes';

export default function App() {
    const [loaded] = useFonts({
        [FONTS.regular]: require('../assets/fonts/Inter-Regular.ttf'),
        [FONTS.bold]: require('../assets/fonts/Inter-Bold.ttf'),
        [FONTS.medium]: require('../assets/fonts/Inter-Medium.ttf'),
        [FONTS.light]: require('../assets/fonts/Inter-Light.ttf'),
    });
    const [selectedCategory, SetselectedCategory] = useState(null);
    const [iscategorySelected, setIsCategorySelected] = useState(false);
    const headerTitle = iscategorySelected ? 'Productos' : 'Categorias ';
    const onHandleSelectategory = (categoryId) => {
        SetselectedCategory(categoryId);
        setIsCategorySelected(!iscategorySelected);
    }
    const onHandleNavigate = () => {
        setIsCategorySelected(!iscategorySelected);
        SetselectedCategory(null);
    };
    if (!loaded) {
        return (
            <View style={styles.loaderContainer}>
                <ActivityIndicator color={COLORS.primary} size="large" />
            </View>
        );
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Header title={headerTitle} />
                {
                    iscategorySelected ?
                        <Products onHandleGoBack={onHandleNavigate} categoryId={selectedCategory} />
                        :
                        <Categories onSelectCategory={onHandleSelectategory} />


                }
            </View>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    loaderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});