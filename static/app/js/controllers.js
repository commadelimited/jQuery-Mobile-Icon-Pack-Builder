// Copyright 2012 Grant Gordon
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

'use strict';

/* Controllers */


function FontBuilderCtrl($scope) {
	$scope.glyphs = glyphs;

	// Mark or unmark an icon as selected
	$scope.toggleSelected = function (glyph) {
		if (glyph.selected) {
			glyph.selected = false;
			glyph.selectedclass = '';

		} else if (!glyph.selected) {
			glyph.selected = true;
			glyph.selectedclass = 'selected';
		}

	};

	// Select all icons
	$scope.selectAll = function () {
		angular.forEach(glyphs, function (glyph) {
			glyph.selected = true;
			glyph.selectedclass = 'selected';
		});
	};

	// Kill all selections
	$scope.selectNone = function () {
		angular.forEach(glyphs, function (glyph) {
			glyph.selected = false;
			glyph.selectedclass = '';
		});
	};

	// Make the call to download the font kit
	$scope.downloadNow = function () {
		var selectedGlyphs = [];

		// Figure out which glyphs are selected
		angular.forEach(glyphs, function (glyph) {
			if (glyph.selected) {
				selectedGlyphs.push(glyph);
			}
		});

		// Make the request if there are any selected
		if (selectedGlyphs.length > 0) {
			$.ajax({
				url: "/api/createpack",
				type: 'POST',
				data: {
					json_data: JSON.stringify(selectedGlyphs)
				},
				context: document.body
			}).done(function (url) {
				window.location.href = url;
			});
		} else {

			// Prevent user from making request if no icons are selected
			window.alert("Please select at least one icon.");
		}
	};
}

// Stand-in for a proper model resource
var glyphs =
[
	{name:"glass", uni:"000", marginTop:"2px", marginLeft: "2px"},
	{name:"music", uni:"001", marginTop:"1px", marginLeft: "1px"},
	{name:"search", uni:"002", marginTop:"1px", marginLeft: "2px"},
	{name:"envelope", uni:"003", marginTop:"1px", marginLeft: "2px"},
	{name:"heart", uni:"004", marginTop:"2px", marginLeft: "2px"},
	{name:"star", uni:"005", marginTop:"2px", marginLeft: "2px"},
	{name:"star-empty", uni:"006", marginTop:"2px", marginLeft: "2px"},
	{name:"user", uni:"007", marginTop:"1px", marginLeft: "2px"},
	{name:"film", uni:"008", marginTop:"1px", marginLeft: "1px"},
	{name:"th-large", uni:"009", marginTop:"2px", marginLeft: "2px"},
	{name:"th", uni:"00a", marginTop:"2px", marginLeft: "2px"},
	{name:"th-list", uni:"00b", marginTop:"2px", marginLeft: "2px"},
	{name:"ok", uni:"00c", marginTop:"1px", marginLeft: "2px"},
	{name:"remove", uni:"00d", marginTop:"1px", marginLeft: "3px"},
	{name:"zoom-in", uni:"00e", marginTop:"1px", marginLeft: "2px"},
	{name:"zoom-out", uni:"010", marginTop:"1px", marginLeft: "2px"},
	{name:"off", uni:"011", marginTop:"1px", marginLeft: "3px"},
	{name:"signal", uni:"012", marginTop:"1px", marginLeft: "1px"},
	{name:"cog", uni:"013", marginTop:"1px", marginLeft: "3px"},
	{name:"trash", uni:"014", marginTop:"1px", marginLeft: "3px"},
	{name:"home", uni:"015", marginTop:"1px", marginLeft: "2px"},
	{name:"file", uni:"016", marginTop:"1px", marginLeft: "2px"},
	{name:"time", uni:"017", marginTop:"2px", marginLeft: "3px"},
	{name:"road", uni:"018", marginTop:"1px", marginLeft: "1px"},
	{name:"download-alt", uni:"019", marginTop:"0px", marginLeft: "2px"},
	{name:"download", uni:"01a", marginTop:"2px", marginLeft: "3px"},
	{name:"upload", uni:"01b", marginTop:"2px", marginLeft: "3px"},
	{name:"inbox", uni:"01c", marginTop:"1px", marginLeft: "3px"},
	{name:"play-circle", uni:"01d", marginTop:"2px", marginLeft: "3px"},
	{name:"repeat", uni:"01e", marginTop:"2px", marginLeft: "3px"},
	{name:"refresh", uni:"021", marginTop:"2px", marginLeft: "3px"},
	{name:"list-alt", uni:"022", marginTop:"2px", marginLeft: "2px"},
	{name:"lock", uni:"023", marginTop:"2px", marginLeft: "3px"},
	{name:"flag", uni:"024", marginTop:"2px", marginLeft: "2px"},
	{name:"headphones", uni:"025", marginTop:"2px", marginLeft: "2px"},
	{name:"volume-off", uni:"026", marginTop:"2px", marginLeft: "1px"},
	{name:"volume-down", uni:"027", marginTop:"2px", marginLeft: "1px"},
	{name:"volume-up", uni:"028", marginTop:"2px", marginLeft: "3px"},
	{name:"qrcode", uni:"029", marginTop:"2px", marginLeft: "2px"},
	{name:"barcode", uni:"02a", marginTop:"2px", marginLeft: "2px"},
	{name:"tag", uni:"02b", marginTop:"2px", marginLeft: "3px"},
	{name:"tags", uni:"02c", marginTop:"2px", marginLeft: "2px"},
	{name:"book", uni:"02d", marginTop:"1px", marginLeft: "2px"},
	{name:"bookmark", uni:"02e", marginTop:"2px", marginLeft: "2px"},
	{name:"print", uni:"02f", marginTop:"1px", marginLeft: "2px"},
	{name:"camera", uni:"030", marginTop:"2px", marginLeft: "1px"},
	{name:"font", uni:"031", marginTop:"1px", marginLeft: "2px"},
	{name:"bold", uni:"032", marginTop:"2px", marginLeft: "3px"},
	{name:"italic", uni:"033", marginTop:"2px", marginLeft: "3px"},
	{name:"text-height", uni:"034", marginTop:"2px", marginLeft: "2px"},
	{name:"text-width", uni:"035", marginTop:"2px", marginLeft: "3px"},
	{name:"align-left", uni:"036", marginTop:"2px", marginLeft: "2px"},
	{name:"align-center", uni:"037", marginTop:"2px", marginLeft: "2px"},
	{name:"align-right", uni:"038", marginTop:"2px", marginLeft: "1px"},
	{name:"align-justify", uni:"039", marginTop:"2px", marginLeft: "2px"},
	{name:"list", uni:"03a", marginTop:"2px", marginLeft: "2px"},
	{name:"indent-left", uni:"03b", marginTop:"2px", marginLeft: "2px"},
	{name:"indent-right", uni:"03c", marginTop:"2px", marginLeft: "2px"},
	{name:"facetime-video", uni:"03d", marginTop:"2px", marginLeft: "1px"},
	{name:"picture", uni:"03e", marginTop:"2px", marginLeft: "1px"},
	{name:"pencil", uni:"040", marginTop:"2px", marginLeft: "3px"},
	{name:"map-marker", uni:"041", marginTop:"2px", marginLeft: "2px"},
	{name:"adjust", uni:"042", marginTop:"2px", marginLeft: "3px"},
	{name:"tint", uni:"043", marginTop:"3px", marginLeft: "3px"},
	{name:"edit", uni:"044", marginTop:"3px", marginLeft: "3px"},
	{name:"share", uni:"045", marginTop:"3px", marginLeft: "3px"},
	{name:"check", uni:"046", marginTop:"3px", marginLeft: "3px"},
	{name:"move", uni:"047", marginTop:"2px", marginLeft: "2px"},
	{name:"step-backward", uni:"048", marginTop:"2px", marginLeft: "2px"},
	{name:"fast-backward", uni:"049", marginTop:"2px", marginLeft: "2px"},
	{name:"backward", uni:"04a", marginTop:"2px", marginLeft: "0px"},
	{name:"play", uni:"04b", marginTop:"2px", marginLeft: "5px"},
	{name:"pause", uni:"04c", marginTop:"2px", marginLeft: "3px"},
	{name:"stop", uni:"04d", marginTop:"2px", marginLeft: "3px"},
	{name:"forward", uni:"04e", marginTop:"2px", marginLeft: "4px"},
	{name:"fast-forward", uni:"050", marginTop:"2px", marginLeft: "2px"},
	{name:"step-forward", uni:"051", marginTop:"2px", marginLeft: "2px"},
	{name:"eject", uni:"052", marginTop:"1px", marginLeft: "3px"},
	{name:"chevron-left", uni:"053", marginTop:"2px", marginLeft: "1px"},
	{name:"chevron-right", uni:"054", marginTop:"2px", marginLeft: "3px"},
	{name:"plus-sign", uni:"055", marginTop:"2px", marginLeft: "3px"},
	{name:"minus-sign", uni:"056", marginTop:"2px", marginLeft: "3px"},
	{name:"remove-sign", uni:"057", marginTop:"2px", marginLeft: "3px"},
	{name:"ok-sign", uni:"058", marginTop:"2px", marginLeft: "3px"},
	{name:"question-sign", uni:"059", marginTop:"2px", marginLeft: "3px"},
	{name:"info-sign", uni:"05a", marginTop:"2px", marginLeft: "3px"},
	{name:"screenshot", uni:"05b", marginTop:"2px", marginLeft: "3px"},
	{name:"remove-circle", uni:"05c", marginTop:"2px", marginLeft: "3px"},
	{name:"ok-circle", uni:"05d", marginTop:"2px", marginLeft: "3px"},
	{name:"ban-circle", uni:"05e", marginTop:"2px", marginLeft: "3px"},
	{name:"arrow-left", uni:"060", marginTop:"1px", marginLeft: "2px"},
	{name:"arrow-right", uni:"061", marginTop:"1px", marginLeft: "3px"},
	{name:"arrow-up", uni:"062", marginTop:"1px", marginLeft: "2px"},
	{name:"arrow-down", uni:"063", marginTop:"2px", marginLeft: "2px"},
	{name:"share-alt", uni:"064", marginTop:"2px", marginLeft: "2px"},
	{name:"resize-full", uni:"065", marginTop:"2px", marginLeft: "3px"},
	{name:"resize-small", uni:"066", marginTop:"2px", marginLeft: "3px"},
	{name:"plus", uni:"067", marginTop:"2px", marginLeft: "3px"},
	{name:"minus", uni:"068", marginTop:"2px", marginLeft: "2px"},
	{name:"asterisk", uni:"069", marginTop:"2px", marginLeft: "2px"},
	{name:"exclamation-sign", uni:"06a", marginTop:"2px", marginLeft: "3px"},
	{name:"gift", uni:"06b", marginTop:"2px", marginLeft: "3px"},
	{name:"leaf", uni:"06c", marginTop:"2px", marginLeft: "2px"},
	{name:"fire", uni:"06d", marginTop:"1px", marginLeft: "3px"},
	{name:"eye-open", uni:"06e", marginTop:"2px", marginLeft: "2px"},
	{name:"eye-close", uni:"070", marginTop:"2px", marginLeft: "2px"},
	{name:"warning-sign", uni:"071", marginTop:"2px", marginLeft: "2px"},
	{name:"plane", uni:"072", marginTop:"2px", marginLeft: "2px"},
	{name:"calendar", uni:"073", marginTop:"2px", marginLeft: "2px"},
	{name:"random", uni:"074", marginTop:"2px", marginLeft: "2px"},
	{name:"comment", uni:"075", marginTop:"1px", marginLeft: "2px"},
	{name:"magnet", uni:"076", marginTop:"2px", marginLeft: "3px"},
	{name:"chevron-up", uni:"077", marginTop:"1px", marginLeft: "2px"},
	{name:"chevron-down", uni:"078", marginTop:"2px", marginLeft: "2px"},
	{name:"retweet", uni:"079", marginTop:"1px", marginLeft: "1px"},
	{name:"shopping-cart", uni:"07a", marginTop:"2px", marginLeft: "2px"},
	{name:"folder-close", uni:"07b", marginTop:"2px", marginLeft: "2px"},
	{name:"folder-open", uni:"07c", marginTop:"2px", marginLeft: "2px"},
	{name:"resize-vertical", uni:"07d", marginTop:"2px", marginLeft: "3px"},
	{name:"resize-horizontal", uni:"07e", marginTop:"2px", marginLeft: "2px"},
	{name:"bar-chart", uni:"080", marginTop:"2px", marginLeft: "1px"},
	{name:"twitter-sign", uni:"081", marginTop:"2px", marginLeft: "3px"},
	{name:"facebook-sign", uni:"082", marginTop:"2px", marginLeft: "3px"},
	{name:"camera-retro", uni:"083", marginTop:"2px", marginLeft: "2px"},
	{name:"key", uni:"084", marginTop:"1px", marginLeft: "2px"},
	{name:"cogs", uni:"085", marginTop:"1px", marginLeft: "1px"},
	{name:"comments", uni:"086", marginTop:"1px", marginLeft: "2px"},
	{name:"thumbs-up", uni:"087", marginTop:"2px", marginLeft: "3px"},
	{name:"thumbs-down", uni:"088", marginTop:"2px", marginLeft: "3px"},
	{name:"star-half", uni:"089", marginTop:"2px", marginLeft: "-4px"},
	{name:"heart-empty", uni:"08a", marginTop:"2px", marginLeft: "2px"},
	{name:"signout", uni:"08b", marginTop:"2px", marginLeft: "4px"},
	{name:"linkedin-sign", uni:"08c", marginTop:"2px", marginLeft: "3px"},
	{name:"pushpin", uni:"08d", marginTop:"2px", marginLeft: "2px"},
	{name:"external-link", uni:"08e", marginTop:"2px", marginLeft: "3px"},
	{name:"signin", uni:"090", marginTop:"2px", marginLeft: "2px"},
	{name:"trophy", uni:"091", marginTop:"2px", marginLeft: "2px"},
	{name:"github-sign", uni:"092", marginTop:"2px", marginLeft: "3px"},
	{name:"upload-alt", uni:"093", marginTop:"0px", marginLeft: "2px"},
	{name:"lemon", uni:"094", marginTop:"2px", marginLeft: "3px"},
	{name:"phone", uni:"095", marginTop:"2px", marginLeft: "2px"},
	{name:"check-empty", uni:"096", marginTop:"2px", marginLeft: "3px"},
	{name:"bookmark-empty", uni:"097", marginTop:"2px", marginLeft: "1px"},
	{name:"phone-sign", uni:"098", marginTop:"2px", marginLeft: "3px"},
	{name:"twitter", uni:"099", marginTop:"2px", marginLeft: "2px"},
	{name:"facebook", uni:"09a", marginTop:"2px", marginLeft: "3px"},
	{name:"github", uni:"09b", marginTop:"2px", marginLeft: "3px"},
	{name:"unlock", uni:"09c", marginTop:"2px", marginLeft: "2px"},
	{name:"credit-card", uni:"09d", marginTop:"2px", marginLeft: "1px"},
	{name:"rss", uni:"09e", marginTop:"2px", marginLeft: "3px"},
	{name:"hdd", uni:"0a0", marginTop:"1px", marginLeft: "3px"},
	{name:"bullhorn", uni:"0a1", marginTop:"2px", marginLeft: "1px"},
	{name:"bell", uni:"0a2", marginTop:"2px", marginLeft: "2px"},
	{name:"certificate", uni:"0a3", marginTop:"2px", marginLeft: "3px"},
	{name:"hand-right", uni:"0a4", marginTop:"1px", marginLeft: "2px"},
	{name:"hand-left", uni:"0a5", marginTop:"1px", marginLeft: "1px"},
	{name:"hand-up", uni:"0a6", marginTop:"1px", marginLeft: "2px"},
	{name:"hand-down", uni:"0a7", marginTop:"2px", marginLeft: "2px"},
	{name:"circle-arrow-left", uni:"0a8", marginTop:"2px", marginLeft: "3px"},
	{name:"circle-arrow-right", uni:"0a9", marginTop:"2px", marginLeft: "3px"},
	{name:"circle-arrow-up", uni:"0aa", marginTop:"2px", marginLeft: "3px"},
	{name:"circle-arrow-down", uni:"0ab", marginTop:"2px", marginLeft: "3px"},
	{name:"globe", uni:"0ac", marginTop:"2px", marginLeft: "3px"},
	{name:"wrench", uni:"0ad", marginTop:"1px", marginLeft: "2px"},
	{name:"tasks", uni:"0ae", marginTop:"2px", marginLeft: "2px"},
	{name:"filter", uni:"0b0", marginTop:"2px", marginLeft: "2px"},
	{name:"briefcase", uni:"0b1", marginTop:"1px", marginLeft: "2px"},
	{name:"fullscreen", uni:"0b2", marginTop:"2px", marginLeft: "3px"},
	{name:"group", uni:"0c0", marginTop:"2px", marginLeft: "1px"},
	{name:"link", uni:"0c1", marginTop:"2px", marginLeft: "2px"},
	{name:"cloud", uni:"0c2", marginTop:"2px", marginLeft: "1px"},
	{name:"beaker", uni:"0c3", marginTop:"1px", marginLeft: "2px"},
	{name:"cut", uni:"0c4", marginTop:"1px", marginLeft: "2px"},
	{name:"copy", uni:"0c5", marginTop:"2px", marginLeft: "1px"},
	{name:"paper-clip", uni:"0c6", marginTop:"2px", marginLeft: "2px"},
	{name:"save", uni:"0c7", marginTop:"2px", marginLeft: "3px"},
	{name:"sign-blank", uni:"0c8", marginTop:"2px", marginLeft: "3px"},
	{name:"reorder", uni:"0c9", marginTop:"2px", marginLeft: "3px"},
	{name:"list-ul", uni:"0ca", marginTop:"2px", marginLeft: "2px"},
	{name:"list-ol", uni:"0cb", marginTop:"2px", marginLeft: "2px"},
	{name:"strikethrough", uni:"0cc", marginTop:"2px", marginLeft: "2px"},
	{name:"underline", uni:"0cd", marginTop:"2px", marginLeft: "3px"},
	{name:"table", uni:"0ce", marginTop:"2px", marginLeft: "2px"},
	{name:"magic", uni:"0d0", marginTop:"3px", marginLeft: "3px"},
	{name:"truck", uni:"0d1", marginTop:"2px", marginLeft: "1px"},
	{name:"pinterest", uni:"0d2", marginTop:"2px", marginLeft: "3px"},
	{name:"pinterest-sign", uni:"0d3", marginTop:"2px", marginLeft: "3px"},
	{name:"google-plus-sign", uni:"0d4", marginTop:"2px", marginLeft: "3px"},
	{name:"google-plus", uni:"0d5", marginTop:"2px", marginLeft: "3px"},
	{name:"money", uni:"0d6", marginTop:"2px", marginLeft: "2px"},
	{name:"caret-down", uni:"0d7", marginTop:"5px", marginLeft: "3px"},
	{name:"caret-up", uni:"0d8", marginTop:"0px", marginLeft: "3px"},
	{name:"caret-left", uni:"0d9", marginTop:"2px", marginLeft: "-4px"},
	{name:"caret-right", uni:"0da", marginTop:"2px", marginLeft: "11px"},
	{name:"columns", uni:"0db", marginTop:"2px", marginLeft: "3px"},
	{name:"sort", uni:"0dc", marginTop:"2px", marginLeft: "3px"},
	{name:"sort-down", uni:"0dd", marginTop:"2px", marginLeft: "2px"},
	{name:"sort-up", uni:"0de", marginTop:"2px", marginLeft: "2px"},
	{name:"envelope-alt", uni:"0e0", marginTop:"2px", marginLeft: "2px"},
	{name:"linkedin", uni:"0e1", marginTop:"2px", marginLeft: "3px"},
	{name:"undo", uni:"0e2", marginTop:"2px", marginLeft: "3px"},
	{name:"legal", uni:"0e3", marginTop:"1px", marginLeft: "1px"},
	{name:"dashboard", uni:"0e4", marginTop:"1px", marginLeft: "2px"},
	{name:"comment-alt", uni:"0e5", marginTop:"1px", marginLeft: "2px"},
	{name:"comments-alt", uni:"0e6", marginTop:"1px", marginLeft: "2px"},
	{name:"bolt", uni:"0e7", marginTop:"2px", marginLeft: "3px"},
	{name:"sitemap", uni:"0e8", marginTop:"1px", marginLeft: "2px"},
	{name:"umbrella", uni:"0e9", marginTop:"2px", marginLeft: "3px"},
	{name:"paste", uni:"0ea", marginTop:"2px", marginLeft: "2px"},
	{name:"lightbulb", uni:"0eb", marginTop:"2px", marginLeft: "3px"},
	{name:"exchange", uni:"0ec", marginTop:"2px", marginLeft: "2px"},
	{name:"cloud-download", uni:"0ed", marginTop:"2px", marginLeft: "1px"},
	{name:"cloud-upload", uni:"0ee", marginTop:"0px", marginLeft: "0px"},
	{name:"user-md", uni:"0f0", marginTop:"1px", marginLeft: "3px"},
	{name:"stethoscope", uni:"0f1", marginTop:"2px", marginLeft: "3px"},
	{name:"suitcase", uni:"0f2", marginTop:"1px", marginLeft: "2px"},
	{name:"bell-alt", uni:"0f3", marginTop:"2px", marginLeft: "3px"},
	{name:"coffee", uni:"0f4", marginTop:"2px", marginLeft: "2px"},
	{name:"food", uni:"0f5", marginTop:"2px", marginLeft: "2px"},
	{name:"file-alt", uni:"0f6", marginTop:"2px", marginLeft: "3px"},
	{name:"building", uni:"0f7", marginTop:"2px", marginLeft: "2px"},
	{name:"hospital", uni:"0f8", marginTop:"2px", marginLeft: "2px"},
	{name:"ambulance", uni:"0f9", marginTop:"2px", marginLeft: "0px"},
	{name:"medkit", uni:"0fa", marginTop:"2px", marginLeft: "2px"},
	{name:"fighter-jet", uni:"0fb", marginTop:"2px", marginLeft: "2px"},
	{name:"beer", uni:"0fc", marginTop:"2px", marginLeft: "0px"},
	{name:"h-sign", uni:"0fd", marginTop:"2px", marginLeft: "3px"},
	{name:"plus-sign-alt", uni:"0fe", marginTop:"2px", marginLeft: "3px"},
	{name:"double-angle-left", uni:"100", marginTop:"1px", marginLeft: "1px"},
	{name:"double-angle-right", uni:"101", marginTop:"1px", marginLeft: "4px"},
	{name:"double-angle-up", uni:"102", marginTop:"1px", marginLeft: "3px"},
	{name:"double-angle-down", uni:"103", marginTop:"2px", marginLeft: "2px"},
	{name:"angle-left", uni:"104", marginTop:"1px", marginLeft: "1px"},
	{name:"angle-right", uni:"105", marginTop:"1px", marginLeft: "4px"},
	{name:"angle-up", uni:"106", marginTop:"1px", marginLeft: "2px"},
	{name:"angle-down", uni:"107", marginTop:"2px", marginLeft: "2px"},
	{name:"desktop", uni:"108", marginTop:"3px", marginLeft: "1px"},
	{name:"laptop", uni:"109", marginTop:"2px", marginLeft: "1px"},
	{name:"tablet", uni:"10a", marginTop:"2px", marginLeft: "2px"},
	{name:"mobile-phone", uni:"10b", marginTop:"2px", marginLeft: "2px"},
	{name:"circle-blank", uni:"10c", marginTop:"2px", marginLeft: "3px"},
	{name:"quote-left", uni:"10d", marginTop:"2px", marginLeft: "2px"},
	{name:"quote-right", uni:"10e", marginTop:"3px", marginLeft: "2px"},
	{name:"spinner", uni:"110", marginTop:"2px", marginLeft: "2px"},
	{name:"circle", uni:"111", marginTop:"2px", marginLeft: "3px"},
	{name:"reply", uni:"112", marginTop:"2px", marginLeft: "1px"},
	{name:"github-alt", uni:"113", marginTop:"2px", marginLeft: "2px"},
	{name:"folder-close-alt", uni:"114", marginTop:"2px", marginLeft: "2px"},
	{name:"folder-open-alt", uni:"115",  marginTop:"2px", marginLeft: "2px"}
];