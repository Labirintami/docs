---
sidebar_label: Working with RichText
title: Working with RichText
---

The API of dhtmlxRichText includes a basic set of methods that let you perform operations on the component. You can serialize edited text into either HTML or Markdown formats, get the number of the typed characters and enter/exit the full screen mode of the editor on the fly.

Getting content from editor
-------------------

After you've entered the necessary text into the editor and formatted it to your taste, you can save the result in any of [supported formats](loading_data.md#formatofcontent).

To save the edited text, make use of the api/richtext_getvalue.md method. The method takes an only parameter:

- **mode** - (*string*) the format the text should be saved in: "html", "markdown" or "text" (for a plain text). "html" is used by default

~~~js
// getting content in the Markdown format
var content = richtext.getValue("markdown");
~~~

<!-- {{sample 03_usage/01_get_value.html}} todo -->

If you are in two minds about how to add content into the RichText editor, there is the loading_data.md article.

Statistics
---------------------

RichText editor allows you to show statistics about the edited text. There is the **Statistics** control in the toolbar that serves for this purpose:

<!-- ![Statistics control](stats_control.png) -->
<img alt="" src={require('./../assets/stats_control.png').default} />

### Getting statistics

You can provide users with information about the number of characters, words and characters excluding spaces with the help of the api/richtext_getstats.md method. 

~~~js
var stats = richtext.getStats();
~~~

The method returns an object with available statistical data about the text edited in the RichText editor. For example:

~~~js
{chars: 467, words: 80, charsExlSpace: 393}
~~~

{{sample 03_usage/02_get_stats.html}}

You can also get each field of statistical data separately, as it described below.

#### Characters

To return the count of characters typed into the editor, use the **chars** property:  

~~~js
var chars = richtext.getStats().chars;
~~~

#### Words

To return the count of words typed into the editor, use the **words** property:  

~~~js
var chars = richtext.getStats().words;
~~~

####Characters without spaces

To return the count of characters typed into the editor excluding the number of spaces, use the **charsExlSpace** property:  

~~~js
var chars = richtext.getStats().charsExlSpace;
~~~

###How to display statistics

Using the api/richtext_getstats.md method you can display info on the number of entered characters in any part of your application. For example, in a separate container by a click on a button:

~~~js
<button onclick="calc()" class="dhx_btn dhx_btn--flat">Characters Count</button>

<div>
	The count of characters: <span id="characters-amount"></span>
</div>
        
function calc() {
   document.getElementById('characters-amount').innerText = richtext.getStats().chars;
}
~~~

<!-- {{sample 03_usage/02_get_stats.html}} todo -->

<h3 id="customstats">Custom statistics</h3> 

Besides the default statistical data, you can display any custom data via the api/richtext_customstats_config.md configuration option. Set an array with necessary statistical parameters as a value of this option. 
Each parameter represents an object with two properties:

- **name** - (*string*) the name of the field that should be displayed
- **callback** - (*function*) a function that implements the logic of counting entries of the specified field

In the example below the editor shows the number of sentences together with the count of characters and words: 

~~~js
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
~~~

<!-- ![Custom statistics](custom_stats.png) -->
<img alt="" src={require('./../assets/custom_stats.png').default} />

<!-- {{sample 02_configuration/04_custom_stats.html}} todo -->


Full screen mode
-------------------

You can enter/exit the full screen mode for the Rich text editor with the help of the corresponding API methods: api/richtext_fullscreen.md and api/richtext_exitfullscreen.md:

~~~js
// enter full screen
richtext.fullScreen();

// exit full screen
richtext.exitFullScreen();
~~~

Editor API
-----------

The editor of RichText contains a set of methods that make it easy to work with text on the fly. In order to get access to the API of the editor, call the api/richtext_geteditorapi.md method.
It returns an object with all available methods.

~~~js
var EditorAPI = richtext.getEditorAPI();
~~~

The list of methods included into the object returned by the **getEditorAPI()** method is the following:

<!-- - api/editor_api/add.md todo
- api/editor_api/getmodel.md
- api/editor_api/getposition.md
- api/editor_api/getselection.md
- api/editor_api/remove.md 
- api/editor_api/setmodel.md
- api/editor_api/setselection.md
- api/editor_api/update.md  -->

For example, to add a text into the RichText editor, use the following code:

~~~js
richtext.getEditorAPI().add("text");
~~~

<!-- {{sample 06_editor_api/06_add.html}} todo -->



