/**
 * @fileoverview Utility functions for propWrapperFunctions setting
 */

/**
 * based on https://github.com/yannickcr/eslint-plugin-react/blob/master/lib/util/linkComponents.js
 */

'use strict'

/** TODO: type {(string | { name: string, imgAttribute: string })[]} */
/** @type {any} */
const DEFAULT_IMAGE_COMPONENTS = ['img']
const DEFAULT_IMAGE_ATTRIBUTE = 'src'

function getImageComponents(context) {
  const settings = context.settings || {}
  const imageComponents = /** @type {typeof DEFAULT_IMAGE_COMPONENTS} */ (DEFAULT_IMAGE_COMPONENTS.concat(
    settings.imageComponents || []
  ))
  return new Map(
    imageComponents.map((value) => {
      if (typeof value === 'string') {
        return [value, DEFAULT_IMAGE_ATTRIBUTE]
      }
      return [value.name, value.imageAttribute]
    })
  )
}

module.exports = {
  getImageComponents,
}
