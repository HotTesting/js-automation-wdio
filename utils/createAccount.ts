import * as request from "request-promise-native";
import * as faker from "faker";

async function createNewUserAsync() {
  const regex = /<input type="hidden" name="token" value="(.*)"/gm;
  let tokenHTML = await request.get(
    "http://ip-5236.sunline.net.ua:38015/create_account"
  );
  let a = regex.exec(tokenHTML);
  console.log("TOKEN", a[1]);
  let token = a[1];

  const email = faker.internet.email(
    undefined,
    undefined,
    "ip-5236.sunline.net.ua"
  );
  const password = "123456";
  console.log("EMAIL", email);
  await request.post("http://ip-5236.sunline.net.ua:38015/create_account", {
    form: {
      token: token,
      company: "",
      tax_id: "",
      firstname: "test",
      lastname: "test",
      address1: "",
      address2: "",
      postcode: "",
      city: "",
      country_code: "RU",
      email: email,
      phone: "12839129384",
      password: password,
      confirmed_password: password,
      create_account: "Create Account"
    }
  });

  return { email: email, password: password };
}

export function createNewUser(): any {
  let res = browser.call(createNewUserAsync);
  console.log(res);
  return res;
}
