---
sidebar_label: Configuration
title: Configuration
---

With RichText configuration options, you can make your work with text even more comfortable. It is possible to define the desired working mode and set the blocks of toolbar buttons you need in the order you want.

Working modes
---------------

There are two modes of RichText editor between which you can select to get the best working place for creating your perfect texts. The modes are:

- "classic"

<!-- ![Classic mode](classic_mode.png) -->
 <img alt="" src={require('./../assets/classic_mode.png').default} />

- "document"

<!-- ![Document mode](doc_mode.png) -->
 <img alt="" src={require('./../assets/doc_mode.png').default} />

To specify the desired mode, you need to define it in the api/richtext_mode_config.md option of the Richtext configuration object during initialization of the component:

~~~js
var richtext = new dhx.Richtext("rich", {
	mode: "document"
});
~~~

<!-- {{sample 02_configuration/01_modes.html}} todo -->

Toolbar
------------

### Default toolbar

The RichText toolbar consists of several blocks of controls that can be changed according to your needs. By default, there are the following blocks of controls in the toolbar: 

- *"undo"* - to undo/redo recent actions
- *"style"* - to change the font, font size, turn plain text into a heading and vice versa, and make a quote out of the text
- *"decoration"* - to make text bold, italic, underlined or strike-through
- *"colors"* - to change the color of the text or its background
- *"align"* - to adjust the alignment of the text on a page
- *"link"* - to add a link into the text

The structure of toolbar is defined via the api/richtext_toolbarblocks_config.md configuration option of the component, which is an array with strings presenting the names of controls.

~~~js
var richtext = new dhx.Richtext(document.body, {
	// default toolbar
    toolbarBlocks: [
    	"undo", "style", "decoration", "colors", 
        "align", "link"
    ]
});
~~~

<!-- ![Default toolbar](default_toolbar.png) -->
 <img alt="" src={require('./../assets/default_toolbar.png').default} />

<!-- {{sample 01_init/01_basic.html}} todo -->

You can add several more blocks to make the full toolbar: 

- *"clear"* - to clear formatting applied to the text
- *"fullscreen"* - to enter/exit the full screen mode
- *"stats"* - to display statistics about the text: the count of words, characters and characters excluding spaces or some custom statistical data
    
~~~js
var richtext = new dhx.Richtext(document.body, {
	// full toolbar
    toolbarBlocks: [
    	"undo", "style", "decoration", "colors", "align",
        "link", "clear", "stats", "fullscreen"
    ]
});
~~~

<!-- ![Full toolbar](full_toolbar.png) -->
 <img alt="" src={require('./../assets/full_toolbar.png').default} />


<!-- {{sample 02_configuration/03_full_toolbar.html}} todo -->

### Short toolbar definition

There is also a possibility to specify the default set of buttons via the *"default"* definition in the **toolbarBlocks** array, like this:

~~~js
var richtext = new dhx.Richtext(document.body, {
	// full toolbar
    toolbarBlocks: ["default", "clear", "stats", "fullscreen"]
});
~~~

where the "default" string includes the default set of controls: *"undo"*, *"style"*, *"decoration"*, *"colors"*, *"align"* and *"link"*.


### Custom toolbar

You can specify your own structure of the toolbar by enumerating the necessary elements of the **toolbarBlocks** array in the desired order, for example:

~~~js
var richtext = new dhx.Richtext(document.body, {
	toolbarBlocks: ["clear", "colors", "align","decoration", 
    	"undo", "fullscreen","link"
    ]
});
~~~

<!-- ![Custom toolbar](custom_toolbar.png) -->
 <img alt="" src={require('./../assets/custom_toolbar.png').default} />

<!-- {{sample  02_configuration/02_toolbar_blocks.html}} todo -->

Toolbar is [highly customizable](customization.md). You can add new controls, change the icons of controls and apply the desired icon pack. 

