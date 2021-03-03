# site-jump-crawler

## Functionality
Visit one website and pick 3 urls from it and visit those. It then does this recursively until it reaches a level of 4. At the end it provides a tree structure in json format.

## Output
```
{
    "URL": "https://sv.wikipedia.org/wiki/Stockholms_historiska_krogar,_v%C3%A4rdshus_och_restauranger",
    "children": [
        {
            "URL": "https://upload.wikimedia.org",
            "children": [
                {
                    "URL": "https://creativecommons.org",
                    "children": [
                        "https://gmpg.org",
                        "https://facebook.com",
                        "https://d15omoko64skxi.cloudfront.net"
                    ]
                },
                {
                    "URL": "https://commons.wikimedia.org",
                    "children": [
                        "https://en.wikipedia.org",
                        "https://twitter.com",
                        "https://lists.wikimedia.org"
                    ]
                },
                {
                    "URL": "https://www.wikidata.org",
                    "children": [
                        "https://foundation.wikimedia.org",
                        "https://en.wikiquote.org",
                        "https://www.facebook.com"
                    ]
                }
            ]
        },
        {
            "URL": "http://runeberg.org",
            "children": [
                {
                    "URL": "http://www.w3.org",
                    "children": [
                        "https://www.w3.org",
                        "https://validator.w3.org",
                        "https://web-platform-tests.org"
                    ]
                },
                {
                    "URL": "http://www.lysator.liu.se",
                    "children": [
                        "https://jskom.lysator.liu.se",
                        "https://datorhandbok.lysator.liu.se",
                        "http://www.runeberg.org"
                    ]
                },
                {
                    "URL": "http://www.liu.se",
                    "children": [
                        "https://liu.se",
                        "https://www.googletagmanager.com",
                        "https://connect.getflowbox.com"
                    ]
                }
            ]
        },
        {
            "URL": "https://www.slideshare.net",
            "children": [
                {
                    "URL": "http://ogp.me",
                    "children": [
                        "https://ogp.me",
                        "https://www.scribd.com",
                        "https://www.imdb.com"
                    ]
                },
                {
                    "URL": "https://public.slidesharecdn.com",
                    "children": [
                        "https://www.linkedin.com",
                        "https://pinterest.com",
                        "http://blog.slideshare.net"
                    ]
                },
                {
                    "URL": "https://es.slideshare.net",
                    "children": [
                        "https://fr.slideshare.net",
                        "https://de.slideshare.net",
                        "https://pt.slideshare.net"
                    ]
                }
            ]
        }
    ]
}
```

## Limitations
There are possibilities of duplicate url because of it things that HTTP and HTTPS is two different websites.  
It selects the three first urls it finds to visit.


 

