// ==UserScript==
// @name           hackYourBank-irland-version
// @namespace      derivart

// @include        http://www.accbank.ie/*
// @include        https://www.accbank.ie/*
// @include        http://www.aib.ie/*
// @include        https://www.aib.ie/*
// @include        http://www.angloirishbank.ie/*
// @include        https://www.angloirishbank.ie/*
// @include        http://www.bankofireland.com/*
// @include        https://www.bankofireland.com/*
// @include        http://www.firstactive.ie/*
// @include        https://www.firstactive.ie/*
// @include        http://www.kbc.ie/*
// @include        https://www.kbc.ie/*
// @include        http://www.wgzbank.ie/*
// @include        https://www.wgzbank.ie/*
// @include        http://www.dzbank.ie/*
// @include        https://www.dzbank.ie/*
// ==/UserScript==


//----------------------------------------------------------------------------------------
// History:
//----------------------------------------------------------------------------------------
// version 1.0 (7 may 2012) first release
// compiled by: http://arantius.com/misc/greasemonkey/script-compiler
//----------------------------------------------------------------------------------------

function getNationalizedData(source){
	/*
	var nationalized = source;
	var bankNamesAr = nationalized.split(',');
	var foundNationalizedBank = false;
	var url = document.URL;
	
	for(i=0;i<bankNamesAr.length;i++){
		
		if( url.indexOf(bankNamesAr[i])!=-1){
			foundNationalizedBank = true;
			bankName = bankNamesAr[i]; 
			//getTotalImages(bankName);
			break;
		}
	}
	*/
	// if not found a nationalized bank
	//if(!foundNationalizedBank){
		bankName = "otros";
		getTotalImages(bankName);
	//}
	
}

//----------------------------------------------------------------------------------------

function getTotalImages(bankName)
{
	
	try{
		// Create a URL that searches the torrent site, ordered by amount of seeds  
		var newlink = 'http://derivart.es/hackyourbank/irland/totalImages.php?bank='+bankName;
		// Go fetch the source code of the torrent search page
		GM_xmlhttpRequest(
		{
			method:"GET",
			url: newlink,
			headers:
			{
				"User-Agent":"hackyourback",
		        //"Operating Ship": "HMS Bounty",
		    	//"User-Agent":"Mozilla/5.0",  
				"Accept":"text/xml"
			},

			// Function performed when the search result page is found
			onload:function(responseDetails){

				// what is the source code of that page
				showData(responseDetails.responseText );
			}
		});	
	}catch(e){
		//alert("error: "+myTextSearch);
	}
	
}

//----------------------------------------------------------------------------------------

function showData(totalImages)
{	
	// limits to display images
	var totalImagesInt = parseInt(totalImages);
	var totalImagesScreen = 5;
	if(totalImagesScreen>totalImagesInt) totalImagesScreen = totalImagesInt;
	totalImagesScreen = 3+Math.floor(Math.random()*(totalImagesScreen-3));
	
	// find random id of images
	var idAr = new Array();
	var finish = true;
	var iAr = 0;
	
	while(finish){
		var randId = Math.floor(Math.random()*totalImagesInt);
		var repeat = false;
		for(var i=0;i<idAr.length;i++){
			if(idAr[i]==randId) repeat = true;
		}
		if(repeat == false){
			idAr[iAr] = randId;
			iAr+=1; 
		}
		if(idAr.length==totalImagesScreen){
			finish = false;	
		} 
	}
	
	// Add new images
	var images ="";
	for(var i=0;i<totalImagesScreen;i++){
		var imagePath = 'http://derivart.es/hackyourbank/irland/imageId.php?bank='+bankName+"&id="+idAr[i];
		var image = "<img src=\""+imagePath+"\">";
		images += image;
	}
	addHtmlToPage(images);
}

//----------------------------------------------------------------------------------------

function addHtmlToPage(htmlImages)
{	
	// add HTML addon to page (last step)
	var newDiv = "<style type=\"text/css\">#hackYourBank { position:fixed; bottom: 0px; left: 200; color:#ff0000; text-size:24px  }</style><div id=\"hackYourBank\">"+htmlImages+"<br></div>";
	try{
		document.getElementsByTagName('body')[0].innerHTML = document.getElementsByTagName('body')[0].innerHTML+newDiv;
	}catch(e){
		//alert("error dom");
	}
}

//----------------------------------------------------------------------------------------

function getNationalizedBankNames()
{
	//Load nationalized banks
	try{
		// Create a URL that searches the torrent site, ordered by amount of seeds  
		var newlink = 'http://derivart.es/hackyourbank/irland/nationalized.txt';
		// Go fetch the source code of the torrent search page
		GM_xmlhttpRequest(
		{
			method:"GET",
			url: newlink,
			headers:
			{
				"User-Agent":"hackyourback",
	        	//"Operating Ship": "HMS Bounty",
	    		//"User-Agent":"Mozilla/5.0",  
				"Accept":"text/xml"
			},

			// Function performed when the search result page is found
			onload:function(responseDetails){
				// what is the source code of that page
				getNationalizedData( responseDetails.responseText );
			}
		});	
	}catch(e){
		//alert("error: "+myTextSearch);
	}
}

//----------------------------------------------------------------------------------------

// Which is this bank - gloval variable
var bankName = "";

// start process
//getNationalizedBankNames();

// refresh page each 30 seconds 
setTimeout("location.reload(true);",60000);
