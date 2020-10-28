---
sidebar_label: Customization
title: Customization
---

You can customize the appearance and structure of toolbar, change the settings of controls and use any icon pack instead of the default one.

Icons
----------

dhtmlxRichText uses the [Material Design](https://materialdesignicons.com/)-based icons by default. However, you can use any other icon font pack, if necessary. For this, you need to include the desired icon font on 
a page and apply icons for Toolbar controls.

For example, you can use the [Font Awesome](https://fontawesome.com/) icon pack by including [link to its CDN](https://fontawesome.com/how-to-use/on-the-web/setup/getting-started?using=web-fonts-with-css) 
after the source files of dhtmlxRichText as follows:

~~~html
<script type="text/javascript" src="../../codebase/richtext.js"></script>
<link rel="stylesheet" href="../../codebase/richtext.css">

<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" 
	integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" 
    crossorigin="anonymous">
~~~

<!-- {{sample 04_customization/01_custom_icons.html}} todo -->

Then you can use the name of the icon as the value of the **icon** property in the object with the control parameters for toolbar. See details below.

Controls
-------------

### Types

There are the following types of controls you can add: *button*, *customHTMLButton*, *separator* and *spacer*.

#### Button

The **button** object has the following properties:

- **type** - the type of a button, set it to "button"
- **id** - the id of a button
- **icon** - the name of an icon from the used icon font
- **hotkey** - the name of the hot key for a button
- **value** - the value of a button
- **tooltip** - the tooltip of a button
- **count** - the counter of a button
- **items** - an array of nested controls
- **group** - defines the name of a group of controls a button belongs to. If one of the buttons in the group becomes active, all others automatically become inactive
- **twoState** -  the flag that defines whether a button can be used in two states
- **active** - the state of a button activity: *true* - active, *false* - inactive
- **multiClick** - defines the behavior of the Undo/Redo buttons: 
	- *true* - all the actions are reverted/re-applied one by one when the Undo/Redo button is clicked and held
    - *false* - one action is reverted/re-applied on each click of the Undo/Redo button

#### Custom HTML Button

The **customButton** object has the following properties:

- **type** - the item type, set it to "customButton"
- **id** - the id of a button
- **html** - a string with HTML that should be inserted into the button
- **twoState** -  the flag that defines whether a button can be used in two states
- **active** - the state of a button activity: *true* - active, *false* - inactive
- **value** - the value of a button
- **count** - the counter of a button

### Work with controls

The data collection API of the **toolbar** allows you to manipulate the controls, namely to add custom controls, remove the controls you don't need, or update the controls, e.g. change their icons.

#### Adding controls

To add a new control, apply the **richtext.{name}.data.add()** method. It takes the parameters below:

- **config** - (*object*) an object with the control config
- **index** - (*number*) the index of the position to place the control into
- **parent** - (*string*) the id of a parent control (for the *menuItem* type)

For a button:

~~~js
richtext.toolbar.data.add({
	type: "button", 
    id: "button-id",
    value: "Some value",
    icon: "icon-name"
}, 2);
~~~

For a custom HTML button:

~~~js
richtext.toolbar.data.add({
	type: "customHTMLButton", 
    id: "htmlbutton-id",
    value: "Some value",
    icon: "icon-name"
}, 2);
~~~

#### Updating controls

You can change the icon of the control and its other config options via the **richtext.{name}.data.update()** method. It takes two parameters:

- the id of the control
- an object with new configuration of the control

~~~js
richtext.toolbar.data.update("add", { 
    icon: "icon_name" 
});
~~~

#### Deleting controls

To remove a control, make use of the **richtext.{name}.data.remove()** method. Pass the id of the control that should be removed to the method:

~~~js
richtext.toolbar.data.remove("control-id");
~~~

Below you will find detailed examples.

Toolbar 
---------

### Default controls

The [default toolbar](overview.md#toolbar) contains the following blocks of controls:

- the **Undo** block 
	- the *Undo* button (id:"undo")
    - the *Redo* button (id:"redo")    
- the **Style** block
	- the *Font family* button (id:"font-family")
    - the *Font size* button (id:"font-size")
    - the *Style* button (id:"style")
    	- the *Base text* option (id:"style-p")
        - the *Heading 1* option (id:"style-h1")
        - the *Heading 2* option (id:"style-h2")
        - the *Heading 3* option (id:"style-h3")
        - the *Heading 4* option (id:"style-h4")
        - the *Heading 5* option (id:"style-h5")
        - the *Heading 6* option (id:"style-h6")     
	- the *Block quote* button (id:"blockquote")
- the **Decoration** block 
	- the *Bold* button (id:"bold")
    - the *Italic* button (id:"italic")
    - the *Strike* button (id:"strike")
    - the *Underline* button (id:"underline")
- the **Colors** block
	- the *Text color* button (id:"color") 
    - the *Background color* button (id:"background")
- the **Align** block
	- the *Align left* button (id: "align-left")
    - the *Align center* button (id: "align-center")
    - the *Align right* button (id: "align-right")
- the **Link** block
	- the *Link* button (id:"link")

    
It is also possible to add the blocks enumerated below to get the full toolbar:

- the **Clear format** block
	- the *Clear format* button (id:"clear-style")
- the **Full screen** block
	- the *Fullscreen* button (id:"fullscreen")
- the **Statistics** block
	- the **Statistics** button (id:"stats")
        
    
### Adding controls

In the example below a new button named **Count Characters** is added into the toolbar:

<!-- ![Custom Toolbar Button](custom_toolbar_button.png) -->
<img alt="" src={require('./../assets/custom_toolbar_button.png').default} />

~~~js
richtext.toolbar.data.add({
	type: "button",
    value: "Count Characters",
    id: "calc"
}, 24);
~~~

<!-- {{sample  04_customization/02_custom_button.html}} todo -->


### Updating controls


In the example below the default icons of the buttons of the **Decoration** block are changed to Font Awesome ones:

<!-- ![Custom Toolbar Icons](custom_toolbar_icons.png) -->
<img alt="" src={require('./../assets/custom_toolbar_icons.png').default} />


~~~js
var icons = [
	["bold", "fas fa-bold"],
    ["underline", "fas fa-underline"],
    ["italic", "fas fa-italic"],
    ["strike", "fas fa-strikethrough"]
];

for (var i=0; i<icons.length; i++) {
   var toolbarId = icons[i][0];
   var iconName = icons[i][1];
   richtext.toolbar.data.update(toolbarId, {icon: iconName});
}
~~~

<!-- {{sample	04_customization/01_custom_icons.html}} todo -->

### Deleting controls

In the example below the Undo button is removed from the toolbar:

~~~js
richtext.toolbar.data.remove("undo");
~~~

