---
sidebar_label: Initialization
title: Initialization
---

The current article will guide you through simple steps you need to take in order to insert a compact text editor into your application. All in all, you should complete just three steps:

1. [Include the RichText source files on a page](#includingsourcefiles).
2. [Create a container for RichText](#creatingcontainer).
3. [Initialize RichText with the object constructor](#initializingrichtext).

~~~html 
<!DOCTYPE html>
<html>
	<head>
		<title>How to Start with dhtmlxRichText</title>			
		<script type="text/javascript" src="../../codebase/richtext.js"></script>
		<link rel="stylesheet" href="../../codebase/richtext.css">
	</head>
	<body>
		<div id="richtext_container"></div>
		<script>
        	// creating dhtmlxRichText 
        	var richtext = new dhx.Richtext("richtext_container");
		</script>
	</body>
</html>
~~~

Including source files
-----------------------

[Download the package](https://dhtmlx.com/docs/products/dhtmlxRichText/download.shtml) and unpack it into a folder of your project.

To create dhtmlxRichText, you need to include 2 source files on your page:

- richtext.js
- richtext.css

Make sure that you set correct relative paths to these files:

~~~html title="index.html"
<script type="text/javascript" src="codebase/richtext.js"></script>  
<link rel="stylesheet" href="codebase/richtext.css">
~~~

The structure of the RichText package is the following:

- **sources** - the source code files of the library; they are easy-to-read and are mostly intended for debugging;
- **codebase** - the obfuscated code files of the library; they are much smaller and intended for use in production. **Include these files in your apps when they are ready**;
- **samples** - the code samples;
- **docs** - the full documentation of the component.


Creating container 
-----------------

Add a container for RichText and give it an id, for example "richtext_container":

~~~html title="index.html"
<div id="richtext_container"></div>
~~~

Initializing RichText
----------------------

Initialize RichText with the `dhx.Richtext` object constructor. The constructor has two parameters:

- the HTML container for RichText,
- an object with configuration properties. See the full list below.

{{snippet	index.html}}
~~~js
// creating dhtmlxRichText
var richtext = new dhx.Richtext("richtext_container", {// config options});
~~~

### <span id="config">Configuration properties</span>

This is a list of properties that you can specify in the Richtext configuration object:

- [**mode**](configuration.md#workingmodes) - (*string*) the working mode of RichText. Can be either "default" or "document".
- [**toolbarBlocks**](configuration.md#toolbar) - (*array*) specifies blocks of buttons that will be shown in the Richtext toolbar

You can set configuration options during initialization as the second parameter of the constructor:

~~~js
var richtext = new dhx.Richtext("richtext_container", { 
    mode:"document"
});
~~~

<!-- {{sample	02_configuration/01_modes.html}} todo -->


