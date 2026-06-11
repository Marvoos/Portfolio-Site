<?php
    date_default_timezone_set('EST');

    $birthDate = date(mktime(0, 0, 0, 11, 24, 2004));
    $currentDate = time();

    $age = (int)(($currentDate - $birthDate) / 3.154e+7);

?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Kayden Ions</title> <!--Webpage title -->
        <meta http-equiv="content-type" content="text/html; charset=UTF-8"> <!--Specifies the character encoding for the document-->
        <meta name="author" content="Kayden-Ions"> <!--Includes the author for the webpage-->
        <meta name="description" content="My online portfolio"> <!--Includes a description for the webpage-->
        <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!--Sets the viewport so the webpage looks good on every device-->
        <meta name="keywords" content="web development, programming, portfolio, computer science"> <!--Some Keywords for the webpage for search engine optimization-->
        <link rel="stylesheet" href="styles.css"> <!--Link to the Cascading Style Sheet File-->
        <script src="https://kit.fontawesome.com/7d8aa418e1.js" crossorigin="anonymous"></script>
    </head>
    <body>
        <nav> <!--Navigation Bar-->
            <div class="nav-links">
                <ul>
                    <li><a class="current-page" href="index.php">About</a><hr></li>
                    <li><a href="projects/">Projects</a><hr></li>
                    <li><a href="contact/">Contact</a><hr></li>
                </ul>
            </div>
            
        </nav>   
        <div class="jumbo-sec">
            <div class="portfolio-desc">
                <div class="title-spacing">
                    <h1 class="desc-title">Kayden Ions</h1><span class="pronouns">(he/him/his)</span>
                    <ul class="desc-subtitle">
                        <li class="exp-titles"><span class="badge"><i class="fa-solid fa-terminal"></i></span> Programmer</li> 
                        <li class="exp-titles"><span class="badge"><i class="fa-solid fa-code"></i></span> Front End Web Developer</li>
                    </ul>
                </div>
                <p>At <span class="highlight-txt"><?php echo $age ?> years old</span> I am an aspiring <span class="highlight-txt">website developer</span> and <span class="highlight-txt">creative</span> dedicated to bringing an <span class="highlight-txt">imaginative mind</span> to the field.</p>
                <p>I am a <span class="highlight-txt">lifelong learner</span> who will attempt to learn anything when given the right resources and time.</p>
                <p>On this page, I have given you the chance to view my projects, my resume, and my skills development experience.</p>
                <ul class="links-list">
                    <li><a class="personal-links" href="https://github.com/Marvoos" target="_blank"><i class="fa-brands fa-github"></i></a></li>
                    <li><a class="personal-links" href="https://www.linkedin.com/in/kaydenions/" target="_blank"><i class="fa-brands fa-linkedin"></i></a></li>
                </ul>
            </div>
    
            <img class="jumbo-img" src="images/MyProfilePictureSolidColour.png" alt="This is a picture of me. It's a little big though.">
        </div>
        <section>
            <h1 id="experience">Experience</h1>
            <div class="experience-containers" id="jobs">
                <h2>Job Experience</h2>
                
            </div>
            <div class="experience-containers" id="education">
                <h2>Education</h2>
            </div>
            <div class="experience-containers" id="courses">
                <h2 class="full-col">Relevant Courses</h2>
                <p class="full-col">In addition to the courses taken by most honours students, I have also taken courses relevant to website design and development, data management, and Computer Graphics which are all listed below.</p>
            </div>
            

        </section>
        


        <footer> <!--Footer section-->
            
        </footer>
        <script type="module" src="scripts/homepage.js"></script>
    </body>
    
</html>
