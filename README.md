Hilite mapping and iframe content for http://is.gd/shtikipedia

The *general purpose* js for the [tomodo mod](http://tomodo.com/m/6312/1099/)
is maintained at https://github.com/thedod/faqbuster 
&mdash; while this project contains *site-specific* content:

`truthmap.js` maps each path to an array of `[[selector,phrase,url],...]`
where `selector` is where to find `phrase` (e.g. `"div.cont"`), and `url` is of the html file to use as iframe src in the popup
(relative to `gh-pages` root url of this project).

Each time this git is updated, `truthmap.js` has to be manually uploaded into [the tomodo mod](http://tomodo.com/viewsource/1099/) by the mod's owner.

The popups are at static html files in this folder.
They are generated from files at `raw/` (filenames and metadata are imported from `truthmap.js`).

To generate them, see `README` at `generator/`

