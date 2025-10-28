---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
title: Home
---
<html lang="en">

    <h2 style="text-align: center; font-size: 40px;"> My Work</h2>

    <div class="MyWorks">
        <div class="work">
            <img src="images\PublicMediaSS.PNG">
            <div class="description">
                <h2> Broadcast for All</h2>
                <p> Public Media Advocacy Campaign Website built for my AP US Government and Politics Final Project.</p>
                <a href="PublicMedia/" class="Button">
                    Click Here
                </a>
            </div>
        </div>

        <div class="work"> 
            <img src="images\DMRcalc.PNG">
            <div class="description">
                <h2> DMR Calculator</h2>
                <p> A simple tool for calculating a relay time based on individual leg times.</p>
                <a href="dmr.html" class="Button">
                    Click Here
                </a>
            </div>
        </div>

        
            

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