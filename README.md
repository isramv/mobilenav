# mobilenav
Yet another mobile navigation for Drupal 7

With this module you will be able to have a responsive menu that is configurable from the UI. 


this approach is a little different than the one you can find with [Responisve Menus](https://www.drupal.org/project/responsive_menus) because you will be able to set two different menus, for example if you need a mega menu for the desktop version, you can create a new simplified menu for the mobile version.

## Configuration

To configure which menu you want to go to:
```
admin/config/user-interface/mobile-nav
```
Then you have to enable and add the following blocks

1.- Mobile Navigation Toggler > Which creates the classic "Burger icon" and is the activator of the menu.
2.- Mobile Navigation Menu > Which is the navigation menu itself.

**Remember to configure the title to <none> in each of the blocks**
