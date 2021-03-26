"use strict";
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        Object.defineProperty(o, k2, {
          enumerable: true,
          get: function () {
            return m[k];
          },
        });
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      }
    : function (o, v) {
        o["default"] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (k !== "default" && Object.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const index_1 = require("../styles/index");
const { parentHeader } = index_1.globalStyle;
const SlideButton = ({
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
}) => {
  const length = title.length;
  const [active, setActive] = react_1.useState(0);
  const [xTabOne, setTabOne] = react_1.useState(0);
  const [xTabThree, setTabThree] = react_1.useState(0);
  const translateX = react_1.useState(new react_native_1.Animated.Value(0))[0];
  const currentSlide = react_1.useRef(null);
  const tabRef = react_1.useRef(null);
  const TAB_SPACE = index_1.width / 5 + 10;
  const array = [
    renderFirstItem(),
    renderSecondItem(),
    renderThirdItem(),
    renderFourthItem(),
    renderFiveItem(),
    renderSixItem(),
    renderSevenItem(),
    renderEightItem(),
  ];
  function handleChange(type) {
    setActive(type);
  }
  function handleMovements({ nativeEvent }) {
    var _a, _b;
    const slide = Math.round(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
    );
    const count = slide * TAB_SPACE - TAB_SPACE / 2 + TAB_SPACE / 6;
    setActive(slide), handleChange(slide);
    if (count) {
      (_a = tabRef === null || tabRef === void 0 ? void 0 : tabRef.current) ===
        null || _a === void 0
        ? void 0
        : _a.scrollToOffset({
            offset:
              slide === 0 ? slide : (index_1.width / (length - 1)) * slide,
            animated: true,
          });
    } else {
      (_b = tabRef === null || tabRef === void 0 ? void 0 : tabRef.current) ===
        null || _b === void 0
        ? void 0
        : _b.scrollToOffset({
            offset: 0,
            animated: true,
          });
    }
  }
  const setIndex = (index) => {
    var _a, _b, _c;
    (_a =
      currentSlide === null || currentSlide === void 0
        ? void 0
        : currentSlide.current) === null || _a === void 0
      ? void 0
      : _a.scrollToOffset({
          offset: index * index_1.width,
          animated: true,
        });
    setActive(index);
    if (index * TAB_SPACE - TAB_SPACE / 2 > index_1.width / 2) {
      (_b = tabRef === null || tabRef === void 0 ? void 0 : tabRef.current) ===
        null || _b === void 0
        ? void 0
        : _b.scrollToOffset({
            offset:
              index === 0 ? index : (index_1.width / (length - 1)) * index,
            animated: true,
          });
    } else {
      (_c = tabRef === null || tabRef === void 0 ? void 0 : tabRef.current) ===
        null || _c === void 0
        ? void 0
        : _c.scrollToOffset({
            offset: 0,
            animated: true,
          });
    }
  };
  return (
    <react_native_1.SafeAreaView style={{ flex: 1 }}>
      <react_native_1.View
        style={{
          width: index_1.width * 0.95,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <react_native_1.FlatList
          ref={tabRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToAlignment="center"
          data={title}
          style={parentHeader}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              <react_native_1.View>
                <react_native_1.TouchableOpacity
                  onPress={() => setIndex(index)}
                  style={{
                    width: TAB_SPACE,
                    justifyContent: "center",
                    alignItems: "center",
                    borderBottomWidth: index == active ? 4 : 0,
                    borderBottomColor: buttonColor,
                  }}
                >
                  <react_native_1.Text
                    style={{
                      fontSize: 12,
                      color: active === index ? buttonColor : "black",
                      fontWeight: active === index ? "bold" : "normal",
                    }}
                  >
                    {item}
                  </react_native_1.Text>
                </react_native_1.TouchableOpacity>
              </react_native_1.View>
            );
          }}
        />
      </react_native_1.View>
      <react_native_1.View style={{ flex: 1 }}>
        <react_native_1.FlatList
          ref={currentSlide}
          showsHorizontalScrollIndicator={false}
          horizontal
          style={{ top: 80 }}
          pagingEnabled
          onMomentumScrollEnd={handleMovements}
          data={array}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              <react_native_1.View style={{ flex: 1, width: index_1.width }}>
                {item}
              </react_native_1.View>
            );
          }}
        />
      </react_native_1.View>
    </react_native_1.SafeAreaView>
  );
};
exports.default = SlideButton;
//# sourceMappingURL=index.js.map
