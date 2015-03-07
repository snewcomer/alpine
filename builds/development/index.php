<?php include "process.php"; ?>
<!DOCTYPE HTML>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>Alpine Cheese</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
  <link rel="stylesheet" href="style.css">
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>

<body>

<section id="spinner">
  <div class="loader">Loading...</div>
</section>


<div id="fadeIn">
<header id="intro">
  <nav id="navBar" class="none" role="navigation">
    <div class="left col-lg-4 col-md-4 col-sm-6 col-xs-10">
      <a href="#welcome" id="brand"><span><img src="alpine_logo.png" alt="Alpine Logo"></span></a>
    </div>


    <div class="right">
      <!-- desktop -->
      <ul class="nav-list">
        <li class="nav-item"><a href="#aboutUs"><span>ABOUT</span></a></li>
        <li class="nav-item"><a href="#services"><span>EXPERTISE</span></a></li>
        <li class="nav-item"><a href="#employment"><span>EMPLOYMENT</span></a></li>
        <li class="nav-item"><a href="#contact"><span>CONTACT US</span></a></li>
      </ul>

      <!-- mobile -->
      <div id="mobile">
      </div>

      <ul class="nav-list-mobile">
        <li class="nav-item"><a href="#aboutUs"><span>ABOUT</span></a></li>
        <li class="nav-item"><a href="#services"><span>EXPERTISE</span></a></li>
        <li class="nav-item"><a href="#jobs"><span id="remove">EMPLOYMENT</span><span id="replace">JOBS</span></a></li>
        <li class="nav-item"><a href="#contact"><span>CONTACT</span></a></li>
      </ul>

    </div> <!-- right -->
  </nav>


  <article class="fullheight" id="vid">
    <!--[if gte IE 9]><!-->
    <video preload="auto" autoplay loop>
      <source src="AlpineVideo.webm" autoplay type="video/webm" />
      <source src="AlpineVideo.mp4" autoplay type="video/mp4" />
    </video>
    <!--<![endif]-->


    <div class="subnav" id="welcome">
      <h3 id="subnav-middle">Make more from your cheese</h3>
      <a href="#aboutUs" id="down"><img src="downarrow_small.png" alt="Scroll Down" /></a>
    </div>
  </article>

  <article class="fullheight" id="mobile_fullheight">
  <div class="subnav" id="welcome">
    <h3 id="subnav-middle">Make more from your cheese</h3>
    <a href="#aboutUs" id="down"><img src="downarrow_small.png" alt="Scroll Down" /></a>
  </div>
  </article>

</header>

  <section id="aboutUs">
    <div class="container">
    <div class="about_left row">
      <div id="who_header" class="col-md-6 col-md-offset-0 col-sm-10 col-sm-offset-2 col-xs-12 col-xs-offset-0">
        <h2 id="who">Who We Are</h2>
      </div>
      <div class="col-md-6 col-md-offset-0 col-sm-10 col-sm-offset-2 col-xs-12 col-xs-offset-0">
        <p>
          Alpine Slicing and Cheese Conversion has been specializing in cheese packaging since 2005.  Our
          facility is located in Green County Wisconsin, the heart of dairy and cheese country.  We cater to a
          wide variety of customers all over the United States.
        </p>
      </div>
    </div> <!-- row -->

    <div class="about_right row">
      <div id="mission_header" class="col-md-6 col-md-offset-0 col-sm-10 col-sm-offset-2 col-xs-10 col-xs-offset-0">
        <h2 id="mission" >Our Mission</h2>
      </div>
      <div id="mission_text" class="col-md-6 col-md-offset-0 col-sm-10 col-sm-offset-2 col-xs-12 col-xs-offset-0">
        <p>We exist to add value to the cheese industry by providing safe, consistent
          and creative converting and packaging solutions.
        </p>
      </div>

    </div> <!-- row -->

    </div> <!-- container -->
  </section>


  <article class="halfheight" id="cheddar">
    <div id="page">
    </div>
  </article>

  <section id="services">
    <div class="container">
      <h2 class="header">Services</h2>

      <div id="service_1">
        <h1 id="service_title_1">Cheese Slicing and Converting</h1>
        <blockquote>
          <p>The Cheese industry in Wisconsin is always evolving, and so are needs for cheese conversion.
            Between Alpine owners we have over 100 years of experience.  Alpine prides itself on innovation and
            ingenuity when working with customers to bring their products to market.  We can create retail,
            foodservice or specialty packaging in a wide variety of formats.  We can offer a package design and
            cheese format that will add value to what you do.
          </p>
        </blockquote>
      </div>

      <div id="service_2">
        <h1 id="service_title_2">Packaging Solutions</h1>
        <blockquote>
          <p>Alpine Slicing and Cheese Conversion has the expertise and state of the art equipment to transform
            your bulk cheese into a variety of packaging solutions.
          </p>
        </blockquote>
        <div class="center-block">
          <div class="service col-lg-4 col-lg-offset-0 col-md-6 col-md-offset-0 col-sm-10 col-sm-offset-2">
            <img class="img-circle" src="sliced.jpg" alt="Sliced Cheese">
            <p class="solutions">Slices-Shingle and/or Resealable Packages</p>
          </div>
          <div class="service col-lg-4 col-lg-offset-0 col-md-6 col-md-offset-0 col-sm-10 col-sm-offset-2">
            <img class="img-circle" src="Wedge.jpg" alt="Wedge Cheese">
            <p class="solutions">Chunk Wedges</p>
          </div>

          <div class="service col-lg-4 col-lg-offset-0 col-md-6 col-md-offset-3 col-sm-10 col-sm-offset-2">
            <img class="img-circle" src="stix.jpg" alt="Individually Wrapped Sticks">
            <p class="solutions">Individually Wrapped Sticks</p>
          </div>
        </div>
      </div> <!-- service_2 -->
    </div> <!-- container -->
  </section> <!-- services -->


<article class="halfheight" id="hallway">
  <div id="page">
  </div>
</article>


<section id="employment">
  <div class="container">
    <h2 class="header">Employment Opportunities</h2>
      <p>Alpine is a growing business and there times we are looking for qualified people to strengthen our team.
        We employ general labor on the factory floor, office staff, shipping personnel, supervisors and managers. <br/><br/>
        The attributes we look for are: </p><br/>
        <div id="skill">
          <p class="skills">•	Dependability</p><br/>
          <p class="skills">•	Team skills</p><br/>
          <p class="skills">•	An Ability and Willingness to Learn</p><br/>
          <p class="skills">•	Initiative</p><br/>
          <p class="skills">•	Adaptability</p><br/>
          <p class="skills">•	Promotability</p><br/><br/>
        </div>
        <p>If you have any of these attributes and are interested in joining our growing organization, please send your resume to: </p>
        <p>humanresources@wischeese.com or to our mailing address below.</p>
  </div> <!-- container -->
</section> <!-- employment -->

<article class="halfheight" id="machine">
  <div id="page">
  </div>
</article>


<section id="contact">
  <div class="container">

      <div class="col-md-6 col-sm-12">
        <h2>Contact Us About Our Services or Employment</h2>
          <form action="<?php echo $_SERVER['PHP_SELF'] ?>" method="POST" class="form" id="myform">
            <p class="name">
              <input type="text" name="name" maxlength="100" class="validate[required,custom[onlyLetter],length[0,100]]" placeholder="Name" id="name" />
              <?php if (isset($err_myname)) { echo $err_myname; } ?>
            </p>
            <p class="email">
              <input type="email" maxlength="50" name="email" class="validate[required,custom[email]]" placeholder="Email" id="email" />
            </p>
            <p class="text">
              <textarea type="text" name="comment" class="validate[required,length[6,300]]" placeholder="Let us know about any general inquiries or jobs you are interested in" id="comment" ></textarea>
            </p>

            <p class="hidden">
              <div id="fooDiv">
                <label for="foo">Leave this field blank</label>
                <input type="text" name="foo" id="foo" placeholder="leave this field blank" />
              </div>
            </p>

            <div class="submit">
              <input type="submit" value="Send" name="action" id="button-blue" />
            </div>
          </form>
          <br />
          <?php if (isset($msg)) { echo '<div id="formmessage"><p>', $msg , '</p></div>'; } ?>
      </div> <!-- col-md-6 -->

      <div class="col-md-6 col-sm-12">
        <section>
          <div id="map-canvas" class="container col-md-6 col-sm-12">
          </div>
        </section>
        <section id="area">
          <h2>112 West 8th Street, Monroe, WI 53566</h2>
          <h2>(608) 329-5400</h2>
        </section>
      </div>

      <div class="col-md-12" id="contact">
        <h3>Feel free to contact us directly about our services.</h3>
          <br /> <p class="people">Shirley - Sales</p>
          <br /> <p class="people">Jim - Plant Manager</p>
      </div>

  </div> <!-- container -->
</section> <!-- contact -->

</div> <!-- fadeIn -->

</html>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>
<script src="myindex.js"></script>
<script src="https://maps.googleapis.com/maps/api/js?v=3.exp"></script>
<script>
$(document).ready(function() {
  function initialize() {
    var myLatlng = new google.maps.LatLng(42.60239, -89.66040)
    var mapCanvas = document.getElementById('map-canvas');
    var mapOptions = {
      scrollwheel: false,
      //navigationControl: false,
      //mapTypeControl: false,
      //scaleControl: false,
      //draggable: false,
      center: myLatlng,
      zoom: 12,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(mapCanvas, mapOptions);
    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Alpine Slicing and Cheese Conversion'
  });
    google.maps.event.trigger(map, 'resize');
  }

  setTimeout(function(){
    initialize();
  }, 2000);

  var e = document.getElementById("fooDiv");
  $(e).hide();

});

</script>

</body>
</html>
