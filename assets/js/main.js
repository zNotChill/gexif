// Main script for gexif
//
// This script will get an image from the input box with id 'file' and will get EXIF data from that image when the button with id 'btn' is clicked.
//
// The output will be in the div with id 'output'
//

// Function to throw away the image after we're done with it. We don't want to store other's images.
function throwAway() {
	// Get the image from the input box
	var file = document.querySelector('#file').files[0];
	// Delete the image
	try {
		file.delete();
	} catch (error) {
		return
	}
}

// Get the image from the input box when button is clicked and get EXIF data
function getExif() {
	var file = document.querySelector('#file').files[0];
	var reader = new FileReader();
	reader.onload = function(e) {
		// Create a new image and set that image to the image from the inputbox
		var img = new Image();
		img.src = e.target.result;
		// Function to get our image data
		img.onload = function() {
			EXIF.getData(img, function() {
				// Our output div is id'd output
				var output = document.querySelector('#output');
				// set our exif data
				output.innerHTML = '<h3>EXIF Data</h3>';
				output.innerHTML += '<p>Make: ' + EXIF.getTag(this, 'Make') + '</p>';
				output.innerHTML += '<p>Model: ' + EXIF.getTag(this, 'Model') + '</p>';
				output.innerHTML += '<p>Date: ' + EXIF.getTag(this, 'DateTime') + '</p>';
				output.innerHTML += '<p>Aperture: ' + EXIF.getTag(this, 'FNumber') + '</p>';
				output.innerHTML += '<p>ISO: ' + EXIF.getTag(this, 'ISOSpeedRatings') + '</p>';
				output.innerHTML += '<p>Exposure: ' + EXIF.getTag(this, 'ExposureTime') + '</p>';
				// If there is GPS data, display it. If not, say there's no GPS data.
				if (EXIF.getTag(this, 'GPSLatitude') == undefined) {
					output.innerHTML += '<p>No GPS data found for this image.</p>';
				}
				else {
					output.innerHTML += '<p>GPS Latitude: ' + EXIF.getTag(this, 'GPSLatitude') + '</p>';
					output.innerHTML += '<p>GPS Longitude: ' + EXIF.getTag(this, 'GPSLongitude') + '</p>'; // If there is GPS data, get the coordinates
				}
				output.innerHTML += '<p>Need extra data? <button class="btn" id="btn" onclick="extraExifData()">Get Extra Data</button></p>';

			});
		};
	};
	// No idea what this is but it's needed for it to work properly
	// TODO: figure out what this does.
	reader.readAsDataURL(file);
	// Throw away the image data after we're done with it.
	throwAway();
}

// Get extra information that one might not want
function extraExifData() {
	// This function is *exactly* the same as the one above. It just displays other information.
	var file = document.querySelector('#file').files[0];
	var reader = new FileReader();
	reader.onload = function(e) {
		var img = new Image();
		img.src = e.target.result;
		img.onload = function() {
			EXIF.getData(img, function() {
				// get our extra exif data
				var output = document.querySelector('#extradata');
				output.innerHTML = '<h3>Extra EXIF Data</h3>';
				output.innerHTML += '<p>Focal Length: ' + EXIF.getTag(this, 'FocalLength') + '</p>';
				output.innerHTML += '<p>Flash: ' + EXIF.getTag(this, 'Flash') + '</p>';
				output.innerHTML += '<p>GPS Altitude: ' + EXIF.getTag(this, 'GPSAltitude') + '</p>';
				output.innerHTML += '<p>GPS Altitude Ref: ' + EXIF.getTag(this, 'GPSAltitudeRef') + '</p>';
				output.innerHTML += '<p>GPS Date: ' + EXIF.getTag(this, 'GPSDateStamp') + '</p>';
				output.innerHTML += '<p>GPS Time: ' + EXIF.getTag(this, 'GPSTimeStamp') + '</p>';
				output.innerHTML += '<p>GPS Processing Method: ' + EXIF.getTag(this, 'GPSProcessingMethod') + '</p>';
			});
		};
	};
	// Again, zero idea what this does, but it's needed.
	reader.readAsDataURL(file);
	// Throw away the image data after we're done with it.
	throwAway();
}
