let request = require("request-promise-native");
let faker = require("faker");

async function createNewUserAsync() {
  const regex = /<input type="hidden" name="token" value="(.*)"/gm;
  const j = request.jar();
  request = request.defaults({ jar: j, resolveWithFullResponse: true });
  let tokenResponse = await request.get(
    "http://ip-5236.sunline.net.ua:38015/create_account"
  );
  let a = regex.exec(tokenResponse.body);
  console.log("TOKEN", a[1]);
  let token = a[1];

  const email = faker.internet.email("test", "test", "ip-5236.sunline.net.ua");
  const password = "123456";
  console.log("EMAIL", email);

  const formData = {
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
  };
  await request.post("http://ip-5236.sunline.net.ua:38015/create_account", {
    form: formData
  });

  return { email: email, password: password };
}
let creds = createNewUserAsync();
console.log(creds);
