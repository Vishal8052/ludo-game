//HOME ->Final goal ie cell-count =28
//In updated version, same cell removal has been removed. Means A1 and B2 can be on the same cell

//Number of coins in locker
var glob;
var coinA=2;
var coinB=2;


//Number of cells travelled by each coin
var	count_A1=1;
var count_A2=1;
var count_B1=1;
var count_B2=1;

//Number of coins in home(Finish cell)
var homeA=0;
var homeB=0;


//Copy varaibles
var copy;
var copy2;
var copy3;
var copy4;
var copy5;
var copy6;

//Variable to store dice output
var ran=0;

//Count of total number of movements....To be used to determine who will play using even and odd formula
var count=1;



//To stop playing the sound
var image="./images/dice.gif";
function close()
{
	document.getElementById("myAudio").pause();
}


//Function to display images and animations
function ROLL()
{ 
	ran=Math.floor(Math.random()*6)+1;
	var slid=document.getElementById("dic");
	slid.src=image;
	document.getElementById("myAudio").play();
    setTimeout(close,1500);//time of dice roll
	document.getElementById("roll1").disabled = true;
    var delayInMilliseconds = 1500; //time of delay for number
	setTimeout(function() {
  	document.getElementById("roll1").disabled = false;
 
    switch(ran){
    	case 1:slid.src="./images/1.jpg";
    	break;
    	case 2:slid.src="./images/2.jpg";
    	break;
    	case 3:slid.src="./images/3.jpg";
    	break;
    	case 4:slid.src="./images/4.jpg";
    	break;
    	case 5:slid.src="./images/5.jpg";
    	break;
    	case 6:slid.src="./images/6.jpg";
    	break;
    } 

}, delayInMilliseconds);
    
}

//B's Chance
function throw_B()
{
	//If B1 and B2 already in HOME
	if(count_B1==28 && count_B2==28){
		homeB=2;
		document.getElementById("show!").innerHTML="B WON";
		return;
	}
	
	//Get a random number
	ROLL();
   
	//If the number is 6
	if(ran==6)
	{
       //first time 6 
       if(coinB==2){
	   //Both coins are inside locker so just take out B1
       coinB=coinB-1;

	   //Simulate movement from locker to board
       document.getElementById("b1").style.opacity="0";
       document.getElementById("c15").style.backgroundColor="blue";	
	   load();
       }

	   //If only one coin is inside
       else if(coinB==1)
       {
       	  document.getElementById("roll1").disabled = true;

		  //Locker of B has been disabled so that there is an option of taking B2 out
       	  document.getElementById("lb").disabled = false;
		document.getElementById('lb').style.backgroundColor = 'blue';


		//if coin B1 is not in home then coin B1 can be moved
		 if(count_B1+ran<=28)
       	  document.getElementById("prB1").disabled = false;

		if(count_B2+ran<=28)
       	  document.getElementById("prB2").disabled = false;

       }
       else
       {
		//Both coins are outside and nothing is in locker
		
		//So close B's locker
       	document.getElementById("lb").disabled = true;  
		document.getElementById('lb').style.backgroundColor = 'rgb(69, 12, 110)';


		//Option to move B1 or B2
		//Now coin B1 and B2 are free to move manually if they have not reached in HOME
       	document.getElementById("roll1").disabled = true;


		//Enable the coins which are not in FINISH
       	if(count_B1+ran<=28){
       	  document.getElementById("prB1").disabled = false;
		}

		if(count_B2+ran<=28)
       	  document.getElementById("prB2").disabled = false;
       }
       
       
	}

	//If not 6 
	else
	{
		//disable the roller
		 document.getElementById("roll1").disabled = true;
         

		 //if both coins are locked then continue to A
         if(coinB==2){
			 count=count+1;
         	 load();}

		//if Coin B1 is outside
         else if(coinB==1)
         {
			 count=count+1;
			 //if coin B1 reaches home and B2 is still in lock then do nothing
         	if(count_B1==28 ){
				homeB=1;
				document.getElementById("prB1").disabled = true;
         		// count_B1=count_B2; //CHNGE ERR count_B1=40000; Only one coin remaining different from coinB=1
				// load();
			}

			//Continue moving B1
         	 copy=count_B1;
			 
			if(count_B1+ran<=28){
         	 count_B1=count_B1+ran;
			  


         	  setTimeout(function(){
			  
			  //Move B1
			  if(count_B1<=14 && count_B1>=2)
			  document.getElementById("c"+(count_B1+14)).style.backgroundColor="blue";
			  else if(count_B1<=28)
			  document.getElementById("c"+(count_B1-14)).style.backgroundColor="blue";
	

			  if(count_B1==28)
			  {
				  //ERR B1 in home;
				homeB=1;
				document.getElementById("prB1").disabled = true;
				
				// load();
			  }


			 //Remove the previous cell colour to simulate movement
			 if(copy<=14)
			 document.getElementById("c"+(copy+14)).style.backgroundColor="violet";
			 else if(copy<=27)
			 document.getElementById("c"+(copy-14)).style.backgroundColor="violet";


    // //Remove by capturing A's coin
    // if(count_B1<=count_A1){
    //     if((count_B1+14==count_A1) && count_A1!=28)
    // 	{
    // 		 document.getElementById("a1").style.opacity="1";
    // 		 coinA=coinA+1;
    // 		 count_A1=1;
    // 		  document.getElementById("prA1").disabled = true;
    // 	}
    //    }
    //    if(count_B1<=count_A2)
    //    {
    //    	 if( count_B1+14==count_A2 && count_A2!=28)
    // 	{
    // 		 document.getElementById("a1").style.opacity="1";
    // 		 coinA=coinA+1;
    // 		 count_A2=1;
    // 		  document.getElementById("prA2").disabled = true;
    // 	}
    //    }
    //    else if(count_B1>count_A1)
    //    {
    //    	  if(count_B1-14==count_A1)
    // 	{
    // 		 document.getElementById("a1").style.opacity="1";
    // 		 coinA=coinA+1;
    // 		 count_A1=1;
    // 		  document.getElementById("prA1").disabled = true;
    // 	}
    //    }
    //    else if(count_B1>count_A2)
    //    {
    //    	 if( count_B1-14==count_A2 )
    // 	{
    // 		 document.getElementById("a1").style.opacity="1";
    // 		 coinA=coinA+1;
    // 		 count_A2=1;
    // 		  document.getElementById("prA2").disabled = true;
    // 	}
    //    }

         	},1500)}
         	load();
         }

		 //if both coins are outside
          else if(coinB==0)
         {
			
			 if(homeB==0)
			 {
			
         	    document.getElementById("roll1").disabled = true;
				if(count_B1+ran<=28)
             	document.getElementById("prB1").disabled = false;
				if(count_B2+ran<=28)
              	document.getElementById("prB2").disabled = false;
			    //  console.log("bhaiA");
				// load();
				if(count_B1+ran>28 && count_B2+ran>28 )
				{
					count=count+1;
					load();
				}
				
			}
			//if B1 is in home
			else if(homeB==1)
			{
					count=count+1;
					//Continue moving B2
					copy=count_B2;
					
					if(count_B2+ran<=28){
					count_B2=count_B2+ran;
					


					setTimeout(function(){
					
					//Move B2
					if(count_B2<=14)
					document.getElementById("c"+(count_B2+14)).style.backgroundColor="blue";
					else if(count_B2<=28)
					document.getElementById("c"+(count_B2-14)).style.backgroundColor="blue";
					

					if(count_B2==28 && count_B1==28)
					{
						homeB=2;
						document.getElementById("prB2").disabled = true;
						document.getElementById("show!").innerHTML="B WON";
						return;
					}


					//Remove the previous cell colour to simulate movement
					if(copy<=14)
					document.getElementById("c"+(copy+14)).style.backgroundColor="violet";
					else if(copy<=27)
					document.getElementById("c"+(copy-14)).style.backgroundColor="violet";


			// //Remove by capturing A's coin
			// if(count_B1<=count_A1){
			//     if((count_B1+14==count_A1) && count_A1!=28)
			// 	{
			// 		 document.getElementById("a1").style.opacity="1";
			// 		 coinA=coinA+1;
			// 		 count_A1=1;
			// 		  document.getElementById("prA1").disabled = true;
			// 	}
			//    }
			//    if(count_B1<=count_A2)
			//    {
			//    	 if( count_B1+14==count_A2 && count_A2!=28)
			// 	{
			// 		 document.getElementById("a1").style.opacity="1";
			// 		 coinA=coinA+1;
			// 		 count_A2=1;
			// 		  document.getElementById("prA2").disabled = true;
			// 	}
			//    }
			//    else if(count_B1>count_A1)
			//    {
			//    	  if(count_B1-14==count_A1)
			// 	{
			// 		 document.getElementById("a1").style.opacity="1";
			// 		 coinA=coinA+1;
			// 		 count_A1=1;
			// 		  document.getElementById("prA1").disabled = true;
			// 	}
			//    }
			//    else if(count_B1>count_A2)
			//    {
			//    	 if( count_B1-14==count_A2 )
			// 	{
			// 		 document.getElementById("a1").style.opacity="1";
			// 		 coinA=coinA+1;
			// 		 count_A2=1;
			// 		  document.getElementById("prA2").disabled = true;
			// 	}
			//    }

					},1500)
					// load();
				}
				load();
			}
			//Both are in home
			else
			{
						document.getElementById("prB2").disabled = true;
						document.getElementById("show!").innerHTML="B WON";
						return;
			}
		}
				//throw_A();
		// load();
	}
	

}


//A's chance
function throw_A()
{
	if((count_A1==28 && count_A2==28)){
		homeA=2;
		document.getElementById("show!").innerHTML="A WON";
		return;
	}
	if(count%2==0)
	{
	    throw_B();
	    return;
	}

	ROLL();


	if(ran==6)
	{
      //
       if(coinA==2)
       {
       coinA=coinA-1;
       document.getElementById("a1").style.opacity="0";
       document.getElementById("c1").style.backgroundColor="yellow";
	   load();
       }
       else if(coinA==1)
       {
		  document.getElementById("roll1").disabled = true;
       	  document.getElementById("la").disabled = false;
		  document.getElementById('la').style.backgroundColor = 'orange';
		  if((count_A1+ran)<=28)
       	  document.getElementById("prA1").disabled = false;
		 if((count_A2+ran)<=28)
       	  document.getElementById("prA2").disabled = false;
       }
       else 
       {
       	document.getElementById("la").disabled = true;
		document.getElementById('la').style.backgroundColor = 'rgb(69, 12, 110)';

       	document.getElementById("roll1").disabled = true;
       	if((count_A1+ran)<=28){
       	document.getElementById("prA1").disabled = false;
	    }   
	    if((count_A2+ran)<=28)
       	document.getElementById("prA2").disabled = false;
       } 
	}
	else
	{
		document.getElementById("roll1").disabled = true;
         
        if(coinA==2){
			 count=count+1;
         	 load();}
        else if(coinA==1)
         {
			  count=count+1;
         	if(count_A1==28)
			{
				document.getElementById("prA1").disabled = true;
				homeA=1;
				// count_A1=count_A2;  //ERR
				// load();
			}

       	     copy2=count_A1;
			 if(count_A1+ran<=28)
			 {
         	  count_A1=count_A1+ran;
			
			 
         	setTimeout(function(){

			if(count_A1>1 && count_A1<=28)
			document.getElementById("c"+count_A1).style.backgroundColor="yellow";
			if(copy2>=1 && copy2<=27)
			 document.getElementById("c"+copy2).style.backgroundColor="violet";

			if(count_A1==28)
			{
				//ERR A1 in home
				homeA=1;
				document.getElementById("prA1").disabled = true;
			}

			 
			 
         
        //  	if(count_A1<=count_B1){
        //  	   	if(count_A1+14==count_B1 && count_B1!=28)
		// 		{
		// 			document.getElementById("b1").style.opacity="1";
		// 			coinB=coinB+1;
		// 			count_B1=1;
		// 			document.getElementById("prB1").disabled = true;
		// 		}
        //     }
        //    else if(count_A1>=count_B1)
        //     {
        //     if(count_A1-14==count_B1)
    	//     {
    	// 	 document.getElementById("b1").style.opacity="1";
    	// 	 coinB=coinB+1;
    	// 	 count_B1=1;
    	// 	  document.getElementById("prB1").disabled = true;
    	//     }
        //     }
        //     if(count_A1<=count_B2)
        //     {
        //     	if(count_A1+14==count_B2  && count_B2!=28)
        //     	{
        //     		document.getElementById("b1").style.opacity="1";
    	// 	        coinB=coinB+1;
        //             count_B2=1;
        //              document.getElementById("prB2").disabled = true;
        //     	}
        //     }
        //     else if(count_A1>=count_B2)
        //     {
        //     	if(count_A1-14==count_B2 )
        //     	{
        //     		document.getElementById("b1").style.opacity="1";
    	// 	        coinB=coinB+1;
    	// 	        count_B2=1;
    	// 	         document.getElementById("prB2").disabled = true;
        //     	}
        //     }
        	 },1500);
			 
			}         	
         	load();
         }
         else if(coinA==0)
         {
			//  console.log("2 ASSSSSSSSSSSSSSSSSSSS");

			 if(homeA==0){
			//  console.log("2 ASSSSSSSSSSSSSSSSSSSS");

         	 	document.getElementById("roll1").disabled = true;
				  if(count_A1+ran<=28){
             	document.getElementById("prA1").disabled = false;
				//  console.log(count_A1);
			}
				  if(count_A2+ran<=28){
              	document.getElementById("prA2").disabled = false;
				//  console.log(count_A1);
			    
			}

			if(count_A1+ran>28 && count_A2+ran>28 )
				{
					count=count+1;
					load();
				}
			    //  load();
				 
				}
			 else if(homeA==1)
			 {
				  count=count+1;
				  copy2=count_A2;
				  if(count_A2+ran<=28)
					{
					count_A2=count_A2+ran;
					
					
					setTimeout(function(){

					if(count_A2>1 && count_A2<=28)
					document.getElementById("c"+count_A2).style.backgroundColor="yellow";
					if(count_A2==28 && count_A1==28)
					{
						homeA=2;
						document.getElementById("prA2").disabled = true;
						//ERR A WINS
						document.getElementById("show!").innerHTML="A WON";
						return;
					}

					if(copy2>=1 && copy2<=27)
					document.getElementById("c"+copy2).style.backgroundColor="violet";
					
				
					//  	if(count_A1<=count_B1){
					//  	   	if(count_A1+14==count_B1 && count_B1!=28)
					// 		{
					// 			document.getElementById("b1").style.opacity="1";
					// 			coinB=coinB+1;
					// 			count_B1=1;
					// 			document.getElementById("prB1").disabled = true;
					// 		}
					//     }
					//    else if(count_A1>=count_B1)
					//     {
					//     if(count_A1-14==count_B1)
					//     {
					// 	 document.getElementById("b1").style.opacity="1";
					// 	 coinB=coinB+1;
					// 	 count_B1=1;
					// 	  document.getElementById("prB1").disabled = true;
					//     }
					//     }
					//     if(count_A1<=count_B2)
					//     {
					//     	if(count_A1+14==count_B2  && count_B2!=28)
					//     	{
					//     		document.getElementById("b1").style.opacity="1";
					// 	        coinB=coinB+1;
					//             count_B2=1;
					//              document.getElementById("prB2").disabled = true;
					//     	}
					//     }
					//     else if(count_A1>=count_B2)
					//     {
					//     	if(count_A1-14==count_B2 )
					//     	{
					//     		document.getElementById("b1").style.opacity="1";
					// 	        coinB=coinB+1;
					// 	        count_B2=1;
					// 	         document.getElementById("prB2").disabled = true;
					//     	}
					//     }
					},1500);
					}         	
					load();
			 }
			 else{
				document.getElementById("prA2").disabled = true;
				//ERR A WINS
				document.getElementById("show!").innerHTML="A WON";
				return;
			 }
         }
		//throw_A();
		// load();
	}
	
	
}


//Open Locker of A
function openA()
{

	document.getElementById("c1").style.backgroundColor="yellow";
		setTimeout(function(){
	 document.getElementById("a2").style.opacity="0";
	},1500);
     coinA=coinA-1;
     document.getElementById("la").disabled = true;
	 document.getElementById('la').style.backgroundColor = 'rgb(69, 12, 110)';
	 
      document.getElementById("prA2").disabled = false;
		// document.getElementById('la').style.backgroundColor = rgb(69, 12, 110);

    //    document.getElementById("prA1").disabled = true;
        load();
}


//Open Locker of B
function openB()
{
	document.getElementById("c15").style.backgroundColor="blue";
	 setTimeout(function(){
	 document.getElementById("b2").style.opacity="0";
	},1500);
	 coinB=coinB-1;
      document.getElementById("lb").disabled = true;
	  document.getElementById('lb').style.backgroundColor = 'rgb(69, 12, 110)';

    //   document.getElementById("prB1").disabled = true;
      document.getElementById("prB2").disabled = false;
       load();
}


//Move 2nd coin of A
function moveA2()
{
	 	// document.getElementById("roll1").disabled = true;
	 	copy3=count_A2;
    	count_A2=count_A2+ran;
		if(ran!=6)
		count+=1;
    	 setTimeout(function(){

			if(count_A2>=1 && count_A2<=28)
				document.getElementById("c"+count_A2).style.backgroundColor="yellow";
			

			 if(copy3<=27)
			 document.getElementById("c"+copy3).style.backgroundColor="violet";

			 if(count_A1==28 &&count_A2==28)
			{
				homeA=2;
				document.getElementById("prA2").disabled = true;
				//ERR A WINS
				document.getElementById("show!").innerHTML="A WON";
				return;
			}

         	
        //    	if(count_A2<=count_B1){
        //  	   	if(count_A2+14==count_B1 && count_B1!=28)
    	//   {
    	// 	 document.getElementById("b1").style.opacity="1";
    	// 	 coinB=coinB+1;
    	// 	 count_B1=1;
    	// 	  document.getElementById("prB1").disabled = true;
    	//   }
        //     }
        //    else if(count_A2>=count_B1)
        //     {
        //     if(count_A2-14==count_B1 )
    	//     {
    	// 	 document.getElementById("b1").style.opacity="1";
    	// 	 coinB=coinB+1;
    	// 	 count_B1=1;
    	// 	  document.getElementById("prB1").disabled = true;
    	//     }
        //     }
        //     if(count_A2<=count_B2)
        //     {
        //     	if(count_A2+14==count_B2  && count_B2!=28)
        //     	{
        //     		document.getElementById("b1").style.opacity="1";
    	// 	        coinB=coinB+1;
    	// 	        count_B2=1;
    	// 	         document.getElementById("prB2").disabled = true;
        //     	}
        //     }
        //     else if(count_A2>=count_B2)
        //     {
        //     	if(count_A2-14==count_B2 )
        //     	{
        //     		document.getElementById("b1").style.opacity="1";
    	// 	        coinB=coinB+1;
    	// 	        count_B2=1;
    	// 	         document.getElementById("prB2").disabled = true;
        //     	}
        //     }
         },1500);
	     
	    
		// document.getElementById("prA2").disabled = true;
		// document.getElementById("prA1").disabled = true;
		// document.getElementById("prB1").disabled = true;
       	// document.getElementById("prB2").disabled = true;
      	// document.getElementById("la").disabled = true;
		   
        document.getElementById("prA2").disabled = true;
		load();

		  
}


//Move 1st coin of A
function moveA1()
{

 	// document.getElementById("roll1").disabled = true;
 	copy4=count_A1;

	    // if(count_A1+ran>28)
		// {

		// }
    	count_A1=count_A1+ran;
		if(ran!=6)
		count+=1;

		

    	 setTimeout(function(){
			 
			if(count_A1>1 && count_A1<=28)
			document.getElementById("c"+count_A1).style.backgroundColor="yellow";
			if(copy4<=27)
			document.getElementById("c"+copy4).style.backgroundColor="violet";
			if(count_A1==28)
			{
				homeA=1;
				document.getElementById("prA1").disabled = true;
				//ERR indicate one of A is in home
			}

     	// if(count_A1<=count_B1){
        //  	   	if(count_A1+14==count_B1 && count_B1!=28)
    	//   {
    	// 	 document.getElementById("b1").style.opacity="1";
    	// 	 coinB=coinB+1;
    	// 	 count_B1=1;
    	// 	  document.getElementById("prB1").disabled = true;
    	//   }
        //     }
        //    else if(count_A1>=count_B1)
        //     {
        //     if(count_A1-14==count_B1)
    	//     {
    	// 	 document.getElementById("b1").style.opacity="1";
    	// 	 coinB=coinB+1;
    	// 	 count_B1=1;
    	// 	  document.getElementById("prB1").disabled = true;
    	//     }
        //     }
        //     if(count_A1<=count_B2)
        //     {
        //     	if(count_A1+14==count_B2  && count_B2!=28)
        //     	{
        //     		document.getElementById("b1").style.opacity="1";
    	// 	        coinB=coinB+1;
        //             count_B2=1;
        //              document.getElementById("prB2").disabled = true;
        //     	}
        //     }
        //     else if(count_A1>=count_B2)
        //     {
        //     	if(count_A1-14==count_B2 )
        //     	{
        //     		document.getElementById("b1").style.opacity="1";
    	// 	        coinB=coinB+1;
    	// 	        count_B2=1;
    	// 	         document.getElementById("prB2").disabled = true;
        //     	}
        //     }
         },1500);
		
    //    document.getElementById("prA1").disabled = true;
    //    document.getElementById("prA2").disabled = true;
    //     document.getElementById("prB1").disabled = true;
    //    document.getElementById("prB2").disabled = true;
    //    document.getElementById("la").disabled = true;

        document.getElementById("prA1").disabled = true;
		 load();
	   
}


//Move 2nd coin of B
function moveB2()
{
	 	// document.getElementById("roll1").disabled = true;
	 	copy5=count_B2;
    	count_B2=count_B2+ran;
		if(ran!=6)
		count+=1;

    	 setTimeout(function(){
			 if(count_B2<=14)
			 document.getElementById("c"+(count_B2+14)).style.backgroundColor="blue";
			 else if(count_B2<=28)
			 document.getElementById("c"+(count_B2-14)).style.backgroundColor="blue";

			

			 if(copy5<=14)
			 document.getElementById("c"+(copy5+14)).style.backgroundColor="violet";
			 else if(copy5<28)
			 document.getElementById("c"+(copy5-14)).style.backgroundColor="violet";

			 if(count_B1==28 && count_B2==28)
			 {
			 	//ERR B WINS
				 homeB=2;
				document.getElementById("prB2").disabled = true;
				document.getElementById("show!").innerHTML="B WON";
				return;
			 }


    //       	if(count_B2<=count_A1){
    //     if((count_B2+14==count_A1) && count_A1!=28)
    // 	{
    // 		 document.getElementById("a1").style.opacity="1";
    // 		 coinA=coinA+1;
    // 		 count_A1=1;
    // 		  document.getElementById("prA1").disabled = true;
    // 	}
    //    }
    //    if(count_B2<=count_A2)
    //    {
    //    	 if( count_B2+14==count_A2 && count_A2!=28)
    // 	{
    // 		 document.getElementById("a1").style.opacity="1";
    // 		 coinA=coinA+1;
    // 		 count_A2=1;
    // 		  document.getElementById("prA2").disabled = true;
    // 	}
    //    }
    //    else if(count_B2>count_A1)
    //    {
    //    	  if((count_B2-14==count_A1))
    // 	{
    // 		 document.getElementById("a1").style.opacity="1";
    // 		 coinA=coinA+1;
    // 		 count_A1=1;
    // 		  document.getElementById("prA1").disabled = true;
    // 	}
    //    }
    //    else if(count_B2>count_A2)
    //    {
    //    	 if( count_B2-14==count_A2 )
    // 	{
    // 		 document.getElementById("a1").style.opacity="1";
    // 		 coinA=coinA+1;
    // 		 count_A2=1;
    // 		  document.getElementById("prA2").disabled = true;
    // 	}
    //    }

         },1500);

        document.getElementById("prB2").disabled = true;

		 load();
    //   document.getElementById("prB2").disabled = true;
    //    document.getElementById("prB1").disabled = true;
    //     document.getElementById("prA1").disabled = true;
    //     document.getElementById("prA2").disabled = true;
    //    document.getElementById("lb").disabled = true;

	   	 
}


//Move 1st coin of B
function moveB1()
{
			// document.getElementById("roll1").disabled = true;
			copy6=count_B1;
			count_B1=count_B1+ran;
			if(ran!=6)
			count+=1;

			setTimeout(function(){

			if(count_B1<=14)
			document.getElementById("c"+(count_B1+14)).style.backgroundColor="blue";
			else if(count_B1<=28)
			document.getElementById("c"+(count_B1-14)).style.backgroundColor="blue";
			if(count_B1==28)
			{
				homeB=1;
				document.getElementById("prB1").disabled = true;
				//ERR indicate one of B is in home
			}

			 if(copy6<=14)
			 document.getElementById("c"+(copy6+14)).style.backgroundColor="violet";
			 else if(copy6<=27)
			 document.getElementById("c"+(copy6-14)).style.backgroundColor="violet";


    // if(count_B1<=count_A1){
    //     if((count_B1+14==count_A1) && count_A1!=28)
    // 	{
    // 		 document.getElementById("a1").style.opacity="1";
    // 		 coinA=coinA+1;
    // 		 count_A1=1;
    // 		  document.getElementById("prA1").disabled = true;
    // 	}
    //    }
    //    if(count_B1<=count_A2)
    //    {
    //    	 if( count_B1+14==count_A2 && count_A2!=28)
    // 	{
    // 		 document.getElementById("a1").style.opacity="1";
    // 		 coinA=coinA+1;
    // 		 count_A2=1;
    // 		  document.getElementById("prA2").disabled = true;
    // 	}
    //    }
    //    else if(count_B1>count_A1)
    //    {
    //    	  if(count_B1-14==count_A1)
    // 	{
    // 		 document.getElementById("a1").style.opacity="1";
    // 		 coinA=coinA+1;
    // 		 count_A1=1;
    // 		  document.getElementById("prA1").disabled = true;
    // 	}
    //    }
    //    else if(count_B1>count_A2)
    //    {
    //    	 if( count_B1-14==count_A2 )
    // 	{
    // 		 document.getElementById("a1").style.opacity="1";
    // 		 coinA=coinA+1;
    // 		 count_A2=1;
    // 		  document.getElementById("prA2").disabled = true;
    // 	}
    //    }
         },1500);
        document.getElementById("prB1").disabled = true;
	
    //   document.getElementById("prB1").disabled = true;
    //    document.getElementById("prB2").disabled = true;
    //     document.getElementById("prA1").disabled = true;
    //     document.getElementById("prA2").disabled = true;
    //    document.getElementById("lb").disabled = true;

	    load();
}


//Switch chances to play from A to B and vice-versa
function load()
{
		if(count%2!=0 ){
			setTimeout(function(){
			document.getElementById("show!").innerHTML="TURN: A";
			// document.getElementById("prB1").disabled = true;
         	// document.getElementById("prB2").disabled = true;
			document.getElementById("roll1").disabled = false;
	         },1000);

		}
	    else{
	    	setTimeout(function(){
	    		document.getElementById("show!").innerHTML="TURN: B";
	    		// document.getElementById("prA1").disabled = true;
				// document.getElementById("prA2").disabled = true;
				document.getElementById("roll1").disabled = false;
	},1000);
		
        }
     
}
