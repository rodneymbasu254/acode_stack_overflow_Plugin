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
      "https://stackoverflow.com/oauth$["client_id","redirect_uri"];
    );
    window.localStorage.setItem("stackOverflow-api-key", newApiToken["token"]);
    window.toast("Api key updated!", 3000);

       fetch(`https://api.stackexchange.com/2.3/answers/post?key=TxIU6R1sjc2rsPmGl37jYw((`, {
  method: 'POST',
  headers: {
    'Content-Type': '../plugin.json'
  },
  body: JSON.stringify({
    question_id: "/",
    body: '/'
  })
})
  .then(response => response.json())
  .then(data => {
    // Handle the response from the API
    
  });


     
  }
  
  class Teams {

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
      name: "StackOverflowForTeams",
      description: "Stack Overflow For Teams",
      bindKey: {win: 'Ctrl-Shift-T'},
      exec: this.run.bind(this),
    });
    
    editor.commands.addCommand({
      name: "stackOverflow_update_token_teams",
      description: "Update Stack for Teams Token",
      exec: this.updateApiTokenForTeams.bind(this),
    });

     $page.id = "acode_stack_overflow_plugin_teams";
    $page.settitle("Stack Overflow for Teams");
    this.$page = $page;
    const menuBtn = tag("span", {
      className: "icon more_vert",
      dataset: {
        action: "toggle-menu"
        
      }
    });
    https://stackoverflowteams.com
  }
    
    
 async destroy() {
    sidebarApps.remove("acode_stack_overflow_plugin");
    editorManager.editor.commands.removeCommand("Stack Overflow");
    editorManager.editor.commands.removeCommand("stackOverflow_update_token");
    window.localStorage.removeItem('stackOverflow-api-key');
    this.$dark-mode.remove();
    this.$higlightJsFile.remove();
    this.$markdownItFile.remove();
    this.$style.remove();
  }
}

if (window.acode) {
  const acodePlugin = new stackOverflow();
  acode.setPluginInit(
    plugin.id,
    (baseUrl, $page, { cacheFileUrl, cacheFile }) => {
      if (!baseUrl.endsWith("/")) {
        baseUrl += "/";
      }
      acodePlugin.baseUrl = baseUrl;
      acodePlugin.init($page, cacheFile, cacheFileUrl);
    }
  );
  acode.setPluginUnmount(plugin.id, () => {
    acodePlugin.destroy();
  });
}

    
    
    
