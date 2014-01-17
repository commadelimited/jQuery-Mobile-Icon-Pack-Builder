<cfinclude template="icons.cfm">

<!--- page variables --->
<cfset icons = URL.icon_list>
<cfset color = "##000000">

<cfoutput>
<!---
    Loop over icon list
    extract name, xml, create SCSS and CSS file
--->
<cfsavecontent variable="main_file_header">
/*!
* jQuery Mobile Icon Pack - Font Awesome version 1.4.0
*
* Copyright 2013 Andy Matthews
* http://andyMatthews.net
* Released under the GPL/MIT license.
*
*/
</cfsavecontent>

<cfsavecontent variable="scss_file">
#main_file_header#

$icon_color: '#color#';
</cfsavecontent>

<cfloop list="#icons#" index="string_icon">
    <cfset icon = icon_array[]
    <cfset scss_file = ".ui-icon-adjust:after { background-image: url('data:image/svg+xml;charset=US-ASCII,#icon.xml#') }">

</cfloop>

#scss_file#
</cfoutput>