import { Alert, View } from "react-native";

export default function DialogBox(title:string,message:string) {

    Alert.alert(title,
        message,
        [
            { text: 'Submit', onPress: () => Alert.alert('Thanks for submit the form'), style: 'destructive' },
            { text: 'Cancel' },
        ],
        { cancelable: false }
    )
}