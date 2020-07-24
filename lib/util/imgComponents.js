/**
 * @fileoverview Utility functions for propWrapperFunctions setting
 */

/**
 * based on https://github.com/yannickcr/eslint-plugin-react/blob/master/lib/util/linkComponents.js
 */

"use strict";

/** TODO: type {(string | { name: string, imgAttribute: string })[]} */
/** @type {any} */
const DEFAULT_IMG_COMPONENTS = ["img"];
const DEFAULT_IMG_ATTRIBUTE = "src";

function getImgComponents(context) {
  const settings = context.settings || {};
  const imgComponents = /** @type {typeof DEFAULT_IMG_COMPONENTS} */ (DEFAULT_IMG_COMPONENTS.concat(
    settings.imgComponents || []
  ));
  return new Map(
    imgComponents.map((value) => {
      if (typeof value === "string") {
        return [value, DEFAULT_IMG_ATTRIBUTE];
      }
      return [value.name, value.imgAttribute];
    })
  );
}

module.exports = {
  getImgComponents,
};
