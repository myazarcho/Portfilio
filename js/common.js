$(document).ready(function(){

    // UIKit.scrollspyNav("#scroll-nav",{closet: 'ul li' , scroll: true , offset: 100, cls: 'uk-active'});

    (async function()     {
        await loadFull(tsParticles);
        $('#sub-particles-1').particles().ajax('js/particles.json', function (container)   {
            
        });
        $('#sub-particles-2').particles().ajax('js/particles.json', function (container)   {
            
        });
        $('#sub-particles-3').particles().ajax('js/particles.json', function (container)   {
            
        });
        $('#sub-particles-4').particles().ajax('js/particles.json', function (container)   {
            
        });
        $('#sub-particles-5').particles().ajax('js/particles.json', function (container)   {
            
        });
        $('#sub-particles-6').particles().ajax('js/particles.json', function (container)   {
            
        });
    }());

    // Light/Dark theme
    const checkbox = document.getElementById("checkbox")
    checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark")
    })

    $(".anchor a").click(function (event) {
          if (this.hash !== "") {
            event.preventDefault();
            const hash = this.hash;
            $("html, body").animate(
              {
                scrollTop: $(hash).offset().top - 0 // - 100 if you wish
              },
              800
            );
          }
        });
     

})