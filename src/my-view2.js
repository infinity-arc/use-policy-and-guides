/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/marked-element/marked-element.js';
import './shared-styles.js';

class MyView2 extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
          padding: 10px;
        }
        .page-heading{
          display: flex;
          flex-direction: row;
          align-items: center;
        }
        .page-heading h1{
          padding-left: 10px;
        }
        blockquote{
          background: lightgray;
          border-left: 3px solid darkblue;
          padding: 1vw;
          font-style: oblique;
        }
        p,a{
          text-align: justify;
        }
      </style>

      <div class="card">
        <div class="page-heading">
          <div class="circle">2</div>
          <div>
            <h1>Acceptable use policy: Email</h1>
          </div>
        </div>
        <h3>Herein the terms of use for the infinity arc email service</h3>

        <ol>
          <blockquote>
            <p>With a customised email exchange like this one security / privacy and reputation means the difference between landing in inbox and landing in spambox.</p>
            <p>You are free to use it as you see fit as long as you follow the guidelines below to ensure the integrity is not compromised.</p>
          </blockquote>
          <li>Do not use your email account for marketing campaigns.</li>
          <li>If attachments are greater than 30mb use <a href="https://wetransfer.com/" target="_blank">wetransfer.net</a> to transport files.</li>
          <li>Send well structured emails. Email ends up as spam when there is no subject, or just a single line of text. Our email server runs on its own with a relatively new domain name. For it to keep a good reputation it is up to us, the users, to make sure we help build it's reputation, by sending well structured email.</li>
          <li>Open your mail box at least once a day. Contributes toward good reputation.</li>
          <li>Do not delete unread email, Except when it is spam. Contributes toward good reputation.</li>
          <li>Move spam to the spam folder. Our email server learns what is spam and what is ham by what is in our inboxes and spam boxes.</li>
          <li>Save space, our email server runs in the cloud, and cloud resources cost money. Space is finite, regularly delete old email.</li>
          <li>Our mail server is there to serve us as well as our customers and its up to us to look after it.</li>
        </ol>
      </div>
    `;
  }
}

window.customElements.define('my-view2', MyView2);
