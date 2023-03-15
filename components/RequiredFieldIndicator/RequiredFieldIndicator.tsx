import React from "react";
import styles from "./RequiredFieldIndicator.module.scss";

/**
 * Requesent Required Field Indicator
 * @returns * inside span html tag
 */

const RequiredFieldIndicator = () => (
  <span className={styles.requiredFieldIndicator}>*</span>
);

export default RequiredFieldIndicator;
