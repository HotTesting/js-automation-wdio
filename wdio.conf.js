process.env.TS_NODE_FILES = true;
require("ts-node").register();

if (process.env.SUITE_TO_RUN) {
  let MY_TESTS = {
    "SMOKE": "./tests/**/1.ts",
    "FULL_REGRESSION": "./tests/**/2.ts"
  }

  const SPECS = a[process.env.SUITE_TO_RUN]
}

const wdioConfig = {
  hostname: "localhost",
  port: 4444,
  path: "/wd/hub",
  specs: [SPECS],
  sync: true,
  logLevel: "silent",
  services: ["selenium-standalone"],
  capabilities: [
    {
      browserName: "chrome"
    }
  ],
  baseUrl: "http://ip-5236.sunline.net.ua:38015",
  framework: "mocha",

  // multiremote

  // capabilities: {
  //   user1: {
  //     capabilities: {
  //       browserName: "chrome"
  //     }
  //   },
  //   user2: {
  //     capabilities: {
  //       browserName: "chrome"
  //     }
  //   },
  //   user3: {
  //     capabilities: {
  //       browserName: "chrome"
  //     }
  //   }
  // },

  mochaOpts: {
    ui: "bdd",
    timeout: 120000
    // retries: 2
    // fgrep: "C1232"
  },
  reporters: ["spec"],
  beforeSession: function(config, capabilities) {
    if (process.env.DEBUG == "1") {
      // Giving debugger some time to connect...
      return new Promise(resolve => setTimeout(resolve, 10000));
    }
  },
  before: function(capabilities, specs) {
    browser.windowHandleSize({ width: 1920, height: 1080 });
  },
  beforeTest: function(test) {
    browser.setTimeout({
      implicit: 250
    });
  }
};

if (process.env.DEBUG == "1") {
  console.log("###### Running in debug mode! ######");
  //debugConfig.debug = true;
  wdioConfig.execArgv = ["--inspect=127.0.0.1:5858"];
  wdioConfig.mochaOpts.timeout = 360000
  const chromeCap = wdioConfig.capabilities.find(cap => {
    return cap.browserName == "chrome";
  });
  chromeCap["selenoid:options"] = {};
  chromeCap["selenoid:options"].enableVNC = true;
  chromeCap["selenoid:options"].name = "StartIT automation";
  chromeCap["selenoid:options"].sessionTimeout = "10m";
}

module.exports.config = wdioConfig;
