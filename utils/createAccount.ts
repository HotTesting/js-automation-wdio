import * as request from "request-promise-native";
import * as faker from "faker";
const cheerio = require("cheerio");

async function createNewUserAsync() {
  // const regex = /<input type="hidden" name="token" value="(.*)"/gm;
  const j = request.jar();
  let req = request.defaults({
    jar: j,
    resolveWithFullResponse: true,
    headers: {
      Accept:
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3",
      "Accept-Encoding": "gzip, deflate",
      "Accept-Language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7,ru-UA;q=0.6",
      "Content-Type": "application/x-www-form-urlencoded"
    }
  });
  let tokenResponse = await req.get(
    "http://ip-5236.sunline.net.ua:38015/create_account"
  );

  const $ = cheerio.load(tokenResponse.body);
  const token = $('form[name="customer_form"] input[name="token"]').attr(
    "value"
  );
  let uuid = faker.random.uuid().replace(/-/gm, "");
  const email = `${uuid}@test.com`;
  const password = "123456";
  console.log("EMAIL", email);

  const formData = {
    token: token,
    company: null,
    tax_id: null,
    firstname: "test",
    lastname: "test",
    address1: null,
    address2: null,
    postcode: null,
    city: null,
    country_code: "RU",
    email: email,
    phone: "123123123",
    password: password,
    confirmed_password: password,
    create_account: "Create Account"
  };

  console.log("Registering new user: ", formData);
  await req.post("http://ip-5236.sunline.net.ua:38015/create_account", {
    form: formData
  });

  return { email: email, password: password };
}

export function createNewUser(): any {
  let res = browser.call(createNewUserAsync);
  return res;
}
