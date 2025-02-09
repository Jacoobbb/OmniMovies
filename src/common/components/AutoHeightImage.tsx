import { Component } from "react";
import AutoHeightImage, { AutoHeightImageProps } from "react-native-auto-height-image";
import Animated from "react-native-reanimated";

class AutoHeightImageComponent extends Component<AutoHeightImageProps> {
  constructor(props: AutoHeightImageProps) {
    super(props);
  }
  render() {
    return <AutoHeightImage {...this.props} />;
  }
}

export const AnimatedAutoHeightImage = Animated.createAnimatedComponent(AutoHeightImageComponent);