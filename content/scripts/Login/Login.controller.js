(function(){

	LoginController.$inject = ["$window"];

	angular.module("App").controller("LoginController", LoginController);

	function LoginController($window){
		var vm = this;

		vm.login = login;

		function login(){ //TODO db validation for users
			if(vm.user == "Devs" && vm.pass == "Admin"){
				$window.location.href = "Home.html";
			} else {
				alert("Invalid login, please try again")
			}
		}
	}
})();