  /// <reference types = "cypress"/>

  describe('GitHub Login', () => {
    it('should login to GitHub', () => {
      // Visit the GitHub login page
      cy.visit('https://github.com/login');
        // Enter username
        cy.get('#login_field').type('niranjan.g@isteer.com'); // Replace with your GitHub username  
        // Enter password
        cy.get('#password').type('Sterling$2118'); // Replace with your GitHub password
        // Click the login button
        cy.get('input[name="commit"]').click(); 
        // Verify that the login was successful by checking the URL
        cy.url().should('include', '/github.com');  
        // Verify that the user is logged in by checking for the presence of the profile icon
       // cy.get('.Header-link').contains('niranjan-g').should('be.visible'); // Replace with your GitHub username
        // Optionally, you can also check for the presence of the "Sign out" button
       //cy.get('button[aria-label="Sign out"]').should('be.visible');

       //cy.get('.AppHeader-user').should('image');
    }
    );      
    }
    );
