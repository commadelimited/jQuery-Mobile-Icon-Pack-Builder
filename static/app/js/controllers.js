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
	{name:"glass", uni:"000", margin_top:"", margin_left: ""},
	{name:"music", uni:"001", margin_top:"", margin_left: ""},
	{name:"search", uni:"002", margin_top:"", margin_left: ""},
	{name:"envelope", uni:"003", margin_top:"", margin_left: ""},
	{name:"heart", uni:"004", margin_top:"", margin_left: ""},
	{name:"star", uni:"005", margin_top:"", margin_left: ""},
	{name:"star-empty", uni:"006", margin_top:"", margin_left: ""},
	{name:"user", uni:"007", margin_top:"", margin_left: ""},
	{name:"film", uni:"008", margin_top:"", margin_left: ""},
	{name:"th-large", uni:"009", margin_top:"", margin_left: ""},
	{name:"th", uni:"00a", margin_top:"", margin_left: ""},
	{name:"th-list", uni:"00b", margin_top:"", margin_left: ""},
	{name:"ok", uni:"00c", margin_top:"", margin_left: ""},
	{name:"remove", uni:"00d", margin_top:"", margin_left: ""},
	{name:"zoom-in", uni:"00e", margin_top:"", margin_left: ""},

	{name:"zoom-out", uni:"010", margin_top:"", margin_left: ""},
	{name:"off", uni:"011", margin_top:"", margin_left: ""},
	{name:"signal", uni:"012", margin_top:"", margin_left: ""},
	{name:"cog", uni:"013", margin_top:"", margin_left: ""},
	{name:"trash", uni:"014", margin_top:"", margin_left: ""},
	{name:"home", uni:"015", margin_top:"", margin_left: ""},
	{name:"file", uni:"016", margin_top:"", margin_left: ""},
	{name:"time", uni:"017", margin_top:"", margin_left: ""},
	{name:"road", uni:"018", margin_top:"", margin_left: ""},
	{name:"download-alt", uni:"019", margin_top:"", margin_left: ""},
	{name:"download", uni:"01a", margin_top:"", margin_left: ""},
	{name:"upload", uni:"01b", margin_top:"", margin_left: ""},
	{name:"inbox", uni:"01c", margin_top:"", margin_left: ""},
	{name:"play-circle", uni:"01d", margin_top:"", margin_left: ""},
	{name:"repeat", uni:"01e", margin_top:"", margin_left: ""},

	/* \f020 doesn't work in Safari. all shifted one down */
	{name:"refresh", uni:"021", margin_top:"", margin_left: ""},
	{name:"list-alt", uni:"022", margin_top:"", margin_left: ""},
	{name:"lock", uni:"023", margin_top:"", margin_left: ""},
	{name:"flag", uni:"024", margin_top:"", margin_left: ""},
	{name:"headphones", uni:"025", margin_top:"", margin_left: ""},
	{name:"volume-off", uni:"026", margin_top:"", margin_left: ""},
	{name:"volume-down", uni:"027", margin_top:"", margin_left: ""},
	{name:"volume-up", uni:"028", margin_top:"", margin_left: ""},
	{name:"qrcode", uni:"029", margin_top:"", margin_left: ""},
	{name:"barcode", uni:"02a", margin_top:"", margin_left: ""},
	{name:"tag", uni:"02b", margin_top:"", margin_left: ""},
	{name:"tags", uni:"02c", margin_top:"", margin_left: ""},
	{name:"book", uni:"02d", margin_top:"", margin_left: ""},
	{name:"bookmark", uni:"02e", margin_top:"", margin_left: ""},
	{name:"print", uni:"02f", margin_top:"", margin_left: ""},

	{name:"camera", uni:"030", margin_top:"", margin_left: ""},
	{name:"font", uni:"031", margin_top:"", margin_left: ""},
	{name:"bold", uni:"032", margin_top:"", margin_left: ""},
	{name:"italic", uni:"033", margin_top:"", margin_left: ""},
	{name:"text-height", uni:"034", margin_top:"", margin_left: ""},
	{name:"text-width", uni:"035", margin_top:"", margin_left: ""},
	{name:"align-left", uni:"036", margin_top:"", margin_left: ""},
	{name:"align-center", uni:"037", margin_top:"", margin_left: ""},
	{name:"align-right", uni:"038", margin_top:"", margin_left: ""},
	{name:"align-justify", uni:"039", margin_top:"", margin_left: ""},
	{name:"list", uni:"03a", margin_top:"", margin_left: ""},
	{name:"indent-left", uni:"03b", margin_top:"", margin_left: ""},
	{name:"indent-right", uni:"03c", margin_top:"", margin_left: ""},
	{name:"facetime-video", uni:"03d", margin_top:"", margin_left: ""},
	{name:"picture", uni:"03e", margin_top:"", margin_left: ""},

	{name:"pencil", uni:"040", margin_top:"", margin_left: ""},
	{name:"map-marker", uni:"041", margin_top:"", margin_left: ""},
	{name:"adjust", uni:"042", margin_top:"", margin_left: ""},
	{name:"tint", uni:"043", margin_top:"", margin_left: ""},
	{name:"edit", uni:"044", margin_top:"", margin_left: ""},
	{name:"share", uni:"045", margin_top:"", margin_left: ""},
	{name:"check", uni:"046", margin_top:"", margin_left: ""},
	{name:"move", uni:"047", margin_top:"", margin_left: ""},
	{name:"step-backward", uni:"048", margin_top:"", margin_left: ""},
	{name:"fast-backward", uni:"049", margin_top:"", margin_left: ""},
	{name:"backward", uni:"04a", margin_top:"", margin_left: ""},
	{name:"play", uni:"04b", margin_top:"", margin_left: ""},
	{name:"pause", uni:"04c", margin_top:"", margin_left: ""},
	{name:"stop", uni:"04d", margin_top:"", margin_left: ""},
	{name:"forward", uni:"04e", margin_top:"", margin_left: ""},

	{name:"fast-forward", uni:"050", margin_top:"", margin_left: ""},
	{name:"step-forward", uni:"051", margin_top:"", margin_left: ""},
	{name:"eject", uni:"052", margin_top:"", margin_left: ""},
	{name:"chevron-left", uni:"053", margin_top:"", margin_left: ""},
	{name:"chevron-right", uni:"054", margin_top:"", margin_left: ""},
	{name:"plus-sign", uni:"055", margin_top:"", margin_left: ""},
	{name:"minus-sign", uni:"056", margin_top:"", margin_left: ""},
	{name:"remove-sign", uni:"057", margin_top:"", margin_left: ""},
	{name:"ok-sign", uni:"058", margin_top:"", margin_left: ""},
	{name:"question-sign", uni:"059", margin_top:"", margin_left: ""},
	{name:"info-sign", uni:"05a", margin_top:"", margin_left: ""},
	{name:"screenshot", uni:"05b", margin_top:"", margin_left: ""},
	{name:"remove-circle", uni:"05c", margin_top:"", margin_left: ""},
	{name:"ok-circle", uni:"05d", margin_top:"", margin_left: ""},
	{name:"ban-circle", uni:"05e", margin_top:"", margin_left: ""},

	{name:"arrow-left", uni:"060", margin_top:"", margin_left: ""},
	{name:"arrow-right", uni:"061", margin_top:"", margin_left: ""},
	{name:"arrow-up", uni:"062", margin_top:"", margin_left: ""},
	{name:"arrow-down", uni:"063", margin_top:"", margin_left: ""},
	{name:"share-alt", uni:"064", margin_top:"", margin_left: ""},
	{name:"resize-full", uni:"065", margin_top:"", margin_left: ""},
	{name:"resize-small", uni:"066", margin_top:"", margin_left: ""},
	{name:"plus", uni:"067", margin_top:"", margin_left: ""},
	{name:"minus", uni:"068", margin_top:"", margin_left: ""},
	{name:"asterisk", uni:"069", margin_top:"", margin_left: ""},
	{name:"exclamation-sign", uni:"06a", margin_top:"", margin_left: ""},
	{name:"gift", uni:"06b", margin_top:"", margin_left: ""},
	{name:"leaf", uni:"06c", margin_top:"", margin_left: ""},
	{name:"fire", uni:"06d", margin_top:"", margin_left: ""},
	{name:"eye-open", uni:"06e", margin_top:"", margin_left: ""},

	{name:"eye-close", uni:"070", margin_top:"", margin_left: ""},
	{name:"warning-sign", uni:"071", margin_top:"", margin_left: ""},
	{name:"plane", uni:"072", margin_top:"", margin_left: ""},
	{name:"calendar", uni:"073", margin_top:"", margin_left: ""},
	{name:"random", uni:"074", margin_top:"", margin_left: ""},
	{name:"comment", uni:"075", margin_top:"", margin_left: ""},
	{name:"magnet", uni:"076", margin_top:"", margin_left: ""},
	{name:"chevron-up", uni:"077", margin_top:"", margin_left: ""},
	{name:"chevron-down", uni:"078", margin_top:"", margin_left: ""},
	{name:"retweet", uni:"079", margin_top:"", margin_left: ""},
	{name:"shopping-cart", uni:"07a", margin_top:"", margin_left: ""},
	{name:"folder-close", uni:"07b", margin_top:"", margin_left: ""},
	{name:"folder-open", uni:"07c", margin_top:"", margin_left: ""},
	{name:"resize-vertical", uni:"07d", margin_top:"", margin_left: ""},
	{name:"resize-horizontal", uni:"07e", margin_top:"", margin_left: ""},

	{name:"bar-chart", uni:"080", margin_top:"", margin_left: ""},
	{name:"twitter-sign", uni:"081", margin_top:"", margin_left: ""},
	{name:"facebook-sign", uni:"082", margin_top:"", margin_left: ""},
	{name:"camera-retro", uni:"083", margin_top:"", margin_left: ""},
	{name:"key", uni:"084", margin_top:"", margin_left: ""},
	{name:"cogs", uni:"085", margin_top:"", margin_left: ""},
	{name:"comments", uni:"086", margin_top:"", margin_left: ""},
	{name:"thumbs-up", uni:"087", margin_top:"", margin_left: ""},
	{name:"thumbs-down", uni:"088", margin_top:"", margin_left: ""},
	{name:"star-half", uni:"089", margin_top:"", margin_left: ""},
	{name:"heart-empty", uni:"08a", margin_top:"", margin_left: ""},
	{name:"signout", uni:"08b", margin_top:"", margin_left: ""},
	{name:"linkedin-sign", uni:"08c", margin_top:"", margin_left: ""},
	{name:"pushpin", uni:"08d", margin_top:"", margin_left: ""},
	{name:"external-link", uni:"08e", margin_top:"", margin_left: ""},

	{name:"signin", uni:"090", margin_top:"", margin_left: ""},
	{name:"trophy", uni:"091", margin_top:"", margin_left: ""},
	{name:"github-sign", uni:"092", margin_top:"", margin_left: ""},
	{name:"upload-alt", uni:"093", margin_top:"", margin_left: ""},
	{name:"lemon", uni:"094", margin_top:"", margin_left: ""},
	{name:"phone", uni:"095", margin_top:"", margin_left: ""},
	{name:"check-empty", uni:"096", margin_top:"", margin_left: ""},
	{name:"bookmark-empty", uni:"097", margin_top:"", margin_left: ""},
	{name:"phone-sign", uni:"098", margin_top:"", margin_left: ""},
	{name:"twitter", uni:"099", margin_top:"", margin_left: ""},
	{name:"facebook", uni:"09a", margin_top:"", margin_left: ""},
	{name:"github", uni:"09b", margin_top:"", margin_left: ""},
	{name:"unlock", uni:"09c", margin_top:"", margin_left: ""},
	{name:"credit-card", uni:"09d", margin_top:"", margin_left: ""},
	{name:"rss", uni:"09e", margin_top:"", margin_left: ""},

	{name:"hdd", uni:"0a0", margin_top:"", margin_left: ""},
	{name:"bullhorn", uni:"0a1", margin_top:"", margin_left: ""},
	{name:"bell", uni:"0a2", margin_top:"", margin_left: ""},
	{name:"certificate", uni:"0a3", margin_top:"", margin_left: ""},
	{name:"hand-right", uni:"0a4", margin_top:"", margin_left: ""},
	{name:"hand-left", uni:"0a5", margin_top:"", margin_left: ""},
	{name:"hand-up", uni:"0a6", margin_top:"", margin_left: ""},
	{name:"hand-down", uni:"0a7", margin_top:"", margin_left: ""},
	{name:"circle-arrow-left", uni:"0a8", margin_top:"", margin_left: ""},
	{name:"circle-arrow-right", uni:"0a9", margin_top:"", margin_left: ""},
	{name:"circle-arrow-up", uni:"0aa", margin_top:"", margin_left: ""},
	{name:"circle-arrow-down", uni:"0ab", margin_top:"", margin_left: ""},
	{name:"globe", uni:"0ac", margin_top:"", margin_left: ""},
	{name:"wrench", uni:"0ad", margin_top:"", margin_left: ""},
	{name:"tasks", uni:"0ae", margin_top:"", margin_left: ""},

	{name:"filter", uni:"0b0", margin_top:"", margin_left: ""},
	{name:"briefcase", uni:"0b1", margin_top:"", margin_left: ""},
	{name:"fullscreen", uni:"0b2", margin_top:"", margin_left: ""},

	{name:"group", uni:"0c0", margin_top:"", margin_left: ""},
	{name:"link", uni:"0c1", margin_top:"", margin_left: ""},
	{name:"cloud", uni:"0c2", margin_top:"", margin_left: ""},
	{name:"beaker", uni:"0c3", margin_top:"", margin_left: ""},
	{name:"cut", uni:"0c4", margin_top:"", margin_left: ""},
	{name:"copy", uni:"0c5", margin_top:"", margin_left: ""},
	{name:"paper-clip", uni:"0c6", margin_top:"", margin_left: ""},
	{name:"save", uni:"0c7", margin_top:"", margin_left: ""},
	{name:"sign-blank", uni:"0c8", margin_top:"", margin_left: ""},
	{name:"reorder", uni:"0c9", margin_top:"", margin_left: ""},
	{name:"list-ul", uni:"0ca", margin_top:"", margin_left: ""},
	{name:"list-ol", uni:"0cb", margin_top:"", margin_left: ""},
	{name:"strikethrough", uni:"0cc", margin_top:"", margin_left: ""},
	{name:"underline", uni:"0cd", margin_top:"", margin_left: ""},
	{name:"table", uni:"0ce", margin_top:"", margin_left: ""},

	{name:"magic", uni:"0d0", margin_top:"", margin_left: ""},
	{name:"truck", uni:"0d1", margin_top:"", margin_left: ""},
	{name:"pinterest", uni:"0d2", margin_top:"", margin_left: ""},
	{name:"pinterest-sign", uni:"0d3", margin_top:"", margin_left: ""},
	{name:"google-plus-sign", uni:"0d4", margin_top:"", margin_left: ""},
	{name:"google-plus", uni:"0d5", margin_top:"", margin_left: ""},
	{name:"money", uni:"0d6", margin_top:"", margin_left: ""},
	{name:"caret-down", uni:"0d7", margin_top:"", margin_left: ""},
	{name:"caret-up", uni:"0d8", margin_top:"", margin_left: ""},
	{name:"caret-left", uni:"0d9", margin_top:"", margin_left: ""},
	{name:"caret-right", uni:"0da", margin_top:"", margin_left: ""},
	{name:"columns", uni:"0db", margin_top:"", margin_left: ""},
	{name:"sort", uni:"0dc", margin_top:"", margin_left: ""},
	{name:"sort-down", uni:"0dd", margin_top:"", margin_left: ""},
	{name:"sort-up", uni:"0de", margin_top:"", margin_left: ""},

	{name:"envelope-alt", uni:"0e0", margin_top:"", margin_left: ""},
	{name:"linkedin", uni:"0e1", margin_top:"", margin_left: ""},
	{name:"undo", uni:"0e2", margin_top:"", margin_left: ""},
	{name:"legal", uni:"0e3", margin_top:"", margin_left: ""},
	{name:"dashboard", uni:"0e4", margin_top:"", margin_left: ""},
	{name:"comment-alt", uni:"0e5", margin_top:"", margin_left: ""},
	{name:"comments-alt", uni:"0e6", margin_top:"", margin_left: ""},
	{name:"bolt", uni:"0e7", margin_top:"", margin_left: ""},
	{name:"sitemap", uni:"0e8", margin_top:"", margin_left: ""},
	{name:"umbrella", uni:"0e9", margin_top:"", margin_left: ""},
	{name:"paste", uni:"0ea", margin_top:"", margin_left: ""},
	{name:"lightbulb", uni:"0eb", margin_top:"", margin_left: ""},
	{name:"exchange", uni:"0ec", margin_top:"", margin_left: ""},
	{name:"cloud-download", uni:"0ed", margin_top:"", margin_left: ""},
	{name:"cloud-upload", uni:"0ee", margin_top:"", margin_left: ""},

	{name:"user-md", uni:"0f0", margin_top:"", margin_left: ""},
	{name:"stethoscope", uni:"0f1", margin_top:"", margin_left: ""},
	{name:"suitcase", uni:"0f2", margin_top:"", margin_left: ""},
	{name:"bell-alt", uni:"0f3", margin_top:"", margin_left: ""},
	{name:"coffee", uni:"0f4", margin_top:"", margin_left: ""},
	{name:"food", uni:"0f5", margin_top:"", margin_left: ""},
	{name:"file-alt", uni:"0f6", margin_top:"", margin_left: ""},
	{name:"building", uni:"0f7", margin_top:"", margin_left: ""},
	{name:"hospital", uni:"0f8", margin_top:"", margin_left: ""},
	{name:"ambulance", uni:"0f9", margin_top:"", margin_left: ""},
	{name:"medkit", uni:"0fa", margin_top:"", margin_left: ""},
	{name:"fighter-jet", uni:"0fb", margin_top:"", margin_left: ""},
	{name:"beer", uni:"0fc", margin_top:"", margin_left: ""},
	{name:"h-sign", uni:"0fd", margin_top:"", margin_left: ""},
	{name:"plus-sign-alt", uni:"0fe", margin_top:"", margin_left: ""},

	{name:"double-angle-left", uni:"100", margin_top:"", margin_left: ""},
	{name:"double-angle-right", uni:"101", margin_top:"", margin_left: ""},
	{name:"double-angle-up", uni:"102", margin_top:"", margin_left: ""},
	{name:"double-angle-down", uni:"103", margin_top:"", margin_left: ""},
	{name:"angle-left", uni:"104", margin_top:"", margin_left: ""},
	{name:"angle-right", uni:"105", margin_top:"", margin_left: ""},
	{name:"angle-up", uni:"106", margin_top:"", margin_left: ""},
	{name:"angle-down", uni:"107", margin_top:"", margin_left: ""},
	{name:"desktop", uni:"108", margin_top:"", margin_left: ""},
	{name:"laptop", uni:"109", margin_top:"", margin_left: ""},
	{name:"tablet", uni:"10a", margin_top:"", margin_left: ""},
	{name:"mobile-phone", uni:"10b", margin_top:"", margin_left: ""},
	{name:"circle-blank", uni:"10c", margin_top:"", margin_left: ""},
	{name:"quote-left", uni:"10d", margin_top:"", margin_left: ""},
	{name:"quote-right", uni:"10e", margin_top:"", margin_left: ""},

	{name:"spinner", uni:"110", margin_top:"", margin_left: ""},
	{name:"circle", uni:"111", margin_top:"", margin_left: ""},
	{name:"reply", uni:"112", margin_top:"", margin_left: ""},
	{name:"github-alt", uni:"113", margin_top:"", margin_left: ""},
	{name:"folder-close-alt", uni:"114", margin_top:"", margin_left: ""},
	{name:"folder-open-alt", uni:"115"}
];