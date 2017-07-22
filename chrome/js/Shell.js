/**
 * Webian Tablet Shell.
 *
 * The main Shell object which starts everything else.
 */

var Shell = {

  /**
   * Start Shell.
   */
  start: function() {
    this.statusBar = StatusBar.start();
  }
};

/**
  * Start Shell on page load.
  */
window.addEventListener('load', function shell_onLoad() {
  window.removeEventListener('load', shell_onLoad);
  Shell.start();
});
