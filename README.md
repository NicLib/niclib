#Theme for the Nicholson Library of Anderson University
Drupal 8 theme

##Sections
* University Branding
* University Links
* Library Header
* Main Content
* Library Buttons
  * Buttons require usage of a table
* Secondary Library Buttons (3)
  * Buttons require usage of "p" tags
* Media
* Footers 1-4

####Extra info
* "assets/search.html" must be placed in the root folder of the Drupal site
  * This is a custom page designed to offer the functionality of catalog searching
  * Code originally created by @lpmagnuson
* "assets/NicDate.js" is a JavaScript file that displays the Library's hours
  * This file must be placed in the root folder
* "assets/theme.css" is a modified core file. It belongs in /core/assets/vendor/jquery.ui/themes/base
  * This must be done after every update to Drupal core
* When you are ready to make you site live, be sure to copy "niclib.libraries.yml-PROCDUCTION" over "niclib.libraries.yml"