---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
title: Home
---
<html lang="en">

    <h2 style="text-align: center; font-size: 40px;"> My Work</h2>

    <div class="MyWorks">
    <a href="photography.html">
        <div class="work"> 
            <img src="images\photography\img_3625.jpg" alt="Photography Portfolio">
            <div class="description">
                <h2>Photography Portfolio</h2>
                <p>A display of some of the photos I have taken.</p>
            </div>
        </div>
    </a>
    
    <a href="PublicMedia/">
        <div class="work">
            <img src="images\PublicMediaSS.PNG" alt="Broadcast for All">
            <div class="description">
                <h2>Broadcast for All</h2>
                <p>Public Media Advocacy Campaign Website built for my AP US Government and Politics Final Project.</p>
            </div>
        </div>
    </a>

    
</div>

        
            

    
    <script>
    if (window.netlifyIdentity) {
    window.netlifyIdentity.on("init", (user) => {
      if (!user) {
        window.netlifyIdentity.on("login", () => {
          document.location.href = "/admin/";
        });
      }
    });
  }
</script>
</html>