(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.usStates = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var USStateFieldOptions = [{
    valueKey: "",
    valueText: "▾ Select a state"
  }, {
    valueKey: "AL",
    valueText: "Alabama"
  }, {
    valueKey: "AK",
    valueText: "Alaska"
  }, {
    valueKey: "AS",
    valueText: "American Samoa"
  }, {
    valueKey: "AZ",
    valueText: "Arizona"
  }, {
    valueKey: "AR",
    valueText: "Arkansas"
  }, {
    valueKey: "AF",
    valueText: "Armed Forces Africa"
  }, {
    valueKey: "AA",
    valueText: "Armed Forces Americas"
  }, {
    valueKey: "AC",
    valueText: "Armed Forces Canada"
  }, {
    valueKey: "AE",
    valueText: "Armed Forces Europe"
  }, {
    valueKey: "AM",
    valueText: "Armed Forces Middle East"
  }, {
    valueKey: "AP",
    valueText: "Armed Forces Pacific"
  }, {
    valueKey: "CA",
    valueText: "California"
  }, {
    valueKey: "CO",
    valueText: "Colorado"
  }, {
    valueKey: "CT",
    valueText: "Connecticut"
  }, {
    valueKey: "DE",
    valueText: "Delaware"
  }, {
    valueKey: "DC",
    valueText: "District Of Columbia"
  }, {
    valueKey: "FM",
    valueText: "Federated States Of Micronesia"
  }, {
    valueKey: "FL",
    valueText: "Florida"
  }, {
    valueKey: "GA",
    valueText: "Georgia"
  }, {
    valueKey: "GU",
    valueText: "Guam"
  }, {
    valueKey: "HI",
    valueText: "Hawaii"
  }, {
    valueKey: "ID",
    valueText: "Idaho"
  }, {
    valueKey: "IL",
    valueText: "Illinois"
  }, {
    valueKey: "IN",
    valueText: "Indiana"
  }, {
    valueKey: "IA",
    valueText: "Iowa"
  }, {
    valueKey: "KS",
    valueText: "Kansas"
  }, {
    valueKey: "KY",
    valueText: "Kentucky"
  }, {
    valueKey: "LA",
    valueText: "Louisiana"
  }, {
    valueKey: "ME",
    valueText: "Maine"
  }, {
    valueKey: "MH",
    valueText: "Marshall Islands"
  }, {
    valueKey: "MD",
    valueText: "Maryland"
  }, {
    valueKey: "MA",
    valueText: "Massachusetts"
  }, {
    valueKey: "MI",
    valueText: "Michigan"
  }, {
    valueKey: "MN",
    valueText: "Minnesota"
  }, {
    valueKey: "MS",
    valueText: "Mississippi"
  }, {
    valueKey: "MO",
    valueText: "Missouri"
  }, {
    valueKey: "MT",
    valueText: "Montana"
  }, {
    valueKey: "NE",
    valueText: "Nebraska"
  }, {
    valueKey: "NV",
    valueText: "Nevada"
  }, {
    valueKey: "NH",
    valueText: "New Hampshire"
  }, {
    valueKey: "NJ",
    valueText: "New Jersey"
  }, {
    valueKey: "NM",
    valueText: "New Mexico"
  }, {
    valueKey: "NY",
    valueText: "New York"
  }, {
    valueKey: "NC",
    valueText: "North Carolina"
  }, {
    valueKey: "ND",
    valueText: "North Dakota"
  }, {
    valueKey: "MP",
    valueText: "Northern Mariana Islands"
  }, {
    valueKey: "OH",
    valueText: "Ohio"
  }, {
    valueKey: "OK",
    valueText: "Oklahoma"
  }, {
    valueKey: "OR",
    valueText: "Oregon"
  }, {
    valueKey: "PW",
    valueText: "Palau"
  }, {
    valueKey: "PA",
    valueText: "Pennsylvania"
  }, {
    valueKey: "PR",
    valueText: "Puerto Rico"
  }, {
    valueKey: "RI",
    valueText: "Rhode Island"
  }, {
    valueKey: "SC",
    valueText: "South Carolina"
  }, {
    valueKey: "SD",
    valueText: "South Dakota"
  }, {
    valueKey: "TN",
    valueText: "Tennessee"
  }, {
    valueKey: "TX",
    valueText: "Texas"
  }, {
    valueKey: "UT",
    valueText: "Utah"
  }, {
    valueKey: "VT",
    valueText: "Vermont"
  }, {
    valueKey: "VI",
    valueText: "Virgin Islands"
  }, {
    valueKey: "VA",
    valueText: "Virginia"
  }, {
    valueKey: "WA",
    valueText: "Washington"
  }, {
    valueKey: "WV",
    valueText: "West Virginia"
  }, {
    valueKey: "WI",
    valueText: "Wisconsin"
  }, {
    valueKey: "WY",
    valueText: "Wyoming"
  }];
  exports.default = USStateFieldOptions;
});