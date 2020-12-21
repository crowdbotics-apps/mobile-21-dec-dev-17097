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
    CheckBox_7: true
  }

  render = () => (
    <View>
      <CheckBox
        title="Checkbox"
        checked={this.state.CheckBox_73}
        onPress={nextChecked => this.setState({ CheckBox_73: nextChecked })}
      />
      <Button title="" onPress={() => alert("Pressed!")} />
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
      <CheckBox
        title="Radio button"
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        checked={this.state.CheckBox_7}
        onPress={nextChecked => this.setState({ CheckBox_7: nextChecked })}
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
  CheckBox_7: {}
})
