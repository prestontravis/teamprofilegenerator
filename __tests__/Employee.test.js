const Employee = require('..lib/Employee.js');

// Test the Employee class
describe('Employee', () => {
  // Test the instantiation of Employee
  describe('Initialization', () => {
    it('should create an object with name, id, and email properties', () => {
      const employee = new Employee('John Doe', 123, 'john.doe@example.com');

      expect(employee).toEqual(expect.any(Object));
      expect(employee.name).toEqual('John Doe');
      expect(employee.id).toEqual(123);
      expect(employee.email).toEqual('john.doe@example.com');
    });
  });

  // Test the getName() method
  describe('getName', () => {
    it('should return the name of the employee', () => {
      const employee = new Employee('John Doe', 123, 'john.doe@example.com');

      expect(employee.getName()).toEqual('John Doe');
    });
  });

  // Test the getId() method
  describe('getId', () => {
    it('should return the ID of the employee', () => {
      const employee = new Employee('John Doe', 123, 'john.doe@example.com');

      expect(employee.getId()).toEqual(123);
    });
  });

  // Test the getEmail() method
  describe('getEmail', () => {
    it('should return the email of the employee', () => {
      const employee = new Employee('John Doe', 123, 'john.doe@example.com');

      expect(employee.getEmail()).toEqual('john.doe@example.com');
    });
  });

  // Test the getRole() method
  describe('getRole', () => {
    it('should return "Employee" as the role', () => {
      const employee = new Employee('John Doe', 123, 'john.doe@example.com');

      expect(employee.getRole()).toEqual('Employee');
    });
  });
});
