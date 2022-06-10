
$(document).ready(function(){
//eigene Methoden
	jQuery.validator.addMethod("namen", function(value, element)
	{	return this.optional(element) || /^[a-zA-ZüÜäÄöÖéèàâç ]*$/.test(value);
	},	"bad characters")
	jQuery.validator.classRuleSettings.namen = {namen: true};
    
    jQuery.validator.addMethod("emails", function(value, element)
	{	return this.optional(element) || /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
	}, 	"E-mail not valid")
	jQuery.validator.classRuleSettings.emails = {emails: true};
    
    jQuery.validator.addMethod("birth", function(value, element)
	{	return this.optional(element) || /^(0?[1-9]|[12][0-9]|3[0-1])[/., -](0?[1-9]|1[0-2])[/., -](19|20)?\d{2}$/.test(value);
	}, 	"No birthday")
	jQuery.validator.classRuleSettings.birth = {birth: true};


//validieren
	$("#userform").validate({
//Regeln
	rules: {
	vname: {
		required: true,
		namen: true,
		minlength:3
	},
	nname: {
		required: true,
		namen: true,
		minlength:3
		},
    bdate: {
		required: true,
		birth: true
		},
	email: {
		required: true,
		emails: true
		},
	username: {
		required: true,
		minlength:5,
            remote: { type: "post",
			url: "../php/user.php"
			}
		},
	password: {
		required: true,
		minlength: 8
		},
	confirm_password: { 
		required: true,
		minlength: 8,
		equalTo: "#password"
		}
	},

	
success: function(element) {
		element
		.text('OK!').addClass('valid')
		.closest('.control-group').removeClass('error').addClass('success');
	},
//Ausgabe

//eigene Ausgabenachrichten eintragen
	messages: {
	
    vname: {
        required: "Please fill out this field",
        minlength: "Name too short, min 3 characters"
    },
    nname: {
		required: "Please fill out this field",
		minlength: "Name too short, min 3 characters"
	},
    bdate: {
        required: "Please fill out this field",
        birth: "Not a valid date"
    },
	email: {
		required: "Please fill out this field",
		email: "Not a valid e-mail"
		},
	username: {
		required: "Please fill out this field",
		minlength: "Name too short, min 5 characters",
        remote: "Name already taken"
		},
	password: {
		required: "Please fill out this field",
		minlength: "Password too short, min 8 characters"
		},
	confirm_password: {
		required: "Please fill out this field",
		minlength: "Password too short, min 8 characters",
		equalTo: "Passwords do not match"
		},
	},
	});
});