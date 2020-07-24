"use strict";

const assert = require("assert");
const imageComponentsUtil = require("../../../lib/util/imageComponents");

describe("imageComponentsFunctions", () => {
  describe("getImageComponents", () => {
    it("returns a default map of components", () => {
      const context = {};
      assert.deepStrictEqual(
        imageComponentsUtil.getImageComponents(context),
        new Map([["img", "src"]])
      );
    });

    it("returns a map of components", () => {
      const imageComponents = [
        "Image",
        {
          name: "Gravatar",
          imageAttribute: "imageSrc",
        },
      ];
      const context = {
        settings: {
          imageComponents,
        },
      };
      assert.deepStrictEqual(
        imageComponentsUtil.getImageComponents(context),
        new Map([
          ["img", "src"],
          ["Image", "src"],
          ["Gravatar", "imageSrc"],
        ])
      );
    });
  });
});
