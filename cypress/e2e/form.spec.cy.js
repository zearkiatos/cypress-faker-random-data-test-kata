import { faker } from "@faker-js/faker";
describe(`Filling example form`, function () {
  it(`Visits jotform and fills an example form`, function () {
    cy.visit("https://form.jotform.com/201874033274654");
    cy.get("#first_3").scrollIntoView().focus().type(faker.name.firstName());
    cy.get("#last_3").scrollIntoView().focus().type(faker.name.lastName());
    cy.get("#input_4_addr_line1")
      .scrollIntoView()
      .focus()
      .type(faker.address.streetAddress());
    cy.get("#input_4_addr_line2")
      .scrollIntoView()
      .focus()
      .type(faker.address.secondaryAddress());
    cy.get("#input_4_city").scrollIntoView().focus().type(faker.address.city());
    cy.get("#input_4_state")
      .scrollIntoView()
      .focus()
      .type(faker.address.state());
    cy.get("#input_4_postal")
      .scrollIntoView()
      .focus()
      .type(faker.address.zipCode());
    cy.get("#input_5_full")
      .scrollIntoView()
      .focus()
      .type(faker.phone.number());
    cy.get("#input_15")
      .scrollIntoView()
      .focus()
      .type(faker.company.name());
    cy.get("#input_16").scrollIntoView().focus().type(faker.name.jobTitle());
    cy.get("#input_6").scrollIntoView().focus().type(faker.internet.email());
    cy.get("#input_8").scrollIntoView().focus().select("Newspaper");
    cy.get("#input_11").scrollIntoView().focus().type(faker.lorem.paragraph());
    cy.get("#input_12").scrollIntoView().focus().type(faker.lorem.paragraph());
    cy.get("#input_13_0").scrollIntoView().focus().click({ force: true });
    cy.get("#input_14_0_0")
      .scrollIntoView()
      .focus()
      .type(faker.name.firstName() + faker.name.lastName());
    cy.get("#input_14_0_1")
      .scrollIntoView()
      .focus()
      .type(faker.address.streetAddress());
    cy.get("#input_14_0_2")
      .scrollIntoView()
      .focus()
      .type(faker.phone.number());
    cy.get("#input_14_1_0")
      .scrollIntoView()
      .focus()
      .type(faker.name.firstName() + faker.name.lastName());
    cy.get("#input_14_1_1")
      .scrollIntoView()
      .focus()
      .type(faker.address.streetAddress());
    cy.get("#input_14_1_2")
      .scrollIntoView()
      .focus()
      .type(faker.phone.number());
    cy.get("#input_2").click();
    cy.wait(1000);
  });
});
