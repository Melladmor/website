
  function showPopup() {
          document.getElementById("popup").style.display = "block";
        }
         
      

      
        function closePopup() {
          document.getElementById("popup").style.display = "none";
        }
        
      
        

        function showForm() {
          const form = document.getElementById("form");
          if (document.getElementById("show-form").checked) {
            form.style.display = "block";
          } else {
            form.style.display = "none";
          }
        }
        
        
        function validateform()
        { 
		
	
 
		 var message="";
		 var result=document.getElementById("result");
		 result.innerHTML="" ;	
         var full_name =applicationForm.full_name.value;
		 var national_number=applicationForm.national_number.value;	
		 
		 var bdate =applicationForm.bdate.value;		
         var mobile = applicationForm.mobile.value;
		 var email=applicationForm.email.value;
		 var unitValue=applicationForm.unitValue.value;
	     var userCaptcha= applicationForm.captcha.value;
		 var systemCaptcha = document.getElementById("code").innerHTML; 
		 
		
	 
         var name_condition = full_name.search(/^[\u0600-\u06FF]+ ?[\u0600-\u06FF]+/);
         if (full_name.length <=0 ) message+="<br> حقل الاسم مطلوب"; 
		else if(name_condition<0) message+="<br>خطأ في الاسم";
		 
	
		 var national_number_condition =national_number.search(/^(01|02|03|04|05|06|07|08|09|10|11|12|13|14)\d{9}$/);
       if (national_number.length <=0 ) message+="<br> حقل الرقم الوطني مطلوب"; 
	    else if(national_number_condition<0) message+="<br>خطأ في الرقم الوطني";
	
		 var mobile_condition = mobile.search(/^0(93|94||95|96|97|98|99)\d{7}$/);
        if (mobile.length <=0 ) message+="<br> حقل رقم الموبايل مطلوب"; 
	  else if(mobile_condition<0) message+="<br>خطأ في رقم الموبايل"; 
	 
	 
       	 var date_condition = bdate.search(/^(0[1-9]|[1-2][0-9]|3[0-1])-(0[1-9]|1[0-2])-\d{4}$/);
         if (bdate.length <=0 ) message+="<br> حقل تاريخ الولادة مطلوب"; 
	 else if(date_condition<0) message+="<br>خطأ في تاريخ الولادة"; 
    
	  if (email.length <=0 ) message+="<br> حقل البريد الالكتروني مطلوب";
	  if (unitValue.length <=0 ) message+="<br> حقل العدد مطلوب";
	  
         var captcha_condition = systemCaptcha===userCaptcha;
         if (userCaptcha.length <=0 ) message+="<br> حقل التحقق مطلوب";
		else if(!captcha_condition) message+="<br>خطأ في رمز التحقق"; 
   
 
   if(message!="")
   {
	     
	   result.innerHTML=message+"<br>" ;
      result.style.display='block';
    }
    else
    {
		  result.innerHTML="" ;
	  result.style.display='none';
	   
	showBill(unitValue);
	
	  
    }
		 
  
   return false;
       
 }
 function showbill(unitValue){
	  var bill=Number(unitValue)*Number(carCostWithTax.innerText);
	 alert("The cost is "+bill);
 }
