import json,pystache

renderer = pystache.Renderer()
template = pystache.parse(unicode(file('template.html').read(),'utf-8'))

truthmap = json.load(file('truthmap.json'))

for govpage in truthmap:
    print "=== "+govpage
    for truth in truthmap[govpage]:
        selector,title,filename,longtitle = truth
        print ": ".join((filename, title))
        file('../'+filename,'w').write(
            renderer.render(template,{ "title":longtitle,"content":unicode(file('../raw/'+filename).read(),'utf-8') }).encode('utf-8'))
