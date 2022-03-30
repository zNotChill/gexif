// gexif - multi image mode
// user will upload 5 images and get the EXIF data for each image.
// this will work like the main script, just with mutliple images.

// Function to get exif data from image boxes file1-5
// this will handle multiple images, instead of just one. This will be called when the button with id 'btn' is clicked.
function getExif() {
	// Get the images from the image boxes file1-5
	var file1 = document.getElementById('file1').files[0];
	var file2 = document.getElementById('file2').files[0];
	var file3 = document.getElementById('file3').files[0];
	var file4 = document.getElementById('file4').files[0];
	var file5 = document.getElementById('file5').files[0];
	// Create a new reader for each image
	var reader1 = new FileReader();
	var reader2 = new FileReader();
	var reader3 = new FileReader();
	var reader4 = new FileReader();
	var reader5 = new FileReader();
	// Set the onload function for each reader
	reader1.onload = function(e) {
		// Create a new image and set that image to the image from the inputbox
		var img1 = new Image();
		img1.src = e.target.result;
		// Function to get our image data
		img1.onload = function() {
			EXIF.getData(img1, function() {
				// Our output div is id'd output
				var output = document.getElementById('output');
				// set our exif data
				output.innerHTML = '<h3>EXIF Data (Img1)</h3>';
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
					output.innerHTML += '<p>GPS Longitude: ' + EXIF.getTag(this, 'GPSLongitude') + '</p>';
				}
			});
		};
	};
	// Set the onload function for each reader
	reader2.onload = function(e) {
		// Create a new image and set that image to the image from the inputbox
		var img2 = new Image();
		img2.src = e.target.result;
		// Function to get our image data
		img2.onload = function() {
			EXIF.getData(img2, function() {
				// Our output div is id'd output
				var output = document.getElementById('output2');
				// set our exif data
				output.innerHTML = '<h3>EXIF Data (Img2)</h3>';
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
					output.innerHTML += '<p>GPS Longitude: ' + EXIF.getTag(this, 'GPSLongitude') + '</p>';
				}
			});
		};
	};
	// Set the onload function for each reader
	reader3.onload = function(e) {
		// Create a new image and set that image to the image from the inputbox
		var img3 = new Image();
		img3.src = e.target.result;
		// Function to get our image data
		img3.onload = function() {
			EXIF.getData(img3, function() {
				// Our output div is id'd output
				var output = document.getElementById('output3');
				// set our exif data
				output.innerHTML = '<h3>EXIF Data (Img3)</h3>';
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
					output.innerHTML += '<p>GPS Longitude: ' + EXIF.getTag(this, 'GPSLongitude') + '</p>';
				}
			});
		};
	};
	// Set the onload function for each reader
	reader4.onload = function(e) {
		// Create a new image and set that image to the image from the inputbox
		var img4 = new Image();
		img4.src = e.target.result;
		// Function to get our image data
		img4.onload = function() {
			EXIF.getData(img4, function() {
				// Our output div is id'd output
				var output = document.getElementById('output4');
				// set our exif data
				output.innerHTML = '<h3>EXIF Data (Img4)</h3>';
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
					output.innerHTML += '<p>GPS Longitude: ' + EXIF.getTag(this, 'GPSLongitude') + '</p>';
				}
			});
		};
	};
	// Set the onload function for each reader
	reader5.onload = function(e) {
		// Create a new image and set that image to the image from the inputbox
		var img5 = new Image();
		img5.src = e.target.result;
		// Function to get our image data
		img5.onload = function() {
			EXIF.getData(img5, function() {
				// Our output div is id'd output
				var output = document.getElementById('output5');
				// set our exif data
				output.innerHTML = '<h3>EXIF Data (Img5)</h3>';
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
					output.innerHTML += '<p>GPS Longitude: ' + EXIF.getTag(this, 'GPSLongitude') + '</p>';
				}
			});
		};
	};	
	// Finally, throw away all the image data
	reader1.readAsDataURL(file1);
	reader2.readAsDataURL(file2);
	reader3.readAsDataURL(file3);
	reader4.readAsDataURL(file4);
	reader5.readAsDataURL(file5);
	// Create a new file
	var file = new Blob([document.getElementById('output').innerHTML + '\n' + document.getElementById('output2').innerHTML + '\n' + document.getElementById('output3').innerHTML + '\n' + document.getElementById('output4').innerHTML + '\n' + document.getElementById('output5').innerHTML], {type: 'text/plain'});
	// Create a button to donwliad the file
	var btn = document.createElement('a');
	// Set the download attribute to the file name
	btn.download = 'exif.txt';
	// Set the href attribute to the file
	btn.href = window.URL.createObjectURL(file);
	// Append the button to the body
	document.body.appendChild(btn);
	
}