

# The relaxUX Introduction



## Contributing Guideline
| Module Name |Status| WhoAmI |
| --- | --- | --- |
| [PropsMapper](./packages/relax-core/src/PropsMapper/README.MD) |🚫 Removed| A set of map functions and configuration.|
| [UXBuilder](./packages/relax-core/src/UXBuilder/README.MD) |💡 New API| A set of map functions and configuration.|

## Installation

#### if you are using npm

```bash
npm install relax
```

#### or directly using a CDN web distribution

```html
<script src="https://cdn.relaxjs.org/latest/relaxux.js"></script>
```

## Hello World

``` jsx
import React from 'react';
import ReactDOM from 'react-dom'

const greeting = <PopOut title = "Notice" content = "Hello World" />;
ReactDOM.render(greeting, document.getElementById("root"));
```

## Introduce UXBuilder
### Build-In props
`Build-In props` is a collection of mapped class. You can use those props by importing `UXBuilder`, which can make your component supports default Build-In props.

## Build-In Props Naming Convention

| postfix | legal value type | example |
| --- | --- | --- |
| No postfix | boolean | `precision = true` |
| `Rule` | string / number | `layoutRule = "flex" / fontSizeRule = 2` |
| `Struct` | Object | `menuStruct` |

### UXBuilder
UXBuilder is an relaxUX component builder for customized components. Here is a basic example for `UXBuilder`:

```jsx
import UX from 'relax/UXBuilder';
import React, {Component} from "react";
import ReactDOM from "react-dom";
import classNames from "classnames";

class MyComponent extends Component {
    render(){
        return (<div className={classNames(UX.build(this))}>My first component.</div>)
    }
}
```

#### method::build()

```jsx
UX.build(VDOM)
```

> JSX here supports all types of elements and components, NOT ONLY relaxUX.

##CSS Class Naming Convention

| prefix | description | example |
| --- | --- | --- |
| `ux-` | DOM class name for layout | `ux-grid` |
| `config-` | Virtual DOM class name for customized options | `config-precision` |
| `use-` | DOM class name for appearance options | `use-center-text-align` |
| `frame-` | DOM class name for components | `frame-navigator` |

> This convention table is only used for compiled relax pages. While you can still operate compiled HTML files with this table by using other libs like **jQuery**.




## Grid System

If you have enough experience and knowledge with Bootstrap or other Bootstrap-Like front-end library, you should be familiar with **Grid System**, fortunately, relax simplified traditional HTML & CSS grammer and introduced a new way to construct your page layout.

### Basic of Grid


By using `Grid`, a web page can be divided into **12 columns** at most (as you may fell familiar), if you want to produce a more accurate layout, `Grid` in **24 columns** is also provided.

Now let's try to draw a basic layout:

```jsx
const App = (
  <Grid>
    <Row>
      <Col class="sm-4 xs-12"><h1>Hello H1</h1></Col>
      <Col class="sm-8 xs-12"><h2>Hello H2</h2></Col>
    </Row>
    <Row>
      <Col class="lg-4 md-0 xs-12"><h3>Text May Disappear</h3></Col>
      <Col class="lg-4 md-4 xs-12"><h4>Demo Text</h4></Col>
      <Col class="lg-4 md-8 xs-12"><h5>Demo Text</h5></Col>
    </Row>
  </Grid>
);
```

handy table.

|                     | Extra small <750px | Small ≥750px | Medium ≥970px | Large ≥1200px |
| ------------------- | ------------------ | ------------ | ------------- | ------------ |
| Max container width | None (auto)        | 540px        | 720px         | 960px                    |
| Class prefix        | `.xs-`             | `.sm-`       | `.md-`        | `.lg-`               |
| # of columns        | 12                 |              |               |                                   |


> If you have problems in understanding key words like "lg", "sm", please visit BootStrap official doc, they can give a more clear introduction related to this.

> Notice: relax Grid System is **NOT** a copy of BootStrap Grid System, I stealed its ideas but applied them in a brief way, so please follow this doc and make it clear!

### Grid System in React

#### Using `props` instead of traditional class names.

```jsx
const App = (
  <Grid>
    <Row>
      <Col class="lg-4 xs-12" md={0}><h3>Text May Disappear</h3></Col>
      <Col class="lg-4 xs-12" md={4}><h4>Demo Text</h4></Col>
      <Col class="lg-4 xs-12" md={8}><h5>Demo Text</h5></Col>
    </Row>
  </Grid>
);
```

By using props, it would be easier to change and render children layout.

#### Using `props::preicision` to accurate your layout.

```jsx
const App = (
  <Grid>
    <Row precision={true}>
      <Col class="lg-1 md-0 xs-24"><h3>#</h3></Col>
      <Col class="lg-22 md-10 xs-24"><h3>Demo Text</h3></Col>
      <Col class="lg-1 md-14 xs-24"><h3>#</h3></Col>
    </Row>
  </Grid>
);
export default App;
```
The percise props would only accurate the child `Row` elements but not all descendant `Row` elements into 24 columns at most.