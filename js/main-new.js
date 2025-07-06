// Simplified main.js for restored functionality

/* Text Rotator and BigText plugins remain the same */
!function (a) { function f() { a("#namewrapper").css("display", "inline-block") } var b, c, d = { animation: "dissolve", separator: ",", speed: 2e3, repeat: !0, text: null, onFinish: function () { } }, e = function () { if (1 == rotateStop) return c.animation = "", clearInterval(b), !1 }; a.fx.step.textShadowBlur = function (b) { e(), a(b.elem).prop("textShadowBlur", b.now).css({ textShadow: "0 0 " + Math.floor(b.now) + "px black" }) }, a.fn.textrotator = function (g) { return c = a.extend({}, d, g), f(), e(), this.each(function () { e(); var d = a(this), f = [], g = c.text || d.text(); a.each(g.split(c.separator), function (a, b) { f.push(b) }), d.text(f[0]); var h, i = function () { return h = a.inArray(d.text(), f), h + 1 != f.length || (h = -1, 0 != c.repeat) || (clearInterval(b), c.onFinish(), !1) }, j = function () { switch (e(), c.animation) { case "dissolve": e(), d.animate({ textShadowBlur: 20, opacity: 0 }, 500, function () { i(), d.text(f[h + 1]).animate({ textShadowBlur: 0, opacity: 1 }, 500) }); break; case "fade": d.fadeOut(c.speed, function () { i(), d.text(f[h + 1]).fadeIn(c.speed) }) } }; b = setInterval(j, c.speed) }) } }(window.jQuery);

!function (t) { "use strict"; var e = { rotateText: null, fontSizeFactor: .8, maximumFontSize: null, limitingDimension: "both", horizontalAlign: "center", verticalAlign: "center", textAlign: "center", whiteSpace: "nowrap" }; t.fn.bigText = function (i) { return this.each(function () { i = t.extend({}, e, i); var o = t(this), r = o.parent(); o.css("visibility", "hidden"), o.css({ display: "inline-block", clear: "both", "float": "left", "font-size": 1e3 * i.fontSizeFactor + "px", "line-height": "1000px", "white-space": i.whiteSpace, "text-align": i.textAlign, position: "relative", padding: 0, margin: 0, left: "50%", top: "50%" }); var a = { left: parseInt(r.css("padding-left")), top: parseInt(r.css("padding-top")), right: parseInt(r.css("padding-right")), bottom: parseInt(r.css("padding-bottom")) }, n = { width: o.outerWidth(), height: o.outerHeight() }, h = {}; if (null !== i.rotateText) { if ("number" != typeof i.rotateText) throw "bigText error: rotateText value must be a number"; var s = "rotate(" + i.rotateText + "deg)"; h = { "-webkit-transform": s, "-ms-transform": s, "-moz-transform": s, "-o-transform": s, transform: s }, o.css(h); var l = Math.abs(Math.sin(i.rotateText * Math.PI / 180)), g = Math.abs(Math.cos(i.rotateText * Math.PI / 180)); n.width = o.outerWidth() * g + o.outerHeight() * l, n.height = o.outerWidth() * l + o.outerHeight() * g } var m, f = (r.innerWidth() - a.left - a.right) / n.width, c = (r.innerHeight() - a.top - a.bottom) / n.height; "width" === i.limitingDimension.toLowerCase() ? (m = Math.floor(1e3 * f), r.height(m)) : "height" === i.limitingDimension.toLowerCase() ? m = Math.floor(1e3 * c) : c > f ? m = Math.floor(1e3 * f) : f >= c && (m = Math.floor(1e3 * c)); var p = m * i.fontSizeFactor; null !== i.maximumFontSize && p > i.maximumFontSize && (p = i.maximumFontSize, m = p / i.fontSizeFactor), o.css({ "font-size": Math.floor(p) + "px", "line-height": Math.ceil(m) + "px", "margin-bottom": "0px", "margin-right": "0px" }), "height" === i.limitingDimension.toLowerCase() && r.width(o.width() + 4 + "px"); var d = {}; switch (i.verticalAlign.toLowerCase()) { case "top": d.top = "0%"; break; case "bottom": d.top = "100%", d["margin-top"] = Math.floor(-o.innerHeight()) + "px"; break; default: d["margin-top"] = Math.floor(-o.innerHeight() / 2) + "px" }switch (i.horizontalAlign.toLowerCase()) { case "left": d.left = "0%"; break; case "right": d.left = "100%", d["margin-left"] = Math.floor(-o.innerWidth()) + "px"; break; default: d["margin-left"] = Math.floor(-o.innerWidth() / 2) + "px" }o.css(d), o.css("visibility", "visible") }) } }(jQuery);

// Main functionality
var rotateStop = false;
var theName;

// Initialize
$(document).ready(function () {
    theName = $(".name");
    inactiveButtons();

    // Start text rotation
    $(".rotate").textrotator({
        animation: "dissolve",
        separator: ",",
        speed: 1500,
        repeat: false,
        onFinish: setBlank
    });

    // Click to edit
    $('#label').click(function (event) {
        focusName();
    });

    // Focus handling
    theName.focus(function () {
        focusName();
        if (rotateStop == false) {
            theName.text("");
            rotateStop = true;
        }
    });

    // Typing handlers
    $('.name').on('keydown', function (event) {
        setTimeout(updateSize, 10);
        setTimeout(checkLength, 10);

        if (event.keyCode == 10 || event.keyCode == 13) {
            event.preventDefault();
        }
    });

    $('.name').on('keyup', function (event) {
        setTimeout(updateSize, 10);
        setTimeout(checkLength, 10);
    });

    $(".name").on("paste", function () {
        setTimeout(updateSize, 10);
        setTimeout(checkLength, 10);
    });

    // Global click handler
    $(document).click(function (e) {
        if (!$(e.target).closest('.name').length && !theName.is(':focus')) {
            theName.focus();
        }
    });
});

function setBlank() {
    setTimeout(function () {
        rotateStop = true;
        SetCaretAtEnd($(".name"));
        theName.text("");
        activeButtons();
    }, 0);
}

function focusName() {
    SetCaretAtEnd($(".name"));
    theName.select();
    selectAll();
    updateSize();
    theName.focus();
}

function SetCaretAtEnd(elem) {
    if (!elem || !elem.length) return;

    var element = elem[0];
    var range, selection;

    if (document.createRange && window.getSelection) {
        range = document.createRange();
        range.selectNodeContents(element);
        range.collapse(false);
        selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
    } else if (document.selection && document.body.createTextRange) {
        range = document.body.createTextRange();
        range.moveToElementText(element);
        range.collapse(false);
        range.select();
    }
    element.focus();
}

function updateSize() {
    $(".name").bigText({
        verticalAlign: "bottom",
        maximumFontSize: 30,
        limitingDimension: "width",
        verticalAlign: "top"
    });
}

function activeButtons() {
    $("#actionbuttons .button").removeClass("disabled-button");
    $("#actionbuttons .button").prop("disabled", false);
}

function inactiveButtons() {
    $("#actionbuttons .button").addClass("disabled-button");
    $("#actionbuttons .button").prop("disabled", true);
}

function checkLength() {
    var text = $('.name').text().trim();
    if (text.length === 0) {
        inactiveButtons();
    } else {
        activeButtons();
    }
}

function selectAll() {
    var el = document.getElementsByClassName("name")[0];
    var range = document.createRange();
    range.selectNodeContents(el);
    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
}

// Download and Print functionality
function downloadAndPrint() {
    var name = $('.name').text().trim();

    if (!name) {
        alert('Please enter a name first!');
        return;
    }

    // Update all print labels with the name
    $('.print-name').text(name);

    // Create downloadable image
    createDownloadableImage(name);

    // Show print dialog after a short delay
    setTimeout(function () {
        if (confirm('Would you like to print the labels now?')) {
            window.print();
        }
    }, 1000);
}

function createDownloadableImage(name) {
    // Create a canvas for the cigarette pack image
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');

    // Set canvas size
    canvas.width = 800;
    canvas.height = 600;

    // Create background
    ctx.fillStyle = '#f0f0f0';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw cigarette pack background (simplified)
    ctx.fillStyle = '#8B4513';
    ctx.fillRect(250, 150, 300, 400);

    // Draw warning label background
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(270, 200, 260, 150);

    // Draw border
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 8;
    ctx.strokeRect(270, 200, 260, 150);

    // Add text
    ctx.fillStyle = '#000000';
    ctx.font = 'bold 32px Arial';
    ctx.textAlign = 'center';

    ctx.fillText('Smoking', 400, 240);
    ctx.fillText('kills', 400, 280);

    // Add personalized name
    ctx.font = 'bold 24px Arial';
    ctx.fillText(name, 400, 320);

    // Create download link
    var link = document.createElement('a');
    link.download = 'SmokingKills' + name.replace(/\s+/g, '') + '.png';
    link.href = canvas.toDataURL();

    // Trigger download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Make function globally available
window.downloadAndPrint = downloadAndPrint;
