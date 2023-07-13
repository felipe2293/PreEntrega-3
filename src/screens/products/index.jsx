import { View, TouchableOpacity, Text, FlatList, ImageBackground } from 'react-native';
import { styles } from './styles'
import { Input } from '../../componentes';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../themes';
import PRODUCTS from '../../constantes/data/products.json'
function product({ onHandleGoBack, categoryId }) {
    const [search, setSearch] = useState('');
    const [borderColor, setBorderColor] = useState(COLORS.primary)
    const [filteredProducts, setFilteredPorducts] = useState([]);
    const onHandleBlur = () => { }
    const onhandleChangeText = (text) => {
        setSearch(text);
        filterBySearch(text);
    }
    const onHandleFocus = () => { }

    const filteredProductsByCategory = PRODUCTS.filter((product) => product.categoryId === categoryId);
    const filterBySearch = (query) => {
        let updateProductList = [...filteredProductsByCategory];
        updateProductList = updateProductList.filter((product) => { return product.description.toLowerCase().indexOf(query.toLowerCase()) !== -1 });
        setFilteredPorducts(updateProductList);
    }
    const clearSearch = () => {
        setSearch('');
        setFilteredPorducts([]);
    };
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.goBack} onPress={onHandleGoBack}>
                <Ionicons name="arrow-back-circle" size={40} color={COLORS.text} />
                <Text style={styles.goBackText}>Volver </Text>
            </TouchableOpacity>
            <View style={styles.header}>
                <Input
                    onHandleBlur={onHandleBlur}
                    onhandleChangeText={onhandleChangeText}
                    onHandleFocus={onHandleFocus}
                    value={search}
                    placeholder="Buscar"
                    borderColor={borderColor}

                />

                {search.length > 0 &&
                    (<Ionicons onPress={clearSearch} name="close-circle" size={30} color={COLORS.black} />)
                }
            </View>

            <FlatList
                style={styles.products}
                data={search.length > 0 ? filteredProducts : filteredProductsByCategory}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => null} style={styles.productContainer}>
                        <ImageBackground
                            source={{ uri: item.image }}
                            style={[styles.productImage, { backgroundColor: categoryId.color }]}
                            resizeMethod="resize"
                            resizeMode="contain"
                        />
                        <View style={styles.productDetail}>
                            <Text style={styles.productName} numberOfLines={1} ellipsizeMode="tail">
                                {item.brand+' '+item.description}
                            </Text>
                            <Text style={styles.productPrice}>{`USD ${item.price}`}</Text>
                            <Text style={styles.productPrice}>{`Stock: ${item.stock}`}</Text>

                        </View>
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                showsVerticalScrollIndicator={false}
            />
            {filteredProducts.length === 0 && search.length > 0 && (
                <View style={styles.notFound}>
                    <Text style={styles.notFoundText}>No hay productos encontrados </Text>
                </View>
            )}


        </View>
    )
}

export default product;