  // Check if device has a mouse
  const hasMouse = window.matchMedia('(pointer: fine)').matches;

  if (hasMouse) {
    // Only run this block if mouse exists
    const cursors = document.querySelectorAll('.cursor');
    const positions = Array.from(cursors).map(() => ({ x: 0, y: 0 }));
    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let idleTimer;

    function showCursors() {
      cursors.forEach(cursor => cursor.style.opacity = '1');
    }

    function hideCursors() {
      cursors.forEach(cursor => cursor.style.opacity = '0');
    }

    window.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      showCursors();
      clearTimeout(idleTimer);
      idleTimer = setTimeout(hideCursors, 1000);
    });

    function animate() {
      let x = mouse.x;
      let y = mouse.y;

      positions.forEach((pos, i) => {
        pos.x += (x - pos.x) * 0.5;
        pos.y += (y - pos.y) * 0.5;
        cursors[i].style.left = pos.x + 'px';
        cursors[i].style.top = pos.y + 'px';
        x = pos.x;
        y = pos.y;
      });

      requestAnimationFrame(animate);
    }

    animate();
  } else {
    // Optional: remove cursor divs if no mouse
    document.querySelectorAll('.cursor').forEach(el => el.remove());
  }

function autoclose(){
  document.getElementById("sidebar-active").checked = false;
}

function contact() {
    document.getElementById("contact").scrollIntoView({ block:"nearest", behavior: "smooth" });
}
function about() {
    document.getElementById("about").scrollIntoView({ block:"nearest", behavior: "smooth" });
}
function experience() {
    document.getElementById("experience").scrollIntoView({ block:"nearest", behavior: "smooth" });
}
function showDiv() {
    const box = document.getElementById("splash-text");

    // First, make it display block (from display: none)
    setTimeout(() => {
        box.classList.remove("hidden");
    } , 1200)
    // Then trigger the animation with a slight delay to allow rendering
      box.classList.add("visible");
}
function moveImg() {
    const box = document.getElementById("splash-img");
 
    box.classList.remove("removex");
    box.classList.add("addx");
}
function showbody() {
    const box = document.getElementById("mainbody");
    const splash = document.getElementById("splash-screen-container");
 
    setTimeout(() => {
        box.classList.remove("hide");
    } , 3000)
    setTimeout(() => {
        box.classList.add("show");
        splash.classList.remove("visible");
        splash.classList.add("hidden");
        AOS.refresh();
    } , 3000)
    
}


window.onload = () => {
    moveImg();
    showDiv();
    showbody()
  };