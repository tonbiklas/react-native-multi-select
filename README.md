#React Native Multi Select

you know select 2 on web ? now you have it in react native at your command :)

###Demo
<p align="center">
   <img src="example/demo.gif" width="60%" />
</p>


###Example

LocationDropDown.js
```js
import React, {Component, PropTypes} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import Select from './Select/Select';
import SelectTextBox from './Select/SelectTextBox';
import Option from './Select/Option';
import OptionList from './Select/OptionList';

export default class LocationDropDown extends Component {
    static propTypes = {};

    cities = [
        'Babolsar',
        'Sari',
        'Babol',
        'Qaemshahr',
        'Gorgan',
        'Tehran',
        'ali abad',
        'gonbad',
        'mashhad',
        'esfehan',
        'shiraz',
        'kerman',
        'ilam',
        'sanandaj',
        'mahshahr',
        'behshar',
        'tonekabon'
    ];

    state = {
        selectedItem: [],
        text: "",
        displayOptionList: false
    };

    updateText = text => {
        this.setState({text});
    };

    addItem = item => {
        this.setState({selectedItem: [...this.state.selectedItem, item]})
    };

    removeItem = removedItem => {
        this.setState({
            selectedItem: this.state.selectedItem.filter(item => {
                if (item._id !== removedItem._id)
                    return item;
            })
        });
    };

    render() {
        return (
            <Select style={styles.select}>
                <SelectTextBox
                    selectedItem={this.state.selectedItem}
                    placeholder={"شهر خود را انتخاب کنید."}
                    onPressOut={(removedItem) => this.setState({
                        selectedItem: this.state.selectedItem.filter(text => {
                            if (text !== removedItem)
                                return text;
                        })
                    })}
                    onTextInputFocus={() => this.setState({displayOptionList: true})}
                    onTextInputLoosFocus={() => this.setState({displayOptionList: false})}
                    onSelectTextBoxChanged={event => this.updateText(event.nativeEvent.text)}
                />
                <OptionList
                    text={this.state.text}
                    items={this.cities}
                    display={this.state.displayOptionList}
                    onAnItemSelected={item => this.addItem(item)}
                    removeItem={item => this.removeItem(item)}>
                    {this.cities.map((city, index) => <Option
                        onPress={item => this.setState({selectedItem: [...this.state.selectedItem, item]})}
                        key={index}
                        value={{_id: Math.random()}}>
                        {city}
                    </Option>)}
                </OptionList>
            </Select>
        );
    }
}

const styles = StyleSheet.create({
    select: {
        backgroundColor: '#6A85B1',
        width: 300,
    }
});

   
```

index.android.js
```js
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import LocatonDropDown from './LocationDropDown';

class App extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <LocatonDropDown/>
            </View>
        );
    }
}

const styles = StyleSheet.create({});

AppRegistry.registerComponent('dropdown', () => App);

```
#####Any contributions are welcome


