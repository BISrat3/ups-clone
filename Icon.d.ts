import React from 'react'
import { ViewStyle, StyleProp, TextStyle } from 'react-native'
import { IconButtonProps, IconProps, IconProps as VectorIconProps } from 'react-native-vector-icons/Icon'
import { InlinePressableProps, RneFunctionComponent } from '@rneui/base'
export declare type IconType = 'material-community' | "simple-line-icon" | "zocial" | "font=awesome" | "ionicon" | "foundation" | "evilicon" | "entypo" | "antdesign" | "font-awesome" | "string"
export interface IconObject {
    name?:string;
    color?:string;
    size?:number;
    type?: IconType;
    iconStyle?: StyleProp<TextStyle>
}

export declare type IconNode = boolean | React.ReactElement<{}> | Partial<IconProps>;
export interface IconProps extends InlinePressableProps, IconButtonProps{
    type?:IconType;
    Component?:typeof React.Component;
    reverse?: boolean;
    raised?: boolean;
    containerStyle?:StyleProp<ViewStyle>;
    iconProps?:VectorIconProps;
    reverseColor?:string;
    disabled?:boolean;
    disabledStyle?: StyleProp<ViewStyle>;
    solid?: boolean;
    brand?: boolean;
}
export declare const Icon: RneFunctionComponent<IconProps>;