<!DOCTYPE html>
<html lang="en">
<head>
    <?php 
    include 'header.php';
     ?>
    
    <link rel="stylesheet" href="css/main.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />	
</head>

<style>
html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;}body{margin:0;}article,aside,details,figcaption,figure,footer,header,main,menu,nav,section,summary{display:block;}audio,canvas,progress,video{display:inline-block;}audio:not([controls]){display:none;height:0;}progress{vertical-align:baseline;}template,[hidden]{display:none;}a{background-color:transparent;-webkit-text-decoration-skip:objects;}a:active,a:hover{outline-width:0;}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted;}b,strong{font-weight:inherit;}b,strong{font-weight:bolder;}dfn{font-style:italic;}h1{font-size:2em;margin:0.67em 0;}mark{background-color:#ff0;color:#000;}small{font-size:80%;}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline;}sub{bottom:-0.25em;}sup{top:-0.5em;}img{border-style:none;}svg:not(:root){overflow:hidden;}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em;}figure{margin:1em 40px;}hr{box-sizing:content-box;height:0;overflow:visible;}button,input,select,textarea{font:inherit;margin:0;}optgroup{font-weight:bold;}button,input{overflow:visible;}button,select{text-transform:none;}button,html [type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button;}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0;}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText;}fieldset{border:1px solid #c0c0c0;margin:0 2px;padding:0.35em 0.625em 0.75em;}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}textarea{overflow:auto;}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto;}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-cancel-button,[type="search"]::-webkit-search-decoration{-webkit-appearance:none;}::-webkit-input-placeholder{color:inherit;opacity:0.54;}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}

body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: #FAFAFA;
    font-family: 'Raleway';
}
* {
    box-sizing: border-box;
    -moz-box-sizing: border-box;
}
.page {
    width: 210mm;
    min-height: 297mm;
    padding: 20mm;
    margin: 10mm auto;
    border: 1px #D3D3D3 solid;
    border-radius: 5px;
    background: white;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}
.subpage {
    padding: 1cm;
    border: 5px red solid;
    height: 257mm;
    outline: 2cm #FFEAEA solid;
}

.label-section {
	width: 100%;
	height: 25%;
	display: inline-block;
	margin-left: auto;
	margin-bottom: 5rem;
	margin-right: auto;
}

#printfooter {
	color: gray;
	margin-top: 0%;
	height: 500px;
	width: 100%; text-align: center;
}

#printfooter img {
	margin-top: 2rem;
	width: 75%;
	position: absolute;
	left: 3%;
	bottom: 25%;
}

#printlabels {
	margin-top: 2rem;
}

#label {
	width: 57mm;
	height: 40mm;
	font-size: 26pt;
	padding: 0;
	line-height: 110%;
	position: relative;
	margin-left: auto;
	margin-right: auto;
	overflow: hidden;
	left: 0;
	bottom: 0;
	border: 0.75rem solid #000;	
}

#label p {
	margin-top: 5%;
	margin-bottom: 0;
}

#namewrapper {
width:50mm;
min-height: 12mm;
max-height: 12mm;
padding-right: 1mm;
padding-left: 1mm;
margin-right: 0rem !important;
display: inline-block;
margin: 0;
position: relative;
bottom: 0.25rem;
font-size: 26pt;

}


@page {
    size: A4;
    margin: 0;
    color: gray;
}
@media print{
    html, body {
        width: 210mm;
        height: 297mm;
        background-color: white;       
    }
    
    

    .page {
        margin: 0;
        border: initial;
        border-radius: initial;
        width: initial;
        min-height: initial;
        box-shadow: initial;
        background: initial;
        page-break-after: always;
    }
}

.instruction {
	position: relative;
	/*left:20rem ;*/
	top: 38rem;
	
}

</style>

<html>
<body>
    <div class="page">
    
    <!--<p style="color: gray; text-align: center; margin-bottom: 2rem; top: 1rem;">PersonaliseACigarettePack.com</p>-->
    <div id="printlabels">
   		<div class="label-section">
   			
   			<div class="labels" id="label">
   			    <p>Smoking<br>
   			    kills<br>
   			    <div id="namewrapper"><span class="name"> <?php echo $_GET["name"]?></span></div>
   			    </p>
   			
   			</div>
   		</div>
   		
   		<div class="label-section">
   			
   			<div class="labels" id="label">
   			    <p>Smoking<br>
   			    kills<br>
   			    <div id="namewrapper"><span class="name"> <?php echo $_GET["name"]?></span></div>
   			    </p>
   			
   			</div>
   		</div>
   		
   		
   		<div class="label-section">
   			
   			<div class="labels" id="label">
   			    <p>Smoking<br>
   			    kills<br>
   			    <div id="namewrapper"><span class="name"> <?php echo $_GET["name"]?></span></div>
   			    </p>
   			
   			</div>
   		</div>
   		
   		 	 	 
  
	</div>
		
		
		<div id="printfooter" style="position: relative;">
		<img src="img/diagram4.png" style="">
		<p class="instruction">Cut out label and slide under pack plastic</p>

		</div>

		</div>

    </div>
     
    <?php 
    include 'footer.php';
     ?>
    
    <script type="text/javascript">
    
    $(document).ready(function() {
	    $(".name").bigText({
	    verticalAlign: "center",
	    maximumFontSize: 35,
	    limitingDimension: "width",
	    verticalAlign: "center",
	      });
      
      });
    
    $(document).ready(function() {
        // Print
        window.print();
    });
    
    
    </script>
    
</body>
</html>



