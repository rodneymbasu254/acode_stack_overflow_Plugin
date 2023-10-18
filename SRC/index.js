import plugin from "../plugin.json";
import style from "../styles.scss";

import { Configuration, StackOverflowAPI } from "stackOverflow";
import { base64StringToBlob } from "blob-util";
import { v4 as uuidv4 } from 'uuid';
import copy from 'copy-to-clipboard';

const multiPrompt = acode.require('multiPrompt');
const fs = acode.require('fs');
const DialogBox = acode.require('dialogBox');
const helpers = acode.require("helpers");
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
    
    
https://stackoverflow.com/oauth
