import QSToObject from "./query-string-parser";
import {
  createValidationHelper,
  validateRequired,
  validateEmpty,
  validateEmail,
  validatePhone,
  validateZip,
  validateMin,
  validateMax,
  validateExpirationDate,
  validateIsFutureDate,
  validateIsNotPastYearsOut,
  validateNotPast10Years,
  validateCreditCardNum,
  validateCreditCardType,
  validateCreditCard
} from "./validation-helpers.js";

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
  const serializedFormString =
    "billing_first_name=Bob&billing_last_name=Testerson&billing_address_1=13411+1st+St&billing_address_2=&billing_city=Seattle&billing_state=WA&billing_postcode=98001&billing_email=srees%40worldvision.org&billing_phone=2532221111&payment_method=cod&_wpnonce=62eac595bb&_wp_http_referer=%2Fcheckout%3Fwc-ajax%3Dupdate_order_review";
  const serializedFormObj = QSToObject(serializedFormString);
  expect(serializedFormObj.billing_first_name).toBe("Bob");
  expect(serializedFormObj.billing_first_name).not.toBe("Sam");
  expect(serializedFormObj).toEqual(formObj);
});

test("validateRequired does not allow for empty string", () => {
  const result = validateRequired("");
  expect(result.valid).toBe(false);
  expect(result.message).toBe("This field is required.");

  const result2 = validateRequired("something");
  expect(result2.valid).toBe(true);
  expect(result2.message).toBe("This field is required.");
});

test("validateEmail can validate an email address", () => {
  const result = validateEmail("");
  expect(result.valid).toBe(false);
  expect(result.message).toBe("Please enter a valid email address.");

  const result2 = validateEmail("test@test.com");
  expect(result2.valid).toBe(true);
  expect(result2.message).toBe("Please enter a valid email address.");

  const result3 = validateEmail("test@test");
  expect(result3.valid).toBe(false);
  expect(result3.message).toBe("Please enter a valid email address.");

  const result4 = validateEmail("alskdjfop93jfojlakjd");
  expect(result4.valid).toBe(false);
  expect(result4.message).toBe("Please enter a valid email address.");
});

test("validateMin can validate a string minimum length", () => {
  const validateMin3 = validateMin(3);
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
  const validateMax3 = validateMax(3);
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

test("validateEmpty can validate empty string", () => {
  const message = "";

  const result = validateEmpty("abc");
  expect(result.valid).toBe(false);
  expect(result.message).toBe(message);

  const result2 = validateEmpty("");
  expect(result2.valid).toBe(true);
  expect(result2.message).toBe(message);
});

test("validateZip can validate zip codes", () => {
  const message =
    "Please enter a valid zip code. For example 90602 or 90602-1234.";

  const result = validateZip("90602");
  expect(result.valid).toBe(true);
  expect(result.message).toBe(message);

  const result2 = validateZip("90602-1234");
  expect(result2.valid).toBe(true);
  expect(result2.message).toBe(message);

  const result3 = validateZip("abcdef");
  expect(result3.valid).toBe(false);
  expect(result3.message).toBe(message);

  const result4 = validateZip("906021");
  expect(result4.valid).toBe(false);
  expect(result4.message).toBe(message);
});

test("validatePhone can validate U.S. phone numbers", () => {
  const message =
    "Please enter a valid 10 digit phone number. E.g. (123) 456-7890 or 123-456-7890.";

  const resultWithDashes = validatePhone("253-855-5555");
  expect(resultWithDashes.valid).toBe(true);
  expect(resultWithDashes.message).toBe(message);

  const resultWithParens = validatePhone("(123) 456-7890");
  expect(resultWithParens.valid).toBe(true);
  expect(resultWithParens.message).toBe(message);

  const resultNoDashesNoParens = validatePhone("1234567890");
  expect(resultNoDashesNoParens.valid).toBe(true);
  expect(resultNoDashesNoParens.message).toBe(message);

  const result3 = validatePhone("(123)4456-7890");
  expect(result3.valid).toBe(false);
  expect(result3.message).toBe(message);

  const resultNumberTooLong = validatePhone("12345678901");
  expect(resultNumberTooLong.valid).toBe(false);
  expect(resultNumberTooLong.message).toBe(message);

  const resultNumberWayTooLong = validatePhone("12345678901545454");
  expect(resultNumberWayTooLong.valid).toBe(false);
  expect(resultNumberWayTooLong.message).toBe(message);
});

test("validateExpirationDate can validate correct MM/YY format, and validate is future date", () => {
  const message = "Please enter a valid expiration date. E.g. 03/22";
  const futureMonth = 12;
  const futureYear = new Date().getFullYear() + 5;
  const futureDate = `${futureMonth}/${futureYear.toString().substring(2)}`;

  const resultFutureDate = validateExpirationDate(futureDate);
  expect(resultFutureDate.valid).toBe(true);
  expect(resultFutureDate.message).toBe(message);

  const pastDate = `${futureMonth}/${(new Date().getFullYear() - 10)
    .toString()
    .substring(2)}`;
  const resultPastDate = validateExpirationDate(pastDate);
  expect(resultPastDate.valid).toBe(false);
  expect(resultPastDate.message).toBe(message);

  const resultWrongFormat = validateExpirationDate("01/2017");
  expect(resultWrongFormat.valid).toBe(false);
  expect(resultWrongFormat.message).toBe(message);

  const resultWrongFormat2 = validateExpirationDate("012017");
  expect(resultWrongFormat2.valid).toBe(false);
  expect(resultWrongFormat2.message).toBe(message);
});

test("validateIsFutureDate can validate future date", () => {
  const message = "Please enter a valid expiration date.";
  const month = "12";
  const futureYear = (new Date().getFullYear() + 10).toString(); // YYYY

  const resultFutureDate = validateIsFutureDate(month, futureYear);
  expect(resultFutureDate.valid).toBe(true);
  expect(resultFutureDate.message).toBe(message);

  const pastYear = (new Date().getFullYear() - 10).toString();
  const resultPastDate = validateIsFutureDate(month, pastYear);
  expect(resultPastDate.valid).toBe(false);
  expect(resultPastDate.message).toBe(message);

  //Current month/year allowed for Credit Card validation
  const currentMonth = parseInt(new Date().getMonth(), 10) + 1; // adjust up one month due to zero-based months in JS, value as entered by user
  const currentYear = parseInt(new Date().getFullYear(), 10);
  const resultCurrentMonthYear = validateIsFutureDate(
    currentMonth,
    currentYear
  );
  expect(resultCurrentMonthYear.valid).toBe(true);
  expect(resultCurrentMonthYear.message).toBe(message);

  //Past Month / current year not allowed for Credit Card validation
  const pastOneMonth = parseInt(new Date().getMonth(), 10); // don't adjust due to zero-based months in JS because want past month as entered by regular user
  const resultPastMonthCurrentYear = validateIsFutureDate(
    pastOneMonth,
    currentYear
  );
  expect(resultPastMonthCurrentYear.valid).toBe(false);
  expect(resultPastMonthCurrentYear.message).toBe(message);
});

test("validateIsNotPastYearsOut can validate future date not past limit", () => {
  const yearsOut = 10;
  const validateIsNotPast10Years = validateIsNotPastYearsOut(yearsOut);
  const message = `Please enter a valid expiration date within ${
    yearsOut
  } years.`;

  const currentMonth = (parseInt(new Date().getMonth(), 10) + 1).toString(); // adjust up one month due to zero-based months in JS, value as entered by user

  const future5Year = (new Date().getFullYear() + 4).toString().substring(2); // YYYY

  const resultFutureDate5Yr = validateIsNotPast10Years(
    `${currentMonth}/${future5Year}`
  );
  expect(resultFutureDate5Yr.valid).toBe(true);
  expect(resultFutureDate5Yr.message).toBe(message);

  const future10Year = (new Date().getFullYear() + 10).toString().substring(2); // YYYY
  const resultFutureDate10Yr = validateIsNotPast10Years(
    `${currentMonth}/${future10Year}`
  );
  expect(resultFutureDate10Yr.valid).toBe(true);
  expect(resultFutureDate10Yr.message).toBe(message);

  const future15Years = (new Date().getFullYear() + 15).toString().substring(2); // YYYY
  const resultFutureDate15Yr = validateIsNotPast10Years(
    `${currentMonth}/${future15Years}`
  );
  expect(resultFutureDate15Yr.valid).toBe(false);
  expect(resultFutureDate15Yr.message).toBe(message);
});

test("validateCreditCardNum can validate future date", () => {
  const message = "Please enter a valid credit card number.";

  const resultValidCard = validateCreditCardNum("4222222222222");
  expect(resultValidCard.valid).toBe(true);
  expect(resultValidCard.message).toBe(message);

  const resultInvalidCard = validateCreditCardNum("4222212222222");
  expect(resultInvalidCard.valid).toBe(false);
  expect(resultInvalidCard.message).toBe(message);

  const resultInvalidCard2 = validateCreditCardNum("flkwajlfijeijf");
  expect(resultInvalidCard2.valid).toBe(false);
  expect(resultInvalidCard2.message).toBe(message);
});

test("validateCreditCard can validate future date", () => {
  const message = "Please enter a valid credit card number.";

  // Supported VISA, and Valid CC Num
  const resultValidCardVISA = validateCreditCard("4222222222222");
  expect(resultValidCardVISA.valid).toBe(true);
  expect(resultValidCardVISA.message).toBe(message);

  // Supported AMEX
  const resultValidCardAMEX = validateCreditCard("378282246310005");
  expect(resultValidCardAMEX.valid).toBe(true);
  expect(resultValidCardAMEX.message).toBe(message);

  // Supported Discover
  const resultValidCardDSC = validateCreditCard("6011111111111117");
  expect(resultValidCardDSC.valid).toBe(true);
  expect(resultValidCardDSC.message).toBe(message);

  // Supported MasterCard
  const resultValidCardMC = validateCreditCard("5555555555554444");
  expect(resultValidCardMC.valid).toBe(true);
  expect(resultValidCardMC.message).toBe(message);

  // Supported VISA, and but Invalid CC Num
  const resultInvalidCard = validateCreditCard("4222212222222");
  expect(resultInvalidCard.valid).toBe(false);
  expect(resultInvalidCard.message).toBe(message);

  //Gibberish card
  const resultInvalidCard2 = validateCreditCard("flkwajlfijeijf");
  expect(resultInvalidCard2.valid).toBe(false);
  expect(resultInvalidCard2.message).toBe(message);

  // Unsupported card: Diner's Club
  const resultInvalidCardType = validateCreditCard("30569309025904");
  expect(resultInvalidCardType.valid).toBe(false);
  expect(resultInvalidCardType.message).toBe(message);
});
