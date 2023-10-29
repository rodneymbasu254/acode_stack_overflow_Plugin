import plugin from "../plugin.json";
import style from "../styles.scss";

import { Configuration, StackOverflowAPI } from "stackOverflow";
import { base64StringToBlob } from "blob-util";
import { v4 as uuidv4 } from 'uuid';
import copy from 'copy-to-clipboard';


const fs = acode.require('fs');
const DialogBox = acode.require('dialogBox');
const helpers = acode.require("helpers");
const multiPrompt = acode.require('multiPrompt');
const loader = acode.require("loader");
const sidebarApps = acode.require('sidebarApps');
const toInternalUrl = acode.require('toInternalUrl');
const { editor } = editorManager

const RECENT_MESSAGE_PATH = window.DATA_STORAGE + "stack_overflow";

let CURRENT_SESSION_FILEPATH = null;

const SYSTEM_PROMPT = `This is Stack overflow, Let's users access their accounts remotely on the acode app. Ask any question to fellow developers. Get to know how to solve issues arising from your codes. This plugin has been developed by Mbasu Rodney("https://rodneymbasu254") a student at Kisii university taking computer science and a code enthusiast.`

class Stack {

  async init($page) {
    this.$darkThemeFile = tag("link", {
      rel: "stylesheet", 
      this.baseUrl + "assets/dark-mode.css"
      });
     this.$higlightJsFile = tag("script", {
      src: this.baseUrl + "assets/highlight.min.js"
    });
    this.$markdownItFile = tag("script", {
      src: this.baseUrl + "assets/markdown-it.min.js"
    });
    // Global styles
    this.$style = tag("style", {
      textContent: style,
    });
    document.head.append(this.$darkModeFile, this.$higlightJsFile, this.$markdownItFile, this.$style)

    editor.commands.addCommand({
      name: "StackOverflow",
      description: "Stack Overflow",
      bindKey: {win: 'Ctrl-Shift-S'},
      exec: this.run.bind(this),
    });
    
    editor.commands.addCommand({
      name: "stackOverflow_update_token",
      description: "Update Stack Overflow Token",
      exec: this.updateApiToken.bind(this),
    });

    
    
    
    
https://stackoverflow.com/oauth
