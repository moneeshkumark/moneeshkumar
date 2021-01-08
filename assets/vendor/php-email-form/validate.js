jQuery(document).ready(function($) {
  "use strict";
  var this_form =$(this);
  //Contact
  $('#sendmail').click(function() {
    // console.log("Wecome");
    this_form.find('.loading').slideDown();
    this_form.find('.loading').slideUp();
    this_form.find('.error-message').slideUp();
  if($("input[name=name]").val()=="" || $("input[name=email]").val()==""|| $("textarea[name=subject]").val() == ""|| $("input[name=subject]").val()==""){
    this_form.find('.loading').slideUp();
    this_form.find('.error-message').slideDown().html('Invalid Input');
    return false;
  }
  var message = "<b>Name:</b>" + $("input[name=name]").val() + "<br/><br/><b>Email:</b>"+ $("input[name=email]").val() + "<br/><br/> <b>Message:</b>" + $("textarea[name=message]").val() + "<br/><br/> <b>Servie by digitalPeoplezero</b> <br/><br/> digitalpeoplezero.bllogspot.com";  
  Email.send({ 
		Host: "smtp.gmail.com", 
		Username: "digitalpeoplezero@gmail.com", 
		Password: "ormunsaluahorobc", 
		To: 'Moneesh.kumar13@gmail.com', 
		From: "no-reply@digitalpeoplezero.com", 
		Subject: $("input[name=subject]").val(), 
        Body: message, 
	}) 
		.then(function (message) { 
    this_form.find('.loading').slideUp();
    this_form.find('.error-message').slideUp();
    this_form.find('.sent-message').slideDown();
    this_form.find("input:not(input[type=submit]), textarea").val('');
		}); 

});

});