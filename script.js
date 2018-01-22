var app=angular.module("myApp",[]);
app.controller("empCntrl",function($scope){
    $scope.showtable=false;
    $scope.employees=[];
    $scope.title="AngularJS Certification Project";
    $scope.addemployee=function(){
        $scope.showtable=true;
		$scope.empdetails={
			ename:$scope.name,
			eage:$scope.age,
			edesignation:$scope.designation,
			esalary:$scope.salary
		};
		$scope.employees.push($scope.empdetails);
  }
  $scope.assign=function(){
	  $scope.leadname="Brend";
	  $scope.leadage=32;
	  $scope.leaddesignation="Team Lead";
	  $scope.leadsalary=40000;
  }
});
