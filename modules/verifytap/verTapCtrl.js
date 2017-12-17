app.controller("verTapCtrl",function($scope,$location,store){
		
		$scope.v1=0;$scope.v2=0;$scope.v3=0;$scope.v4=0;
		
		$scope.verifytapfunc=function(){
            if(store.storage.getItem(1)==$scope.v1 && store.storage.getItem(2)==$scope.v2 && store.storage.getItem(3)==$scope.v3 && store.storage.getItem(4)==$scope.v4)
			{
                alert(" Verified !");
				$location.path("addpass");
			}
            else{
           		alert("Please try again");
				$scope.v1=null;$scope.v2=null;$scope.v3=null;$scope.v4=null;
            }      
		};
});