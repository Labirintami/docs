---
sidebar_label: Methods
title: Methods
---


## `destructor`

Releases occupied resources

`void clear();`

<!-- :::note &nbsp;
void clear();
::: -->

```js 
richtext.destructor();
```
___

## `exitFullScreen`

Exits the full screen mode


`void exitFullScreen();`


```js 
richtext.exitFullScreen();
```
___

## `fullScreen`

Enters the full screen mode

`void fullScreen();`

```js 
richtext.fullScreen();
```
___


## `getEditorAPI`

`object getEditorAPI();`

Returns
`object` an object with API methods of the editor

```js 
var EditorAPI = richtext.getEditorAPI();
```

#### Details
The returned EditorAPI method contains a list of methods you can use to apply different operations to the editor. Check the list of editor API methods below.
___

## `getValue`

Returns the content of the RichText editor in the chosen format

`string getValue( [string mode] );`


| Parameter | Type     | Description                                                           |
|-----------|----------|-----------------------------------------------------------------------|
| `mode`    | `string` | the format of returned content:"html" (default), "markdown" or "text" |

**Returns:**

| Type     | Description                        |
|----------|------------------------------------|
| `string` | the content of the RichText editor |



```js 
// getting content in the markdown format
var content = richtext.getValue("markdown");
```
___

## `getStats`

Returns statistics about the entered content

`object getStats();`

**Returns:**

| Type     | Description                                                 |
|----------|-------------------------------------------------------------|
| `object` | an object with available statistical data about edited text |


```js 
var chars = richtext.getStats(); 
// -> {chars: 467, words: 80, charsExlSpace: 393}
```

Related samples:
Getting statistics. //todo

#### Details
Getting separate statistical data fields
You can get each field of statistical data separately, as it's described below.

**Characters**

To return the count of characters typed into the editor, use the chars property of the getStats method.

```js 
var chars = richtext.getStats().chars;
```

Words
To return the count of words typed into the editor, use the words property of the getStats method.

```js 
var chars = richtext.getStats().words;
```

To return the count of characters typed into the editor excluding the number of spaces, use the charsExlSpace property of the getStats method.

```js 
var chars = richtext.getStats().charsExlSpace;
```

### Getting custom statistics
It is also possible to display custom statistics via the customStats configuration option for any other text items, e.g. the number of sentences:

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
___

## `paint`

Repaints RichText

`void paint();`

```js 
richtext.paint();
```
___

## `setValue`

Adds content into the RichText editor

`void setValue(string value,string mode);`

| Parameter | Type     | Description                                                                   |
|-----------|----------|-------------------------------------------------------------------------------|
| `value`   | `string` | the context you want to add into the editor in either HTML or Markdown format |
| `mode`    | `string` | optional, the format of text parsing: "html" or "markdown"                    |

```js 
var htmlText = `<h1>Meet DHTMLX Rich Text Editor!</h1>` +
`<p>This demo will show you a customizable JavaScript rich text editor.</p>` +
`<p><i>To learn more, read </i><a href="http://docs"><i>documentation</i></a></p>.`
 
// adding HTML content
richtext.setValue(htmlText);
```

**Details**
An example of adding Markdown content is given below:

```js 
var mdText = `# Meet DHTMLX Rich Text Editor!
 
This demo will show you a customizable **JavaScript rich text editor**.
 
*To learn more, read [documentation](http://docs)*.`
 
richtext.setValue(mdText,"markdown");
```

:::caution
Please note that for a text in the Markdown format you need to define paragraphs by empty lines.
:::
