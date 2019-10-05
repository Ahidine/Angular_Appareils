 export class AuthService{
 	isAuth=false;
 	Connecter(){
 		return new Promise( 
 			(resolve,reject)=>{
 				setTimeout(
 					()=>{
 						this.isAuth=true;
 						resolve(true);
 					},2000
 					);

 			}
 			);
 	}
 	deconnecter()
 	{
 		this.isAuth=false;
 } 	}
