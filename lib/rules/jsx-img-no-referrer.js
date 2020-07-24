const imgComponentsUtil = require("../util/imgComponents");

function hasExternalSrc(element) {
  return element.attributes.some(
    (attr) =>
      attr.name &&
      attr.name.name === "src" &&
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
    return {
      JSXAttribute(node) {
        if (
          hasExternalSrc(node.parent) &&
          !hasReferrerPolicyNoReferrer(node.parent)
        ) {
          context.report({
            node,
            message:
              'Using img tag with external source should have referrerPolicy="no-referrer"',
          });
        } else {
          return;
        }
      },
    };
  },
};
