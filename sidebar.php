<?php
/**
 * The sidebar containing the main widget area.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Kansas For Bernie
 */

if ( ! is_active_sidebar( 'sidebar-1' ) ) {
	return;
}
?>

<div id="secondary" class="widget-area" role="complementary">
<button class="sidebar-toggle" aria-controls="widget-area"><span><?php esc_html_e( 'News', 'kfb' ); ?></span><i class="fa fa-newspaper-o"></i></button>
	<?php dynamic_sidebar( 'sidebar-1' ); ?>
</div><!-- #secondary -->
