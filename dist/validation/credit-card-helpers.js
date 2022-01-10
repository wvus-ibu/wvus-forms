(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "core-js/modules/esnext.async-iterator.for-each.js", "core-js/modules/esnext.iterator.constructor.js", "core-js/modules/esnext.iterator.for-each.js", "core-js/modules/es.string.replace.js"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("core-js/modules/esnext.async-iterator.for-each.js"), require("core-js/modules/esnext.iterator.constructor.js"), require("core-js/modules/esnext.iterator.for-each.js"), require("core-js/modules/es.string.replace.js"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.esnextAsyncIteratorForEach, global.esnextIteratorConstructor, global.esnextIteratorForEach, global.esStringReplace);
    global.creditCardHelpers = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _esnextAsyncIteratorForEach, _esnextIteratorConstructor, _esnextIteratorForEach, _esStringReplace) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.expAutoComplete = expAutoComplete;
  _exports.getCreditCardType = getCreditCardType;
  _exports.getCreditCardTypeValidity = getCreditCardTypeValidity;
  _exports.tokenXEncrypt = tokenXEncrypt;

  /**
   * Matches beginnings of credit card numbers,
   * should NOT be used for validation beyond simple UI CC Type selection
   */
  const creditCardTypesBeginnings = {
    VISA: [/^4[0-9]/],
    MAST: [/^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)/],
    AMEX: [/^3(4|7){1}/],
    DSCV: [/^6(?:011|5[0-9]{2})/]
  };
  /**
   * Supported Credit Card Types & Patterns
   * @source: http://www.regular-expressions.info/creditcard.html
   */

  const creditCardTypesValidity = {
    VISA: [/^4[0-9]{12}([0-9]{3})?$/],
    MAST: [/^5[1-5]\d{14}$|^2(?:2(?:2[1-9]|[3-9]\d)|[3-6]\d\d|7(?:[01]\d|20))\d{12}$/],
    AMEX: [/^3[47][0-9]{13}$/],
    DSCV: [/^6(?:011|5[0-9]{2})[0-9]{12}$/]
  };
  /**
   * Get & Set type of Credit Card Number
   * @param ccNum number to be typed
   */

  function getCreditCardType(ccNum) {
    ccNum = removeWhiteSpace(ccNum);
    let matchingCCType = "";
    Object.keys(creditCardTypesBeginnings).forEach(cardType => {
      creditCardTypesBeginnings[cardType].forEach(regex => {
        if (ccNum.match(regex)) {
          matchingCCType = cardType;
        }
      });
    });
    return matchingCCType;
  }
  /**
   * Determines whether a card number is supported based on list of regex
   * @param number ccNum number to be typed
   */


  function getCreditCardTypeValidity(ccNum) {
    ccNum = removeWhiteSpace(ccNum);
    let validCard = false;
    Object.keys(creditCardTypesValidity).forEach(cardType => {
      creditCardTypesValidity[cardType].forEach(regex => {
        if (ccNum.match(regex)) {
          validCard = true;
        }
      });
    });
    return validCard;
  }
  /**
   * Encrypts cc number via TokenX
   */


  function tokenXEncrypt(ccNum, tokenxKey) {
    try {
      if (tokenxKey && ccNum) {
        return TxEncrypt(tokenxKey, ccNum);
      }
    } catch (error) {
      console.log(error);
      return "";
    }
  }
  /**
   * Helper to remove whitespace
   * @param {string} string  to remove whitespace from
   * @returns {string} string with no whitespace
   */


  function removeWhiteSpace(string) {
    return string.replace(/\s+/g, "");
  }

  const hasNoSlash = string => {
    return string.indexOf("/") === -1;
  };

  const hasDoubleSlash = string => {
    return string.indexOf("//") !== -1;
  };

  function expAutoComplete(newString, prev) {
    newString = removeWhiteSpace(newString); // Pad month input with zero

    if (newString.length === 1 && parseInt(newString, 10) > 1) {
      // Automatically add slash
      if (hasNoSlash(newString) && hasNoSlash(prev)) {
        return "0" + newString + "/";
      }

      return "0" + newString;
    } // Automatically add slash


    if (newString.length === 2 && hasNoSlash(newString) && hasNoSlash(prev)) {
      return newString + "/";
    } // Prevent user from accidentally adding two slashes


    if (hasDoubleSlash(newString)) {
      return newString.replace("//", "/");
    }

    return newString;
  }
});