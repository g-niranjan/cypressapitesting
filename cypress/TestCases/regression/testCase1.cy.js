 describe("http methos testing", () => {
    it("GET method", () => {
        cy.request({
            method: "GET",
            url: "https://jsonplaceholder.typicode.com/posts/1",
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property("id", 1);
            });
        });

    it("POST method", () => {
        cy.request({
            method: "POST",
            url: "https://jsonplaceholder.typicode.com/posts",
            body: {
                title: "foo",
                body: "bar",
                userId: 1,
            },
        }).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body).to.have.property("title", "foo");
        });
    });
});