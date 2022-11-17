(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["./credit-card-helpers"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("./credit-card-helpers"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.creditCardHelpers);
    global.creditCardHelpersTest = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_creditCardHelpers) {
  "use strict";

  describe("getCreditCardType", () => {
    it("should return correct card type", () => {
      // Source: https://www.paypalobjects.com/en_AU/vhelp/paypalmanager_help/credit_card_numbers.htm
      expect((0, _creditCardHelpers.getCreditCardType)("378282246310005")).toBe("AMEX");
      expect((0, _creditCardHelpers.getCreditCardType)("371449635398431")).toBe("AMEX");
      expect((0, _creditCardHelpers.getCreditCardType)("378734493671000")).toBe("AMEX");
      expect((0, _creditCardHelpers.getCreditCardType)("5555555555554444")).toBe("MAST");
      expect((0, _creditCardHelpers.getCreditCardType)("5105105105105100")).toBe("MAST");
      expect((0, _creditCardHelpers.getCreditCardType)("4111111111111111")).toBe("VISA");
      expect((0, _creditCardHelpers.getCreditCardType)("4012888888881881")).toBe("VISA");
      expect((0, _creditCardHelpers.getCreditCardType)("4222222222222")).toBe("VISA");
      expect((0, _creditCardHelpers.getCreditCardType)("6011111111111117")).toBe("DSCV");
      expect((0, _creditCardHelpers.getCreditCardType)("6011000990139424")).toBe("DSCV");
    });
  });
  describe("getCreditCardTypeValidity", () => {
    it("should return true for valid card types", () => {
      // Source: https://www.paypalobjects.com/en_AU/vhelp/paypalmanager_help/credit_card_numbers.htm
      expect((0, _creditCardHelpers.getCreditCardTypeValidity)("378282246310005")).toBe(true);
      expect((0, _creditCardHelpers.getCreditCardTypeValidity)("5555555555554444")).toBe(true);
      expect((0, _creditCardHelpers.getCreditCardTypeValidity)("5105105105105100")).toBe(true);
      expect((0, _creditCardHelpers.getCreditCardTypeValidity)("4111111111111111")).toBe(true);
      expect((0, _creditCardHelpers.getCreditCardTypeValidity)("4012888888881881")).toBe(true);
      expect((0, _creditCardHelpers.getCreditCardTypeValidity)("4222222222222")).toBe(true);
      expect((0, _creditCardHelpers.getCreditCardTypeValidity)("6011111111111117")).toBe(true);
      expect((0, _creditCardHelpers.getCreditCardTypeValidity)("6011000990139424")).toBe(true);
    });
    it("should return false for valid card types", () => {
      expect((0, _creditCardHelpers.getCreditCardTypeValidity)("3530111333300000")).toBe(false); //JCB
      expect((0, _creditCardHelpers.getCreditCardTypeValidity)("3566002020360505")).toBe(false); //JCB
      expect((0, _creditCardHelpers.getCreditCardTypeValidity)("30569309025904")).toBe(false); //Diner's club
      expect((0, _creditCardHelpers.getCreditCardTypeValidity)("38520000023237")).toBe(false); //Diner's club
    });
  });

  describe("expAutoComplete", () => {
    it("should remove whitespace", () => {
      expect((0, _creditCardHelpers.expAutoComplete)(" 1 ", "")).toBe("1");
      expect((0, _creditCardHelpers.expAutoComplete)(" 1 ", "")).not.toBe(" 1 ");
    });
    it("should pad with zero and / for value between 2-9", () => {
      expect((0, _creditCardHelpers.expAutoComplete)("1", "")).toBe("1");
      expect((0, _creditCardHelpers.expAutoComplete)("2", "")).toBe("02/");
      expect((0, _creditCardHelpers.expAutoComplete)("3", "")).toBe("03/");
      expect((0, _creditCardHelpers.expAutoComplete)("4", "")).toBe("04/");
      expect((0, _creditCardHelpers.expAutoComplete)("5", "")).toBe("05/");
      expect((0, _creditCardHelpers.expAutoComplete)("6", "")).toBe("06/");
      expect((0, _creditCardHelpers.expAutoComplete)("7", "")).toBe("07/");
      expect((0, _creditCardHelpers.expAutoComplete)("9", "")).toBe("09/");
    });
    it("should add / for two digit value", () => {
      expect((0, _creditCardHelpers.expAutoComplete)("02", "0")).toBe("02/");
      expect((0, _creditCardHelpers.expAutoComplete)("03", "0")).toBe("03/");
      expect((0, _creditCardHelpers.expAutoComplete)("04", "0")).toBe("04/");
      expect((0, _creditCardHelpers.expAutoComplete)("05", "0")).toBe("05/");
      expect((0, _creditCardHelpers.expAutoComplete)("06", "0")).toBe("06/");
      expect((0, _creditCardHelpers.expAutoComplete)("07", "0")).toBe("07/");
      expect((0, _creditCardHelpers.expAutoComplete)("09", "0")).toBe("09/");
      expect((0, _creditCardHelpers.expAutoComplete)("10", "1")).toBe("10/");
    });
    it("should prevent user from accidentally adding two slashes", () => {
      expect((0, _creditCardHelpers.expAutoComplete)("02//", "02/")).toBe("02/");
      expect((0, _creditCardHelpers.expAutoComplete)("02//", "02/")).toBe("02/");
      expect((0, _creditCardHelpers.expAutoComplete)("03//", "03/")).toBe("03/");
      expect((0, _creditCardHelpers.expAutoComplete)("04//", "04/")).toBe("04/");
      expect((0, _creditCardHelpers.expAutoComplete)("05//", "05/")).toBe("05/");
      expect((0, _creditCardHelpers.expAutoComplete)("06//", "06/")).toBe("06/");
      expect((0, _creditCardHelpers.expAutoComplete)("07//", "07/")).toBe("07/");
      expect((0, _creditCardHelpers.expAutoComplete)("09//", "09/")).toBe("09/");
      expect((0, _creditCardHelpers.expAutoComplete)("10//", "10/")).toBe("10/");
      expect((0, _creditCardHelpers.expAutoComplete)("10/", "10")).toBe("10/");
    });
  });
});