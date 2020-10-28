---
sidebar_label: API Overview
title: API Overview
---

### Constructor


~~~js
var richtext = new dhx.Richtext("richtext_container", {
	mode:"document"
});
~~~

Parameters:

- an HTML container (or the ID of an HTML container)
- an object with configuration properties (check below)


<!-- <div class='h2'>Objects</div> todo

- [config](api/refs/richtext_props.md)
- [events](api/refs/events_methods.md)
- [EditorAPI](api/refs/editor_api_methods.md)
- toolbar -->

### Methods


| Name                             | Description                                        |
|----------------------------------|----------------------------------------------------|
| [destructor](api/methods.md#destructor)     | releases occupied resources                        |
| [exitFullScreen](api/methods.md#exitfullscreen) | exits the full screen mode                         |
| [fullScreen](api/methods.md#fullscreen)     | enters the full screen mode                        |
| [getEditorAPI](api/methods.md#geteditorapi)   | returns the full list of the editor API            |
| [getValue](api/methods.md#getvalue)       | gets the content entered into the RichText editor  |
| [getStats](api/methods.md#getstats)       | returns statistics on the entered content          |
| [paint](api/methods.md#paint)          | repaints RichText                                  |
| [setValue](api/methods.md#setvalue)       | sets the provided content into the RichText editor |                          
                                 

#### Events Bus

| Name                        | Description                                                                     |
|-----------------------------|---------------------------------------------------------------------------------|
| [detach](api/events_bus.md#detach) | detaches a handler from an event (which was attached before by the on() method) |
| [fire](api/events_bus.md#fire)   | triggers an inner event                                                         |
| [on](api/events_bus.md#on)     | attaches a handler to an inner event of Vault                                   |


### Events

| Name                              | Description                                            |
|-----------------------------------|--------------------------------------------------------|
| [Action](api/events.md#action)           | fires on any action in the editor                      |
| [Change](api/events.md#change)           | fires on any change in the editor                      |
| [selectionChange](api/events.md#selectionchange)  | fires on change of selection by a user                 |
| [selectionRefresh](api/events.md#selectionrefresh) | fires on automatic returning of cursor into the editor |



### Properties

| Name                               | Description                                                            |
|------------------------------------|------------------------------------------------------------------------|
| [customStats](api/properties.md#customstats)   | defines the logic of displaying custom statistics                      |
| [mode](api/properties.md#mode)          | the working mode of the RichText editor                                |
| [toolbarBlocks](api/properties.md#toolbarblocks) | specifies blocks of buttons that will be shown in the Richtext toolbar |

