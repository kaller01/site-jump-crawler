# site-jump-crawler

## Functionality
Visit one website and pick 3 urls from it and visit those. It then does this recursively until it reaches a level of 4. At the end it provides a tree structure in json format.

## Output
```{
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
                        "https://foundation.wikimedia.org",
                        "https://en.wikiquote.org",
                        "https://lists.wikimedia.org"
                    ]
                },
                {
                    "URL": "https://www.wikidata.org",
                    "children": [
                        "https://foundation.wikimedia.org",
                        "https://en.wikiquote.org",
                        "https://lists.wikimedia.org"
                    ]
                }
            ]
        },
        {
            "URL": "http://runeberg.org",
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
                        "https://www.linkedin.com",
                        "https://pinterest.com",
                        "http://blog.slideshare.net"
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
                        "https://www.linkedin.com",
                        "https://pinterest.com",
                        "http://blog.slideshare.net"
                    ]
                }
            ]
        }
    ]
}
```
