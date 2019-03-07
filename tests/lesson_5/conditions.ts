import { addListener } from "cluster";

export function waitUntilTextIsPresent({
  elem,
  text,
  timeout = 10000,
  error = null,
  interval = 100
}) {
    browser.waitUntil(function () {
        return $(elem).getText() ==  text
    }, timeout, error, interval)
}

export function waitUntilContainingText({
    elem,
    text,
    timeout = 10000,
    error = null,
    reverse = false,
    interval = 100
  }) {
    browser.waitUntil(function () {
        return $(elem).getText().includes(text)
    }, timeout, error, interval)
}


export function textIsPresent(elem, text){
    return function() {
        return $(elem).getText() ==  text
    }
}

function or(cond1, cond2) {
    return cond1() || cond2()
}
browser.waitUntil(or(textIsPresent('div', 'text'), textIsPresent('div', 'text2')))