Hilite mapping and iframe content for http://is.gd/no2govfaq

The code itself is at https://github.com/thedod/faqbuster and this is where we have the site-specific content:

`truthmap.js` maps each path to an array of `[[selector,phrase,url],...]`
where `selector` is where to find `phrase` (e.g. `"div.cont"`), and `url is a relative url to the popup to show as an iframe
(from `gh-pages` root url of this project).

Each time this git is updated, `truthmap.js` has to be manually uploaded into [the tomodo mod](http://tomodo.com/viewsource/1099/) by the mod's owner.

The rest of the files are the popups as html.

If you create a new file, best is to use `empty.html` as a template.

Crude, but ain't broke :wink:.
