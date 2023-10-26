import React, { useEffect, useRef, useState } from "react";
import { Link, canUseDOM } from "vtex.render-runtime";
// @ts-ignore
import { useProduct } from 'vtex.product-context';

// Styles
import styles from "./styles.css";

export interface FeaturesPDPProps {
  blockClass: string;
}

const FeaturesPDP: StorefrontFunctionComponent<FeaturesPDPProps> = ({ }) => {
  const productContextValue = useProduct();

  return (
    <div className={styles.container}>
      Product Features
    </div>);
};

FeaturesPDP.schema = {
  title: "FeaturesPDP",
  description: "",
  type: "object",
  properties: {

  }
};

export default FeaturesPDP;
