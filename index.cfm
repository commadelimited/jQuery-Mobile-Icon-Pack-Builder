<cfset variables.icon_array = ['adjust', 'adn', 'align-center', 'align-justify', 'align-left', 'align-right', 'ambulance', 'anchor', 'android', 'angle-double-down', 'angle-double-left', 'angle-double-right', 'angle-double-up', 'angle-down', 'angle-left', 'angle-right', 'angle-up', 'apple', 'archive', 'arrow-circle-down', 'arrow-circle-left', 'arrow-circle-o-down', 'arrow-circle-o-left', 'arrow-circle-o-right', 'arrow-circle-o-up', 'arrow-circle-right', 'arrow-circle-up', 'arrow-left', 'arrow-right', 'arrow-up', 'arrows-alt', 'arrows-h', 'arrows-v', 'arrows', 'asterisk', 'backward', 'ban', 'ban5', 'bar-chart-o', 'barcode', 'bars', 'beer', 'bell-o', 'bell', 'bitbucket-square', 'bitbucket', 'bitcoin', 'bold', 'bolt', 'book', 'bookmark-o', 'bookmark', 'briefcase', 'bug', 'building-o', 'bullhorn', 'bullseye', 'calendar-o', 'calendar', 'camera-retro', 'camera', 'caret-down', 'caret-left', 'caret-right', 'caret-up', 'certificate', 'check-circle-o', 'check-circle', 'check-square-o', 'check-square', 'check', 'chevron-circle-down', 'chevron-circle-left', 'chevron-circle-right', 'chevron-circle-up', 'chevron-down', 'chevron-left', 'chevron-right', 'chevron-up', 'circle-o', 'circle', 'clipboard', 'clock-o', 'cloud-download', 'cloud-upload', 'cloud', 'code-fork', 'code', 'coffee', 'columns', 'comment-o', 'comment', 'comments-o', 'comments', 'compass', 'compress', 'credit-card', 'crop', 'crosshairs', 'css3', 'cutlery', 'dashboard', 'dedent', 'desktop', 'dot-circle-o', 'download', 'dribbble', 'dropbox', 'edit', 'eject', 'ellipsis-h', 'ellipsis-v', 'envelope-o', 'envelope', 'eraser', 'euro', 'exchange', 'exclamation-circle', 'exclamation-triangle', 'exclamation', 'expand', 'external-link-square', 'external-link', 'external-link3', 'eye-slash', 'eye', 'facebook-square', 'facebook', 'facebook3', 'fast-backward', 'fast-forward', 'female', 'fighter-jet', 'file-o', 'file-text-o', 'file-text', 'file', 'files-o', 'film', 'filter', 'fire-extinguisher', 'fire', 'flag-checkered', 'flag-o', 'flag', 'flask', 'flickr', 'folder-o', 'folder-open-o', 'folder-open', 'folder', 'font', 'forward', 'foursquare', 'frown-o', 'gamepad', 'gavel', 'gbp', 'gear', 'gears', 'gift', 'github-alt', 'github-square', 'github', 'gittip', 'glass', 'globe', 'globe3', 'google-plus-square', 'google-plus', 'group', 'h-square', 'hand-o-down', 'hand-o-left', 'hand-o-right', 'hand-o-up', 'hdd-o', 'headphones', 'heart-o', 'heart', 'home', 'hospital-o', 'html5', 'inbox', 'indent', 'info-circle', 'info', 'inr', 'instagram', 'italic', 'jpy', 'key', 'keyboard-o', 'krw', 'laptop', 'leaf', 'lemon-o', 'level-down', 'level-up', 'lightbulb-o', 'link', 'linkedin-square', 'linkedin', 'linux', 'list-alt', 'list-ol', 'list-ul', 'list', 'location-arrow', 'lock', 'long-arrow-down', 'long-arrow-left', 'long-arrow-right', 'long-arrow-up', 'magic', 'magnet', 'mail-forward', 'mail-reply-all', 'mail-reply', 'male', 'map-marker', 'maxcdn', 'medkit', 'meh-o', 'microphone-slash', 'microphone', 'minus-circle', 'minus-square-o', 'minus-square', 'minus', 'mobile', 'money', 'moon-o', 'music', 'pagelines', 'paperclip', 'pause', 'pencil-square', 'pencil', 'phone-square', 'phone', 'picture-o', 'pinterest-square', 'pinterest', 'plane', 'play-circle-o', 'play-circle', 'play', 'plus-circle', 'plus-square-o', 'plus-square', 'plus', 'power-off', 'print', 'puzzle-piece', 'qrcode', 'question-circle', 'question', 'quote-left', 'quote-right', 'random', 'refresh', 'retweet', 'road', 'rocket', 'rotate-right', 'rss-square', 'rss', 'rub', 'save', 'scissors', 'search-minus', 'search-plus', 'search', 'share-square-o', 'share-square', 'shield', 'shopping-cart', 'sign-in', 'sign-out', 'signal', 'sitemap', 'skype', 'smile-o', 'sort-alpha-asc', 'sort-alpha-desc', 'sort-amount-asc', 'sort-amount-desc', 'sort-down', 'sort-numeric-asc', 'sort-numeric-desc', 'sort-up', 'sort', 'spinner', 'square-o', 'square', 'stack-exchange', 'stack-overflow', 'star-half-o', 'star-half', 'star-o', 'star', 'step-backward', 'step-forward', 'stethoscope', 'stop', 'strikethrough', 'subscript', 'suitcase', 'sun-o', 'superscript', 'table', 'tablet', 'tag', 'tags', 'terminal', 'text-height', 'text-width', 'th-large', 'th-list', 'th', 'thumb-tack', 'thumbs-o-down', 'thumbs-o-up', 'thumbs-thumb', 'thumbs-up', 'ticket', 'times-circle-o', 'times-circle', 'times', 'tint', 'toggle-down', 'toggle-left', 'toggle-right', 'toggle-up', 'trash-o', 'trello', 'truck', 'tumblr-square', 'tumblr', 'turkish-lira', 'twitter-square', 'twitter', 'umbrella', 'underline', 'undo', 'unlink', 'unlock-alt', 'upload', 'usd', 'user-md', 'user', 'video-camera', 'vimeo-square', 'vk', 'vk3', 'volume-down', 'volume-off', 'volume-up', 'weibo', 'wheelchair', 'windows', 'wrench', 'xing-square', 'xing', 'youtube-play', 'youtube-square', 'youtube']>

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8" />
    <title>Builder: for jQuery Mobile Icon Pack</title>
    <script src="//code.jquery.com/jquery-1.10.2.min.js"></script>
    <script src="js/application.js"></script>
    <link rel="stylesheet" type="text/css" href="css/icon-pack.css" />
    <link rel="stylesheet" type="text/css" href="css/jqm-icon-pack-fa.css" />
</head>

<body>

    <div class="container">
        <div class="masthead">
            <h1>Builder</h1>

            <h2>for jQuery Mobile Icon Pack 1.4 and higher</h2>

            <p><span>Create a custom <a href="http://fortawesome.github.com/Font-Awesome/">FontAwesome 4.0</a> icon-font kit containing only the icons you want.</span></p>
        </div>
    </div>

    <div class="container">
        <div class="masthead">
            <p>Don't want to fiddle with building your own? <a href="http://andymatthews.net/code/jQuery-Mobile-Icon-Pack/">Download the entire Icon Pack!</a></p>
        </div>
    </div>

    <div class="container builder">
        <div id="glyphapp" class="row">
            <div class="span9">
                <h2>
                    <span>1. Click an icon to add it to your set.</span>
                    <small><a class="js-btn-none">Clear</a></small>
                </h2>

                <ul id="glyph-list">
                <cfoutput>
                    <cfloop index="icon" array="#variables.icon_array#">
                        <li>
                            <i class="#icon#"></i>
                        </li>
                    </cfloop>
                </cfoutput>
                </ul>
            </div>
            <div class="span3">
                <h2>2. Preview your icon set <small> Click an icon to remove it.</small></h2>
                <div id="selected-view" class="row">
                    <ul id="selected-glyph-list" class="unstyled">

                    </ul>
                </div>
                <h2>
                    3. Download<br>
                    <small>(CSS, LESS &amp; SCSS files)</small>
                </h2>
                <div id="download">
                    <button class="btn btn-large btn-success icon-large btn-download"> Download Now</button>
                </div>
                <p>
                    <br>
                    Having trouble building your custom icon set?
                    <br>
                    <a href="http://twitter.com/commadelimited">Let me know about it</a>.
                </p>
            </div>
        </div>
    </div>
</body>
</html>