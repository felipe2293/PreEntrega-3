import { FlatList, SafeAreaView, View } from 'react-native';
import { CategoryItem, Header } from '../../componentes';
import CATEGORIES from '../../constantes/data/categories.json';
import {styles} from './styles'
function Categories({onSelectCategory}) {
    
    return (
        <SafeAreaView style={styles.container}>
        <View style={styles.container}>
            <FlatList
            showsVerticalScrollIndicator={false}
            data={CATEGORIES}
            style={styles.categoryContainer}
            contentContainerStyle={styles.listCategoryContainer}
            renderItem={({item})=><CategoryItem{...item} onSelectCategory={onSelectCategory}/>}
            keyExtractor={(item)=>item.id}
            />
        </View>
        </SafeAreaView>
        
    );
}
export default Categories;

