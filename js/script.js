$((function(){var e=document.title,t=["|"],l=0,r=0;window.setInterval((function(){var n=e.substring(0,r);r>e.length&&(l=0,r=0),l>1&&(r++,l=0),document.title=n+t[0],l++}),150)}));let preloader=document.querySelector(".preloader");window.addEventListener("load",(()=>{preloader.classList.add("hide"),setTimeout((()=>{preloader.remove()}),300)}));const links=document.querySelector(".links");setTimeout((()=>{links.style.pointerEvents="all"}),1550),tippy("#verified",{placement:"right",animation:"shift-toward",content:"Verified",followCursor:!0,theme:"translucent"}),ScrollReveal().reveal(".header",{delay:500, origin: 'top', distance: '20%'}),ScrollReveal().reveal(".information",{delay:1e3, origin: 'bottom', distance: '20%'}),ScrollReveal().reveal(".links",{delay:1500, origin: 'top', distance: '20%'});
