import React from "react";
import "./app.scss";
import {
  Grid,
  Row,
  Col,
  Nav,
  Button,
  Icon,
  CardView,
  Tag,
  View,
  Anchor
} from "../relax-core";
const menu = (
  <nav>
    <a href={"./index"}>Home</a>
    <a href={""}>Getting Start</a>
    <a href={""}>Documentation</a>
    <a href={""}>Download</a>
  </nav>
);
const title = <span className={"use-logo-font"}>Relax</span>;
const subtitle = "Documentation";
const navAppend = <Icon icon={"github"} />;
const sideBar = {
  "Getting Start": {
    type: "href",
    value: "/index.html"
  },
  Layout: {
    type: "arch",
    value: "main-view"
  }
};
const App = (
  <div>
    <Nav
      dark={true}
      fluid={true}
      stickyRule={0}
      icon={"bolt"}
      title={title}
      subtitle={subtitle}
      menu={menu}
      navAppend={navAppend}
    />
    <Grid fluid={true}>
      <Row fixedHeightRule={"calc(100vh - 4rem)"}>
        <CardView tall={true} md={2} sm={4} xs={0}>
          <Anchor.Entity for={"intro1"}>intro1</Anchor.Entity>
          <Anchor.Entity for={"intro2"}>intro2</Anchor.Entity>
          <Anchor.Entity for={"intro3"}>intro3</Anchor.Entity>
        </CardView>
        <View.Entity tall={true} sm={8} xs={12} key={"intro"}>
          <h1>Documentation</h1>
          <CardView>
            <View.ViewHeader headerLevelRule={2}>Welcome </View.ViewHeader>
            <View.ViewBody active={true}>QuamUX is what?</View.ViewBody>
            <View.ViewBody>A UX library</View.ViewBody>
            <View.ViewBody>Designed for React.</View.ViewBody>
            <View.ViewFooter>
              <Icon icon={"cog"}>Hide</Icon>
            </View.ViewFooter>
          </CardView>
          <Button themeRule={"dangerous"} value={"Setting"} icon={"cog"} />
          <Button value={"Share"} icon={"share"} />
          <Button value={"New"} icon={"file-text-o"} />
        </View.Entity>
        <CardView tall={true} md={2} sm={0} xs={0}>
          123
        </CardView>
      </Row>
    </Grid>
  </div>
);
export default App;
