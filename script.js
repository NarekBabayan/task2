const myFoo =(n)=> {
 
    if(n>=1 && typeof n == "number" && !(isNaN(n)) ){
        let quantity=0;
        for(let num = 2; ; num++){

            let q=0;
            for(let i = 1; i<=num; i++) {

                if(num%i===0){
                    q++;
                }
            }

            if(q===2){
                quantity++;
            }

            if(quantity===n){
                console.log(num);
                break;
            }
        }
    }else {
      console.log("write the natural number, which is greater  or equal to one.");
    }
  
}

myFoo(12);
