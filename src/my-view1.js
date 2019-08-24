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

class MyView1 extends PolymerElement {
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
          <div class="circle">1</div>
          <div>
            <h1>First time email setup</h1>
          </div>
        </div>
        <blockquote>
          <h2>INBOXES ARE COMPLETELY PRIVATE</h2>
          <p>Inboxes are completely private. In this email exchange has been configured to be encrypted for privacy, only the holder of a password can access inbox content. Although the webmaster has the authority to remove inboxes at any time, the webmaster cannot access the content. <p>
        </blockquote>
        <h2>
          Get email address and one time password.
        </h2>
        <p>
          You should have received your email address and one time password from the <a href="http://infinityarc.net/" target="_blank">Infinity Arc</a> web master. If not please contact <a href="mailto:support@infinityarc.net">support</a> to receive your username and password.
        </p>
        <blockquote>
            Not you will only receive a email address and one time password once identity has been confirmed.
        </blockquote>
        <h2>
          First time login
        </h2>
        <p>
          Navigate to <a href="mail.infinityarc.net" target="blank">mail.infinityarc.net</a>. First tick the <strong>re-captcha</strong> check box and follow the prompts. The type on your user name and password.
          If this is successful you will be requested to change your password. Type in your old password followed by your new password making sure you that you type the new password and confirm new password in exactly otherwise this step will fail.
        </p>
        <p>
          If this is successful your password will now be changed and you will only be required to change it again in 90 days. You have now logged completed the user email registration process and can start sending and receiving emails. 
        </p>
        <p>
          Please send an email to webmaster@infinityarc.net to let the webmaster know that your email is working as expected and also as a test to see that everything is functioning normally.
        </p>
        <blockquote>
          NOTE: Be aware that your email will not send if there are spelling mistakes. But you can turn the spell checker off if this happens. Look for the spell checker button in the ribbon and click once to turn off.
        </blockquote>
      </div>
    `;
  }
}

window.customElements.define('my-view1', MyView1);
