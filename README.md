
Enable CI builds for your repo, go to 
https://travis-ci.org/account/repositories
find your repo in list and turn on builds for it

See your build results here - https://travis-ci.org/StartITProtractorJS

# startit js ui automation course
Demo project for startit students


To make sure everything works in this initial repo:
- clone
- do `npm install` in root of this repo
- do `npm test`
- you should see chrome browser blinking, and something like this in console:
```
Stdout:
2019-02-18T14:52:32.942Z INFO wdio-cli:Launcher: Run onPrepare hook
2019-02-18T14:52:35.165Z INFO wdio-local-runner: Start worker 0-0 with arg: ./wdio.conf.js
[0-0] 2019-02-18T14:52:35.487Z INFO wdio-local-runner: Run worker command: run
[0-0] 2019-02-18T14:52:35.615Z INFO webdriver: [POST] http://localhost:4444/wd/hub/session
[0-0] 2019-02-18T14:52:35.615Z INFO webdriver: DATA { capabilities:
   { alwaysMatch: { browserName: 'chrome' }, firstMatch: [ {} ] },
  desiredCapabilities: { browserName: 'chrome' } }
[0-0] 2019-02-18T14:52:38.646Z INFO webdriver: COMMAND navigateTo("http://ip-5236.sunline.net.ua:38015/")
[0-0] 2019-02-18T14:52:38.646Z INFO webdriver: [POST] http://localhost:4444/wd/hub/session/27501f74330748b9246cf99cbee0115b/url
[0-0] 2019-02-18T14:52:38.646Z INFO webdriver: DATA { url: 'http://ip-5236.sunline.net.ua:38015/' }
[0-0] --Test passed!
[0-0] 2019-02-18T14:52:40.074Z INFO webdriver: COMMAND deleteSession()
[0-0] 2019-02-18T14:52:40.075Z INFO webdriver: [DELETE] http://localhost:4444/wd/hub/session/27501f74330748b9246cf99cbee0115b
2019-02-18T14:52:40.258Z DEBUG wdio-local-runner: Runner 0-0 finished with exit code 0
2019-02-18T14:52:40.259Z INFO wdio-cli:Launcher: Run onComplete hook

Test Suites:     1 passed, 1 total (100% completed)
Time:            🕛  7.41s

Oleksandrs-MBP:js-automation-wdio oleksandrkhotemskyi$ 
```

# Update this readme file once everything is setup!
