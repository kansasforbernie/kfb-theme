<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Kansas For Bernie
 */

?>

	</div><!-- #content -->

	<footer id="colophon" class="site-footer" role="contentinfo">
		<div class="site-info row">
			<div class="center paid-for">
				<?= sprintf( __('Made in Kansas with %s for %s 2016'), '<i class="fa fa-heart"></i>', "<a href='https://berniesanders.com/'>Bernie Sanders</a>" ); ?>
			</div>
			<div class="billionaires">
				<?php include( get_stylesheet_directory() . "/billionaires.svg" ); ?>
				<span class="screen-reader-text">(not the billionaires)</span>
			</div>
		</div><!-- .site-info -->
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>
<script type="text/javascript">
  WebFontConfig = {
    google: { families: [ 'Domine::latin', 'Rokkitt::latin' ] }
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })(); </script>
</body>
</html>
