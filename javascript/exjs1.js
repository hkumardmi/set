        var x = prompt('Enter Your Age ');
        if (x <= 18){
            console.log('Not elizible for Vote');
        }
        else if (x>=60) {
            console.log('you can not wait')
        }
        else{
            console.log('Register for Vote Today');
        }
       

        var x = prompt('Enter any under 3 ');
        switch(x) {
                case 1:
                    day = "monday";
                    break;
                case (2):
                    day = "Monday";
                    break;
                case 3:
                    day = "Tuesday";
                    break;
                default :
                    day =  'Today is not any day.';
                }
        console.log(day);
        
        var arr = [1,2,3,4,5,6,7,8,9];
        console.log(arr);
        for (i = 0; i < arr.length; i++) {
            console.log(arr[i])
          }
