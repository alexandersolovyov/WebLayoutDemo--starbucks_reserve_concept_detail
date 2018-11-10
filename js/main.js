/*
 * File: main.js
 *
 * Description:
 *  Main script file for Starbucks Reserve Concept Detail page
 *  (made as an excersise of web layout skills)
 *
 * Author:
 *  Aleksandr Solovyov - alexandersolovyov, 2018
 */

if (typeof MAIN !== 'object') {
  MAIN = {};
}

(function() {

  /*--------------------------------------------------------------
   * Private variables
   */
  var DummyAlertText =
    'Sorry, but this is only a demo page.\nLinks and buttons are not working (except menu button)';


  /*--------------------------------------------------------------
   * Private functions
   */

  /*--------------------------------------------------------------
   * Interface functions
   */
  if (typeof MAIN.init !== 'function') {
    MAIN.init = function() {
      // Get all buttons and links except menu and logo
      // and add actions for them
      var buttons = document.getElementsByTagName('button');
      console.log(buttons.length);
      for (var i=0; i<buttons.length; ++i) {
        if (buttons[i].className.indexOf('Menu') !== -1) {
          console.log(buttons[i]);
        }else {
          buttons[i].onclick = function() {
            window.alert(DummyAlertText);
          } 
        }
      }
      buttons = document.getElementsByClassName('mainFooter-prevLink');
      buttons[0].onclick = function() {
        window.alert(DummyAlertText);
        return false;
      } 
      buttons = document.getElementsByClassName('mainFooter-nextLink');
      buttons[0].onclick = function() {
        window.alert(DummyAlertText);
        return false;
      } 
    }
  }

}());
