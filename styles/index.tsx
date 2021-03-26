import {StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');
const TOP : number= 24;

const backgroundColor :string = '#cacfca';
const ITEM_WIDTH :number= (width / 1.4) * 0.76;
const ITEM_HEIGHT:number = (ITEM_WIDTH / 1.4) * 1.47;
const BACKCOLOR:string = '#f0f5f2';


const globalStyle = StyleSheet.create({
  container: {
    backgroundColor: BACKCOLOR,
    flex: 1,
  },
  parentHeader:{
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20,
    height: 36,
    position: 'relative',
    backgroundColor: 'white',
  },
  
});

export {
  globalStyle,
width,
  TOP,
  height,
  backgroundColor,
  ITEM_HEIGHT,
  ITEM_WIDTH,
  BACKCOLOR,
};