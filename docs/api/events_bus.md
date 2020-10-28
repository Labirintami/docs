---
sidebar_label: Events Bus
title: Events Bus
---


## `detach`

Detaches a handler from an event (which was attached before by the on() method)

`void detach(string name, [any context] );`

| Parameter | Type     | Description                 |
|-----------|----------|-----------------------------|
| `name`    | `string` | the name of event to detach |
| `context` | `any`    | a context marker            |

```js 
richtext.events.on("Change", function(action,canUndo,canRedo){
  // your code here
});
 
richtext.events.detach("Change");
```

#### Details
By default detach() removes all event handlers from the target event. You can detach particular event handlers by using the context marker.

```js 
var marker = "any"; // you can use any string|object value
 
richtext.events.on("Change", handler1);
richtext.events.on("Change", handler2, marker);
// the next command will delete only handler2
richtext.events.detach("Change", marker);
```
___

## `fire`

Triggers an inner even

`boolean fire(string name,array params);`

| Parameter | Type     | Description                        |
|-----------|----------|------------------------------------|
| `name`    | `string` | the event's name, case-insensitive |
| `params`  | `array`  | an array of the event-related data |

**Returns**

| Parameter | Type                                                               |
|-----------|--------------------------------------------------------------------|
| `boolean` | false, if some of the event handlers return false. Otherwise, true |
```js 
richtext.events.on("CustomEvent", function(param1, param2){
    return true;
});
 
var res = richtext.events.fire("CustomEvent", [12, "abc"]);
```

#### Details
Normally, events are called automatically and you don't need to use this method.
___

## `on`

Attaches a handler to an inner event of RichText

`void on(string name,function handler, [any context] );`

| Parameter | Type      | Description                                                        |
|-----------|-----------|--------------------------------------------------------------------|
| `name`    | `string`  | the event's name, case-insensitive                                 |
| `handler` | `handler` | the handler function                                               |
| `context` | `any`     | the value will be accessible as "this" inside of the event handler |

```js 
richtext.events.on("Change", function(action,canUndo,canRedo){
  // your code here
});
```

#### Details

See the list of Richtext events. //todo

You can attach several handlers to the same event and all of them will be executed. If some of handlers return false, the related operations will be blocked. Event handlers are processed in the same order that they are attached.