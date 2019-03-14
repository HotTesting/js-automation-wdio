process.env.TS_NODE_FILES = true;
require("ts-node").register();

const debugConfig = {
  hostname: "localhost",
  port: 4444,
  path: "/wd/hub",
  specs: ["./tests/lesson_6/po.ts"],
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
  console.log("Running in debug mode!");
  //debugConfig.debug = true;
  debugConfig.execArgv = ["--inspect=127.0.0.1:5858"];
  const chromeCap = debugConfig.capabilities.find(cap => {
    return cap.browserName == "chrome";
  });
  chromeCap["selenoid:options"] = {};
  chromeCap["selenoid:options"].enableVNC = true;
  chromeCap["selenoid:options"].name = "StartIT automation";
  chromeCap["selenoid:options"].sessionTimeout = "10m";
}

console.log(debugConfig);

module.exports.config = debugConfig;
