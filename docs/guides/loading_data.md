---
sidebar_label: Setting Content
title: Setting Content
---

dhtmlxRichText editor allows loading content in the HTML and Markdown formats. Thus, besides entering text right into the editor, you can load ready content in the supported format and edit it with the help of the RichText 
set of controls.

Format of content
------------------

### HTML format

Rich Text supports standard HTML format, so you can use all habitual formatting tags. The image below presents the result of parsing a text in the HTML format into the Rich Text editor:

<!-- ![HTML format](html_format.png) -->
<img alt="" src={require('./../assets/html_format.png').default} />

### Markdown format

For parsing of a Markdown-formatted text, dhtmlxRichtext uses the [Marked.js](https://github.com/markedjs/marked) markdown parser.
For now the component supports basic formatting elements of the Markdown syntax. Check the cheat sheet below:

<!-- ![Markdown cheat sheet](markdown_cheatsheet.png) -->
<img alt="" src={require('./../assets/markdown_cheatsheet.png').default} />

The following image demonstrates the result of parsing a text in the Markdown format into the Rich Text editor:

<!-- ![Markdown format](markdown_format.png) -->
<img alt="" src={require('./../assets/markdown_format.png').default} />

Adding content into editor
------------------

In order to add some text content into the RichText, make use of the api/richtext_setvalue.md method. The method takes two parameters:

- **value** - (*string*) a string with the content you want to add into the editor in either HTML or Markdown format
- **mode** - (*string*) optional, the format of text parsing: "html" (default) or "markdown"

Below you can find examples of loading text in both available formats:

- adding HTML content

~~~js
var htmlText = `<h1>Meet DHTMLX Rich Text Editor!</h1>` +
`<p>This demo will show you a customizable JavaScript rich text editor.</p>` +
`<p><i>Read more in</i><a href="https://docs.dhtmlx.com"><i>documentation</i></a></p>.`

richtext.setValue(htmlText);
~~~

<!-- {{sample 01_init/03_set_html_value.html}} todo -->

- adding Markdown content

:::caution
Please note that for a text in the Markdown format you need to define paragraphs by empty lines.
:::

~~~js
var mdText = `# Meet DHTMLX Rich Text Editor!

This demo will show you a customizable **JavaScript rich text editor**.

*To learn more, read [documentation](https://docs.dhtmlx.com/richtext/index.html)*.`

richtext.setValue(mdText,"markdown");
~~~

<!-- {{sample 01_init/04_set_markdown_value.html}} todo -->

<!-- Related articles todo -->
<!-- --------------------

To learn about how to get edited text in HTML and Markdown formats, read the working_with_richtext.md guide. -->

