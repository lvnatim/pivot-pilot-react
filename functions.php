<?php

function custom_post_type(){

  $labels = array(
    'name'          =>  'Clients',
    'singular_name' =>  'Client',
    'add_new'       =>  _x('Add New Client', 'Client'),
    'add_new_item'  =>  'Add Client',
    'edit_item'     =>  'Edit Client',
    'new_item'      =>  'New Client',
    'view_item'     =>  'View Client',
    'search_items'  =>  'Search Portfolio',
    'not_found'     =>  'No Clients Found',
    'not_found_in_trash' => 'No Clients found in Trash',
    'all_items'     =>  'View All Clients',
    'archives'      =>  'Portfolio',
    'insert_into_item'  =>  'Insert Into Client\'s Portfolio',
    'uploaded_to_this_item' => 'Uploaded to this Client\'s Portfolio',
    'menu_name'     =>  'Portfolio',
    'name_admin_bar'=>  'Portfolio'
  );

  register_post_type('clients',
    array(
      'description' => 'Portfolio for all the website work',
      'has_archive' => false,
      'labels'      => $labels,
      'menu_position' => 2,
      'public'      => true,
      'publicly_queryable' =>true,
      'rewrite'     => array(
        'slug'      => 'portfolio'
        ),
      'supports'    => array(
        'title',
        'editor',
        'thumbnail',
        'excerpt',
        'custom-fields',
        ),
      'show_ui'     => true,
      'show_in_rest'       => true,
      'rest_base'          => 'clients',
      'rest_controller_class' => 'WP_REST_Posts_Controller',
      'taxonomies'  => array('post_tag')
    )
  );

}

// -------------------------CUSTOM TAXONOMIES----------------------------

function industry_taxonomy(){
  $labels = array(
    'name'              => _x( 'Industries', 'taxonomy general name', 'textdomain' ),
    'singular_name'     => _x( 'Industry', 'taxonomy singular name', 'textdomain' ),
    'search_items'      => __( 'Search Industries', 'textdomain' ),
    'all_items'         => __( 'All Industries', 'textdomain' ),
    'parent_item'       => __( 'Parent Industry', 'textdomain' ),
    'parent_item_colon' => __( 'Parent Industry:', 'textdomain' ),
    'edit_item'         => __( 'Edit Industry', 'textdomain' ),
    'update_item'       => __( 'Update Industry', 'textdomain' ),
    'add_new_item'      => __( 'Add New Industry', 'textdomain' ),
    'new_item_name'     => __( 'New Industry Name', 'textdomain' ),
    'menu_name'         => __( 'Industries', 'textdomain' ),
  );

  $args = array(
    'hierarchical'      => true,
    'labels'            => $labels,
    'show_ui'           => true,
    'show_admin_column' => true,
    'query_var'         => true,
    'rewrite'           => array( 'slug' => 'industries' ),
    'show_in_rest'       => true,
    'rest_base'          => 'industries',
    'rest_controller_class' => 'WP_REST_Terms_Controller',
  );

  register_taxonomy( 'industries', array( 'clients' ), $args );
}

function service_taxonomy(){
  $labels = array(
    'name'              => _x( 'Services', 'taxonomy general name', 'textdomain' ),
    'singular_name'     => _x( 'Service', 'taxonomy singular name', 'textdomain' ),
    'search_items'      => __( 'Search Services', 'textdomain' ),
    'all_items'         => __( 'All Services', 'textdomain' ),
    'parent_item'       => __( 'Parent Service', 'textdomain' ),
    'parent_item_colon' => __( 'Parent Service:', 'textdomain' ),
    'edit_item'         => __( 'Edit Service', 'textdomain' ),
    'update_item'       => __( 'Update Service', 'textdomain' ),
    'add_new_item'      => __( 'Add New Service', 'textdomain' ),
    'new_item_name'     => __( 'New Service Name', 'textdomain' ),
    'menu_name'         => __( 'Services', 'textdomain' ),
  );

  $args = array(
    'hierarchical'      => true,
    'labels'            => $labels,
    'show_ui'           => true,
    'show_admin_column' => true,
    'query_var'         => true,
    'rewrite'           => array( 'slug' => 'services' ),
    'show_in_rest'       => true,
    'rest_base'          => 'services',
    'rest_controller_class' => 'WP_REST_Terms_Controller',
  );

  register_taxonomy( 'services', array( 'clients' ), $args );
}

// -------------------------NAV MENUS------------------------------------
  register_nav_menus(array(
    'primary' => 'Pivot Menu'
  ));

  register_nav_menus(array(
    'secondary' => 'Pilot Menu'
  ));

// -------------------------THEME SUPPORT-------------------------------- 

  //----LOGO----
  add_theme_support( 'custom-logo', array(
    'height'      => 50,
    'width'       => 50,
    'flex-height' => true,
    'flex-width'  => true,
    'header-text' => array( 'site-title', 'site-description' ),
  ));


  //----FEATURED IMAGE----
  add_theme_support( 'post-thumbnails' );



//Remove margin top CSS
function remove_admin_login_header() {
  remove_action('wp_head', '_admin_bar_bump_cb');
}

//Load Assets
function asset_pipeline(){
  wp_enqueue_style('bootstrap', get_template_directory_uri() . '/assets/bootstrap-3.3.7-dist/css/bootstrap.css');
  wp_enqueue_style('style', get_stylesheet_uri());
}

add_action( 'rest_api_init', 'register_field' );

function register_custom_field_for_clients($field_name) {
  register_rest_field( 'clients',
    $field_name,
    array(
      'get_callback'    => 'get_custom_field',
      'update_callback' => null,
      'schema'          => null,
    )
  );
}

function register_adjacent_field($field_name, $field_callback){
  register_rest_field('clients',
    $field_name,
    array(
      'get_callback'    => $field_callback,
      'update_callback' => null,
      'schema'          => null,
    )
  );
}

function get_adjacent_post_property($id, $property, $direction){
  global $post;
  $oldGlobal = $post;
  $post = get_post( $id );
  if($direction === 'next'){
    $adjacent_post = get_next_post();

    if('' == $adjacent_post){
      $args = array(
        'posts_per_page'   => 1,
        'offset'           => 0,
        'category'         => '',
        'category_name'    => '',
        'orderby'          => 'date',
        'order'            => 'ASC',
        'include'          => '',
        'exclude'          => '',
        'meta_key'         => '',
        'meta_value'       => '',
        'post_type'        => 'clients',
        'post_mime_type'   => '',
        'post_parent'      => '',
        'author'     => '',
        'author_name'    => '',
        'post_status'      => 'publish',
        'suppress_filters' => true 
      );
      $adjacent_post = get_posts($args)[0];
    }
  } else {
    $adjacent_post = get_previous_post();
    if('' == $adjacent_post){
      $args = array(
        'posts_per_page'   => 1,
        'offset'           => 0,
        'category'         => '',
        'category_name'    => '',
        'orderby'          => 'date',
        'order'            => 'DESC',
        'include'          => '',
        'exclude'          => '',
        'meta_key'         => '',
        'meta_value'       => '',
        'post_type'        => 'clients',
        'post_mime_type'   => '',
        'post_parent'      => '',
        'author'     => '',
        'author_name'    => '',
        'post_status'      => 'publish',
        'suppress_filters' => true 
      );
      $adjacent_post = get_posts($args)[0];
    }
  }
  // Reset our global object
  $post = $oldGlobal;

  if ( '' == $adjacent_post ) {
    return 0;
  } else if ($property === 'post_image'){
    return get_the_post_thumbnail_url($adjacent_post->ID);
  } else if($property === 'post_title'){
    return $adjacent_post->post_title;
  } else if($property === 'post_id'){
    return $adjacent_post->ID;
  } else {
    return get_field($property, $adjacent_post->ID);
  }
}

function get_prev_title($object, $field_name, $request){
  return get_adjacent_post_property($object["id"], 'post_title');
}
function get_prev_image($object, $field_name, $request){
  return get_adjacent_post_property($object["id"], 'post_image');
}
function get_prev_background_color($object, $field_name, $request){
  return get_adjacent_post_property($object["id"], 'background_color');
}
function get_prev_text_color($object, $field_name, $request){
  return get_adjacent_post_property($object["id"], 'text_color');
}
function get_prev_id($object, $field_name, $request){
  return get_adjacent_post_property($object["id"], 'post_id');
}
function get_next_title($object, $field_name, $request){
  return get_adjacent_post_property($object["id"], 'post_title', 'next');
}
function get_next_image($object, $field_name, $request){
  return get_adjacent_post_property($object["id"], 'post_image', 'next');
}
function get_next_background_color($object, $field_name, $request){
  return get_adjacent_post_property($object["id"], 'background_color', 'next');
}
function get_next_text_color($object, $field_name, $request){
  return get_adjacent_post_property($object["id"], 'text_color', 'next');
}
function get_next_id($object, $field_name, $request){
  return get_adjacent_post_property($object["id"], 'post_id', 'next');
}


function get_custom_field($object, $field_name, $request){
  return get_field($field_name,$object["id"]);
}

function get_member_data($object, $field_name, $request){
  return get_field($field_name, $object["id"]);
}

function register_member_data($field_name){

register_rest_field('page',
  $field_name,
  array(
    'get_callback' => 'get_member_data',
    'update_callback' => null,
    'schema' => null
  )
);

}

function register_field() {
  register_rest_field( 'clients',
      'services_array',
      array(
          'get_callback'    => 'get_services_terms',
          'update_callback' => null,
          'schema'          => null,
      )
  );
  register_rest_field( 'clients',
    'industries_array',
    array(
        'get_callback'    => 'get_industries_terms',
        'update_callback' => null,
        'schema'          => null,
    )
  );
  register_adjacent_field('prev_title', 'get_prev_title');
  register_adjacent_field('prev_image', 'get_prev_image');
  register_adjacent_field('prev_background_color', 'get_prev_background_color');
  register_adjacent_field('prev_text_color', 'get_prev_text_color');
  register_adjacent_field('prev_id', 'get_prev_id');
  register_adjacent_field('next_title', 'get_next_title');
  register_adjacent_field('next_image', 'get_next_image');
  register_adjacent_field('next_background_color', 'get_next_background_color');
  register_adjacent_field('next_text_color', 'get_next_text_color');
  register_adjacent_field('next_id', 'get_next_id');
  

  $field_names = array(
    'animation',
    'animation_content',
    'gallery_main_image',
    'gallery_image_one',
    'gallery_image_two',
    'gallery_image_three',
    'gif_one',
    'gif_two',
    'gif_three',
    'gif_four',
    'gif_five',
    'gif_six',
    'background_color',
    'text_color',
    'brand_and_identity',
    'brand_content',
    'font_one_image',
    'font_one_name',
    'font_one_description',
    'font_two_image',
    'font_two_name',
    'font_two_description',
    'print',
    'print_content',
    'print_image_one',
    'print_image_two',
    'print_sub_one',
    'print_sub_two',
    'print_sub_three',
    'quote',
    'quote_author',
    'website',
    'website_color',
    'website_content',
    'website_link',
    'website_main_image',
    'website_icon_one',
    'website_icon_one_name',
    'website_icon_two',
    'website_icon_two_name',
    'website_icon_three',
    'website_icon_three_name',
    'website_icon_four',
    'website_icon_four_name',
    'website_icon_five',
    'website_icon_five_name',
    'website_icon_six',
    'website_icon_six_name',
    'website_mobile_one',
    'website_mobile_two',
    'website_mobile_three',
    'website_text_color',
  );
  foreach($field_names as $field_name){
    register_custom_field_for_clients($field_name);
  }

  $member_field_names = array(
    'team_member_one_first_name',
    'team_member_one_last_name',
    'team_member_one_picture',
  );
  foreach($member_field_names as $field_name){
    register_member_data($field_name);
  }
}


function get_services_terms($object, $field_name, $request){
  $terms = wp_get_post_terms( $object["id"], "services");
  return $terms;
}

function get_industries_terms($object, $field_name, $request){
  $terms = wp_get_post_terms( $object["id"], "industries");
  return $terms;
}


function prepare_clients( $data, $post, $request ) {
  $_data = $data->data;
  unset( $_data['date'] );
  unset( $_data['date_gmt'] );
  unset( $_data['featured_media'] );
  unset( $_data['guid'] );
  unset( $_data['link'] );
  unset( $_data['meta'] );
  unset( $_data['modified'] );
  unset( $_data['modified_gmt'] );
  unset( $_data['slug'] );
  unset( $_data['tags'] );
  unset( $_data['type'] );
  $data->data = $_data;
  return $data;
}
add_filter( 'rest_prepare_clients', 'prepare_clients');

//--------------------------AJAX CALLS----------------------------------

//Setup Callbacks
add_action('init', 'custom_post_type' );
add_action('init', 'industry_taxonomy');
add_action('init', 'service_taxonomy');
add_action( 'wp_enqueue_scripts', 'asset_pipeline' );
add_action('customize_register', 'customizer');

?>