<?php
/**
 * Gallery view/template.
 *
 * @author Alejandro Mostajo <http://about.me/amostajo>
 * @copyright 10Quality <http://www.10quality.com>
 * @package PostGallery
 * @version 1.0
 */ 
?>
<div class="row client-gallery">
  <?php foreach ( $post->gallery as $attachment ) : ?>
    <div class="col-xs-4 client-gallery-image" style="background-image: url(<?php echo $attachment->large_url ?>)">
    </div>
    <?php endforeach ?>
</div>