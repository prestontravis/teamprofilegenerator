const Intern = require('lib/Intern.js');

// Test the Intern class
describe('Intern', () => {
  // Test the instantiation of Intern
  describe('Initialization', () => {
    it('should create an object with name, id, email, and school properties', () => {
      const intern = new Intern('Jane Smith', 456, 'jane.smith@example.com', 'University of Example');

      expect(intern).toEqual(expect.any(Object));
      expect(intern.name).toEqual('Jane Smith');
      expect(intern.id).toEqual(456);
      expect(intern.email).toEqual('jane.smith@example.com');
      expect(intern.school).toEqual('University of Example');
    });
  });

  // Test the getSchool() method
  describe('getSchool', () => {
    it('should return the school name of the intern', () => {
      const intern = new Intern('Jane Smith', 456, 'jane.smith@example.com', 'University of Example');

      expect(intern.getSchool()).toEqual('University of Example');
    });
  });

  // Test the getRole() method
  describe('getRole', () => {
    it('should return "Intern" as the role', () => {
      const intern = new Intern('Jane Smith', 456, 'jane.smith@example.com', 'University of Example');

      expect(intern.getRole()).toEqual('Intern');
    });
  });
});
