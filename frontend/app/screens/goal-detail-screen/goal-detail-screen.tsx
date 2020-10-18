import React from "react"
import { observer } from "mobx-react-lite"
import { useNavigation } from "@react-navigation/native"
import { StyleSheet, TextStyle, Image, ViewStyle, View, FlatList} from "react-native"
import { Button, Header, Screen, Text } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color, spacing, typography} from "../../theme"

const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
  flex: 1,
  alignItems: "center",
 // justifyContent: "center",
}

const Separator = () => (
  <View style={styles.separator} />
);

const TEXT: TextStyle = {
  color: color.palette.black,
  fontFamily: typography.primary,
}
const BOLD: TextStyle = { fontWeight: "bold" }

const HEADER: TextStyle = {
  paddingTop: spacing[3],
  paddingBottom: spacing[4] + spacing[1],
  paddingHorizontal: 0,
}

const TITLE_WRAPPER: TextStyle = {
  ...TEXT,
  textAlign: "center",
  marginTop: spacing[5],
}
const TITLE: TextStyle = {
  ...TEXT,
  ...BOLD,
  fontSize: 28,
  lineHeight: 38,
  textAlign: "center",
  marginBottom: spacing[5],
}

const FULL: ViewStyle = { 
  flex: 1 
}

export const GoalDetailScreen = observer(function GoalDetailScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  // OR
  // const rootStore = useStores()

  // Pull in navigation via hook
 const navigation = useNavigation()
 const nextScreen = () => navigation.navigate("signInScreen")

  return (
    <View style={FULL}>
      <Screen style={ROOT} preset="scroll" backgroundColor={color.transparent}>
        <Header style={HEADER} />
        <Text style={TITLE_WRAPPER}>
          <Text style={TITLE} text="[   One LT Goal   ]" />
        </Text>
        < Separator />
        < Separator />
        <Image source={require("../../../assets/hiking.png")} style={styles.image} />
        < Separator />
        < Separator />
        {/* <Button 
          text="Click Me"
          onPress={() => console.log("Button pressed!")} /> */}
          {/* FETCH DATA FROM API AND RENDER FROM FLATLIST */}
        <View style={styles.fixToText}>
          <Button
            style={styles.button}
            text="Left button"
            onPress={() => navigation.navigate("signInScreen")}
          />
          <Button
            style={styles.button}
            text="Right button"
            onPress={() => navigation.navigate("signInScreen")}
          />
        </View>
      </Screen>
    </View>
  )
})

const styles = StyleSheet.create({
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  image: {
    width:75,
    height:75,
  },
  button: {
    marginRight:10,
    marginLeft:10
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})
