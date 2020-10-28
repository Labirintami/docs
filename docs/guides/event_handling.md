---
sidebar_label: Event Handling
title: Event Handling
---

## Attaching Event Listeners

You can attach event listeners with the [richtext.events.on()](api/events/on.md) method:

~~~js
richtext.events.on("Change", function(action,canUndo,canRedo){
    // your code here
});
~~~

<!-- {{sample 05_events/01_events.html}} todo -->

:::caution
The names of events are case-insensitive.
:::

## Detaching Event Listeners

To detach events, use [richtext.events.detach()](api/events/detach.md):

~~~js
var change = richtext.events.on("Change", function(action,canUndo,canRedo){
     // your code here
});
richtext.events.detach(change);
~~~

## Calling Events

To call events, use [richtext.events.fire()](api/events/fire.md):

~~~js
richtext.events.fire("name",args);
// where args is an array of arguments
~~~

The list of events is available in the [API section](api/refs/richtext_events.md).

