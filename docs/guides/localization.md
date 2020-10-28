---
sidebar_label: Localization
title: Localization
---

You have a possibility to present the interface of the RichText editor in any language you wish. You just need to translate the corresponding strings for labels and tooltips and apply a ready locale to the component.

<!-- ![Localized RichText](richtext_locale.png) -->
 <img alt="" src={require('./../assets/richtext_locale.png').default} />

Default locale
-----------------

The default English locale looks like this:

~~~js
var en = {
	apply: "Apply",
	undo: "Undo",
	redo: "Redo",
	selectFontFamily: "Font",
	selectFontSize: "Font size",
	selectFormat: "Style",
	selectTextColor: "Text color",
	selectTextBackground: "Background color",
	markBold: "Bold",
	markItalic: "Italic",
	markStrike: "Strike",
	markUnderline: "Underline",
	alignLeft: "Align left",
	alignCenter: "Align center",
	alignRight: "Align right",
	addLink: "Add link",
	clearFormat: "Clear formatting",
	fullscreen: "Fullscreen",
	removeLink: "Remove link",
	edit: "Edit",
	h1: "Heading 1",
	h2: "Heading 2",
	h3: "Heading 3",
	h4: "Heading 4",
	h5: "Heading 5",
	h6: "Heading 6",
	p: "Normal text",
	blockquote: "Block quote",
    stats: "Statistics",
	chars: "chars",
	charsExlSpace: "charsExlSpace",
	words: "words" 
}; 
~~~

Custom locale
------------------

To use a different locale, your steps should be:

- provide translation for all text labels in RichText, e.g. take a look at the German locale:

~~~js
var de = {
	apply: "Anwenden",
	undo: "Rückgängig machen",
	redo: "Wiederholen",
	selectFontFamily: "Schriftfamilie",
	selectFontSize: "Schriftgröße",
	selectFormat: "Textstil",
	selectTextColor: "Textfarbe",
	selectTextBackground: "Texthintergrund",
	markBold: "Fett",
	markItalic: "Kursiv",
	markStrike: "Durchgestrichen",
	markUnderline: "Unterstrichen",
	alignLeft: "Links ausrichten",
	alignCenter: "Mittens ausrichten",
	alignRight: "Rechts ausrichten",
	addLink: "Einen Link hinzufügen",
	clearFormat: "Format entfernen",
	fullscreen: "Vollbildschirm",
	unlink: "Einen Link löschen",
	edit: "Redigieren",
	h1: "Überschrift 1",
	h2: "Überschrift 2",
	h3: "Überschrift 3",
	h4: "Überschrift 4",
	h5: "Überschrift 5",
	h6: "Überschrift 6",
	p: "Normaler Text",
    blockquote: "Blockzitat",
    stats: "Statistiken",
    chars: "Zeichen",  
	charsExlSpace: "Zeichen ohne Leerzeichen", 
	words: "Wörter"    
};
~~~

- apply the new locale by calling the **dhx.i18n.setLocale()** method before initializing RichText:

~~~js
dhx.i18n.setLocale("richtext", de);
var richtext = new dhx.Richtext("richtext_container");
~~~

<!-- {{sample 01_init/02_locale.html}} todo -->

