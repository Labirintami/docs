---
sidebar_label: Integration with Angular
title: Integration with Angular
---

You can use dhtmlxRichText in an application created with the [Angular](https://vuejs.org/) framework. [Check the demo on Github](https://github.com/DHTMLX/angular-widgets).

:::caution 
Please note that the implementation provided below is not the only way to use dhtmlxRichText in a Angular-based application. It gives you initial schema of the integration and implies further 
extension of the app functionality depending on your goals.
:::

## Including source files

To add RichText package into your Angular-based app you need to [download the component package](https://dhtmlx.com/docs/products/dhtmlxRichText/download.shtml) and unpack it into a folder of your project.

Then include **richtext.js** and **richtext.css** files into a page. 
Make sure that you set correct relative paths to these files:

~~~html title="ndex.html"
<script type="text/javascript" src="codebase/richtext.js"></script>  
<link rel="stylesheet" href="codebase/richtext.css">
~~~


## Initialization

There are two possible scenarios of initializing RichText inside an Angular application. One consists in isolating RichText structure and data inside of the Angular component and another one suggests 
separating view and data parts with the possibility of interaction between them.

### Scenario 1. Isolating RichText in an Angular component

In this variant RichText configuration and data are held inside of the Angular component with no bonds with the external part of the application. 

#### RichText initialization

- Create a *RichText.ts* file, where you will define a Component. Each component must have a template assigned, for RichText it will be a plain DIV tag with a named reference.

~~~js title="RichText.ts"
@Component({
 	template: `<div #widget class='widget-box'></div>`
})
~~~

- Use the `new Richtext` constructor to initialize RichText inside of the container that you've set above: 

~~~js title="RichText.ts"
export class RichtextComponent implements OnInit, OnDestroy {
  @ViewChild('widget') container: ElementRef;
  richtext: Richtext;

  ngOnInit() {
    this.richtext = new Richtext(this.container.nativeElement, {
      toolbarBlocks: ['default', 'clear', 'fullscreen']
    });
  }
}
~~~

#### Changing config

- Next you can do some actions, e.g. add a new control into the toolbar:

~~~js title="RichText.ts"
export class RichtextComponent implements OnInit, OnDestroy {
  @ViewChild('widget') container: ElementRef;
  richtext: Richtext;

  ngOnInit() {
    this.richtext = new Richtext(this.container.nativeElement, {
      toolbarBlocks: ['default', 'clear', 'fullscreen']
    });
    
    this.richtext.toolbar.data.add({
        value: 'MyAction'
    });
  }
}
~~~


### Scenario 2. Exposing RichText data and config 

This variant adds flexibility in the control over RichText data and configuration by allowing access to them from other parts of the application.

#### RichText initialization

- The first step is the same. Create a file, let it be *RichText2.ts* this time, and add a container for the RichText:

~~~js title="RichText2.ts"
@Component({
 	template: `<div #widget class='widget-box'></div>`
})
~~~

- Then initialize RichText with the `new RichText` constructor and define the configuration properties of RichText in the object passed as a second parameter of the constructor:

~~~js title="RichText2.ts"
export class RichtextComponent implements OnInit, OnDestroy {
  @ViewChild('widget') container: ElementRef;
  richtext: Richtext;

  	ngOnInit() {
      	this.richtext = new Richtext(this.container.nativeElement, {
      		mode: this.mode
    	});
    }   
}
~~~

#### Working with configuration options

- Set the list of used RichText configuration properties and their types before the initialization function:

~~~js title="RichText2.ts"
export class RichtextComponent implements OnInit, OnDestroy {
  @ViewChild('widget') container: ElementRef;
  richtext: Richtext;

  @Input() mode: 'document' | 'classic' = 'classic';
  @Input() value: string;
  @Input() dataType: 'html' | 'markdown';


  ngOnInit() {
    this.richtext = new Richtext(this.container.nativeElement, {
      mode: this.mode
    });
  }
}
~~~

The properties of RichText are exposed and available to work with outside the component. In the example below the "document" mode is specified for richtext:

~~~js title="BasicSample.ts"
@Component({
	template: `
    <div class='app-box'>
	  <app-richtext mode='document' class='wide-size'></app-richtext>
    </div>`
}}
~~~

#### Working with RichText API

This variant of using RichText in a Angular application allows working with its API moving all calls of methods and event handlers into a separate file. 

First, you can add a couple of wrappers for convenient work with RichText API. The example below shows how you can wrap actions for
setting RichText value and handling the *change* event taking into account the type of data: 

~~~js title="RichText2.ts"
export class RichtextComponent implements OnInit, OnDestroy {
  @ViewChild('widget') container: ElementRef;
  richtext: Richtext;

  ngOnInit() {
    this.richtext = new Richtext(this.container.nativeElement, {
      mode: this.mode
    });

    if (this.value) {
        this.richtext.setValue(this.value, this.dataType);
    }

    this.richtext.events.on('change', () => {
        this.change.emit(this.richtext.getValue(this.dataType));
    });
  }
~~~

After that you can use the ready wrappers in other parts of application. 

- Create a *DataSample.ts* file and describe the methods you want to use while working with the richtext. In the example below the *updateMarkdown* and *updateHTML* methods are added for updating the 
the content of the RichText editor:

~~~js title="DataSample.ts"
export class RichtextDataSampleComponent  {
  @Input() html = '';
  @Input() markdown = ``;
  updateMarkdown(value) {
    this.markdown = value;
  }
  updateHTML(value) {
    this.html = value;
  }
}
~~~

- Use the above methods to update the Richtext content depending on the type of entered data when some changes are made:

~~~js title="DataSample.ts"
@Component({
  template: `
	<div class='app-box'>
  		<app-richtext value='{{html}}' class='wide-size' 
        	(change)="updateHTML($event)"></app-richtext>
 		<app-richtext value='{{markdown}}' dataType='markdown' class='wide-size' 
        	(change)="updateMarkdown($event)"></app-richtext>
	</div>`
})
~~~

