!function(a){a.fn.socialstream=function(e){var t={socialnetwork:"flickr",username:"pixel-industry",limit:6,overlay:!0},e=a.extend(t,e);return this.each(function(){var t=a(this);switch(e.socialnetwork){case"flickr":t.append('<ul class="flickr-list"></ul>'),a.getJSON("https://api.flickr.com/services/rest/?method=flickr.people.findByUsername&username="+e.username+"&format=json&api_key=32ff8e5ef78ef2f44e6a1be3dbcf0617&jsoncallback=?",function(i){var r=i.user.nsid;a.getJSON("https://api.flickr.com/services/rest/?method=flickr.photos.search&user_id="+r+"&format=json&api_key=85145f20ba1864d8ff559a3971a0a033&per_page="+e.limit+"&page=1&extras=url_sq&jsoncallback=?",function(i){a.each(i.photos.photo,function(i,r){var s=r.owner,n=r.title,l=r.url_sq,o=r.id,c="https://www.flickr.com/photos/"+s+"/"+o,p=a("<img/>").attr({src:l,alt:n}),d=a("<a/>").attr({href:c,target:"_blank",title:n}),v=a(d).append(p);if(e.overlay){var u=a("<div/>").addClass("img-overlay");a(d).append(u)}var m=a("<li/>").append(v);a("ul",t).append(m)})})});break;case"pinterest":var i="http://pinterest.com/"+e.username+"/feed.rss",r="http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&callback=?&q="+encodeURIComponent(i)+"&num="+e.limit+"&output=json_xml";a.getJSON(r,function(i){if(200==i.responseStatus){var r=i.responseData.feed,s="";if(!r)return!1;for(var n='<ul class="pinterest-list">',l=0;l<r.entries.length;l++){var o=r.entries[l],c=a("<div></div>");c.append(o.content);var p="http://www.pinterest.com"+c.find("a").attr("href"),d=c.find("img").attr("src"),v=c.find("p:nth-child(2)").html();if(e.overlay)var s='<div class="img-overlay"></div>';n+='<li><a target="_blank" href="'+p+'" title="'+v+'"><img src="'+d+'"/>'+s+"</a></li>"}n+="</ul>",a(t).append(n)}});break;case"instagram":t.append('<ul class="instagram-list"></ul>');var s="200718541.a4734ab.cc050fa16d6141bf8b709c97ab158f57";i="https://api.instagram.com/v1/users/search?q="+e.username+"&access_token="+s+"&count=1&callback=?",a.getJSON(i,function(r){a.each(r.data,function(r,n){var l=n.username;if(l==e.username){var o=n.id;""!=o&&(i="https://api.instagram.com/v1/users/"+o+"/media/recent/?access_token="+s+"&count="+e.limit+"&callback=?",a.getJSON(i,function(i){a.each(i.data,function(i,r){var s=r.images.thumbnail.url,n=r.link,l="";null!=r.caption&&(l=r.caption.text);var o=a("<img/>").attr({src:s,alt:l}),c=a("<a/>").attr({href:n,target:"_blank",title:l}),p=a(c).append(o);if(e.overlay){var d=a("<div/>").addClass("img-overlay");a(c).append(d)}var v=a("<li/>").append(p);a("ul",t).append(v)})}))}})});break;case"dribbble":t.append('<ul class="dribbble-list"></ul>'),a.getJSON("http://dribbble.com/"+e.username+"/shots.json?callback=?",function(i){a.each(i.shots,function(i,r){if(i<e.limit){var s=r.title,n=a("<img/>").attr({src:r.image_teaser_url,alt:s}),l=a("<a/>").attr({href:r.url,target:"_blank",title:s}),o=a(l).append(n);if(e.overlay){var c=a("<div/>").addClass("img-overlay");a(l).append(c)}var p=a("<li/>").append(o);a("ul",t).append(p)}})});break;case"deviantart":var i="http://backend.deviantart.com/rss.xml?type=deviation&amp;q=by%3A"+e.username+"+sort%3Atime+meta%3Aall",r="http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&callback=?&q="+encodeURIComponent(i)+"&num="+e.limit+"&output=json_xml";a.getJSON(r,function(i){if(200==i.responseStatus){var r=i.responseData.feed,s="";if(!r)return!1;for(var n='<ul class="deviantart-list">',l=0;l<r.entries.length;l++){var o=r.entries[l],c=a("<div></div>");c.append(o.content);var p=o.link,d=c.find("img").attr("src"),v=o.title;if(e.overlay)var s='<div class="img-overlay"></div>';n+='<li><a target="_blank" href="'+p+'" title="'+v+'"><img src="'+d+'"/>'+s+"</a></li>"}n+="</ul>",a(t).append(n)}});break;case"picasa":var i="https://picasaweb.google.com/data/feed/base/user/"+e.username+"?alt=rss&kind=photo&hl=en_US&imgmax="+e.limit+"&thumbsize=48c",r="http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&callback=?&q="+encodeURIComponent(i)+"&num="+e.limit+"&output=json_xml";a.getJSON(r,function(i){if(200==i.responseStatus){var r=i.responseData.feed,s="";if(!r)return!1;for(var n='<ul class="picasa-list">',l=0;l<r.entries.length;l++){var o=r.entries[l],c=a("<div></div>");c.append(o.content);var p=o.link,d=c.find("img").attr("src"),v=o.title;if(e.overlay)var s='<div class="img-overlay"></div>';n+='<li><a target="_blank" href="'+p+'" title="'+v+'"><img src="'+d+'"/>'+s+"</a></li>"}n+="</ul>",a(t).append(n)}});break;case"youtube":var i="https://gdata.youtube.com/feeds/api/users/"+e.username+"/uploads",r="http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&callback=?&q="+encodeURIComponent(i)+"&num="+e.limit+"&output=json_xml";a.getJSON(r,function(i){if(200==i.responseStatus){var r=i.responseData.feed,s="";if(!r)return!1;for(var n='<ul class="youtube-list">',l=0;l<r.entries.length;l++){var o=r.entries[l],c=a("<div></div>");c.append(o.content);var p=o.link,d=p.match("[\\?&]v=([^&#]*)"),v=d[1],u="http://img.youtube.com/vi/"+v+"/2.jpg",m=o.title;if(e.overlay)var s='<div class="img-overlay"></div>';n+='<li><a target="_blank" href="'+p+'" title="'+m+'"><img src="'+u+'"/>'+s+"</a></li>"}n+="</ul>",a(t).append(n)}});break;case"newsfeed":var r="http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&callback=?&q="+encodeURIComponent(e.username)+"&num="+e.limit+"&output=json_xml";a.getJSON(r,function(i){if(200==i.responseStatus){var r=i.responseData.feed,s="";if(!r)return!1;for(var n='<ul class="social-feed">',l=0;l<r.entries.length;l++){var o=r.entries[l],c=a("<div></div>");c.append(o.content);var p=o.link,d=c.find("img").attr("src"),v=o.title;if(e.overlay)var s='<div class="img-overlay"></div>';n+='<li><a target="_blank" href="'+p+'" title="'+v+'"><img src="'+d+'"/>'+s+"</a></li>"}n+="</ul>",a(t).append(n)}})}})}}(jQuery);