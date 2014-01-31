<cfinclude template="icons.cfm">

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
                <p>

                </p>
                <ul id="glyph-list">
                <cfoutput>
                    <cfloop index="icon" array="#icon_array#">
                        <li title="#icon.name#">
                            <i class="#icon.name#"></i>
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
                    <a href="#" class="btn btn-large btn-success disabled"> Download Now</a>
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