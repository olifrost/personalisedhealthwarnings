<!DOCTYPE html>
<head>
   	<?php 
   	include 'header.php';
   	 ?>
    		
     <link rel="stylesheet" href="css/main-2.css" />
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />	
     <link href="https://fonts.googleapis.com/css?family=Pacifico" rel="stylesheet">
</head>

<body class="bg-grey">
	
	<div class="container">

        <div class="row text-center grid-hero">
            <div class="twelve column">
                <h1><span style="font-family: 'Pacifico'; margin-right: 0.8rem;">Personalised </span><br> Health Warnings</span></h1>
                
            </div>
            <p class="subtext">Stoptober 2017</p>
        </div>

        <!-- PACKET -->
            
        <section id="designer" class="text-center row">        
            <div id="center-pack">
                <div id="pack">
                    <img id="box" src="img/cigarettepack.jpg">
                    <div id="label" class="labels">
                        <p style="margin-bottom: 0rem;">Smoking<br>
                        kills<br></p>
                        <div id="namewrapper" style="display: none;"><span class="rotate name" contenteditable="true" onpaste="updateSize();" onkeypress="return (this.innerText.length <= 25)">Mum, Bae, Grandad, Dave</span></div>
                    </div>
                </div>
            </div>
         
        </section>

        <!-- ACTIONS -->
        
        <section class="text-center row" id="buttons-row">
            <div class="twelve column">  
            <div id="buttonandform" class="center">
            	
                <div style="margin-bottom: 1rem; margin-top: 0.5rem;">
                <span style="margin-bottom: 1rem; margin-top: 1rem; display: block; color: gray;">Share Pack:</span>
                               <div style="margin-top:0;" class="button-group" id="firstbuttons">
                 					
                                    <button class="button" onclick="takeScreenShot('tweet')"><i id="tweet"  class="fa fa-lg fa-twitter shareIcon" aria-hidden="true"></i></button>
                                    <button class="button" onclick="takeScreenShot('facebook');"><i id="fbPost"  class="fa fa-lg fa-facebook shareIcon" aria-hidden="true"></i></button>
                
                                    
                                   <button class="button" onclick="takeScreenShot('save');"><i class="fa fa-download fa-lg shareIcon" aria-hidden="true"></i><a> </a></button>
                                </div><br>
                <span style="color: gray;">Print Label: </span>
                </div>
                <div style="margin-top:0;" id="firstbuttons">
                     <form action="print.php" class="form-group" style="display: inline-block;">
                     <textarea id="hiddeninput" name="name" style="display: none;"></textarea>
                      <label for="save" class="button" id="printbutton"><i class="fa fa-print fa-lg" aria-hidden="true" style="width: 17rem;"></i> </label>  
                     <input class="btn" type="submit" value="Print" id="save" style="display: none;"/>
                    </form>
                 </div>
                 
                
                
                
                
                
    		</div>
    		
   		 </section>
   		 
   	<hr>
   	
   	<div class="row" style="text-align: center;">
   	<h3>Recently Created</h3>
   	<div class="center-pack">
   	    <div id="pack">
   	        <img id="box" src="img/cigarettepack.jpg">
   	        <div id="label" class="labels">
   	            <p style="margin-bottom: 0rem;">Smoking<br>
   	            kills<br></p>
   	            <div id="namewrapper"><span>You Bro</span></div>
   	        </div>
   	    </div>
   	</div>
   	
   	<div class="center-pack">
	    <div id="pack">
	        <img id="box" src="img/cigarettepack.jpg">
	        <div id="label" class="labels">
	            <p style="margin-bottom: 0rem;">Smoking<br>
	            kills<br></p>
		            <div id="namewrapper"><span>Emma</span></div>
	        </div>
	    </div>
	</div>
   		
	<div class="center-pack">
		    <div id="pack">
		        <img id="box" src="img/cigarettepack.jpg">
		        <div id="label" class="labels">
		            <p style="margin-bottom: 0rem;">Smoking<br>
		            kills<br></p>
		            <div id="namewrapper"><span>Alan</span></div>
		        </div>
		    </div>
		</div>
   	
   	
   	
   	<div class="center-pack">
   		    <div id="pack">
   		        <img id="box" src="img/cigarettepack.jpg">
   		        <div id="label" class="labels">
   		            <p style="margin-bottom: 0rem;">Smoking<br>
   		            kills<br></p>
   		            <div id="namewrapper"><span>Aleem</span></div>
   		        </div>
   		    </div>
   		</div>
   		
   	
   
   <div class="center-pack">
   	    <div id="pack">
   	        <img id="box" src="img/cigarettepack.jpg">
   	        <div id="label" class="labels">
   	            <p style="margin-bottom: 0rem;">Smoking<br>
   	            kills<br></p>
   	            <div id="namewrapper" style="width: 120%; right: 12%; position: relative;"><span>Jezzy Bear</span></div>
   	        </div>
   	    </div>
   	</div>
   	
   	<div class="center-pack">
		    <div id="pack">
		        <img id="box" src="img/cigarettepack.jpg">
		        <div id="label" class="labels">
		            <p style="margin-bottom: 0rem;">Smoking<br>
		            kills<br></p>
		            <div id="namewrapper"><span>Gran</span></div>
		        </div>
		    </div>
		</div>
		
	</div>
   	

   
   </div>		
   
   <hr>
       
     <section class="text-center row" id="footer">  
	     <div class="twelve column">
	     <p><br>	 <a href="http://www.oliandjosie.com">Oli + Josie</a><br>Photo by David Gill</p><br>
	     
	    
	     </div>
     
     </section>
    
    <!-- Footer -->    

    <div id="hidden-designer" >
        <div id="hidden-pack">
            <img id="hidden-box" src="img/ogsharebackground.jpg">
            <div id="hidden-label" class="labels">
                <p style="margin-bottom: 0rem;">Smoking<br>kills<br></p>
                <div id="hidden-namewrapper">
                    <span id="hidden-name" class="hidden-name"></span></div>
                </div>
            <span id="personalise-text">Personalise A Health Warning</span>
        </div>
    </div> 
    </div>
	

    <!-- Scripts -->
    <?php 
    include 'footer.php';
     ?>

</body>
