const pagesInfo = {
  index:{
    title:'Floyd Santos',
    link: '/',
    projects: [
      {
        "title" : "Photograpiya",
        "url" : "https://photograpiya.netlify.com/",
        "description" : "A 4 page portfolio/gallery made with HTML and CSS",
        "photo" : "images/projs/photograpiya.jpg"
      },{
        "title" : "Tiles!",
        "url" : "https://jstiles.netlify.com/",
        "description" : "A assignment which we have to fill the section with tiles by using loop",
        "photo" : "images/projs/tilersss.jpg"
      },{
        "title" : "The Weathering",
        "url" : "http://theweathering.netlify.com/",
        "description" : "A web app that shows you the current weather on your location, and you can also search for other cities",
        "photo" : "images/projs/theweathering.jpg"
      },{
        "title" : "Darkblogs",
        "url" : "https://blog-secret.herokuapp.com/",
        "description" : "A blog posting website made with NodeJS",
        "photo" : "images/projs/darkblogs.jpg"
      },{
        "title" : "Code Cafe",
        "url" : "https://codecafe.netlify.com",
        "description" : "A Coffee shop WordPress website that we build for out project",
        "photo" : "images/projs/codecafephoto.jpg"
      },
    ],
    skills: [
      {
        "class" : "fab fa-node-js",
        "desc" : "NodeJS"
      },{
        "class" : "fab fa-js-square",
        "desc" : "JavaScript"
      },{
        "class" : "fab fa-css3-alt",
        "desc" : "CSS"
      },{
        "class" : "fab fa-html5",
        "desc" : "HTML"
      },{
        "class" : "fab fa-git-alt",
        "desc" : "GIT"
      },{
        "class" : "fab fa-wordpress",
        "desc" : "WordPress"
      },{
        "class" : "fab fa-angular",
        "desc" : "AngularJS"
      },{
        "class" : "fab fa-react",
        "desc" : "ReactJS"
      }
    ],
    extskills: [
      {
        "imgscr" : "https://cdn3.iconfinder.com/data/icons/brands-applications/512/Photoshop_B-512.png",
        "desc" : "Photoshop"
      },{
        "imgscr" : "https://cdn.onlinewebfonts.com/svg/img_21237.png",
        "desc" : "Illustrator"
      },{
        "imgscr" : "https://cdn4.iconfinder.com/data/icons/logos-and-brands-1/512/8_Premier_Pro_Adobe_logo_logos-512.png",
        "desc" : "Premier"
      },
    ],
    footerlinks: [
      {
        "name" : "twiiter",
        "class" : "fab fa-twitter",
        "links" : "https://bit.ly/2Ech3Jz"
      },{
        "name" : "facebook",
        "class" : "fab fa-facebook-f",
        "links" : "https://bit.ly/2REPtNd"
      },{
        "name" : "instagram",
        "class" : "fab fa-instagram",
        "links" : "https://bit.ly/34fb2qt"
      },{
        "name" : "linkedin",
        "class" : "fab fa-linkedin-in",
        "links" : "https://bit.ly/2RDMLHO"
      },{
        "name" : "github",
        "class" : "fab fa-github",
        "links" : "https://bit.ly/2PaSTpg"
      },{
        "name" : "stackoverflow",
        "class" : "fab fa-stack-overflow",
        "links" : "https://bit.ly/35bb0B4"
      },
    ]
  },
  blogs:{
    title:'Blogs'
  },
  admin: {
    title: 'Admin'
  },
  searchresult: {
    title: 'Results for: <%= query %>'
  }
}

module.exports = pagesInfo;