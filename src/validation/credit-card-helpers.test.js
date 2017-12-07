import {
  getCreditCardType,
  getCreditCardTypeValidity,
  tokenXEncrypt,
  expAutoComplete
} from "./credit-card-helpers";

describe("getCreditCardType", () => {
  it("should return correct card type", () => {
    // Source: https://www.paypalobjects.com/en_AU/vhelp/paypalmanager_help/credit_card_numbers.htm
    expect(getCreditCardType("378282246310005")).toBe("AMEX");
    expect(getCreditCardType("371449635398431")).toBe("AMEX");
    expect(getCreditCardType("378734493671000")).toBe("AMEX");
    expect(getCreditCardType("5555555555554444")).toBe("MAST");
    expect(getCreditCardType("5105105105105100")).toBe("MAST");
    expect(getCreditCardType("4111111111111111")).toBe("VISA");
    expect(getCreditCardType("4012888888881881")).toBe("VISA");
    expect(getCreditCardType("4222222222222")).toBe("VISA");
    expect(getCreditCardType("6011111111111117")).toBe("DSCV");
    expect(getCreditCardType("6011000990139424")).toBe("DSCV");
  });
});

describe("getCreditCardTypeValidity", () => {
  it("should return true for valid card types", () => {
    // Source: https://www.paypalobjects.com/en_AU/vhelp/paypalmanager_help/credit_card_numbers.htm
    expect(getCreditCardTypeValidity("378282246310005")).toBe(true);
    expect(getCreditCardTypeValidity("5555555555554444")).toBe(true);
    expect(getCreditCardTypeValidity("5105105105105100")).toBe(true);
    expect(getCreditCardTypeValidity("4111111111111111")).toBe(true);
    expect(getCreditCardTypeValidity("4012888888881881")).toBe(true);
    expect(getCreditCardTypeValidity("4222222222222")).toBe(true);
    expect(getCreditCardTypeValidity("6011111111111117")).toBe(true);
    expect(getCreditCardTypeValidity("6011000990139424")).toBe(true);
  });

  it("should return false for valid card types", () => {
    expect(getCreditCardTypeValidity("3530111333300000")).toBe(false); //JCB
    expect(getCreditCardTypeValidity("3566002020360505")).toBe(false); //JCB
    expect(getCreditCardTypeValidity("30569309025904")).toBe(false); //Diner's club
    expect(getCreditCardTypeValidity("38520000023237")).toBe(false); //Diner's club
  });
});

describe("expAutoComplete", () => {
  it("should remove whitespace", () => {
    expect(expAutoComplete(" 1 ", "")).toBe("1");
    expect(expAutoComplete(" 1 ", "")).not.toBe(" 1 ");
  });

  it("should pad with zero and / for value between 2-9", () => {
    expect(expAutoComplete("1", "")).toBe("1");
    expect(expAutoComplete("2", "")).toBe("02/");
    expect(expAutoComplete("3", "")).toBe("03/");
    expect(expAutoComplete("4", "")).toBe("04/");
    expect(expAutoComplete("5", "")).toBe("05/");
    expect(expAutoComplete("6", "")).toBe("06/");
    expect(expAutoComplete("7", "")).toBe("07/");
    expect(expAutoComplete("9", "")).toBe("09/");
  });

  it("should add / for two digit value", () => {
    expect(expAutoComplete("02", "0")).toBe("02/");
    expect(expAutoComplete("03", "0")).toBe("03/");
    expect(expAutoComplete("04", "0")).toBe("04/");
    expect(expAutoComplete("05", "0")).toBe("05/");
    expect(expAutoComplete("06", "0")).toBe("06/");
    expect(expAutoComplete("07", "0")).toBe("07/");
    expect(expAutoComplete("09", "0")).toBe("09/");
    expect(expAutoComplete("10", "1")).toBe("10/");
  });

  it("should prevent user from accidentally adding two slashes", () => {
    expect(expAutoComplete("02//", "02/")).toBe("02/");
    expect(expAutoComplete("02//", "02/")).toBe("02/");
    expect(expAutoComplete("03//", "03/")).toBe("03/");
    expect(expAutoComplete("04//", "04/")).toBe("04/");
    expect(expAutoComplete("05//", "05/")).toBe("05/");
    expect(expAutoComplete("06//", "06/")).toBe("06/");
    expect(expAutoComplete("07//", "07/")).toBe("07/");
    expect(expAutoComplete("09//", "09/")).toBe("09/");
    expect(expAutoComplete("10//", "10/")).toBe("10/");
    expect(expAutoComplete("10/", "10")).toBe("10/");
  });
});
