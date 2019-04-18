import { StyleSheet } from 'react-native';
const Styles = StyleSheet.create({
    primaryColor: {
        color: '#3498db'
    },
    secondaryColor: {
        color: '#7f8fa6'
    },
    lightColor: {
        color: '#ffffff'
    },
    redColor: {
        color: '#e74c3c'
    },
    backgroundColor: {
        color: '#192a56',
    },
    h1: {
        fontSize: 25,
        fontWeight: '400',
    },
    h2: {
        fontSize: 20,
    },
    h3: {
        fontSize: 15,
    },
    h4: {
        fontSize: 12,
    },
    textPaddingLeft: {
        paddingLeft: 10,
        paddingTop: 10,
        paddingBottom: 5,
    },
    container: {
        flex: 1,
        backgroundColor: '#192a56',
    },
    viewHeader: {
        backgroundColor: 'transparent',
        zIndex: 999,
        width: '100%',
        position:'absolute',
        top: 0,
        left: 0,
        right: 0
    },
    header: {
        backgroundColor: 'transparent'
    },
    swipper: {
        flex: 1,
        height: 250,
    },
    noSwipper: {
        flex: 1,
        height: 50,
        backgroundColor: '#192a56'
    },
    slideImage: {
        flex: 1,
    },
    content: {
        flex: 1,
        paddingLeft: 10,
        paddingRight: 10
    },
    viewRow: {
        flex: 1,
        flexDirection: 'row'
    },
    viewColumn: {
        flex: 1,
        flexDirection: 'column'
    },
    itemLeft: {
        flex: 2,
    },
    flex1: {
        flex: 1,
    },
    flex2: {
        flex: 2,
    },
    flex3: {
        flex: 3,
    },
    itemRight: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        paddingRight: 10
    },
    gridView: {
        marginTop: 0,
        flex: 1,
    },
    itemContainer: {
        justifyContent: 'flex-end',
        borderRadius: 5,
        padding: 5,
        height: 200,
        flexDirection: 'column',
        marginBottom: 5,
        position: 'relative'
    },
    seriesContainer: {
        width: 125,
        justifyContent: 'flex-end',
        borderRadius: 5,
        padding: 5,
        height: 225,
        flexDirection: 'column',
        marginBottom: 5,
        position: 'relative'
    },
    itemImage: {
        height: 150,
        borderRadius: 5
    },
    seriesImage: {
        height: 150,
        borderRadius: 5
    },
    seriesSeriesImage: {
        height: 80,
        width: 150,
        borderRadius: 5
    },
    seriesRating: {
        padding: 5,
        height: 10,
        backgroundColor: '#7f8fa6',
        borderRadius: 50,
    },
    itemViews: {
        position: 'absolute', 
        top: 5, 
        right: 15
    },
    viewItemName: {
        marginTop: 5
    },  
    itemName: {
        fontSize: 16,
        color: '#7f8fa6',
        fontWeight: '600',
    },
    itemCode: {
        fontSize: 12,
        color: '#7f8fa6',
    },
    itemPlay: {
        padding: 5,
        height: 20,
        borderWidth: 1,
        borderColor: '#e74c3c',
        backgroundColor: 'transparent',
        borderRadius: 50,
    },
    buttonReload: {
        backgroundColor: '#3498db'
    },
    list: {
        padding: 5,
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderRadius: 5
    }
})
export default Styles;