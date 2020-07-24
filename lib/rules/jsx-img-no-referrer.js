"use strict";

const imgComponentsUtil = require("../util/imgComponents");

function hasExternalSrc(element, imgAttribute) {
  return element.attributes.some(
    (attr) =>
      attr.name &&
      attr.name.name === imgAttribute &&
      attr.value.type === "Literal" &&
      /^(?:\w+:|\/\/)/.test(attr.value.value)
  );
}

function hasReferrerPolicyNoReferrer(element) {
  return element.attributes.some(
    (attr) =>
      attr.name &&
      attr.name.name === "referrerPolicy" &&
      attr.value.type === "Literal" &&
      attr.value.value === "no-referrer"
  );
}

module.exports = {
  create: function (context) {
    const components = imgComponentsUtil.getImgComponents(context);

    return {
      JSXAttribute(node) {
        const imgAttribute = components.get(node.parent.name.name);

        if (
          hasExternalSrc(node.parent, imgAttribute) &&
          !hasReferrerPolicyNoReferrer(node.parent)
        ) {
          context.report({
            node,
            message:
              'Using img tag with external source must have referrerPolicy="no-referrer"',
          });
        } else {
          return;
        }
      },
    };
  },
};
