app.service('store', function() {
		this.storage=window.localStorage;
		this.lgflag=false;
		this.keyary=[];
		this.ks;

		this.encryptedpwd;
		this.decryptedpwd;
		this.key4ED="Whitehouse";

		this.encrypt= function(categorykey,pwd){
			console.log("KEy	",categorykey);
			console.log("Pwd	",pwd);
			this.encryptedpwd = CryptoJS.AES.encrypt(pwd,this.key4ED);
			//encrypt ped using key4ED
			var x=this.encryptedpwd;
			var seen=[];
			var obbb;
			console.log("This.encrypted ",x);
			var y =x.toString();
			console.log("To string	",y);
			console.log("Back to object	",JSON.stringify(x, function(key, val) {
   					if (val != null && typeof val == "object") {
        			if (seen.indexOf(val) >= 0) {
            			return;
        			}
        				seen.push(val);
    				}
    				return val;
						}));
						
						
						
			this.tobobj=function(arr) {
				var rv = {};
					for (var i = 0; i < arr.length; ++i)
					rv[i] = arr[i];
					return rv;
}
						
						
						
						
					
			//console.log("Testtttttttttt the object is ",JSON.stringify(obbb));
						console.log("objject is ",seen);
						var ttt=this.tobobj(seen);
						console.log("**************",this.tobobj(seen));
						console.log("Decrypted pass is ",CryptoJS.AES.decrypt(ttt,this.key4ED).toString(CryptoJS.enc.Utf8));
			this.storage.setItem(categorykey,this.encryptedpwd); //store encr
		}

		this.decrypt= function(encrptpwd){

			this.decryptedpwd = CryptoJS.AES.decrypt(encrptpwd,this.key4ED);
			console.log("Decrypted  ",this.decryptedpwd);

			return this.decryptedpwd.toString(CryptoJS.enc.Utf8);// converts to string and returns it
		}
	});
