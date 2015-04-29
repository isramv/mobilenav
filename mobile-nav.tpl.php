<?php
    /*
     * TODO
     *
     */
?>

<div class="mobile-navigation-menu <?php if(empty($showlogo)) { echo "no-logo"; } ?>">

    <div class="oosidebar" style="right: -250px;">
        <?php if($showlogo) { ?>
        <div class="mobile-menu-image">
            <img src="<?php echo $logo; ?>" />
        </div>
        <?php } ?>
        <div class="mobile-menu">
            <?php echo $menustring; ?>
        </div>
    </div>
</div>

