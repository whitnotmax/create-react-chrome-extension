/*global chrome*/
import React, { useState, useEffect } from "react";

// **********************************************************************************
// We need some sort of CSS that we are injecting as a content script.
// If we don't, Webpack won't build a "content.css" file, and the browser will refuse
// to load the extension since the file doesn't exist!
import "./content.css";
// **********************************************************************************
const ContentScriptApp = () => {
  return (
    <>
      <p>Hi</p>
    </>
  )
}

export default ContentScriptApp;


