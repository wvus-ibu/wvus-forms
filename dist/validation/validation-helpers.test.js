(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["./query-string-parser", "sinon", "./validation-helpers.js"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("./query-string-parser"), require("sinon"), require("./validation-helpers.js"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.queryStringParser, global.sinon, global.validationHelpers);
    global.validationHelpersTest = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_queryStringParser, _sinon, _validationHelpers) {
  "use strict";

  _queryStringParser = _interopRequireDefault(_queryStringParser);
  _sinon = _interopRequireDefault(_sinon);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  describe("createValidationHelper", () => {
    it("can create a new helper with all required properties", () => {
      const config = {
        fname: {
          validators: [_validationHelpers.validateRequired],
          optional: false
        },
        lname: {
          validators: [_validationHelpers.validateRequired],
          optional: false
        }
      };
      const validationHelper = (0, _validationHelpers.createValidationHelper)(config);
      expect(validationHelper).toHaveProperty("errorBag", []);
      expect(validationHelper).toHaveProperty("successBag", []);
      expect(validationHelper).toHaveProperty("validate");
      expect(validationHelper).toHaveProperty("hasErrors");
      expect(validationHelper).toHaveProperty("formIsValid");
      expect(validationHelper).toHaveProperty("hasSuccess");
      expect(validationHelper).toHaveProperty("fieldIsOptional");
      expect(validationHelper).toHaveProperty("fieldValueIsEmpty");
      expect(validationHelper).toHaveProperty("firstErrorMessage");
      expect(validationHelper).toHaveProperty("fieldIsValid");
    });
    it("can run validate function on a fieldname and fieldvalue", () => {
      const config = {
        fname: {
          validators: [_validationHelpers.validateRequired],
          optional: false
        }
      };
      const validationHelper = (0, _validationHelpers.createValidationHelper)(config);

      _sinon.default.spy(validationHelper, "validate");

      validationHelper.validate("fname", "");
      expect(validationHelper.validate.calledWith("fname", "")).toBe(true);
    });
    it("can store error in errorBag on invalid field", () => {
      const config = {
        fname: {
          validators: [_validationHelpers.validateRequired],
          optional: false
        }
      };
      const validationHelper = (0, _validationHelpers.createValidationHelper)(config);
      validationHelper.validate("fname", "");
      expect(validationHelper.errorBag["fname"].length).toBe(1);
      expect(validationHelper.successBag["fname"].length).toBe(0);
      expect(validationHelper.hasErrors("fname")).toBe(true);
      expect(validationHelper.hasSuccess("fname")).toBe(false);
    });
    it("can store success on valid field value", () => {
      const config = {
        fname: {
          validators: [_validationHelpers.validateRequired],
          optional: false
        }
      };
      const validationHelper = (0, _validationHelpers.createValidationHelper)(config);
      validationHelper.validate("fname", "Scott");
      expect(validationHelper.fieldIsOptional("fname")).toBe(false);
      expect(validationHelper.errorBag["fname"].length).toBe(0);
      expect(validationHelper.successBag["fname"].length).toBe(1);
      expect(validationHelper.hasErrors("fname")).toBe(false);
      expect(validationHelper.hasSuccess("fname")).toBe(true);
    });
    it(" - optional fields with empty values have no errors despite validators", () => {
      // Optional fields will store no error nor success if they have empty value
      const alwayReturnInvalid = () => false; //tests that option


      const config = {
        fname: {
          validators: [alwayReturnInvalid],
          optional: true
        }
      };
      const validationHelper = (0, _validationHelpers.createValidationHelper)(config);
      validationHelper.validate("fname", "");
      expect(validationHelper.fieldIsOptional("fname")).toBe(true);
      expect(validationHelper.errorBag["fname"].length).toBe(0);
      expect(validationHelper.successBag["fname"].length).toBe(0);
      expect(validationHelper.hasErrors("fname")).toBe(false);
      expect(validationHelper.hasSuccess("fname")).toBe(false);
    });
    it(" - optional fields can be validated", () => {
      // Optional fields will store no error nor success if they have empty value
      const config = {
        fname: {
          validators: [(0, _validationHelpers.validateMin)(3)],
          optional: true
        }
      };
      const validationHelper = (0, _validationHelpers.createValidationHelper)(config);
      validationHelper.validate("fname", "123");
      expect(validationHelper.fieldIsOptional("fname")).toBe(true);
      expect(validationHelper.errorBag["fname"].length).toBe(0);
      expect(validationHelper.successBag["fname"].length).toBe(1);
      expect(validationHelper.hasErrors("fname")).toBe(false);
      expect(validationHelper.hasSuccess("fname")).toBe(true);
      validationHelper.validate("fname", "12");
      expect(validationHelper.errorBag["fname"].length).toBe(1);
      expect(validationHelper.successBag["fname"].length).toBe(0);
      expect(validationHelper.hasErrors("fname")).toBe(true);
      expect(validationHelper.hasSuccess("fname")).toBe(false);
    });
    it(" - formIsValid works as expected", () => {
      const config = {
        fname: {
          validators: [(0, _validationHelpers.validateMin)(3)],
          optional: false
        },
        lname: {
          validators: [(0, _validationHelpers.validateMin)(3)],
          optional: false
        }
      };
      const validationHelper = (0, _validationHelpers.createValidationHelper)(config); // test with one invalid field, on valid field

      validationHelper.validate("fname", "123");
      validationHelper.validate("lname", "12");
      expect(validationHelper.formIsValid()).toBe(false); // test with two valid fields

      validationHelper.validate("fname", "123");
      validationHelper.validate("lname", "123");
      expect(validationHelper.formIsValid()).toBe(true); // test with two invalid fields

      validationHelper.validate("fname", "12");
      validationHelper.validate("lname", "12");
      expect(validationHelper.formIsValid()).toBe(false);
    });
    it("can get firstErrorMessage", () => {
      const config = {
        fname: {
          validators: [_validationHelpers.validateRequired, (0, _validationHelpers.validateMin)(3)],
          optional: false
        }
      };
      const validationHelper = (0, _validationHelpers.createValidationHelper)(config); // test with string value that fails both validators, that
      // firstErrorMessage only returns the first one

      validationHelper.validate("fname", "");
      expect(validationHelper.firstErrorMessage("fname")).toBe("This field is required.");
    });
  });
  test("Query String Parser can convert query string to object", () => {
    const formObj = {
      billing_first_name: "Bob",
      billing_last_name: "Testerson",
      billing_address_1: "13411+1st+St",
      billing_address_2: "",
      billing_city: "Seattle",
      billing_state: "WA",
      billing_postcode: "98001",
      billing_email: "srees%40worldvision.org",
      billing_phone: "2532221111",
      payment_method: "cod",
      _wpnonce: "62eac595bb",
      _wp_http_referer: "%2Fcheckout%3Fwc-ajax%3Dupdate_order_review"
    };
    const serializedFormString = "billing_first_name=Bob&billing_last_name=Testerson&billing_address_1=13411+1st+St&billing_address_2=&billing_city=Seattle&billing_state=WA&billing_postcode=98001&billing_email=srees%40worldvision.org&billing_phone=2532221111&payment_method=cod&_wpnonce=62eac595bb&_wp_http_referer=%2Fcheckout%3Fwc-ajax%3Dupdate_order_review";
    const serializedFormObj = (0, _queryStringParser.default)(serializedFormString);
    expect(serializedFormObj.billing_first_name).toBe("Bob");
    expect(serializedFormObj.billing_first_name).not.toBe("Sam");
    expect(serializedFormObj).toEqual(formObj);
  });
  test("validateRequired does not allow for empty string", () => {
    const result = (0, _validationHelpers.validateRequired)("");
    expect(result.valid).toBe(false);
    expect(result.message).toBe("This field is required.");
    const result2 = (0, _validationHelpers.validateRequired)("something");
    expect(result2.valid).toBe(true);
    expect(result2.message).toBe("This field is required.");
  });
  test("validateEmail can validate an email address", () => {
    const result = (0, _validationHelpers.validateEmail)("");
    expect(result.valid).toBe(false);
    expect(result.message).toBe("Please enter a valid email address.");
    const result2 = (0, _validationHelpers.validateEmail)("test@test.com");
    expect(result2.valid).toBe(true);
    expect(result2.message).toBe("Please enter a valid email address.");
    const result3 = (0, _validationHelpers.validateEmail)("test@test");
    expect(result3.valid).toBe(false);
    expect(result3.message).toBe("Please enter a valid email address.");
    const result4 = (0, _validationHelpers.validateEmail)("alskdjfop93jfojlakjd");
    expect(result4.valid).toBe(false);
    expect(result4.message).toBe("Please enter a valid email address.");
  });
  test("validateMin can validate a string minimum length", () => {
    const validateMin3 = (0, _validationHelpers.validateMin)(3);
    const result = validateMin3("abc");
    expect(result.valid).toBe(true);
    expect(result.message).toBe("Field must be a minimum length of: 3");
    const result2 = validateMin3("abcdefgh");
    expect(result2.valid).toBe(true);
    expect(result2.message).toBe("Field must be a minimum length of: 3");
    const resultTooShort = validateMin3("ab");
    expect(resultTooShort.valid).toBe(false);
    expect(resultTooShort.message).toBe("Field must be a minimum length of: 3");
  });
  test("validateMax can validate a string maximum length", () => {
    const message = "Field must be a maximum length of: 3";
    const validateMax3 = (0, _validationHelpers.validateMax)(3);
    const result = validateMax3("abc");
    expect(result.valid).toBe(true);
    expect(result.message).toBe(message);
    const result2 = validateMax3("abcdefgh");
    expect(result2.valid).toBe(false);
    expect(result2.message).toBe(message);
    const resultTooShort = validateMax3("ab");
    expect(resultTooShort.valid).toBe(true);
    expect(resultTooShort.message).toBe(message);
  });
  test("validateExactLength can validate a string length", () => {
    const message = "Field must be an exact length of: 3";
    const validateLength = (0, _validationHelpers.validateExactLength)(3);
    const result = validateLength("abc");
    expect(result.valid).toBe(true);
    expect(result.message).toBe(message);
    const result2 = validateLength("abcdefgh");
    expect(result2.valid).toBe(false);
    expect(result2.message).toBe(message);
    const result3 = validateLength("1234");
    expect(result3.valid).toBe(false);
    expect(result3.message).toBe(message);
    const result4 = validateLength("123");
    expect(result4.valid).toBe(true);
    expect(result4.message).toBe(message);
    const resultTooShort = validateLength("ab");
    expect(resultTooShort.valid).toBe(false);
    expect(resultTooShort.message).toBe(message);
  });
  test("validateNoSpaces can validate a string doesn't have a space", () => {
    const message = "Field must not contain spaces";
    const result = (0, _validationHelpers.validateNoSpaces)("a b c ");
    expect(result.valid).toBe(false);
    expect(result.message).toBe(message);
    const result2 = (0, _validationHelpers.validateNoSpaces)("abc");
    expect(result2.valid).toBe(true);
    expect(result2.message).toBe(message);
  });
  test("validateHasLowerCase can validate a string has at least one lowercase letter", () => {
    const message = "Field must have at least one lowercase letter.";
    const result = (0, _validationHelpers.validateHasLowerCase)("abc");
    expect(result.valid).toBe(true);
    expect(result.message).toBe(message);
    const result2 = (0, _validationHelpers.validateHasLowerCase)("1234");
    expect(result2.valid).toBe(false);
    expect(result2.message).toBe(message);
    const result3 = (0, _validationHelpers.validateHasLowerCase)("12a34");
    expect(result3.valid).toBe(true);
    expect(result3.message).toBe(message);
    const result4 = (0, _validationHelpers.validateHasLowerCase)("12B34");
    expect(result4.valid).toBe(false);
    expect(result4.message).toBe(message);
    const result5 = (0, _validationHelpers.validateHasLowerCase)("AABBCC");
    expect(result5.valid).toBe(false);
    expect(result5.message).toBe(message);
    const result6 = (0, _validationHelpers.validateHasLowerCase)("AABBcc");
    expect(result6.valid).toBe(true);
    expect(result6.message).toBe(message);
  });
  test("validateHasUpperCase can validate a string has at least one uppercase letter", () => {
    const message = "Field must have at least one uppercase letter.";
    const result = (0, _validationHelpers.validateHasUpperCase)("ABC");
    expect(result.valid).toBe(true);
    expect(result.message).toBe(message);
    const result2 = (0, _validationHelpers.validateHasUpperCase)("1234");
    expect(result2.valid).toBe(false);
    expect(result2.message).toBe(message);
    const result3 = (0, _validationHelpers.validateHasUpperCase)("12a34");
    expect(result3.valid).toBe(false);
    expect(result3.message).toBe(message);
    const result4 = (0, _validationHelpers.validateHasUpperCase)("12B34");
    expect(result4.valid).toBe(true);
    expect(result4.message).toBe(message);
    const result5 = (0, _validationHelpers.validateHasUpperCase)("AABBCC");
    expect(result5.valid).toBe(true);
    expect(result5.message).toBe(message);
    const result6 = (0, _validationHelpers.validateHasUpperCase)("AABBcc");
    expect(result6.valid).toBe(true);
    expect(result6.message).toBe(message);
  });
  test("validateHasNumber can validate a string has at least one number", () => {
    const message = "Field must have at least one number.";
    const result = (0, _validationHelpers.validateHasNumber)("abc");
    expect(result.valid).toBe(false);
    expect(result.message).toBe(message);
    const result2 = (0, _validationHelpers.validateHasNumber)("1234");
    expect(result2.valid).toBe(true);
    expect(result2.message).toBe(message);
    const result3 = (0, _validationHelpers.validateHasNumber)("ab1cd");
    expect(result3.valid).toBe(true);
    expect(result3.message).toBe(message);
    const result4 = (0, _validationHelpers.validateHasNumber)("&*^)#(@_)#($");
    expect(result4.valid).toBe(false);
    expect(result4.message).toBe(message);
  });
  test("validateContainChars can validate a clean message", () => {
    const resultValidMessageNoHTMLTags = (0, _validationHelpers.validateContainChars)("this message contains no html tags");
    expect(resultValidMessageNoHTMLTags.valid).toBe(true);
  });
  test("validateContainChars cannot validate a dirty message", () => {
    const message = "Please do not use any of the following invalid characters: ),(,>,<,~,%";
    const resultValidMessageNoHTMLTags = (0, _validationHelpers.validateContainChars)("this message contains html tags < >");
    expect(resultValidMessageNoHTMLTags.valid).toBe(false);
    expect(resultValidMessageNoHTMLTags.message).toBe(message);
    const resultValidMessageNoParens = (0, _validationHelpers.validateContainChars)("this message contains parens )(");
    expect(resultValidMessageNoParens.valid).toBe(false);
    expect(resultValidMessageNoParens.message).toBe(message);
    const resultValidMessageNoTildePercent = (0, _validationHelpers.validateContainChars)("this message contains tilde and percent %,~");
    expect(resultValidMessageNoTildePercent.valid).toBe(false);
    expect(resultValidMessageNoTildePercent.message).toBe(message);
  });
  test("validateIsInt can validate a string is only integer numbers", () => {
    const message = "Field must only contain numbers.";
    const result = (0, _validationHelpers.validateIsInt)("abc");
    expect(result.valid).toBe(false);
    expect(result.message).toBe(message);
    const result2 = (0, _validationHelpers.validateIsInt)("1234");
    expect(result2.valid).toBe(true);
    expect(result2.message).toBe(message);
    const result3 = (0, _validationHelpers.validateIsInt)("ab1cd");
    expect(result3.valid).toBe(false);
    expect(result3.message).toBe(message);
    const result4 = (0, _validationHelpers.validateIsInt)("&*^)#(@_)#($");
    expect(result4.valid).toBe(false);
    expect(result4.message).toBe(message);
    const result5 = (0, _validationHelpers.validateIsInt)("10.0");
    expect(result5.valid).toBe(false);
    expect(result5.message).toBe(message);
  });
  describe("validatePassword", () => {
    const message = "Minimum 8 characters with at least 1 number, 1 uppercase letter, 1 lowercase letter, and no spaces.";
    it("should be false for password that is too short", () => {
      const resultNotLongEnough = (0, _validationHelpers.validatePassword)("aBc1234");
      expect(resultNotLongEnough.valid).toBe(false);
      expect(resultNotLongEnough.message).toBe(message);
    });
    it("should be false for password with only numbers", () => {
      const resultNotLongEnough = (0, _validationHelpers.validatePassword)("123456789");
      expect(resultNotLongEnough.valid).toBe(false);
      expect(resultNotLongEnough.message).toBe(message);
    });
    it("should be false for password without Uppercase", () => {
      const resultNotLongEnough = (0, _validationHelpers.validatePassword)("ab112345456");
      expect(resultNotLongEnough.valid).toBe(false);
      expect(resultNotLongEnough.message).toBe(message);
    });
    it("should be false for password without Lowercase", () => {
      const resultNotLongEnough = (0, _validationHelpers.validatePassword)("AB112345456");
      expect(resultNotLongEnough.valid).toBe(false);
      expect(resultNotLongEnough.message).toBe(message);
    });
    it("should be false for password without Numbers", () => {
      const resultNotLongEnough = (0, _validationHelpers.validatePassword)("ABcdefghiJKLM");
      expect(resultNotLongEnough.valid).toBe(false);
      expect(resultNotLongEnough.message).toBe(message);
    });
    it("should be false for password with Spaces", () => {
      const resultNotLongEnough = (0, _validationHelpers.validatePassword)("ab1 23456");
      expect(resultNotLongEnough.valid).toBe(false);
      expect(resultNotLongEnough.message).toBe(message);
    });
    it("should be true with valid password", () => {
      const resultNotLongEnough = (0, _validationHelpers.validatePassword)("abCDE23456");
      expect(resultNotLongEnough.valid).toBe(true);
      expect(resultNotLongEnough.message).toBe(message);
    });
  });
  test("validateEmpty can validate empty string", () => {
    const message = "";
    const result = (0, _validationHelpers.validateEmpty)("abc");
    expect(result.valid).toBe(false);
    expect(result.message).toBe(message);
    const result2 = (0, _validationHelpers.validateEmpty)("");
    expect(result2.valid).toBe(true);
    expect(result2.message).toBe(message);
  });
  test("validateZip can validate zip codes", () => {
    const message = "Please enter a valid zip code. For example 90602 or 90602-1234.";
    const result = (0, _validationHelpers.validateZip)("90602");
    expect(result.valid).toBe(true);
    expect(result.message).toBe(message);
    const result2 = (0, _validationHelpers.validateZip)("90602-1234");
    expect(result2.valid).toBe(true);
    expect(result2.message).toBe(message);
    const result3 = (0, _validationHelpers.validateZip)("abcdef");
    expect(result3.valid).toBe(false);
    expect(result3.message).toBe(message);
    const result4 = (0, _validationHelpers.validateZip)("906021");
    expect(result4.valid).toBe(false);
    expect(result4.message).toBe(message);
  });
  test("validatePhone can validate U.S. phone numbers", () => {
    const message = "Please enter a valid 10 digit phone number. E.g. 123-456-7890.";
    const resultWithDashes = (0, _validationHelpers.validatePhone)("253-855-5555");
    expect(resultWithDashes.valid).toBe(true);
    expect(resultWithDashes.message).toBe(message);
    const resultWithParens = (0, _validationHelpers.validatePhone)("(123) 456-7890");
    expect(resultWithParens.valid).toBe(false);
    expect(resultWithParens.message).toBe(message);
    const resultWithParens2 = (0, _validationHelpers.validatePhone)("(123) 4567890");
    expect(resultWithParens2.valid).toBe(false);
    expect(resultWithParens2.message).toBe(message);
    const resultNoDashesNoParens = (0, _validationHelpers.validatePhone)("1234567890");
    expect(resultNoDashesNoParens.valid).toBe(true);
    expect(resultNoDashesNoParens.message).toBe(message);
    const result3 = (0, _validationHelpers.validatePhone)("(123)4456-7890");
    expect(result3.valid).toBe(false);
    expect(result3.message).toBe(message);
    const resultNumberTooLong = (0, _validationHelpers.validatePhone)("12345678901");
    expect(resultNumberTooLong.valid).toBe(false);
    expect(resultNumberTooLong.message).toBe(message);
    const resultNumberWayTooLong = (0, _validationHelpers.validatePhone)("12345678901545454");
    expect(resultNumberWayTooLong.valid).toBe(false);
    expect(resultNumberWayTooLong.message).toBe(message);
  });
  test("validateExpirationDate can validate correct MM/YY format, and validate is future date", () => {
    const message = "Please enter a valid expiration date. E.g. 03/22";
    const futureMonth = 12;
    const futureYear = new Date().getFullYear() + 5;
    const futureDate = "".concat(futureMonth, "/").concat(futureYear.toString().substring(2));
    const resultFutureDate = (0, _validationHelpers.validateExpirationDate)(futureDate);
    expect(resultFutureDate.valid).toBe(true);
    expect(resultFutureDate.message).toBe(message);
    const pastDate = "".concat(futureMonth, "/").concat((new Date().getFullYear() - 10).toString().substring(2));
    const resultPastDate = (0, _validationHelpers.validateExpirationDate)(pastDate);
    expect(resultPastDate.valid).toBe(false);
    expect(resultPastDate.message).toBe(message);
    const resultWrongFormat = (0, _validationHelpers.validateExpirationDate)("01/2017");
    expect(resultWrongFormat.valid).toBe(false);
    expect(resultWrongFormat.message).toBe(message);
    const resultWrongFormat2 = (0, _validationHelpers.validateExpirationDate)("012017");
    expect(resultWrongFormat2.valid).toBe(false);
    expect(resultWrongFormat2.message).toBe(message);
  });
  test("validateIsFutureDate can validate future date", () => {
    const message = "Please enter a valid expiration date.";
    const month = "12";
    const futureYear = (new Date().getFullYear() + 10).toString(); // YYYY

    const resultFutureDate = (0, _validationHelpers.validateIsFutureDate)(month, futureYear);
    expect(resultFutureDate.valid).toBe(true);
    expect(resultFutureDate.message).toBe(message);
    const pastYear = (new Date().getFullYear() - 10).toString();
    const resultPastDate = (0, _validationHelpers.validateIsFutureDate)(month, pastYear);
    expect(resultPastDate.valid).toBe(false);
    expect(resultPastDate.message).toBe(message); //Current month/year allowed for Credit Card validation

    const currentMonth = parseInt(new Date().getMonth(), 10) + 1; // adjust up one month due to zero-based months in JS, value as entered by user

    const currentYear = parseInt(new Date().getFullYear(), 10);
    const resultCurrentMonthYear = (0, _validationHelpers.validateIsFutureDate)(currentMonth, currentYear);
    expect(resultCurrentMonthYear.valid).toBe(true);
    expect(resultCurrentMonthYear.message).toBe(message); //Past Month / current year not allowed for Credit Card validation

    const pastOneMonth = parseInt(new Date().getMonth(), 10); // don't adjust due to zero-based months in JS because want past month as entered by regular user

    const resultPastMonthCurrentYear = (0, _validationHelpers.validateIsFutureDate)(pastOneMonth, currentYear);
    expect(resultPastMonthCurrentYear.valid).toBe(false);
    expect(resultPastMonthCurrentYear.message).toBe(message);
  });
  test("validateIsNotPastYearsOut can validate future date not past limit", () => {
    const yearsOut = 10;
    const validateIsNotPast10Years = (0, _validationHelpers.validateIsNotPastYearsOut)(yearsOut);
    const message = "Please enter a valid expiration date within ".concat(yearsOut, " years.");
    const currentMonth = (parseInt(new Date().getMonth(), 10) + 1).toString(); // adjust up one month due to zero-based months in JS, value as entered by user

    const future5Year = (new Date().getFullYear() + 4).toString().substring(2); // YYYY

    const resultFutureDate5Yr = validateIsNotPast10Years("".concat(currentMonth, "/").concat(future5Year));
    expect(resultFutureDate5Yr.valid).toBe(true);
    expect(resultFutureDate5Yr.message).toBe(message);
    const future10Year = (new Date().getFullYear() + 10).toString().substring(2); // YYYY

    const resultFutureDate10Yr = validateIsNotPast10Years("".concat(currentMonth, "/").concat(future10Year));
    expect(resultFutureDate10Yr.valid).toBe(true);
    expect(resultFutureDate10Yr.message).toBe(message);
    const future15Years = (new Date().getFullYear() + 15).toString().substring(2); // YYYY

    const resultFutureDate15Yr = validateIsNotPast10Years("".concat(currentMonth, "/").concat(future15Years));
    expect(resultFutureDate15Yr.valid).toBe(false);
    expect(resultFutureDate15Yr.message).toBe(message);
  });
  test("validateCreditCardNum can validate future date", () => {
    const message = "Please enter a valid credit card number.";
    const resultValidCard = (0, _validationHelpers.validateCreditCardNum)("4222222222222");
    expect(resultValidCard.valid).toBe(true);
    expect(resultValidCard.message).toBe(message);
    const resultInvalidCard = (0, _validationHelpers.validateCreditCardNum)("4222212222222");
    expect(resultInvalidCard.valid).toBe(false);
    expect(resultInvalidCard.message).toBe(message);
    const resultInvalidCard2 = (0, _validationHelpers.validateCreditCardNum)("flkwajlfijeijf");
    expect(resultInvalidCard2.valid).toBe(false);
    expect(resultInvalidCard2.message).toBe(message);
  });
  test("validateCreditCard can validate a credit card", () => {
    const message = "Please enter a valid credit card number."; // Supported VISA, and Valid CC Num

    const resultValidCardVISA = (0, _validationHelpers.validateCreditCard)("4222222222222");
    expect(resultValidCardVISA.valid).toBe(true);
    expect(resultValidCardVISA.message).toBe(message); // Supported AMEX

    const resultValidCardAMEX = (0, _validationHelpers.validateCreditCard)("378282246310005");
    expect(resultValidCardAMEX.valid).toBe(true);
    expect(resultValidCardAMEX.message).toBe(message); // Supported Discover

    const resultValidCardDSC = (0, _validationHelpers.validateCreditCard)("6011111111111117");
    expect(resultValidCardDSC.valid).toBe(true);
    expect(resultValidCardDSC.message).toBe(message); // Supported MasterCard

    const resultValidCardMC = (0, _validationHelpers.validateCreditCard)("5555555555554444");
    expect(resultValidCardMC.valid).toBe(true);
    expect(resultValidCardMC.message).toBe(message); // Supported VISA, and but Invalid CC Num

    const resultInvalidCard = (0, _validationHelpers.validateCreditCard)("4222212222222");
    expect(resultInvalidCard.valid).toBe(false);
    expect(resultInvalidCard.message).toBe(message); //Gibberish card

    const resultInvalidCard2 = (0, _validationHelpers.validateCreditCard)("flkwajlfijeijf");
    expect(resultInvalidCard2.valid).toBe(false);
    expect(resultInvalidCard2.message).toBe(message); // Unsupported card: Diner's Club

    const resultInvalidCardType = (0, _validationHelpers.validateCreditCard)("30569309025904");
    expect(resultInvalidCardType.valid).toBe(false);
    expect(resultInvalidCardType.message).toBe(message);
  });
});