// ==UserScript==
// @name           hackYourBank-spain-version
// @namespace      derivart
// @include        https://caixasabadell.net/*
// @include        https://www.unnim.cat/*
// @include        https://unnim.cat/*
// @include        http://unnim.cat/*
// @include        https://unnim.es/*
// @include        http://unnim.es/*
// @include        https://www.catalunyacaixa.com/*
// @include        http://www.catalunyacaixa.com/*
// @include        https://www.cam.es/*
// @include        http://www.cam.es/*
// @include        http://www.novagaliciabanco.es/*
// @include        https://www.novagaliciabanco.es/*
// @include        http://portal.ccm.es/*
// @include        https://portal.ccm.es/*
// @include        https://ccm.es/*
// @include        http://ccm.es/*
// @include        https://www.ccm.es/*
// @include        http://www.ccm.es/*
// @include        http://www.bancopopular.es/*
// @include        https://www.bancopopular.es/*
// @include        http://www.bancosantander.es/*
// @include        https://www.bancosantander.es/*
// @include        http://www.barclays.es/*
// @include        https://www.barclays.es/*
// @include        http://www.bankia.es/*
// @include        https://www.bankia.es/*
// @include        http://www.cajaespana.es/*
// @include        https://www.cajaespana.es/*
// @include        https://www.lacaixa.es/*
// @include        http://www.lacaixa.es/*
// @include        http://portal.lacaixa.es/*
// @include        https://portal.lacaixa.es/*
// @include        http://www.caixapenedes.com/*
// @include        https://www.caixapenedes.com/*
// @include        http://www.bankinter.com/*
// @include        https://www.bankinter.com/*
// @include        http://www.bancosantander.es/*
// @include        https://www.bancosantander.es/*
// @include        http://www.novacaixagalicia.es/*
// @include        https://www.novacaixagalicia.es/*
// @include        https://www.caixalaietana.es/*
// @include        http://www.caixalaietana.es/*
// @include        http://www.cajanavarra.es/*
// @include        https://www.cajanavarra.es/*
// @include        https://www.cajavital.es/*
// @include        http://www.cajavital.es/*
// @include        http://www.bbva.es/*
// @include        https://www.bbva.es/*
// @include        https://www.deutsche-bank.es/*
// @include        http://www.deutsche-bank.es/*
// @include        http://www.caixa-enginyers.com/* 
// @include        https://www.caixa-enginyers.com/*
// @include        https://www.bancacivica.es/* 
// @include        http://www.bancacivica.es/* 
// @include        http://www.banesto.es/*
// @include        https://www.banesto.es/*
// @include        https://www.kutxa.net/*
// @include        http://www.kutxa.net/*
// @include        http://www.cajalaboral.es/*
// @include        https://www.cajalaboral.es/*
// @include        https://www.bancsabadell.com/*
// @include        http://www.bancsabadell.com/*
// @include        http://bancodevalencia.es/*
// @include        https://bancodevalencia.es/*
// @include        https://www.openbank.es/*
// @include        http://www.openbank.es/*
// @include        https://www.bankinter.com/*
// @include        http://www.bankinter.com/*
// @include        http://www.cajasur.es/*
// @include        https://www.cajasur.es/*
// @include        https://www.cajanavarra.es/*
// @include        http://www.cajanavarra.es/*
// @include        http://www.caixaterrassa.es/*
// @include        https://www.caixaterrassa.es/*
// @include        http://www.novagaliciabanco.es/*
// @include        https://www.novagaliciabanco.es/*
// @include        https://www.bancamarch.es/*
// @include        http://www.bancamarch.es/*
// @include        http://www.cajavital.es/*
// @include        https://www.cajavital.es/*
// @include        https://www3.cajavital.es/*
// @include        http://www.bancopastor.es/*
// @include        https://www.bancopastor.es/*
// @include        https://www.cajasol.es/*
// @include        http://www.cajasol.es/*
// @include        http://www.ibercaja.es/*
// @include        https://www.ibercaja.es/*
// @include        https://www.unicaja.es/*
// @include        http://www.unicaja.es/*
// @include        https://www.sabadellguipuzcoano.com/*
// @include        http://www.sabadellguipuzcoano.com/*
// @include        http://www.cajamurcia.es/*
// @include        http://portal.cajamurcia.es/*
// @include        https://portal.cajamurcia.es/*
// @include        https://www.cajamurcia.es/*
// @include        https://www.cai.es/*
// @include        http://www.cai.es/*
// @include        http://www.cajanavarra.es/*
// @include        https://www.cajanavarra.es/*
// @include        http://www.bbk.es/*
// @include        https://www.bbk.es/*
// @include        http://www.bancocaixageral.es/*
// @include        https://www.bancocaixageral.es/*
// @include        http://www.llamanosfuturo.es/
// @include        https://www.llamanosfuturo.es/
// @include        http://www.cajaduero.es/*
// @include        http://www.ingdirect.es/*
// @include        http://www.novanca.com/*
// @include        https://www.novanca.com/*
// @include        http://www.triodos.es/*
// @include        https://www.triodos.es/*
// @include        http://www.ebankinter.com/*
// @include        https://www.ebankinter.com/*
// @include        http://www.solbank.es/*
// @include        https://www.solbank.es/*
// @include        https://www.bancorreos.es/*
// @include        http://www.bancorreos.es/*
// @include        http://www.banif.es/*
// @include        https://www.banif.es/*
// @include        http://www.citibank.es/*
// @include        https://www.citibank.es/*
// @include        http://www.sanostra.es/*
// @include        https://www.sanostra.es/*
// @include        http://www.uno-e.com/*
// @include        http://www.ingdirect.es/*
// ==/UserScript==

//----------------------------------------------------------------------------------------
// History:
//----------------------------------------------------------------------------------------
// version 1.0 (17 november 2011) first release
// compiled by: http://arantius.com/misc/greasemonkey/script-compiler
//----------------------------------------------------------------------------------------

function getNationalizedData(source){
	var nationalized = source;
	var bankNamesAr = nationalized.split(',');
	var foundNationalizedBank = false;
	var url = document.URL;
	
	for(i=0;i<bankNamesAr.length;i++){
		
		if( url.indexOf(bankNamesAr[i])!=-1){
			foundNationalizedBank = true;
			bankName = bankNamesAr[i]; 
			getTotalImages(bankName);
			break;
		}
	}
	
	// if not found a nationalized bank
	if(!foundNationalizedBank){
		bankName = "otros";
		getTotalImages(bankName);
	}
	
}

//----------------------------------------------------------------------------------------

function getTotalImages(bankName)
{
	
	try{
		// Create a URL that searches the torrent site, ordered by amount of seeds  
		var newlink = 'http://derivart.es/hackyourbank/spain/totalImages.php?bank='+bankName;
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
	var totalImagesScreen = 10;
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
		var imagePath = 'http://derivart.es/hackyourbank/spain/imageId.php?bank='+bankName+"&id="+idAr[i];
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
		var newlink = 'http://derivart.es/hackyourbank/spain/nationalized.txt';
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
getNationalizedBankNames();

// refresh page each 30 seconds 
setTimeout("location.reload(true);",60000);
