// Simplified and working version
$(document).ready(function () {
    var rotateStop = false;
    var theName = $('.name');

    // Make name wrapper visible immediately
    $('#namewrapper').show();

    // Initial state
    inactiveButtons();

    // Start the text rotation animation
    startTextRotation();

    // Click label to focus on name input
    $('#label, .name').on('click', function (e) {
        e.stopPropagation();
        focusNameInput();
    });

    // Handle typing
    theName.on('input keyup paste', function () {
        setTimeout(function () {
            updateSize();
            checkNameLength();
        }, 10);
    });

    // Prevent enter key from adding line breaks
    theName.on('keydown', function (e) {
        if (e.keyCode === 13) {
            e.preventDefault();
            return false;
        }
    });

    // Functions
    function startTextRotation() {
        var names = ["Mum", "Bae", "Grandad", "Dave"];
        var currentIndex = 0;

        function rotateText() {
            if (rotateStop) return;

            theName.fadeOut(300, function () {
                theName.text(names[currentIndex]);
                theName.fadeIn(300);
                currentIndex = (currentIndex + 1) % names.length;

                if (!rotateStop) {
                    setTimeout(rotateText, 1500);
                } else {
                    // Animation finished, enable editing
                    theName.text('');
                    theName.attr('contenteditable', 'true');
                    focusNameInput();
                    activeButtons();
                }
            });
        }

        // Start rotation
        setTimeout(function () {
            rotateStop = true; // Stop after first cycle
            rotateText();
        }, 2000);
    }

    function focusNameInput() {
        if (!rotateStop) {
            rotateStop = true;
            theName.text('');
        }

        theName.attr('contenteditable', 'true');
        theName.focus();

        // Set cursor at end
        if (window.getSelection && document.createRange) {
            var range = document.createRange();
            range.selectNodeContents(theName[0]);
            range.collapse(false);
            var selection = window.getSelection();
            selection.removeAllRanges();
            selection.addRange(range);
        }

        updateSize();
        checkNameLength();
    }

    function updateSize() {
        // Simple text sizing based on length
        var text = theName.text();
        var length = text.length;
        var fontSize;

        if (length <= 4) {
            fontSize = '30px';
        } else if (length <= 8) {
            fontSize = '25px';
        } else if (length <= 12) {
            fontSize = '20px';
        } else {
            fontSize = '16px';
        }

        theName.css('font-size', fontSize);
    }

    function checkNameLength() {
        var text = theName.text().trim();
        if (text.length > 0) {
            activeButtons();
        } else {
            inactiveButtons();
        }
    }

    function activeButtons() {
        $('#actionbuttons .button').removeClass('disabled-button').prop('disabled', false);
    }

    function inactiveButtons() {
        $('#actionbuttons .button').addClass('disabled-button').prop('disabled', true);
    }

    // Global click handler to focus name input
    $(document).on('click', function (e) {
        if (!$(e.target).closest('#actionbuttons, .print-view').length) {
            if (rotateStop && !theName.is(':focus')) {
                theName.focus();
            }
        }
    });
});

// Download and Print functionality
function downloadAndPrint() {
    var name = $('.name').text().trim();

    if (!name) {
        alert('Please enter a name first!');
        return;
    }

    // Show loading state
    var button = $('#actionbuttons .button');
    var originalText = button.html();
    button.html('<i class="fa fa-spinner fa-spin"></i> Processing...');
    button.prop('disabled', true);

    // Update print labels
    $('.print-name').each(function () {
        $(this).text(name);
        // Apply same font sizing as main label
        var length = name.length;
        var fontSize;
        if (length <= 4) {
            fontSize = '26pt';
        } else if (length <= 8) {
            fontSize = '22pt';
        } else if (length <= 12) {
            fontSize = '18pt';
        } else {
            fontSize = '14pt';
        }
        $(this).css('font-size', fontSize);
    });

    // Create and download image
    createDownloadImage(name);

    // Reset button and show print option
    setTimeout(function () {
        button.html(originalText);
        button.prop('disabled', false);

        if (confirm('Image downloaded! Would you like to print the labels now?')) {
            window.print();
        }
    }, 1000);
}

function createDownloadImage(name) {
    // Create a more sophisticated image using the actual pack design
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');

    // Set canvas size for better quality
    canvas.width = 1200;
    canvas.height = 900;

    // Create gradient background
    var gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, '#f5f5f5');
    gradient.addColorStop(1, '#e8e8e8');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw cigarette pack outline
    ctx.fillStyle = '#8B4513';
    ctx.fillRect(350, 200, 500, 600);

    // Add some shading
    ctx.fillStyle = 'rgba(0,0,0,0.1)';
    ctx.fillRect(370, 220, 20, 560);
    ctx.fillRect(350, 220, 480, 20);

    // Draw warning label background
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(400, 300, 400, 200);

    // Draw label border
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 12;
    ctx.strokeRect(400, 300, 400, 200);

    // Add warning text
    ctx.fillStyle = '#000000';
    ctx.font = 'bold 48px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    ctx.fillText('Smoking', 600, 350);
    ctx.fillText('kills', 600, 410);

    // Add personalized name
    var fontSize = name.length <= 4 ? 40 : name.length <= 8 ? 32 : name.length <= 12 ? 28 : 24;
    ctx.font = `bold ${fontSize}px Arial`;
    ctx.fillText(name, 600, 460);

    // Add website attribution
    ctx.font = '16px Arial';
    ctx.fillStyle = '#666';
    ctx.fillText('PersonalisedHealthWarnings.com', 600, 850);

    // Create download
    var link = document.createElement('a');
    link.download = `SmokingKills_${name.replace(/\s+/g, '_')}.png`;
    link.href = canvas.toDataURL('image/png');

    // Trigger download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Make functions globally available
window.downloadAndPrint = downloadAndPrint;
