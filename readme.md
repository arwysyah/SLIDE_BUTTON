# SLIDE_BUTTON

![ts](https://flat.badgen.net/badge/-/TypeScript?icon=typescript&label&labelColor=blue&color=555555)

<p align="center">
  <a href="https://reactjs.org/">
    <img
      alt="Node.js"
      src="https://i.udemycdn.com/course/750x422/1049092_8c52_2.jpg"
      width="200"
      height='150'
    />
  </a>
</p>

</h1>

<br/>

<br/>

<p align="center">
 
  </a>
  <a href="#">
    <img title="Open Source Love" src="https://badges.frapsoft.com/os/v1/open-source.svg?v=102">
  </a>
  <a href="https://dev.to/arwysyah">
  <img src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg" alt="Arwy Syahputra Siregar's DEV Profile" height="30" width="30">
</a>
  <a href="https://github.com/arwysyah?tab=followers">
    <img title="Followers" src="https://img.shields.io/github/followers/arwysyah?style=social">
  </a>
  <a href="https://github.com/prettier/prettier"><img src="https://img.shields.io/badge/styled_with-prettier-ff69b4.svg"></a>
<br/>

</p>

## BUILD SETUP

```bash

## Installation
Version 1.0.3

npm i slide-button
yarn add slide-button



```

## USAGE

```js
import React from "react";
import { View, Text, Image } from "react-native";
import SlideButton from "slide-button";
import { globalStyle, width, height } from "../styles/index";

export default function Check({ navigation }) {
  function renderFirstItem() {
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{ height: 200, width: width, backgroundColor: "red" }}
        ></View>
        <Text style={{ color: "black" }}>ARTICLE</Text>
      </View>
    );
  }
  function renderSecondItem() {
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{ height: 200, width: width, backgroundColor: "blue" }}
        ></View>
        <Text style={{ color: "black" }}>FOTO</Text>
      </View>
    );
  }
  function renderThirdItem() {
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{ height: 200, width: width, backgroundColor: "green" }}
        ></View>
        <Text style={{ color: "black" }}>QUESTION</Text>
      </View>
    );
  }

  function renderFourthItem() {
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{ height: 200, width: width, backgroundColor: "yellow" }}
        ></View>
        <Text style={{ color: "black" }}>FILTER</Text>
      </View>
    );
  }
  function renderFiveItem() {
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{ height: 200, width: width, backgroundColor: "pink" }}
        ></View>
        <Text style={{ color: "black" }}>REQUEST</Text>
      </View>
    );
  }
  function renderSixItem() {
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{ height: 200, width: width, backgroundColor: "grey" }}
        ></View>
        <Text style={{ color: "black" }}>DATA</Text>
      </View>
    );
  }
  function renderSevenItem() {
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{ height: 200, width: width, backgroundColor: "brown" }}
        ></View>
        <Text style={{ color: "black" }}>TEST</Text>
      </View>
    );
  }
  function renderEightItem() {
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{ height: 200, width: width, backgroundColor: "white" }}
        ></View>
        <Text style={{ color: "black" }}>SORT</Text>
      </View>
    );
  }
  const data = [
    "Article",
    "Foto",
    "Question",
    "Filter",
    "Request",
    "Data",
    "Test",
    "Sort",
  ];
  return (
    <View style={{ flex: 1 }}>
      <SlideButton
        title={data}
        renderFirstItem={renderFirstItem}
        renderSecondItem={renderSecondItem}
        renderThirdItem={renderThirdItem}
        renderFourthItem={renderFourthItem}
        renderFiveItem={renderFiveItem}
        renderSixItem={renderSixItem}
        renderSevenItem={renderSevenItem}
        renderEightItem={renderEightItem}
        buttonColor="blue"
        headerHeight={100}
      />
    </View>
  );
}
```

## Current API(Property)

| Property         | Type                | Description      |
| ---------------- | ------------------- | ---------------- |
| renderFirstItem  | function (required) | render component |
| renderSecondItem | function (required) | render component |
| renderThirdItem  | function (required) | render component |
| renderForthItem  | function (required) | render component |
| renderFiveItem   | function (required) | render component |
| renderSixItem    | function (required) | render component |
| renderSevenItem  | function (optional) | render component |
| renderEightItem  | function (optional) | render component |
|                  |
| title            | Array (required)    | button title     |
| buttonColor      | string (optional)   | color for button |
| headerHeight     | number              | optional         |

note : the amount of render item must same with the length of title.

title must have length at least 6 and maximum 8
no animation move on this package,
if you want to use animation ,better using

## Project Documentation

<p align="center">
  <img src="assets/gifdisplay.gif" width=200 height=400/>
   
</p>

- Author Account

```bash
Arwy Syahputra Siregar
github.com/arwysyah

```

<p > Copyright ©</p> <p style="color:green;">by Arwy Syahputra Siregar</p>
