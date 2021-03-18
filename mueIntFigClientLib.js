/*
_________________________________________________________________________________________________________________________________

(c)2012-2021 elastify 
All rights reserved.

<resource name="" longname="">
    <description>

		C A U T I O N  !
		==============================================================================================
		
		██████╗  ██████╗ ███╗   ██╗██╗████████╗    ███████╗██████╗ ██╗████████╗    ████████╗██╗  ██╗██╗███████╗    ███████╗██╗██╗     ███████╗    ██╗
		██╔══██╗██╔═══██╗████╗  ██║██║╚══██╔══╝    ██╔════╝██╔══██╗██║╚══██╔══╝    ╚══██╔══╝██║  ██║██║██╔════╝    ██╔════╝██║██║     ██╔════╝    ██║
		██║  ██║██║   ██║██╔██╗ ██║╚═╝   ██║       █████╗  ██║  ██║██║   ██║          ██║   ███████║██║███████╗    █████╗  ██║██║     █████╗      ██║
		██║  ██║██║   ██║██║╚██╗██║      ██║       ██╔══╝  ██║  ██║██║   ██║          ██║   ██╔══██║██║╚════██║    ██╔══╝  ██║██║     ██╔══╝      ╚═╝
		██████╔╝╚██████╔╝██║ ╚████║      ██║       ███████╗██████╔╝██║   ██║          ██║   ██║  ██║██║███████║    ██║     ██║███████╗███████╗    ██╗
		╚═════╝  ╚═════╝ ╚═╝  ╚═══╝      ╚═╝       ╚══════╝╚═════╝ ╚═╝   ╚═╝          ╚═╝   ╚═╝  ╚═╝╚═╝╚══════╝    ╚═╝     ╚═╝╚══════╝╚══════╝    ╚═╝

		(IF YOU ARE NO FRAMEWORK AUTHOR)

    </description>
    <require>
    </require>
    <changelog>
      <v n="0.1.2"> added some debug logs																	(2021-03-18, heim) </v>
      <v n="0.1.1"> added hostRecord, refactoring															(2021-02-24, heim) </v>
      <v n="0.1.0"> created 																				(2021-02-23, heim) </v>
    </changelog>
</resource>
___________________________________________________________________________________________________________________________________

*/

(function() {
	var self = window.mueIntFigClientLib = {

		// hostRecord						: null,
		hostRecord						: {},
		hostIframeId 					: null,
		

		init : function(){
			// self.hostRecord 			= JSON.parse( decodeURI( self.getUriParams("hostRecord") ));
			self.hostIframeId 			= self.getUriParams("hostIframeId"); 
			self.hostRecord = {
				Id 						: self.getUriParams("hostRecordId"), 
				mueBCCloneOf__c			: self.getUriParams("hostRecordCloneOfId"), 
				elfBCVersionOf__c 		: self.getUriParams("hostRecordVersionOfId"), 
			}
			console.log(' ==[ lib.init() ]====> ', self.hostIframeId, self ); 
		},
		
		send : function( action , payload ){
			let jsonMessage = JSON.stringify({
				type 					: "mueIntFig",
				sender					: "figClient",
				host 					: self.hostIframeId,
				action					: action,
				payload					: payload,
			});
			console.log(' ==[ lib.send() ]====> ', self.hostIframeId, jsonMessage, self ); 
			window.parent.postMessage( jsonMessage ,'*' );			
		},

		getHostIframeId : function(){
			return self.hostIframeId;
		},

		getHostRecord : function(){
			return self.hostRecord;
		},

		getUriParams: function(paramName) {
			var params = decodeURIComponent(window.location.search.slice(1))
			      .split('&')
			      .reduce(function _reduce (/*Object*/ a, /*String*/ b) {
			            b = b.split('=');
			            a[b[0]] = b[1];
			            return a;
			      }, {})
			;
			if(paramName) return params[paramName]; else return params;
		},
		
	}
	
})();

