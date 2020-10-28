---
sidebar_label: Integration with React
title: Integration with React
---

You can use dhtmlxRichText in an application created with the [React](https://reactjs.org/) framework. [Check the demo on Github](https://github.com/DHTMLX/react-widgets).

:::caution
Please note that the implementation provided below is not the only way to use dhtmlxRichText in a React-based application. It gives you initial schema of the integration and implies further 
extension of the app functionality depending on your goals.
:::

## Including source files

To add RichText package into your React-based app you need to [download the component package](https://dhtmlx.com/docs/products/dhtmlxRichText/download.shtml) and unpack it into a folder of your project.

Then include **richtext.js** and **richtext.css** files into a page. 
Make sure that you set correct relative paths to these files:

~~~html title="index.html"
<script type="text/javascript" src="codebase/richtext.js"></script>  
<link rel="stylesheet" href="codebase/richtext.css">
~~~

## Initialization

There are two possible scenarios of initializing RichText inside a React application. One consists in isolating RichText structure and data inside of the React component and another one suggests 
separating view and data parts with the possibility of interaction between them.

### Scenario 1. Isolating RichText in a React component

In this variant RichText configuration and data are held inside of the React component with no bonds with the external part of the application. 

#### RichText initialization

- Create a *RichText.js* file, then create the *RichText* class and add a container for RichText using the **render()** function. Store the reference to the container in the **el** property:

~~~js title="RichText.js"
class Richtext extends Component {
  render() {
	return (
      <div ref={el => this.el = el} className="widget-box" style={{width:800,height:400}}></div>
    );
  }
}
~~~

- After that use the `new Richtext` constructor to initialize RichText in the container created above: 

~~~js title="RichText.js"
class RichText extends Component {
  componentDidMount() {
    this.richtext = new Richtext(this.el, {
      toolbarBlocks: ["default", "clear", "fullscreen"]
    });
  }
}
~~~


#### Changing config

- Next you can do some actions, e.g. add a new control into the toolbar:

~~~js title="RichText.js"
class RichText extends Component {
  componentDidMount() {
    this.richtext = new Richtext(this.el, {
      toolbarBlocks: ["default", "clear", "fullscreen"]
    });
    this.richtext.toolbar.data.add({
        value:"MyAction"
    });
  }
}
~~~


### Scenario 2. Exposing RichText data and config 

This variant adds flexibility in the control over RichText data and configuration by allowing access to them from other parts of the application.

#### RichText initialization

- The first step is the same. Create a file, let it be *RichText2.js* this time, and add the *RichText* class and use the `new RichText` constructor to initialize RichText.

~~~js title="RichText2.js"
class RichTextComponent extends Component {
  componentDidMount() {
    this.richtext = new Richtext(this.el, {
      // config here
    });
  }
}
~~~

- Define the configuration properties of RichText in the object passed as a second parameter of the constructor:

~~~js
class RichTextComponent extends Component {
  componentDidMount() {
    this.richtext = new Richtext(this.el, {
      mode: this.props.mode
    });
  }
}
~~~

Thus the **props** configuration option will be applied to the RichText widget configuration.

- Then create a container for RichText using the **render()** function:

~~~js title="RichText2.js"
render() {
	return (
      <div ref={el => this.el = el} className="widget-box" style={{width:800,height:400}}></div>
    );
}
~~~

#### Working with configuration options

- Set the list of used RichText configuration properties and their types in the **props** configuration option:

~~~js title="RichText2.js"
class RichtextComponent extends Component {
  componentDidMount() {
    this.richtext = new Richtext(this.el, {
      mode: this.props.mode
    });
}
RichtextComponent.propTypes = {
  mode: PropTypes.string,
  value: PropTypes.string,
  dataType: PropTypes.string,
  onChange: PropTypes.func
};
RichtextComponent.defaultProps = {
  mode: "classic",
  dataType: "html"
}
~~~


Since the properties of RichText are exposed they are available to work with outside the component. In the example below the "document" mode is set for the richtext:

~~~js title="BasicSample.js"
<div className='app-box'>
	 <Richtext mode="document"></Richtext>
</div>
~~~


#### Working with RichText API

This variant of using RichText in a React application allows working with its API moving all calls of methods and event handlers into a separate file. 

First, you can add a couple of wrappers for convenient work with RichText API. The example below shows how you can wrap actions for
setting RichText value and handling the *change* event taking into account the type of data:

~~~js title="RichText2.js"
class RichtextComponent extends Component {
  componentDidMount() {
    this.richtext = new Richtext(this.el, {
      mode: this.props.mode
    });

    if (this.props.value) {
      this.richtext.setValue(this.props.value, this.props.dataType);
    }
    if (this.props.onChange) {
      this.richtext.events.on("change", () => {
        this.props.onChange(this.richtext.getValue(this.props.dataType));
      });
    }
  }
}
~~~

After that you can use the ready wrappers in other parts of application. 

- Create a *DataSample.js* file and describe the methods you want to use while working with the richtext. In the example below the *updateMarkdown* and *updateHTML* methods are added for updating the 
the content of the RichText editor:

~~~js title="DataSample.js"
class DataSample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      html: '',
      markdown: ``
    }
  }
  updateMarkdown(value) {
    this.setState({...this.state, markdown: value});
  }
  updateHTML(value) {
    this.setState({...this.state, html: value});
  }
}
~~~

- Use the above methods to update the Richtext content depending on the type of entered data when some changes are made:

~~~js title="DataSample.js"
class DataSample extends Component {
   ...   
   render() {
    return (
      <div className='app-box'>
        <p>HTML serialize</p>
        <RichtextComponent value={this.state.html} 
        	onChange={val => this.updateHTML(val)}>></RichtextComponent>

        <hr />
        <p>Markdown serialize</p>
        <RichtextComponent value={this.state.markdown} dataType="markdown" 
        	onChange={val => this.updateMarkdown(val)}></RichtextComponent>
      </div>
    );
   ...
  }
}
~~~


