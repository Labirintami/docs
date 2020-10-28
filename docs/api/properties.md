---
sidebar_label: Properties
title: Properties
---


## `customStats`

Defines the logic of displaying custom statistics

`varray customStats;`

<!-- :::note &nbsp;
void clear();
::: -->

```js 
var rich = new dhx.Richtext("rich", {
    customStats: [
        {
           name: "chars"
        },
        {
           name: "words"
        },
        {
           name: "sentences",
           cb: function(text) {
               var rawSentences = text.split(/[.?!]+/);
               var count = 0;
               for (var i=0; i<rawSentences.length; i++) {
                   if (rawSentences[i].length > 0) {
                       count += 1;
                   }
               }
               return count;
           }
        }
    ],
    toolbarBlocks: ["default", "stats"]
});
```

Related samples
Custom stats. //todo

Each field of statistical data represents an object with two properties:

- **name** - (*string*) the name of the field that should be displayed
- **callback** - (*function*) a function that implements the logic of counting entries of the specified field
___

## `mode`

The working mode of the RichText editor

`string mode;`

Values
"default","document" //todo
Default value: "default"


```js 
var richtext = new dhx.RichText("richtext_container", { 
    mode:"document"
});
```
___

## `toolbarBlocks`

Specifies blocks of buttons that will be shown in the Richtext toolbar

`array toolbarBlocks;`


```js 
// default toolbar blocks
var richtext = new dhx.RichText("richtext_container", { 
    toolbarBlocks:["undo", "style", "decoration", "colors", 
        "align", "link"]
});
```

Default value: ["undo", "style", "decoration", "colors", "align", "link"]
Related samples
Basic initialization. //todo

#### Details
Full toolbar
The full toolbar contains several more blocks: "clear", "fullscreen", and "stats":

//todo add code snippet sample on the page