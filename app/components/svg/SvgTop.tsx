import React from 'react';
import { Svg, Path, G, Defs, LinearGradient, Stop } from "react-native-svg";
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const SvgTop = () => (
    <Svg xmlns="http://www.w3.org/2000/svg" fill="none" width={width} height={height * 0.3}>
        <Path
            fill="#2B333E"
            d="M209.741 251.012c-104.514-26.172-249.741 0-249.741 0V1.586h477V237.53s-122.744 39.655-227.259 13.483Z"
        />
        <G filter="url(#a)">
            <Path
                fill="url(#b)"
                d="M207.918 224C24.837 278-40 249.426-40 249.426V0h477v249.426S391 170 207.918 224Z"
                shapeRendering="crispEdges"
            />
        </G>
        <Defs>
            <LinearGradient
                id="b"
                x1={4}
                x2={393.5}
                y1={6}
                y2={211}
                gradientUnits="userSpaceOnUse"
            >
                <Stop stopColor="#3E617A" />
                <Stop offset={0.173} stopColor="#4682AB" stopOpacity={0.665} />
                <Stop offset={0.676} stopColor="#3A6786" stopOpacity={0.329} />
                <Stop offset={0.965} stopColor="#355469" stopOpacity={0} />
            </LinearGradient>
        </Defs>
    </Svg>
)

export default SvgTop;
