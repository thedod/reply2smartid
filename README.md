Hilite mapping and iframe content for http://is.gd/shtikipedia

The *general purpose* js for the [tomodo mod](http://tomodo.com/m/6312/1099/)
is maintained at https://github.com/thedod/faqbuster 
&mdash; while this project contains *site-specific* content:

[truthmap.js](truthmap.js) maps each path to an array of `[[selector,phrase,url,long_title],...]`
where `selector` is where to find `phrase` (e.g. `"div.cont"`), and `url` is of the html file to use as iframe src in the popup
(relative to `gh-pages` root url of this project). `Long_title` is used for "[permalink views](what-you-agree-to.html)"
where the phrase itself is often too short and out of context.

Each time this git is updated, `truthmap.js` has to be manually uploaded into [the tomodo mod](http://tomodo.com/viewsource/1099/) by the mod's owner.

The popups are iframes containing static html files in this folder.
When these files are shown as the top-level windows (aka "permalink view"), they also display title and navigation GUI.

They are generated from files at [raw/](raw/) (filenames and metadata are imported from [truthmap.js](truthmap.js)).

To contribute content: add/edit files at [raw/](raw/) and/or [truthmap.js](truthmap.js),
To renerate the static pages: see `README` at [generator/](generator/).

