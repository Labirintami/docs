---
sidebar_label: RichText Overview
title: RichText Overview
---


dhtmlxRichText is a JavaScript client-side tool for fast and handy editing of content. It provides a compact set of formatting controls, two editing modes for comfy work with text and an easily adjustable toolbar.

This component supports parsing and serialization of data in the HTML and JSON formats and allows using any icon fonts and adding custom controls. Besides, there are ready-made solutions for integration with
such popular JavaScript frameworks as Angular, React and Vue.js.

Toolbar structure
--------------------

The toolbar of Richtext is [easily configurable](guides/configuration.md#toolbar). It contains several blocks of controls and their number depends on the chosen type of toolbar:

- default toolbar

The default toolbar includes 6 blocks of controls. They are: "undo", "style", "decoration", "colors", "align" and "link":

<!-- ![Default toolbar](default_toolbar.png) -->
 <img alt="" src={require('./assets/default_toolbar.png').default} />

- full toolbar

The full toolbar includes all the default blocks and additional "clear", "stats" and "fullscreen" blocks:

<!-- ![Full toolbar](full_toolbar.png) -->
 <img alt="" src={require('./assets/full_toolbar.png').default} />

You can [adjust the look and feel of the toolbar](guides/customization.md) to meet your requirements.


Two working modes 
---------------------

dhtmlxRichText can work with content in two modes. You can choose the most suitable mode to feel comfortable while editing text. The modes are:

- "classic"

<!-- ![Classic mode](classic_mode.png) -->
 <img alt="" src={require('./assets/classic_mode.png').default} />

- "document"

<!-- ![Document mode](doc_mode.png) -->
 <img alt="" src={require('./assets/doc_mode.png').default} />

[Read more](guides/configuration.md#modesofediting) about setting the mode you like best.

Supported formats
----------------

The RichText editor supports [parsing](guides/loading_data.md#addingcontentintoeditor) and [serialization](guides/working_with_richtext.md#gettingcontentfromeditor) of content in the 
[HTML and Markdown formats](guides/loading_data.md#formatofcontent).

- HTML format

<!-- ![HTML format](html_format.png) -->
 <img alt="" src={require('./assets/html_format.png').default} />

- Markdown format

<!-- ![Markdown format](markdown_format.png) -->
 <img alt="" src={require('./assets/markdown_format.png').default} />

Integration
-------------

Rich Text can be integrated with other JavaScript frameworks. There are related guides and demos available for:

- [Integration with Angular](guides/react_integration.md)
- [Integration with React](guides/react_integration.md)
- [Integration with Vue.js](vuejs_integration.md)

I am referencing a [document](doc1.md). Reference to another [document in a folder](folder/doc3.md).

[Relative document](../doc2.md) referencing works as well.






<!-- What's Next todo
----------- -->

<!-- It's high time to embed RichText into your application to enrich it with editing abilities. The how_to_start.md tutorial is ready to help your on your way.

To learn the features of dhtmlxRichText, check other helpful resources:

- api/refs/richtext.md
- guides.md -->
