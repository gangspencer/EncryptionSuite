(function(){
	angular.module("App").controller("HomeController", HomeController);

	function HomeController(){

		var vm = this;

		//Function

		//Models
		vm.sampleFiles = [
			{
				FileName: 'sample0.txt',
				FileSize: '1000 bytes',
				FileExtension: '.txt',
				FileCreationDate: 'Sql Date'
			},
			{
				FileName: 'sample1.png',
				FileSize: '1000 bytes',
				FileExtension: '.png',
				FileCreationDate: 'Sql Date'
			},
			{
				FileName: 'sample3.c',
				FileSize: '1000 bytes',
				FileExtension: '.c',
				FileCreationDate: 'Sql Date'
			},
			{
				FileName: 'sample04.java',
				FileSize: '1000 bytes',
				FileExtension: '.java',
				FileCreationDate: 'Sql Date'
			},
			{
				FileName: 'sample5.cs',
				FileSize: '1000 bytes',
				FileExtension: '.cs',
				FileCreationDate: 'Sql Date'
			},
			{
				FileName: 'sample6.docx',
				FileSize: '1000 bytes',
				FileExtension: '.docx',
				FileCreationDate: 'Sql Date'
			}
		];

	}


})();