(function(){
	angular.module("App").controller("NavbarController", NavbarController);

	function NavbarController(){
		var vm = this;

		//Models
		vm.open = false;

		//Functions
		vm.openNav = openNav;


		function openNav(){
			console.log("open");
			vm.open = true;
		}

		function closeNav(){
			vm.open = false;
		}

	}
})();