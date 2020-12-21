import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = {
    CheckBox_73: true,
    Switch_140: true,
    TextInput_146: "",
    DateTimePicker_157: new Date(""),
    CheckBox_5: true,
    CheckBox_7: true,
    DateTimePicker_150: new Date("")
  }

  render = () => (
    <View>
      <CheckBox
        title="Checkbox"
        checked={this.state.CheckBox_73}
        onPress={nextChecked => this.setState({ CheckBox_73: nextChecked })}
      />
      <Button title="Press me!" onPress={() => alert("Pressed!")} />
      <Switch
        trackColor={{ false: "#C0CCDA", true: "#409EFF" }}
        style={styles.Switch_140}
        value={this.state.Switch_140}
        onValueChange={nextChecked =>
          this.setState({ Switch_140: nextChecked })
        }
      />
      <TextInput
        placeholder="Number Input Placeholder"
        keyboardType="numeric"
        value={this.state.TextInput_146}
        onChangeText={nextValue => this.setState({ TextInput_146: nextValue })}
      />
      <DateTimePicker
        showIcon={false}
        date={this.state.DateTimePicker_157}
        onDateChange={selectedDate =>
          this.setState({ DateTimePicker_157: selectedDate })
        }
      />
      <Text>Sample text content</Text>
      <Image
        resizeMode="contain"
        source={{
          uri:
            "https://crowdbotics-slack-dev.s3.amazonaws.com/media/project_component_resources/file_example_JPG_100kB_vYmVaLy.jpg"
        }}
        style={styles.Image_4}
      />
      <CheckBox
        title="Radio button"
        disabled={false}
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        containerStyle={styles.CheckBox_5}
        checked={this.state.CheckBox_5}
        onPress={nextChecked => this.setState({ CheckBox_5: nextChecked })}
      />
      <CheckBox
        title="Radio button"
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        checked={this.state.CheckBox_7}
        onPress={nextChecked => this.setState({ CheckBox_7: nextChecked })}
      />
      <DateTimePicker
        showIcon={false}
        date={this.state.DateTimePicker_150}
        onDateChange={selectedDate =>
          this.setState({ DateTimePicker_150: selectedDate })
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  View_1: {},
  CheckBox_73: {},
  Button_2: {},
  Switch_140: { alignSelf: "flex-start" },
  TextInput_146: {},
  DateTimePicker_157: {},
  Text_3: {},
  Image_4: {
    width: 100,
    overflow: "hidden",
    alignSelf: "center",
    borderWidth: 6,
    borderLeftWidth: 6,
    borderRightWidth: 6,
    borderTopWidth: 6,
    borderBottomWidth: 6,
    borderRadius: 17
  },
  CheckBox_5: {
    marginTop: 5,
    marginBottom: 5,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 5,
    paddingBottom: 5,
    textAlign: "left",
    textAlignVertical: "center",
    textDecorationLine: "none",
    textTransform: "none",
    lineHeight: 12,
    letterSpacing: 0
  },
  CheckBox_7: {},
  DateTimePicker_150: {}
})
