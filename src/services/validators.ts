type successValidation = {status:true}
type errorValidation = {status:false, errorMessage: string}

const titleValidator =(title:string): successValidation | errorValidation=>{
	if(!title.trim()){
		return {status:false,errorMessage:"Field must to be filled..."}
	} else if(title.length > 20){
		return {status:false,errorMessage:"Max length is 20..."}
	}else {
		return {status:true}
	}
}
export  {
	titleValidator
}