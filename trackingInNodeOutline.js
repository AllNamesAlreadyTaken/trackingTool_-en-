//use strict;

/************************************** 
   
   Created by Michael Horstmann.
   Application is to be used within the
   legal boundaries to manage ones own 
   tracking across multiple carriers.

   Main - tracking validator

**************************************/

//getting the entered tracking number as a valid, non threatening tracking number to the app
var getUsrTrackNo = function(usrTrackNo){
	var trackNo = usrTrackNo;
	if(trackNo){
		var validator = new RegExp ("validate as good trackNo");
		var sanitizer = new RegExp ("Triggers sanitization of any malicious code"); 	
		//run TrackNo variable against the 
		function checker(trackNo){

		}
		//In processing through a trackingNo
		var trackNo = function(usrTrackNo){

			//check for malicious code (sql or js injection - client side, first of /****3****/ checks!);
			//
		};
	};
};



if Reg