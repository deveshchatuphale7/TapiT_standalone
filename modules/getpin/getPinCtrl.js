app.controller("getPinCtrl",function($scope,$location,store){
	
	    $scope.getpinfunc=function(){
			
            if($scope.a==undefined && $scope.b==undefined && $scope.c==undefined && $scope.d==undefined){
                alert(" PIN has not set" );
				$location.path("getpin");
            }
            else{
            	store.storage.setItem(9,$scope.a);
            	store.storage.setItem(10,$scope.b);
            	store.storage.setItem(11,$scope.c);
            	store.storage.setItem(12,$scope.d);
				$location.path("verifypin");
            }
		};	
	});