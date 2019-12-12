*This text will be italic*
_This will also be italic_

**This text will be bold**
__This will also be bold__

```
pgrtrs.get('/blogs/:slug', async function(request,response){
  const blogpost = await bloglist
  .where('slug', request.params.slug);
    
  fs.readFile('./public/blogs/'+ blogpost[0].slug +'.md', function(err, buf) {
    const result = md.render(buf.toString());
    response.render('blogposts', {
      blogpost: blogpost[0],
      blogcont: result,
      title: blogpost[0].title,
      pginfo: pagesInfo.index
    })
  });
})
```

* Item 1
* Item 2
  * Item 2a
  * Item 2b