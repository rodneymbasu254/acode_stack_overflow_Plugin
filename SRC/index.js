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

     $page.id = "acode_stack_overflow_plugin";
    $page.settitle("Stack Overflow");
    this.$page = $page;
    const menuBtn = tag("span", {
      className: "icon more_vert",
      dataset: {
        action: "toggle-menu"
      }
    });
    
    // button for new chat
    const newMsgBtn = tag("span", {
      className: "icon add",
      dataset: {
        action: "new-message"
      }
    });
    this.$page.header.append(newMsgBtn, menuBtn);
    
    menuBtn.onclick = this.myHistory.bind(this);
    newMsgBtn.onclick = this.newChat.bind(this);

     const mainApp = tag("div", {
      className: "mainApp",
    });
    // main chat box
    this.$chatBox = tag("div", {
      className: "chatBox",
    });
    // bottom query taker box
    this.$inputBox = tag("div", {
      className: "inputBox",
    });
    
    this.$chatTextarea = tag("textarea", {
      className: "chatTextarea",
      placeholder: "Type or paste your error message. "
    });
    this.$sendBtn = tag("button", {
      className: "sendBtn",
    });
    this.$sendBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14L21 3m0 0l-6.5 18a.55.55 0 0 1-1 0L10 14l-7-3.5a.55.55 0 0 1 0-1L21 3"/></svg>`;
    this.$inputBox.append(this.$chatTextarea, this.$sendBtn);
    mainApp.append(this.$inputBox, this.$chatBox)
    this.$page.append(mainApp);
    // array for storing received answers
    this.$answerArray = [];


     async updateApiToken() {
    /*
    update stack overflow token from stack exchange
    */
    window.localStorage.removeItem('stackOverflow-api-key');
    let newApiToken = await multiPrompt(
      "Enter your Stack Overflow API key",
      [{
        type: "text",
        id: "token",
        required: true,
        placeholder: "Enter your Stack Overflow api key"
      }],
      const client_id = "27386";
      const redirect_uri = "https://stackexchange.com/oauth/login_success";
      "https://stackoverflow.com/oauth/client_id=27386"
    );
    window.localStorage.setItem("stackOverflow-api-key", newApiToken["token"]);
    window.toast("Api key updated!", 3000);
  }

    
    
    
https://stackoverflow.com/questions/ask  
https://stackoverflow.com/users/
https://stackoverflow.com/oauth/client_id=27386
Q1AW2GZJ3MeKr4rq8SjdWg((
