app.controller("dispCtrl",function($scope,$location,store){
		
		$scope.showmodal=function(aaa){
			document.getElementById(aaa).style.display='block';
		};

		$scope.hidemodal=function(bbb){
			document.getElementById(bbb).style.display='none';
		};

		store.ks=store.storage.getItem(100);
		//console.log("Key string in display controller "+store.ks);
		store.keyary=store.ks.split(",");
		$scope.temp1=store.ks.split(",");
		//console.log("Temp is "+$scope.temp1);

		$scope.removeIt=function(x,y)
		{
			/*store.ks=store.storage.getItem(100);
			//console.log("Key string in display controller "+store.ks);
			store.keyary=store.ks.split(",");
			$scope.temp1=store.ks.split(",");
			//console.log("Temp is "+$scope.temp1);
			*/
			store.storage.removeItem(x);
			$scope.temp1.splice(y,1);
			store.keyary.splice(y,1);
			
			console.log("Array  is "+$scope.temp1);;
			alert(" Password has been removed ");
			
			store.ks=store.keyary.toString();
			$scope.temp1=store.ks.split(",");
			
			if(store.ks==null || store.keyary[0]==null)
			{
				$scope.temp1=[];
				store.keyary=[];
				store.ks="temp";
				console.log("executed condition for null ")
			}
			console.log("KEY string is "+store.ks+"   ||");
			store.storage.setItem(100,store.ks);
			$location.path("disppass"); 	
			document.getElementById('id01').style.display='none';
		};
		
		$scope.logout=function(){
			$location.path("/");
		};
		
		$scope.addmore=function(){
			$location.path("addpass");
		};
		
		$scope.dpass=function(index){
						alert("Password is "+store.decrypt(store.storage.getItem(index)));
		};
	});