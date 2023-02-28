const num = [44,43,56,8,9,73,98,167,7];
        
         let max = 0;
         for (i = 0; i < num.length; i++) {
             if (num[i] > max)
                 max = num[i];
         
                }

     document.getElementById("para").innerHTML = "Largest in given array is " + max; 