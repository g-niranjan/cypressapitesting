describe("http methhods testing", () => {
  it("GET method", () => {
    cy.request({
      method: "GET",
      url: "http://localhost:4000",
    }).then((response) => {
      console.log(response);
      expect(response.status).to.eq(200);
      console.log(response.body);
      expect(response.body).to.equal("request received");
    });
  });

  it("POST method without body params", () => {
    cy.request({
      method: "POST",
      url: "http://localhost:4000/status",
      body: {},
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(200);
      console.log(response.body);
      expect(response.body).to.have.property("message", "Req Body was empty");
      //expect(response.body).to.property("message","Req Body was empty")
    });
  });

  it("POST method success data", () => {
    cy.request({
      method: "POST",
      url: "http://localhost:4000/status",
      body: {
        name: "niranjan",
        age: 25,
      },
    }).then((response) => {
      expect(response.status).to.equal(200);
      //expect(response.body).to.have.property("message", "Req received");
      expect(response.body.data).to.deep.eq({
        name: "niranjan",
        age: 25,
        id: 1
      });
    });
  });

  //? POST metthos with hard coded data

  it("Hard code data", () => {
    const requestData = {
      name: "niranjan",
      age: 25,
    };
    cy.request({
      method: "POST",
      url: "http://localhost:4000/status",
      body: requestData,
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.data).to.have.property("name", requestData.name);
      expect(response.body.data).to.have.property("age", requestData.age);
    });
  });

  //? Dynamic data generation through JS
  //? Math.random() - generates a random number between 0 and 1
  //? Math.random().toString(10) - converts the number to a string in base 10
  //? Math.random().toString(10).substring(2) - removes the "0." from the start of the string
  //? Math.floor(Math.random() * 100) - generates a random number between 0 and 99

  it("Dynamic data", () => {
    const requestData = {
      name: Math.random().toString(10).substring(2),
      age: Math.floor(Math.random() * 100),
    };
    cy.request({
      method: "POST",
      url: "http://localhost:4000/status",
      body: requestData,
    }).then((response) => {
      expect(response.status).to.equal(200);
      console.log(response.body);
      expect(response.body.data).to.have.property("name", requestData.name);
      expect(response.body.data).to.have.property("age", requestData.age);
    });
  });

  it("Data fetched from the fixtures", () => {
    cy.fixture("example").then((data) => {
      cy.request({
        method: "POST",
        url: "http://localhost:4000/status",
        body: data,
      }).then((response) => {
        expect(response.status).to.equal(200);
        console.log(response.body);
        expect(response.body.data).to.have.property("name", data.name);
        expect(response.body.data).to.have.property("age", data.age);
      });
    });
  });
});
