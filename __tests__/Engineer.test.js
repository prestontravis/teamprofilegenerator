const Engineer = require('..lib/Engineer.js');

// Test the Engineer class
describe('Engineer', () => {
  // Test the instantiation of Engineer
  describe('Initialization', () => {
    it('should create an object with name, id, email, and github properties', () => {
      const engineer = new Engineer('John Doe', 123, 'john.doe@example.com', 'johndoe');

      expect(engineer).toEqual(expect.any(Object));
      expect(engineer.name).toEqual('John Doe');
      expect(engineer.id).toEqual(123);
      expect(engineer.email).toEqual('john.doe@example.com');
      expect(engineer.github).toEqual('johndoe');
    });
  });

  // Test the getGithub() method
  describe('getGithub', () => {
    it('should return the GitHub username of the engineer', () => {
      const engineer = new Engineer('John Doe', 123, 'john.doe@example.com', 'johndoe');

      expect(engineer.getGithub()).toEqual('johndoe');
    });
  });

  // Test the getRole() method
  describe('getRole', () => {
    it('should return "Engineer" as the role', () => {
      const engineer = new Engineer('John Doe', 123, 'john.doe@example.com', 'johndoe');

      expect(engineer.getRole()).toEqual('Engineer');
    });
  });
});
