/*
 * Copyright (c) 2024 Yusef Rayyan
 *
 * This work is licensed under the Creative Commons Attribution-NonCommercial 4.0 International License.
 * To view a copy of this license, visit http://creativecommons.org/licenses/by-nc/4.0/
 */




import React from "react";
import { SvgXml } from "react-native-svg";
import svgData from "../../assets/Images/SVG/SvgStorage";

/**
 * Renders an SVG component based on the provided parameters.
 *
 * @param {Object} props - The props object containing the following properties:
 * @param {string} props.svgKey - The key to identify the SVG markup in the svgData object.
 * @param {number} props.width - The width of the SVG component.
 * @param {number} props.height - The height of the SVG component.
 * @param {string} props.fill - The fill color of the SVG component.
 * @param {string} props.stroke - The stroke color of the SVG component.
 * @param {number} props.strokeWidth - The stroke width of the SVG component.
 * @returns {JSX.Element} - The rendered SVG component.
 */
export default function CustomSvgComponent({ svgKey, width, height, fill, stroke, strokeWidth }) {
    const svgMarkup = svgData[svgKey];
    const svgProps = { width, height, fill, stroke, strokeWidth };

    return <SvgXml xml={svgMarkup} {...svgProps} />;
}
