<cfinclude template="icons.cfm">

<!--- page variables --->
<cfset icons = URL.icon_list>
<cfset color = "##ffffff">
<cfset right_now = Now()>
<cfset zip_file_name = "#DateFormat(right_now, 'yyyy-mm-dd')#-#TimeFormat(right_now, 'HH-mm-ss-lll')#.zip">
<cfset zip_file_path = expandPath("zips/#zip_file_name#")>
<cfset css_file_name = 'icon-pack-custom.css'>
<cfset scss_file_name = 'icon-pack-custom.scss'>
<cfset less_file_name = 'icon-pack-custom.less'>
<cfset index_file_name = 'index.html'>
<cfset html_content = ''>

<cfsavecontent variable="css_header">
    <cfinclude template="templates/css_header.css">
</cfsavecontent>

<cfsavecontent variable="html_file_template">
    <cfinclude template="templates/html_file.html">
</cfsavecontent>

<!--- Contents of CSS file --->
<cfsavecontent variable="css_file">
<cfoutput>
#css_header#
</cfoutput>
</cfsavecontent>

<!--- Contents of SCSS file --->
<cfsavecontent variable="scss_file">
<cfoutput>
#css_header#
$icon_color: '#color#';
</cfoutput>
</cfsavecontent>

<!--- Contents of LESS file --->
<cfsavecontent variable="less_file">
<cfoutput>
#css_header#
@icon_color: '#color#';
</cfoutput>
</cfsavecontent>

<!--- Loop over the incoming selected icons --->
<cfloop list="#icons#" index="string_icon">
    <!--- Loop over the icon_array to find the icon packet --->
    <cfloop array="#icon_array#" index="icon">
        <!--- do they match? --->
        <cfif string_icon eq icon.name>

            <!--- the SCSS file contents --->
            <cfset css_file &= "
.ui-icon-#icon.name#:after { background-image: url('#icon.xml#') }
.ui-nosvg .ui-icon-#icon.name#:after { background-image: url('png_images/#icon.name#.png'); }

">

            <!--- the SCSS file contents --->
            <cfset scss_file &= "
.ui-icon-#icon.name#:after { background-image: url('#Replace(icon.xml, "##ffffff", "##{$icon_color}")#') }
.ui-nosvg .ui-icon-#icon.name#:after { background-image: url('#icon.name#.png'); }

">

            <!--- the LESS file contents --->
            <cfset less_file &= "
.ui-icon-#icon.name#:after { background-image: url('#Replace(icon.xml, "##ffffff", "@{icon_color}")#') }
.ui-nosvg .ui-icon-#icon.name#:after { background-image: url('#icon.name#.png'); }

">

            <!--- demo HTML file --->
            <cfset html_content &= '<a href="index.html" data-role="button" data-icon="#icon.name#" >data-icon="#icon.name#"</a>
            '>

        </cfif>
    </cfloop>
</cfloop>

<cfzip file="#zip_file_path#" action="zip">
    <cfzipparam content="#css_file#" entrypath="#css_file_name#">
    <cfzipparam content="#scss_file#" entrypath="#scss_file_name#">
    <cfzipparam content="#less_file#" entrypath="#less_file_name#">
    <cfzipparam content="#Replace(html_file_template, 'ICONS_GO_HERE', html_content)#" entrypath="#index_file_name#">
    <cfloop list="#icons#" index="string_icon">
        <cfzipparam source="#expandPath('png_icons/')##string_icon#.png" entrypath="png_images/#string_icon#.png">
    </cfloop>
</cfzip>

<cfset sleep(2000)>

<cfoutput>zips/#zip_file_name#</cfoutput>

<!--- <cfheader name="Content-disposition" value="attachment;filename=#zip_file_name#">
<cfcontent type="application/zip" file="#variables.filepath#"> <!---  deleteFile="yes" ---> --->