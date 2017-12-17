app.controller("verPinCtrl",function($scope,$location,store){
		
		$scope.verifypinfunc=function(){
            if(store.storage.getItem(9)==$scope.p && store.storage.getItem(10)==$scope.q && store.storage.getItem(11)==$scope.r && store.storage.getItem(12)==$scope.s)
			{
                alert("PIN has Verified");
				if(store.lgflag==true)
				{
					$location.path("verifytap");
				}
				else
				{
					$location.path("gettap");
				}
			}
            else
            {
                alert("Try again !!!");
				$scope.p=null;$scope.q=null;$scope.r=null;$scope.s=null;
            }      
		};
	});