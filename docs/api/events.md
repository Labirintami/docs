---
sidebar_label: Events 
title: Events
---

:::info

**Related samples**
RichText Events. //todo

:::
___

## `Action`

Fires on any action in the editor

`void Action(string action, [any data,boolean restoreFocus] ){ ... };`

| Parameter      | Type      | Description                                         |
|----------------|-----------|-----------------------------------------------------|
| `action`       | `string`  | the name of an action                               |
| `data`         | `any`     | optional, the edited data                           |
| `restoreFocus` | `boolean` | toptional, defines whether focus should be restored |


```js 
rich.events.on("Action", function(action){
    // your code here
});
```

#### Details
The list of possible actions is given below:

- add - add a character
- remove - remove a character
- update - update styles of text
- undo - revert the last action
- redo - re-apply the last reverted action
- copy - copy text
- paste - paste text
- cut - cut text
- clear - clear the editor
- parse - parse text
- selectAll - select all text
___

## `Change`

Fires on any change in the editor

`void Change(string action,boolean canUndo,boolean canRedo){ ... };`

| Parameter | Type      | Description                                  |
|-----------|-----------|----------------------------------------------|
| `action`  | `string`  | the name of an action                        |
| `canUndo` | `boolean` | defines whether the change can be reverted   |
| `canRedo` | `boolean` | defines whether the change can be re-applied |


```js 
richtext.events.on("Change", function(action){
    // your code here
});
```

**Related samples**
RichText Events.

#### Details
The list of possible actions is given below:

- add - add a character
- remove - remove a character
- update - update styles of text
- undo - revert the last action
- redo - re-apply the last reverted action
- copy - copy text
- paste - paste text
- cut - cut text
- clear - clear the editor
- parse - parse text
- selectAll - select all text
___

## `selectionChange`

Fires on change of text selection made by a user

`void selectionChange(object state){ ... };`

| Parameter | Type     | Description            |
|-----------|----------|------------------------|
| `state`   | `object` | the state of selection |


```js 
richtext.events.on("selectionChange", function(state){
    // your code here
});
```

The *state* object represents a hash of the following *key:value* properties:

- **range** - (*boolean*) defines whether the selection includes one character (*false*), or a range of them (*true*)
- **left** - (*object*) the left coordinate of selection, contains the following properties:
	- **blockIndex** - (*number*) the index of a text block (a text line), enumeration starts from 0
	- **textIndex** - (*number*) the index of a text node (a text with common styling), enumeration starts from 0
    - **offset** - (*number*) the number of the first character within a text node in the selection
- **right** - (*object*) the right coordinate of selection, contains the following properties:
	- **blockIndex** - (*number*) the index of a text block (a text line), enumeration starts from 0
	- **textIndex** - (*number*) the index of a text node (a text with common styling), enumeration starts from 0
    - **offset** - (*number*) the number of the last character within a text node in the selection

```js 
richtext.events.on("selectionChange", function({
    "left":{"blockIndex":0,"textIndex":1,"offset":0},
    "right":{"blockIndex":0,"textIndex":1,"offset":5},
    "range":true}){
    // your code here
});
```

___

## `selectionRefresh`

Fires on automatic change of selection

`void selectionRefresh(){ ... };`

```js 
richtext.events.on("selectionRefresh", function(){
    console.log("Selection is refreshed");
});
```
___

## Related sample

:::info

**Related sample**
RichText Events. //todo

:::