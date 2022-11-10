// set things up
var app = Application.currentApplication();
app.includeStandardAdditions = true;
var notesApp = Application("Notes");
notesApp.includeStandardAdditions = true;

// choose which notes
var notes = notesApp.notes;
	// choose save location
	var saveWhere = app.chooseFolder().toString();


	for(var i=0; i<notes.length; i++) {
		console.log("progress", notes.length - i);
		var filename = saveWhere+"/"+notes[i].name()+".html";
		var str = $.NSString.alloc.initWithUTF8String(notes[i].body());
		str.writeToFileAtomically(filename, true);
	}