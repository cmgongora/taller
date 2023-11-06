$(document).ready(function() {
  // Inicia Tooltip
  $('[data-toggle="tooltip"]').tooltip();
  // Agrega scroll a todos los enlaces en la barra de navegación + enlace de pie de página
  $("#nav a").each(function() {
    var href = $(this).attr("href");
      $(this).attr({ href: "#"});
      $(this).click(function(){
        $("#show").load(href);
      });
   });
  // Agrega scroll a todos los enlaces en la barra de navegación + enlace de pie de página
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
  
    // Prevent default anchor click behavior
    event.preventDefault();
  
    // Store hash
    var hash = this.hash;
  
    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
      }, 900, function() {
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
        });
      } // End if
    });
  });

var XMLHttpRequestObject = false;

if(window.XMLHttpRequest) XMLHttpRequestObject = new XMLHttpRequest();
else if(window.ActiveXObject) XMLHttpRequestObject = new ActiveXObject("Msxml2.XMLHTTP");
else if(window.ActiveXObject) XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");

function getPagina(dataSource, divId) {
	if(XMLHttpRequestObject) {
		var obj = document.getElementById(divId);
    XMLHttpRequestObject.open("POST", dataSource, true);	

		XMLHttpRequestObject.onreadystatechange = function() {
			try {
				if(XMLHttpRequestObject.readyState == 4 && XMLHttpRequestObject.status == 200) {
					obj.innerHTML = XMLHttpRequestObject.responseText;
				}
			} catch(errn) {
				//alert(errn);
			}
		}

		XMLHttpRequestObject.send(null);
	}
}

function getPaginaActiva(file, extension, divId) {
	document.getElementById('contenido-principalId').style.display = "none";
	document.getElementById('contenido-galeriaId').style.display = "none";
	getPagina("contenido/" + file + "." + extension, divId + 'Id');
	
	if(divId == "contenido-galeria") {
		setTimeout(function() {
			getReload();
			document.getElementById(divId + 'Id').style.display = "";
		}, 3000);
	} else {
		document.getElementById(divId + 'Id').style.display = "";
	}
}