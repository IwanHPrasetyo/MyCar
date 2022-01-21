import {metric} from './matrics';

const size = {
  font6: metric.screenWidth * (6 / 365),
  font8: metric.screenWidth * (8 / 365),
  font10: metric.screenWidth * (10 / 365),
  font12: metric.screenWidth * (12 / 365),
  font14: metric.screenWidth * (14 / 365),
  font16: metric.screenWidth * (16 / 365),
  font18: metric.screenWidth * (18 / 365),
  font20: metric.screenWidth * (20 / 365),
  font22: metric.screenWidth * (22 / 365),
  font24: metric.screenWidth * (24 / 365),
  font26: metric.screenWidth * (26 / 365),
  font28: metric.screenWidth * (28 / 365),
  font30: metric.screenWidth * (30 / 365),
};

const wight = {
  full: '900',
  semi: '600',
  low: '400',
  bold: 'bold',
  normal: 'normal',
};

export {size, wight};
