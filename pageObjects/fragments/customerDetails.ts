import { Input } from "./input";
import { Dropdown } from "./dropdown";

export class CustomerDetails {
  protected containerLocator: string;
  protected get container() {
    return $(this.containerLocator);
  }
  protected lastName: Input = new Input(() => {
    return this.container.$('input[name="lastname"]');
  });
  protected firstName: Input = new Input(() => {
    return this.container.$('input[name="firstname"]');
  });
  protected phone: Input = new Input(() => {
    return this.container.$('input[name="phone"]');
  });
  protected city: Input = new Input(() => {
    return this.container.$('input[name="city"]');
  });
  protected email: Input = new Input(() => {
    return this.container.$('input[name="email"]');
  });
  protected postCode: Input = new Input(() => {
    return this.container.$('input[name="postcode"]');
  });
  protected address1: Input = new Input(() => {
    return this.container.$('input[name="address1"]');
  });
  protected address2: Input = new Input(() => {
    return this.container.$('input[name="address2"]');
  });
  protected taxID: Input = new Input(() => {
    return this.container.$('input[name="tax_id"]');
  });
  protected company: Input = new Input(() => {
    return this.container.$('input[name="company"]');
  });
  protected country: Dropdown = new Dropdown(() => {
    return this.container.$('select[name="country_code"]');
  });
  protected state: Dropdown = new Dropdown(() => {
    return this.container.$('select[name="zone_code"]');
  });

  constructor(containerLocator: string) {
    this.containerLocator = containerLocator;
  }

  enterCustomerDetails(customerDetails: ICustomerDetails): any {
    $(".loader-wrapper").waitForDisplayed(undefined, true); // invisibility of loader
    this.firstName.type(customerDetails.firstName);
    this.lastName.type(customerDetails.lastName);
    this.phone.type(customerDetails.phone);
    this.city.type(customerDetails.city);
    this.email.type(customerDetails.email);
    this.postCode.type(customerDetails.postCode);
    this.address1.type(customerDetails.address1);
    this.address2.type(customerDetails.address2);

    // Optional fields
    if (customerDetails.country) {
      this.country.selectByValueAttribute(customerDetails.country);
    }

    if (customerDetails.company) {
      this.company.type(customerDetails.company);
    }

    if (customerDetails.taxID) {
      this.taxID.type(customerDetails.taxID);
    }

    if (customerDetails.state) {
      this.state.selectByValueAttribute(customerDetails.state);
    }
  }
}

export interface ICustomerDetails {
  firstName: string;
  lastName: string;
  address1: string;
  address2: string;
  postCode: string;
  city: string;
  email: string;
  phone: string;
  company?: string;
  taxID?: string;
  country?: string; // TODO: For now only value attribute supported (to work with dropdown)
  state?: string; // TODO: For now only value attribute supported (to work with dropdown)
}
