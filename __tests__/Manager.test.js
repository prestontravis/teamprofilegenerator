const Manager = require('..lib/Manager.js');

// Test the Manager class
describe('Manager', () => {
  // Test the instantiation of Manager
  describe('Initialization', () => {
    it('should create an object with name, id, email, and officeNumber properties', () => {
      const manager = new Manager('John Doe', 123, 'john.doe@example.com', 101);

      expect(manager).toEqual(expect.any(Object));
      expect(manager.name).toEqual('John Doe');
      expect(manager.id).toEqual(123);
      expect(manager.email).toEqual('john.doe@example.com');
      expect(manager.officeNumber).toEqual(101);
    });
  });

  // Test the getOfficeNumber() method
  describe('getOfficeNumber', () => {
    it('should return the office number of the manager', () => {
      const manager = new Manager('John Doe', 123, 'john.doe@example.com', 101);

      expect(manager.getOfficeNumber()).toEqual(101);
    });
  });

  // Test the getRole() method
  describe('getRole', () => {
    it('should return "Manager" as the role', () => {
      const manager = new Manager('John Doe', 123, 'john.doe@example.com', 101);

      expect(manager.getRole()).toEqual('Manager');
    });
  });
});
