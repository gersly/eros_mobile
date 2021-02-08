import {Platform} from 'react-native'

export const theme_style = {
    droidSafeArea: {
        flex: 1,
        backgroundColor: '#ff2b60',
        paddingTop: Platform.OS === 'android' ? 25 : 0
    }
}