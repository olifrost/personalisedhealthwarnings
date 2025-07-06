/* Simple Text Rotator */

!function (a) { function f() { a("#namewrapper").css("display", "inline-block") } var b, c, d = { animation: "dissolve", separator: ",", speed: 2e3, repeat: !0, text: null, onFinish: function () { } }, e = function () { if (1 == rotateStop) return c.animation = "", clearInterval(b), !1 }; a.fx.step.textShadowBlur = function (b) { e(), a(b.elem).prop("textShadowBlur", b.now).css({ textShadow: "0 0 " + Math.floor(b.now) + "px black" }) }, a.fn.textrotator = function (g) { return c = a.extend({}, d, g), f(), e(), this.each(function () { e(); var d = a(this), f = [], g = c.text || d.text(); a.each(g.split(c.separator), function (a, b) { f.push(b) }), d.text(f[0]); var h, i = function () { return h = a.inArray(d.text(), f), h + 1 != f.length || (h = -1, 0 != c.repeat) || (clearInterval(b), c.onFinish(), !1) }, j = function () { switch (e(), c.animation) { case "dissolve": e(), d.animate({ textShadowBlur: 20, opacity: 0 }, 500, function () { i(), d.text(f[h + 1]).animate({ textShadowBlur: 0, opacity: 1 }, 500) }); break; case "fade": d.fadeOut(c.speed, function () { i(), d.text(f[h + 1]).fadeIn(c.speed) }) } }; b = setInterval(j, c.speed) }) } }(window.jQuery);

/*
jQuery BigText v1.3.0, May 2014
*/

!function (t) { "use strict"; var e = { rotateText: null, fontSizeFactor: .8, maximumFontSize: null, limitingDimension: "both", horizontalAlign: "center", verticalAlign: "center", textAlign: "center", whiteSpace: "nowrap" }; t.fn.bigText = function (i) { return this.each(function () { i = t.extend({}, e, i); var o = t(this), r = o.parent(); o.css("visibility", "hidden"), o.css({ display: "inline-block", clear: "both", "float": "left", "font-size": 1e3 * i.fontSizeFactor + "px", "line-height": "1000px", "white-space": i.whiteSpace, "text-align": i.textAlign, position: "relative", padding: 0, margin: 0, left: "50%", top: "50%" }); var a = { left: parseInt(r.css("padding-left")), top: parseInt(r.css("padding-top")), right: parseInt(r.css("padding-right")), bottom: parseInt(r.css("padding-bottom")) }, n = { width: o.outerWidth(), height: o.outerHeight() }, h = {}; if (null !== i.rotateText) { if ("number" != typeof i.rotateText) throw "bigText error: rotateText value must be a number"; var s = "rotate(" + i.rotateText + "deg)"; h = { "-webkit-transform": s, "-ms-transform": s, "-moz-transform": s, "-o-transform": s, transform: s }, o.css(h); var l = Math.abs(Math.sin(i.rotateText * Math.PI / 180)), g = Math.abs(Math.cos(i.rotateText * Math.PI / 180)); n.width = o.outerWidth() * g + o.outerHeight() * l, n.height = o.outerWidth() * l + o.outerHeight() * g } var m, f = (r.innerWidth() - a.left - a.right) / n.width, c = (r.innerHeight() - a.top - a.bottom) / n.height; "width" === i.limitingDimension.toLowerCase() ? (m = Math.floor(1e3 * f), r.height(m)) : "height" === i.limitingDimension.toLowerCase() ? m = Math.floor(1e3 * c) : c > f ? m = Math.floor(1e3 * f) : f >= c && (m = Math.floor(1e3 * c)); var p = m * i.fontSizeFactor; null !== i.maximumFontSize && p > i.maximumFontSize && (p = i.maximumFontSize, m = p / i.fontSizeFactor), o.css({ "font-size": Math.floor(p) + "px", "line-height": Math.ceil(m) + "px", "margin-bottom": "0px", "margin-right": "0px" }), "height" === i.limitingDimension.toLowerCase() && r.width(o.width() + 4 + "px"); var d = {}; switch (i.verticalAlign.toLowerCase()) { case "top": d.top = "0%"; break; case "bottom": d.top = "100%", d["margin-top"] = Math.floor(-o.innerHeight()) + "px"; break; default: d["margin-top"] = Math.floor(-o.innerHeight() / 2) + "px" }switch (i.horizontalAlign.toLowerCase()) { case "left": d.left = "0%"; break; case "right": d.left = "100%", d["margin-left"] = Math.floor(-o.innerWidth()) + "px"; break; default: d["margin-left"] = Math.floor(-o.innerWidth() / 2) + "px" }o.css(d), o.css("visibility", "visible") }) } }(jQuery);


/* **********************************
   1 ::    TEXT ROTATOR
********************************** */
var currentCopy = "";
var currentCopyURL = "";
var baseURL = "http://personalwarnings.oliandjosie.com/";

//Text Rotator
var rotateStop = false;
var theName = $(".name");
var pageJustLoaded = true;

inactiveButtons();

$(".rotate").textrotator({

	animation: "dissolve",
	separator: ",",
	speed: 1500,
	repeat: false,
	onFinish: setBlank

});

// Set Content to Hidden Input

$(function () {
	$('#save').click(function () {
		var mysave = $('.name').html();
		$('#hiddeninput').val(mysave);
	});
});

// Focus

// Focus on name

$('#label').click(function (event) {

	SetCaretAtEnd($(".name"));
	theName.select();
	selectAll();
	updateSize();
	theName.focus();

});

theName.focus(
	function () {
		SetCaretAtEnd($(".name"));
		removeCaret();
		theName.select();
		selectAll();

		updateSize();


		if (rotateStop == false) {
			theName.text("");
			rotateStop = true;

			SetCaretAtEnd($(".name"));
			//updateSize();
		}

	}
);

// Blank when done rotating

function setBlank() {

	setTimeout(function () {
		rotateStop = true;
		$('#container *').attr('contenteditable', 'true');
		SetCaretAtEnd($(".name"));
		setCaret();
		theName.text("");
		activeButtons();

	}, 0);
}

function setCaret() {
	theName.blur();
	theName.removeClass("caret-muted");
	theName.addClass("caret");
}

function removeCaret() {
	theName.removeClass("caret");
	theName.addClass("caret-muted");
}


// Rotate when press

$('body').on('keydown', function () {
	var input = theName;

	if (!input.is(':focus')) {
		theName.focus();
	}

});


function SetCaretAtEnd(elem) {
	var elemLen = 0;
	try {
		elem.value.length;
	} catch (e) { };
	// For IE Only
	if (document.selection) {
		// Set focus
		elem.focus();
		// Use IE Ranges
		var oSel = document.selection.createRange();
		// Reset position to 0 & then set at end
		oSel.moveStart('character', -elemLen);
		oSel.moveStart('character', elemLen);
		oSel.moveEnd('character', 0);
		oSel.select();
	} else if (elem.selectionStart || elem.selectionStart == '0') {
		// Firefox/Chrome
		elem.selectionStart = elemLen;
		elem.selectionEnd = elemLen;
		elem.focus();
	}
} // SetCaretAtEnd()

var cursorFocus = function () {
	var x = window.scrollX,
		y = window.scrollY;
	window.scrollTo(x, y);
	SetCaretAtEnd($(".name"));
}


// Update Sizes


function updateSize() {
	$(".name").bigText({
		verticalAlign: "bottom",
		maximumFontSize: 30,
		limitingDimension: "width",
		verticalAlign: "top"
	});
	updateHiddenSize();
}

function updateHiddenSize() {
	var t = $(".name").text();
	$(".hidden-name").text(t);

	var n = parseInt($(".name").css("font-size"));
	$(".hidden-name").css('font-size', parseInt(n * 2));
}

/*  BUTTONS */

function activeButtons() {
	$('#sharebutton').attr("disabled", false);

	$("#printbutton, #sharebutton, #sharebutton a, .sharePack, #firstbuttons .button").removeClass("disabled-button");
}

function inactiveButtons() {
	$('#sharebutton').attr("disabled", true);

	$("#printbutton, #sharebutton, #sharebutton a, .sharePack, #firstbuttons .button").addClass("disabled-button");
}

function checkLength() {
	if ($('.name').text().length == 0) {
		inactiveButtons();
	} else {
		activeButtons();
	}
}

/* **********************************
   ::    TYPING
********************************** */

$('.name').keydown(function (event) {

	updateSize();
	checkLength();

	if (event.keyCode == 10 || event.keyCode == 13) {
		event.preventDefault();

	}
	if (event.keyCode == 46 || event.keyCode == 8) {
		checkLength();
		updateSize();
	}

});



$('.name').keyup(function (event) {
	updateSize();
});



$(".name").on("paste", function () {
	updateSize();
});


function selectAll() {
	var el = document.getElementsByClassName("name")[0];
	var range = document.createRange();
	range.selectNodeContents(el);
	var sel = window.getSelection();
	sel.removeAllRanges();
	sel.addRange(range);
}

function setNewButtons() {

	$("div.button-group").css("display", "none");
	$("#newbuttons").css("display", "inline-flex");


}

/* 2 SHARE SCREEN */

// check if element is on screen
$.fn.isOnScreen = function () {
	var win = $(window);

	var viewport = {
		top: win.scrollTop(),
		left: win.scrollLeft()
	};
	viewport.right = viewport.left + win.width();
	viewport.bottom = viewport.top + win.height();

	var bounds = this.offset();
	bounds.right = bounds.left + this.outerWidth();
	bounds.bottom = bounds.top + this.outerHeight();

	return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
}

// set focus without scrolling 
var theCanvas;
var myImage;

function getFileName() {
	var fileStart = "SmokingKills";
	var fileName = fileStart.concat(currentCopy);
	return fileName;
}

function downloadImage() {
	var fileStart = "SmokingKills";
	var fileName = fileStart.concat(currentCopy);

	// ga('send', 'event', 'Downloads', 'download', currentCopy); // Commented out as GA not available

	$("<a>", {
		href: myImage,
		download: fileName
	})
		.on("click", function () {
			$(this).remove();
		})
		.appendTo("body")[0].click();
}

var shareWindow

function makeIconStartSpin(action) {
	if (action == "facebook") {
		$(".fa-facebook").addClass("fa-circle-o-notch fa-spin fa-fw");
	}
	if (action == "tweet") {
		$(".fa-twitter").addClass("fa-circle-o-notch fa-spin fa-fw");
	}
	if (action == "save") {
		$(".fa-download").addClass("fa-circle-o-notch fa-spin fa-fw");
	}

}

function makeIconStopSpin() {
	$(".sharePack").removeClass("fa-circle-o-notch fa-spin fa-fw");
	$(".shareIcon").removeClass("fa-circle-o-notch fa-spin fa-fw");
}

var tweetLink = "https://twitter.com/intent/tweet?text="
var facebookLink = "https://www.facebook.com/sharer/sharer.php?u="
var tumbleLink = "http://www.tumblr.com/share/link?url="

window.onload = function () {

	// refocus cursor
	window.onclick = function () {
		cursorFocus();
	}

	window.takeScreenShot = function (action) {


		currentCopy = $('.name').text();
		currentCopyURL = currentCopy.replace(/ /g, "-");

		// ga('send', 'event', action, currentCopy, currentCopy); // Commented out as GA not available

		// posting
		if (action == "tweet" || action == "facebook" || action == "tumble") {
			if (currentCopy != "") {
				shareWindow = window.open("", "_blank", "width=600, height=400, scrollbars=no");
				shareWindow.document.write('<div style="font-family:sans-serif;">Personalising your link…<div>');
			}
			else {
				var shareLink = ""
				if (action == "tweet") {
					shareLink = tweetLink + baseURL
				}
				if (action == "facebook") {
					shareLink = facebookLink + baseURL
				}
				if (action == "tumble") {
					shareLink = tumbleLink + baseURL
				}
				shareWindow = window.open(shareLink, "_blank", "width=600, height=400, scrollbars=no");
				return;
				window.focus();
			}
		}

		makeIconStartSpin(action);



		// get position of cig pack

		var doc = document.documentElement;
		var left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
		var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
		var div = $('#hidden-pack');

		// scroll lbImgto it
		var position = div.position();
		window.scrollTo(0, 0);

		//show fullsize image for screengrab
		$("#hidden-designer").css('display', 'block');
		updateSize();

		// take screengrab
		html2canvas(div, {
			onrendered: function (canvas) {

				$("#hidden-designer").css('display', 'none');
				theCanvas = canvas;
				myImage = canvas.toDataURL('image/png');

				if (action == "save") {
					makeIconStopSpin();
					downloadImage();
				}

				if (action == "tweet" || action == "facebook" || action == "tumble") {

					var dataURL = theCanvas.toDataURL();
					var fileName = getFileName()

					$.ajax({
						type: "POST",
						url: "save.php",
						data: {
							imgBase64: dataURL,
							name: currentCopy
						}
					}).done(function (o) {
						makeIconStopSpin();
						var file = fileName + ".png";
						var filePath = baseURL + "s.php?n=" + currentCopyURL;

						var defaultMessage = "Personalise a Health Warning";
						var hashtag = " %23WorldCancerDay ";
						var encodedMessage = encodeURI(defaultMessage) + hashtag + filePath;
						var shareLink = "";
						if (action == "tweet") {
							var shareLink = tweetLink + encodedMessage;
						}
						if (action == "facebook") {
							var shareLink = facebookLink + filePath;
						}
						if (action == "tumble") {
							var shareLink = tumbleLink + filePath;
						}
						shareWindow.location.href = shareLink;


					});

				}

			}
		});
		// scroll back to original position      
		window.scrollTo(left, top);
	}
}

// Simple print function for labels
function printLabels() {
	var name = $('.name').text().trim();

	if (!name) {
		alert('Please enter a name first!');
		return;
	}

	// Update only the print labels (not other instances of .name)
	$('#print-view .print-name').text(name);

	// Trigger print
	window.print();
}

// Recently Created dropdown toggle
$(document).ready(function() {
    $('#recently-created-toggle').click(function() {
        var content = $('#recently-created-content');
        var icon = $('.toggle-icon');
        
        if (content.is(':visible')) {
            content.slideUp(300);
            icon.removeClass('rotated');
        } else {
            content.slideDown(300);
            icon.addClass('rotated');
        }
    });
});