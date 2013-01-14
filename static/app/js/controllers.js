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
	{name:"glass", uni:"000", marginTop:"", marginLeft: ""},
	{name:"music", uni:"001", marginTop:"", marginLeft: ""},
	{name:"search", uni:"002", marginTop:"", marginLeft: ""},
	{name:"envelope", uni:"003", marginTop:"", marginLeft: ""},
	{name:"heart", uni:"004", marginTop:"", marginLeft: ""},
	{name:"star", uni:"005", marginTop:"", marginLeft: ""},
	{name:"star-empty", uni:"006", marginTop:"", marginLeft: ""},
	{name:"user", uni:"007", marginTop:"", marginLeft: ""},
	{name:"film", uni:"008", marginTop:"", marginLeft: ""},
	{name:"th-large", uni:"009", marginTop:"", marginLeft: ""},
	{name:"th", uni:"00a", marginTop:"", marginLeft: ""},
	{name:"th-list", uni:"00b", marginTop:"", marginLeft: ""},
	{name:"ok", uni:"00c", marginTop:"", marginLeft: ""},
	{name:"remove", uni:"00d", marginTop:"", marginLeft: ""},
	{name:"zoom-in", uni:"00e", marginTop:"", marginLeft: ""},

	{name:"zoom-out", uni:"010", marginTop:"", marginLeft: ""},
	{name:"off", uni:"011", marginTop:"", marginLeft: ""},
	{name:"signal", uni:"012", marginTop:"", marginLeft: ""},
	{name:"cog", uni:"013", marginTop:"", marginLeft: ""},
	{name:"trash", uni:"014", marginTop:"", marginLeft: ""},
	{name:"home", uni:"015", marginTop:"", marginLeft: ""},
	{name:"file", uni:"016", marginTop:"", marginLeft: ""},
	{name:"time", uni:"017", marginTop:"", marginLeft: ""},
	{name:"road", uni:"018", marginTop:"", marginLeft: ""},
	{name:"download-alt", uni:"019", marginTop:"", marginLeft: ""},
	{name:"download", uni:"01a", marginTop:"", marginLeft: ""},
	{name:"upload", uni:"01b", marginTop:"", marginLeft: ""},
	{name:"inbox", uni:"01c", marginTop:"", marginLeft: ""},
	{name:"play-circle", uni:"01d", marginTop:"", marginLeft: ""},
	{name:"repeat", uni:"01e", marginTop:"", marginLeft: ""},

	/* \f020 doesn't work in Safari. all shifted one down */
	{name:"refresh", uni:"021", marginTop:"", marginLeft: ""},
	{name:"list-alt", uni:"022", marginTop:"", marginLeft: ""},
	{name:"lock", uni:"023", marginTop:"", marginLeft: ""},
	{name:"flag", uni:"024", marginTop:"", marginLeft: ""},
	{name:"headphones", uni:"025", marginTop:"", marginLeft: ""},
	{name:"volume-off", uni:"026", marginTop:"", marginLeft: ""},
	{name:"volume-down", uni:"027", marginTop:"", marginLeft: ""},
	{name:"volume-up", uni:"028", marginTop:"", marginLeft: ""},
	{name:"qrcode", uni:"029", marginTop:"", marginLeft: ""},
	{name:"barcode", uni:"02a", marginTop:"", marginLeft: ""},
	{name:"tag", uni:"02b", marginTop:"", marginLeft: ""},
	{name:"tags", uni:"02c", marginTop:"", marginLeft: ""},
	{name:"book", uni:"02d", marginTop:"", marginLeft: ""},
	{name:"bookmark", uni:"02e", marginTop:"", marginLeft: ""},
	{name:"print", uni:"02f", marginTop:"", marginLeft: ""},

	{name:"camera", uni:"030", marginTop:"", marginLeft: ""},
	{name:"font", uni:"031", marginTop:"", marginLeft: ""},
	{name:"bold", uni:"032", marginTop:"", marginLeft: ""},
	{name:"italic", uni:"033", marginTop:"", marginLeft: ""},
	{name:"text-height", uni:"034", marginTop:"", marginLeft: ""},
	{name:"text-width", uni:"035", marginTop:"", marginLeft: ""},
	{name:"align-left", uni:"036", marginTop:"", marginLeft: ""},
	{name:"align-center", uni:"037", marginTop:"", marginLeft: ""},
	{name:"align-right", uni:"038", marginTop:"", marginLeft: ""},
	{name:"align-justify", uni:"039", marginTop:"", marginLeft: ""},
	{name:"list", uni:"03a", marginTop:"", marginLeft: ""},
	{name:"indent-left", uni:"03b", marginTop:"", marginLeft: ""},
	{name:"indent-right", uni:"03c", marginTop:"", marginLeft: ""},
	{name:"facetime-video", uni:"03d", marginTop:"", marginLeft: ""},
	{name:"picture", uni:"03e", marginTop:"", marginLeft: ""},

	{name:"pencil", uni:"040", marginTop:"", marginLeft: ""},
	{name:"map-marker", uni:"041", marginTop:"", marginLeft: ""},
	{name:"adjust", uni:"042", marginTop:"", marginLeft: ""},
	{name:"tint", uni:"043", marginTop:"", marginLeft: ""},
	{name:"edit", uni:"044", marginTop:"", marginLeft: ""},
	{name:"share", uni:"045", marginTop:"", marginLeft: ""},
	{name:"check", uni:"046", marginTop:"", marginLeft: ""},
	{name:"move", uni:"047", marginTop:"", marginLeft: ""},
	{name:"step-backward", uni:"048", marginTop:"", marginLeft: ""},
	{name:"fast-backward", uni:"049", marginTop:"", marginLeft: ""},
	{name:"backward", uni:"04a", marginTop:"", marginLeft: ""},
	{name:"play", uni:"04b", marginTop:"", marginLeft: ""},
	{name:"pause", uni:"04c", marginTop:"", marginLeft: ""},
	{name:"stop", uni:"04d", marginTop:"", marginLeft: ""},
	{name:"forward", uni:"04e", marginTop:"", marginLeft: ""},

	{name:"fast-forward", uni:"050", marginTop:"", marginLeft: ""},
	{name:"step-forward", uni:"051", marginTop:"", marginLeft: ""},
	{name:"eject", uni:"052", marginTop:"", marginLeft: ""},
	{name:"chevron-left", uni:"053", marginTop:"", marginLeft: ""},
	{name:"chevron-right", uni:"054", marginTop:"", marginLeft: ""},
	{name:"plus-sign", uni:"055", marginTop:"", marginLeft: ""},
	{name:"minus-sign", uni:"056", marginTop:"", marginLeft: ""},
	{name:"remove-sign", uni:"057", marginTop:"", marginLeft: ""},
	{name:"ok-sign", uni:"058", marginTop:"", marginLeft: ""},
	{name:"question-sign", uni:"059", marginTop:"", marginLeft: ""},
	{name:"info-sign", uni:"05a", marginTop:"", marginLeft: ""},
	{name:"screenshot", uni:"05b", marginTop:"", marginLeft: ""},
	{name:"remove-circle", uni:"05c", marginTop:"", marginLeft: ""},
	{name:"ok-circle", uni:"05d", marginTop:"", marginLeft: ""},
	{name:"ban-circle", uni:"05e", marginTop:"", marginLeft: ""},

	{name:"arrow-left", uni:"060", marginTop:"", marginLeft: ""},
	{name:"arrow-right", uni:"061", marginTop:"", marginLeft: ""},
	{name:"arrow-up", uni:"062", marginTop:"", marginLeft: ""},
	{name:"arrow-down", uni:"063", marginTop:"", marginLeft: ""},
	{name:"share-alt", uni:"064", marginTop:"", marginLeft: ""},
	{name:"resize-full", uni:"065", marginTop:"", marginLeft: ""},
	{name:"resize-small", uni:"066", marginTop:"", marginLeft: ""},
	{name:"plus", uni:"067", marginTop:"", marginLeft: ""},
	{name:"minus", uni:"068", marginTop:"", marginLeft: ""},
	{name:"asterisk", uni:"069", marginTop:"", marginLeft: ""},
	{name:"exclamation-sign", uni:"06a", marginTop:"", marginLeft: ""},
	{name:"gift", uni:"06b", marginTop:"", marginLeft: ""},
	{name:"leaf", uni:"06c", marginTop:"", marginLeft: ""},
	{name:"fire", uni:"06d", marginTop:"", marginLeft: ""},
	{name:"eye-open", uni:"06e", marginTop:"", marginLeft: ""},

	{name:"eye-close", uni:"070", marginTop:"", marginLeft: ""},
	{name:"warning-sign", uni:"071", marginTop:"", marginLeft: ""},
	{name:"plane", uni:"072", marginTop:"", marginLeft: ""},
	{name:"calendar", uni:"073", marginTop:"", marginLeft: ""},
	{name:"random", uni:"074", marginTop:"", marginLeft: ""},
	{name:"comment", uni:"075", marginTop:"", marginLeft: ""},
	{name:"magnet", uni:"076", marginTop:"", marginLeft: ""},
	{name:"chevron-up", uni:"077", marginTop:"", marginLeft: ""},
	{name:"chevron-down", uni:"078", marginTop:"", marginLeft: ""},
	{name:"retweet", uni:"079", marginTop:"", marginLeft: ""},
	{name:"shopping-cart", uni:"07a", marginTop:"", marginLeft: ""},
	{name:"folder-close", uni:"07b", marginTop:"", marginLeft: ""},
	{name:"folder-open", uni:"07c", marginTop:"", marginLeft: ""},
	{name:"resize-vertical", uni:"07d", marginTop:"", marginLeft: ""},
	{name:"resize-horizontal", uni:"07e", marginTop:"", marginLeft: ""},

	{name:"bar-chart", uni:"080", marginTop:"", marginLeft: ""},
	{name:"twitter-sign", uni:"081", marginTop:"", marginLeft: ""},
	{name:"facebook-sign", uni:"082", marginTop:"", marginLeft: ""},
	{name:"camera-retro", uni:"083", marginTop:"", marginLeft: ""},
	{name:"key", uni:"084", marginTop:"", marginLeft: ""},
	{name:"cogs", uni:"085", marginTop:"", marginLeft: ""},
	{name:"comments", uni:"086", marginTop:"", marginLeft: ""},
	{name:"thumbs-up", uni:"087", marginTop:"", marginLeft: ""},
	{name:"thumbs-down", uni:"088", marginTop:"", marginLeft: ""},
	{name:"star-half", uni:"089", marginTop:"", marginLeft: ""},
	{name:"heart-empty", uni:"08a", marginTop:"", marginLeft: ""},
	{name:"signout", uni:"08b", marginTop:"", marginLeft: ""},
	{name:"linkedin-sign", uni:"08c", marginTop:"", marginLeft: ""},
	{name:"pushpin", uni:"08d", marginTop:"", marginLeft: ""},
	{name:"external-link", uni:"08e", marginTop:"", marginLeft: ""},

	{name:"signin", uni:"090", marginTop:"", marginLeft: ""},
	{name:"trophy", uni:"091", marginTop:"", marginLeft: ""},
	{name:"github-sign", uni:"092", marginTop:"", marginLeft: ""},
	{name:"upload-alt", uni:"093", marginTop:"", marginLeft: ""},
	{name:"lemon", uni:"094", marginTop:"", marginLeft: ""},
	{name:"phone", uni:"095", marginTop:"", marginLeft: ""},
	{name:"check-empty", uni:"096", marginTop:"", marginLeft: ""},
	{name:"bookmark-empty", uni:"097", marginTop:"", marginLeft: ""},
	{name:"phone-sign", uni:"098", marginTop:"", marginLeft: ""},
	{name:"twitter", uni:"099", marginTop:"", marginLeft: ""},
	{name:"facebook", uni:"09a", marginTop:"", marginLeft: ""},
	{name:"github", uni:"09b", marginTop:"", marginLeft: ""},
	{name:"unlock", uni:"09c", marginTop:"", marginLeft: ""},
	{name:"credit-card", uni:"09d", marginTop:"", marginLeft: ""},
	{name:"rss", uni:"09e", marginTop:"", marginLeft: ""},

	{name:"hdd", uni:"0a0", marginTop:"", marginLeft: ""},
	{name:"bullhorn", uni:"0a1", marginTop:"", marginLeft: ""},
	{name:"bell", uni:"0a2", marginTop:"", marginLeft: ""},
	{name:"certificate", uni:"0a3", marginTop:"", marginLeft: ""},
	{name:"hand-right", uni:"0a4", marginTop:"", marginLeft: ""},
	{name:"hand-left", uni:"0a5", marginTop:"", marginLeft: ""},
	{name:"hand-up", uni:"0a6", marginTop:"", marginLeft: ""},
	{name:"hand-down", uni:"0a7", marginTop:"", marginLeft: ""},
	{name:"circle-arrow-left", uni:"0a8", marginTop:"", marginLeft: ""},
	{name:"circle-arrow-right", uni:"0a9", marginTop:"", marginLeft: ""},
	{name:"circle-arrow-up", uni:"0aa", marginTop:"", marginLeft: ""},
	{name:"circle-arrow-down", uni:"0ab", marginTop:"", marginLeft: ""},
	{name:"globe", uni:"0ac", marginTop:"", marginLeft: ""},
	{name:"wrench", uni:"0ad", marginTop:"", marginLeft: ""},
	{name:"tasks", uni:"0ae", marginTop:"", marginLeft: ""},

	{name:"filter", uni:"0b0", marginTop:"", marginLeft: ""},
	{name:"briefcase", uni:"0b1", marginTop:"", marginLeft: ""},
	{name:"fullscreen", uni:"0b2", marginTop:"", marginLeft: ""},

	{name:"group", uni:"0c0", marginTop:"", marginLeft: ""},
	{name:"link", uni:"0c1", marginTop:"", marginLeft: ""},
	{name:"cloud", uni:"0c2", marginTop:"", marginLeft: ""},
	{name:"beaker", uni:"0c3", marginTop:"", marginLeft: ""},
	{name:"cut", uni:"0c4", marginTop:"", marginLeft: ""},
	{name:"copy", uni:"0c5", marginTop:"", marginLeft: ""},
	{name:"paper-clip", uni:"0c6", marginTop:"", marginLeft: ""},
	{name:"save", uni:"0c7", marginTop:"", marginLeft: ""},
	{name:"sign-blank", uni:"0c8", marginTop:"", marginLeft: ""},
	{name:"reorder", uni:"0c9", marginTop:"", marginLeft: ""},
	{name:"list-ul", uni:"0ca", marginTop:"", marginLeft: ""},
	{name:"list-ol", uni:"0cb", marginTop:"", marginLeft: ""},
	{name:"strikethrough", uni:"0cc", marginTop:"", marginLeft: ""},
	{name:"underline", uni:"0cd", marginTop:"", marginLeft: ""},
	{name:"table", uni:"0ce", marginTop:"", marginLeft: ""},

	{name:"magic", uni:"0d0", marginTop:"", marginLeft: ""},
	{name:"truck", uni:"0d1", marginTop:"", marginLeft: ""},
	{name:"pinterest", uni:"0d2", marginTop:"", marginLeft: ""},
	{name:"pinterest-sign", uni:"0d3", marginTop:"", marginLeft: ""},
	{name:"google-plus-sign", uni:"0d4", marginTop:"", marginLeft: ""},
	{name:"google-plus", uni:"0d5", marginTop:"", marginLeft: ""},
	{name:"money", uni:"0d6", marginTop:"", marginLeft: ""},
	{name:"caret-down", uni:"0d7", marginTop:"", marginLeft: ""},
	{name:"caret-up", uni:"0d8", marginTop:"", marginLeft: ""},
	{name:"caret-left", uni:"0d9", marginTop:"", marginLeft: ""},
	{name:"caret-right", uni:"0da", marginTop:"", marginLeft: ""},
	{name:"columns", uni:"0db", marginTop:"", marginLeft: ""},
	{name:"sort", uni:"0dc", marginTop:"", marginLeft: ""},
	{name:"sort-down", uni:"0dd", marginTop:"", marginLeft: ""},
	{name:"sort-up", uni:"0de", marginTop:"", marginLeft: ""},

	{name:"envelope-alt", uni:"0e0", marginTop:"", marginLeft: ""},
	{name:"linkedin", uni:"0e1", marginTop:"", marginLeft: ""},
	{name:"undo", uni:"0e2", marginTop:"", marginLeft: ""},
	{name:"legal", uni:"0e3", marginTop:"", marginLeft: ""},
	{name:"dashboard", uni:"0e4", marginTop:"", marginLeft: ""},
	{name:"comment-alt", uni:"0e5", marginTop:"", marginLeft: ""},
	{name:"comments-alt", uni:"0e6", marginTop:"", marginLeft: ""},
	{name:"bolt", uni:"0e7", marginTop:"", marginLeft: ""},
	{name:"sitemap", uni:"0e8", marginTop:"", marginLeft: ""},
	{name:"umbrella", uni:"0e9", marginTop:"", marginLeft: ""},
	{name:"paste", uni:"0ea", marginTop:"", marginLeft: ""},
	{name:"lightbulb", uni:"0eb", marginTop:"", marginLeft: ""},
	{name:"exchange", uni:"0ec", marginTop:"", marginLeft: ""},
	{name:"cloud-download", uni:"0ed", marginTop:"", marginLeft: ""},
	{name:"cloud-upload", uni:"0ee", marginTop:"", marginLeft: ""},

	{name:"user-md", uni:"0f0", marginTop:"", marginLeft: ""},
	{name:"stethoscope", uni:"0f1", marginTop:"", marginLeft: ""},
	{name:"suitcase", uni:"0f2", marginTop:"", marginLeft: ""},
	{name:"bell-alt", uni:"0f3", marginTop:"", marginLeft: ""},
	{name:"coffee", uni:"0f4", marginTop:"", marginLeft: ""},
	{name:"food", uni:"0f5", marginTop:"", marginLeft: ""},
	{name:"file-alt", uni:"0f6", marginTop:"", marginLeft: ""},
	{name:"building", uni:"0f7", marginTop:"", marginLeft: ""},
	{name:"hospital", uni:"0f8", marginTop:"", marginLeft: ""},
	{name:"ambulance", uni:"0f9", marginTop:"", marginLeft: ""},
	{name:"medkit", uni:"0fa", marginTop:"", marginLeft: ""},
	{name:"fighter-jet", uni:"0fb", marginTop:"", marginLeft: ""},
	{name:"beer", uni:"0fc", marginTop:"", marginLeft: ""},
	{name:"h-sign", uni:"0fd", marginTop:"", marginLeft: ""},
	{name:"plus-sign-alt", uni:"0fe", marginTop:"", marginLeft: ""},

	{name:"double-angle-left", uni:"100", marginTop:"", marginLeft: ""},
	{name:"double-angle-right", uni:"101", marginTop:"", marginLeft: ""},
	{name:"double-angle-up", uni:"102", marginTop:"", marginLeft: ""},
	{name:"double-angle-down", uni:"103", marginTop:"", marginLeft: ""},
	{name:"angle-left", uni:"104", marginTop:"", marginLeft: ""},
	{name:"angle-right", uni:"105", marginTop:"", marginLeft: ""},
	{name:"angle-up", uni:"106", marginTop:"", marginLeft: ""},
	{name:"angle-down", uni:"107", marginTop:"", marginLeft: ""},
	{name:"desktop", uni:"108", marginTop:"", marginLeft: ""},
	{name:"laptop", uni:"109", marginTop:"", marginLeft: ""},
	{name:"tablet", uni:"10a", marginTop:"", marginLeft: ""},
	{name:"mobile-phone", uni:"10b", marginTop:"", marginLeft: ""},
	{name:"circle-blank", uni:"10c", marginTop:"", marginLeft: ""},
	{name:"quote-left", uni:"10d", marginTop:"", marginLeft: ""},
	{name:"quote-right", uni:"10e", marginTop:"", marginLeft: ""},

	{name:"spinner", uni:"110", marginTop:"", marginLeft: ""},
	{name:"circle", uni:"111", marginTop:"", marginLeft: ""},
	{name:"reply", uni:"112", marginTop:"", marginLeft: ""},
	{name:"github-alt", uni:"113", marginTop:"", marginLeft: ""},
	{name:"folder-close-alt", uni:"114", marginTop:"", marginLeft: ""},
	{name:"folder-open-alt", uni:"115"}
];