exports.config = {
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
    timeout: 120000,
    // retries: 2
    // fgrep: "C1232"
  },
  reporters: ["spec"],
  before: function(capabilities, specs) {
    process.env.TS_NODE_FILES = true;
    require("ts-node").register();
  },
  beforeTest: function(test) {
    browser.setTimeout({
      implicit: 250
    });
  }
};
