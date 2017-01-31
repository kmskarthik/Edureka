(function(){
 angular
	.module('app.employee', [])
	.controller('EmployeeCtrl', ControllerFunction);
	
  ControllerFunction.$inject = [];
	
 function ControllerFunction(){
	var vm = this;
	console.log("Controller");
	vm.isFormSubmit = false;
	vm.employees = [];
	
	vm.add = add;
	vm.assign = assign;
	vm.clear = clear;
	
	var newEmployee = { name:"Brend", age: 32, designation: "Team Lead", salary: 45000};
	
	function add() {
	console.log("Add Controller");
			if (vm.addEmployeeForm.$valid) {
				vm.employees.push(vm.emp);
				vm.emp = {};
				vm.isFormSubmit = false;
			} else {
				vm.isFormSubmit = true;
			}

	}
	
	function assign() {
		
		vm.newEmp = newEmployee;
	}
	
	function clear() {
		
		vm.newEmp = {};
	}
	 
}}
)();