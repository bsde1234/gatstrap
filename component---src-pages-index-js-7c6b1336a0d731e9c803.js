(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{165:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return m});var n=a(0),r=a.n(n),i=a(169),o=a.n(i),s=a(202),l=a(177),c=a(178);t.default=function(e){var t=e.data,a=e.location,n=o()(t,"remark.posts");return r.a.createElement(c.a,{location:a},r.a.createElement(l.a,{site:o()(t,"site.meta")}),n.map(function(e,t){var a=e.post;return r.a.createElement(s.a,{data:a,options:{isIndex:!0},key:t})}))};var m="3940782376"},172:function(e,t,a){"use strict";var n=a(64),r=a(0),i=a.n(r);a(194);t.a=function(e){var t=e.author,a=e.title;return i.a.createElement("div",{className:"footer"},i.a.createElement("div",{className:"container"},i.a.createElement("hr",{className:"border-primary"}),i.a.createElement("p",null,a,i.a.createElement(n.Link,{to:"/profile/"},i.a.createElement("br",null),i.a.createElement("strong",null,t)," on Profile"))))}},174:function(e,t){(function(t){e.exports={siteMetadata:{title:"Gatstrap",description:"Gatsby starter for bootstrap a blog",siteUrl:"https://bpmottathai.github.io/gatstrap",author:"jaxx2104",twitter:"jaxx2104",adsense:""},pathPrefix:"/gatstrap",plugins:[{resolve:"gatsby-source-filesystem",options:{path:t+"/content/posts/",name:"posts"}},{resolve:"gatsby-source-filesystem",options:{path:t+"/content/images/",name:"images"}},{resolve:"gatsby-transformer-remark",options:{plugins:[{resolve:"gatsby-remark-images",options:{maxWidth:750,linkImagesToOriginal:!1,wrapperStyle:"margin-bottom: 1.0725rem;"}},{resolve:"gatsby-remark-responsive-iframe",options:{wrapperStyle:"margin-bottom: 1.0725rem"}},"gatsby-remark-prismjs","gatsby-remark-copy-linked-files","gatsby-remark-smartypants"]}},{resolve:"gatsby-plugin-manifest",options:{name:"Gatstrap",short_name:"Gatstrap",description:"Gatsby starter for bootstrap a blog",homepage_url:"https://gatstrap.netlify.com",start_url:"/",background_color:"#fff",theme_color:"#673ab7",display:"standalone",icons:[{src:"/img/android-chrome-192x192.png",sizes:"192x192",type:"image/png"},{src:"/img/android-chrome-512x512.png",sizes:"512x512",type:"image/png"}]}},{resolve:"gatsby-plugin-google-analytics",options:{trackingId:""}},{resolve:"gatsby-plugin-netlify",options:{mergeSecurityHeaders:!0,mergeLinkHeaders:!0,mergeCachingHeaders:!0}},"gatsby-plugin-catch-links","gatsby-plugin-offline","gatsby-plugin-react-helmet","gatsby-plugin-react-next","gatsby-plugin-sass","gatsby-plugin-sharp","gatsby-plugin-sitemap","gatsby-plugin-twitter","gatsby-transformer-sharp"]}}).call(this,"/")},177:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(195),o=a.n(i),s=a(169),l=a.n(s);t.a=function(e){var t=e.site,a=e.title,n=l()(t,"title");return a=a?a+" | "+n:n,r.a.createElement(o.a,{title:a,meta:[{name:"twitter:card",content:"summary"},{name:"twitter:site",content:"@"+l()(t,"twitter")},{property:"og:title",content:a},{property:"og:type",content:"website"},{property:"og:description",content:l()(t,"description")},{property:"og:url",content:l()(t,"siteUrl")+"/profile"},{property:"og:image",content:l()(t,"siteUrl")+"/img/profile.jpg"}]})}},178:function(e,t,a){"use strict";a(29);var n=a(9),r=a.n(n),i=a(0),o=a.n(i),s=a(196),l=a.n(s),c=a(64),m=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.location,a=e.title;return o.a.createElement("nav",{className:"navbar navbar-expand navbar-dark flex-column flex-md-row bg-primary"},o.a.createElement("div",{className:"container"},o.a.createElement(c.Link,{className:"text-center",to:"/"},o.a.createElement("h1",{className:"navbar-brand mb-0"},a)),o.a.createElement("div",{className:"navbar-nav-scroll"},o.a.createElement("ul",{className:"navbar-nav bd-navbar-nav flex-row"},o.a.createElement("li",{className:"/"===t.pathname?"nav-item active":"nav-item"},o.a.createElement(c.Link,{to:"/",className:"nav-link"},"Home")),o.a.createElement("li",{className:"/profile/"===t.pathname?"nav-item active":"nav-item"},o.a.createElement(c.Link,{to:"/profile/",className:"nav-link"},"Profile")))),o.a.createElement("div",{className:"navbar-nav flex-row ml-md-auto d-none d-md-flex"})))},t}(o.a.Component),p=a(172),u=a(174),d=(a(197),a(198),a(199),a(200),a(201),function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){l.a.init()},a.componentDidUpdate=function(){l.a.init()},a.render=function(){var e=this.props.children;return o.a.createElement("div",null,o.a.createElement(m,Object.assign({title:u.siteMetadata.title},this.props)),e,o.a.createElement(p.a,{title:u.siteMetadata.title,author:u.siteMetadata.author}))},t}(o.a.Component));t.a=d},202:function(e,t,a){"use strict";a(94),a(40),a(93);var n=a(64),r=a(169),i=a.n(r),o=a(0),s=a.n(o),l=a(210),c=a.n(l),m=a(193),p=a.n(m),u=a(9),d=a.n(u),g=function(e){function t(){return e.apply(this,arguments)||this}d()(t,e);var a=t.prototype;return a.componentDidMount=function(){this.props.clientId&&(window.adsbygoogle=window.adsbygoogle||[]).push({})},a.render=function(){var e=this.props,t=e.clientId,a=e.slotId,n=e.format;return t?s.a.createElement("div",{className:"ad"},s.a.createElement("ins",{className:"adsbygoogle",style:{display:"block"},"data-ad-client":t,"data-ad-slot":a,"data-ad-format":n})):""},t}(s.a.Component),y=(a(172),a(221),t.a=function(e){var t=e.data,a=e.options,r=t.frontmatter,o=r.category,l=r.tags,c=r.description,m=r.title,u=r.path,d=r.date,g=r.image,h=a.isIndex,E=a.adsense,k=i()(t,"html"),x=h&&!!k.match("\x3c!--more--\x3e"),N=i()(g,"childImageSharp.fixed");return s.a.createElement("div",{className:"article",key:u},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"info"},s.a.createElement(n.Link,{style:{boxShadow:"none"},to:u},s.a.createElement("h1",null,m),s.a.createElement("time",{dateTime:d},d)),v({items:[o],primary:!0}),v({items:l})),s.a.createElement("div",{className:"content"},s.a.createElement("p",null,c),N?s.a.createElement(p.a,{fixed:N,style:{display:"block",margin:"0 auto"}}):""),s.a.createElement("div",{className:"content",dangerouslySetInnerHTML:{__html:x?b(k):k}}),x?f({path:u,label:"MORE",primary:!0}):"",y(h,E)))},function(e,t){return e?"":s.a.createElement(g,{clientId:t,slotId:"",format:"auto"})}),b=function(e){return(e=e.replace(/<blockquote>/g,'<blockquote class="blockquote">')).match("\x3c!--more--\x3e")&&void 0!==(e=e.split("\x3c!--more--\x3e"))[0]?e[0]:e},f=function(e){var t=e.path,a=e.label,r=e.primary;return s.a.createElement(n.Link,{className:"readmore",to:t},s.a.createElement("span",{className:"btn btn-outline-primary btn-block "+(r?"btn-outline-primary":"btn-outline-secondary")},a))},v=function(e){var t=e.items,a=e.primary;return c()(t,function(e,t){return s.a.createElement("span",{className:"badge "+(a?"badge-primary":"badge-secondary"),key:t},e)})}}}]);
//# sourceMappingURL=component---src-pages-index-js-7c6b1336a0d731e9c803.js.map