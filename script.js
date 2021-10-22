$(document).ready(function() {
	$("#weaponDescription").hide();
	$("#weaponButton").click(function() {
		$("#weaponDescription").fadeToggle(1000);
	});

	$("#statsDescription").hide();
	$("#statsButton").click(function() {
		$("#statsDescription").fadeToggle(1000);
	});

	$("#stratsDescription").hide();
	$("#stratsButton").click(function() {
		$("#stratsDescription").fadeToggle(1000);
	});
});