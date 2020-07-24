"use strict";

const imageComponentsUtil = require("../util/imageComponents");

function hasExternalSrc(node, imgAttribute) {
  return (
    node.name &&
    node.name.name === imgAttribute &&
    node.value.type === "Literal" &&
    /^(?:\w+:|\/\/)/.test(node.value.value)
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
    const components = imageComponentsUtil.getImageComponents(context);

    return {
      JSXAttribute(node) {
        const imgAttribute = components.get(node.parent.name.name);

        if (
          hasExternalSrc(node, imgAttribute) &&
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
