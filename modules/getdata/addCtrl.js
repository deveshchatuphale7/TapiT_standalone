app.controller("addCtrl",function($scope,$location,store){
		$scope.logout=function(){
			$location.path("/");
		};
		$scope.adddata=function()
		{
			store.ks=store.storage.getItem(100);
			console.log("Key string in add controller   "+ store.ks);
			if($scope.key==null || $scope.pass==null || ($scope.key==null && $scope.pass==null))
				alert(" Please enter valid data ");
			else
			{
				if(store.ks!=undefined)
				{
					store.keyary=store.ks.split(",");
					console.log(store.keyary.length);
				}
				else
				{
					store.keyary=[];
				}
				store.keyary[store.keyary.length]=$scope.key;
				store.encrypt($scope.key,$scope.pass);
				store.ks=store.keyary.toString();
				store.storage.setItem(100,store.ks);
				alert("Data added !");
				$scope.key=null;
				$scope.pass=null;	
			}
		};	
	
			store.keyary.splice(0,1);
		$scope.todisp=function()
		{	

			store.ks=store.storage.getItem(100);
			if(store.ks!=null)
			{
				store.keyary=store.ks.split(",");
			}
			console.log("todisp Fucntion | Keys are ",store.ks);
			if(store.ks===null || store.ks===undefined || store.ks=="temp")
			{
				alert("No records to display");
			}
			else if(store.keyary[0]==null || store.keyary[0]==undefined)
			{
				store.keyary=[];
			}
			else{
				if(store.keyary[0]=="temp")
				{
					store.keyary.splice(0,1);
					store.ks=store.keyary.toString();
					store.storage.setItem(100,store.ks);
				}
				$location.path("disppass");
			}
				
		};	
	});