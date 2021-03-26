
import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from 'react-native';
import { globalStyle, width } from '../styles/index';
const { parentHeader } = globalStyle;
export type Props = {
    title:Array<string>,
    renderFirstItem:any,
    renderSecondItem:any,
    renderThirdItem:any,
    renderFourthItem:any,
    renderFiveItem:any,
    renderSixItem:any,
    renderSevenItem:any,
    renderEightItem:any,
    buttonColor:string,  
}

const SlideButton= ({
  title,
  renderFirstItem,
  renderSecondItem,
  renderThirdItem,
  renderFourthItem,
  renderFiveItem,
  renderSixItem,
  renderSevenItem,
  renderEightItem,
  buttonColor,
}:Props) :React.ReactNode  => {
  const length = title.length;
  // length > 4 && console.warn('Sorry the component have 4 as maximum value')
  const [active, setActive] = useState<number>(0);
  const currentSlide = useRef(null);
  const tabRef = useRef(null);
  const TAB_SPACE : number = width / 5 + 10;
  const array: any = [
    renderFirstItem(),
    renderSecondItem(),
    renderThirdItem(),
    renderFourthItem(),
    renderFiveItem(),
    renderSixItem(),
    renderSevenItem(),
    renderEightItem(),
  ];
const handleChange=(type:number)=> {
    setActive(type);
    // currentSlide.current.scrollToOffset({animated: true,index:type})
  }
 const handleMovements=({ nativeEvent }:{
     nativeEvent:any
 })=> {
    const slide = Math.round(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
    );
    const count = slide * TAB_SPACE - TAB_SPACE / 2 + TAB_SPACE / 6;
    setActive(slide), handleChange(slide);
    if (count) {
      tabRef?.current?.scrollToOffset({
        offset: slide === 0 ? slide : (width / (length - 1)) * slide,
        animated: true,
      });
    } else {
      tabRef?.current?.scrollToOffset({
        offset: 0,
        animated: true,
      });
    }
  }
  const setIndex = (index:number) => {
    currentSlide?.current?.scrollToOffset({
      offset: index * width,
      animated: true,
    });
    setActive(index);
    if (index * TAB_SPACE - TAB_SPACE / 2 > width / 2) {
      tabRef?.current?.scrollToOffset({
        offset: index === 0 ? index : (width / (length - 1)) * index,
        animated: true,
      },);
    } else {
      tabRef?.current?.scrollToOffset({
        offset: 0,
        animated: true,
      });
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          width: width * 0.95,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <FlatList
          ref={tabRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToAlignment="center"
          // snapToInterval={16}
          data={title}
          style={parentHeader}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              <>
                <TouchableOpacity
                  key={index}
                  onPress={() => setIndex(index)}
                  style={{
                    width: TAB_SPACE,
                    justifyContent: "center",
                    alignItems: "center",
                    borderBottomWidth: index == active ? 4 : 0,
                    borderBottomColor: buttonColor,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 12,
                      color: active === index ? buttonColor : "black",
                      fontWeight: active === index ? "bold" : "normal",
                    }}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              </>
            );
          }}
        />
      </View>
      <View style={{ flex: 1 }}>
        <FlatList
          ref={currentSlide}
          showsHorizontalScrollIndicator={false}
          horizontal
          style={{ top: 80 }}
          pagingEnabled
          onMomentumScrollEnd={handleMovements}
          data={array}
          keyExtractor={(_ ,index) => index.toString()}
          renderItem={({ item}) => {
            return <View style={{ flex: 1, width: width }}>{item}</View>;
          }}
        />
      </View>
    </SafeAreaView>
  );
};
export default SlideButton