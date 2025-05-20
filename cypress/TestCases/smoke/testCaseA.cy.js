

describe("http methhods testing",()=>{

    it("GET method",()=>{
        cy.request({
            method:"GET",
            url:"http://localhost:4000",
        }).then((response)=>{
            console.log(response);
            expect(response.status).to.eq(200);
            console.log(response.body);
            expect(response.body).to.equal("request received");
        });
    });

    it("POST method without body params",()=>{
        cy.request({
            method:"POST",
            url:"http://localhost:4000/status",
            body :{},
            failOnStatusCode: false
        }).then((response)=>{
            expect(response.status).to.equal(200);
            expect(response.body).to.have.property("message");
            //expect(response.body).to.property("message","Req Body was empty")
        });
    });

    it("POST method success data",()=>{
        cy.request({
            method:"POST",
            url:"http://localhost:4000/status",
            body:{
                name:"niranjan",
                age:25
            }
            
        }).then((response)=>{
            expect(response.status).to.equal(200);
            expect(response.body).to.have.property("message","Req received")
            expect(response.body).to.have.property("data",{
                name:"niranjan",
                age:25
            });
        });
    });
})