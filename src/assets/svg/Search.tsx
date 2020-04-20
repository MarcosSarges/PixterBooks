import * as React from "react"
import Svg, { Path } from "react-native-svg"
import colors from "@assets/styles/colors";

function Search(props:{
    size:number,
    fill:string
}) {
  return (
    <Svg width={props.size} height={props.size} viewBox="0 0 511.999 511.999">
      <Path fill={props.fill} d="M508.874 478.708L360.142 329.976c28.21-34.827 45.191-79.103 45.191-127.309C405.333 90.917 314.416 0 202.666 0S0 90.917 0 202.667s90.917 202.667 202.667 202.667c48.206 0 92.482-16.982 127.309-45.191l148.732 148.732c4.167 4.165 10.919 4.165 15.086 0l15.081-15.082c4.165-4.166 4.165-10.92-.001-15.085zM202.667 362.667c-88.229 0-160-71.771-160-160s71.771-160 160-160 160 71.771 160 160-71.771 160-160 160z" />
    </Svg>
  )
}

Search.defaultProps = {
    fill:colors.black,
    size:24,
};

export default Search
