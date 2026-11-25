import { h } from "preact";
import { useCallback, useLayoutEffect, useRef, useState } from "preact/hooks";
import { gsap } from "gsap";
import "./StaggeredMenu.css";

export default function StaggeredMenu({
  colors = ["#B19EEF", "#5227FF"],
  displaySocials = true,
  displayItemNumbering = true,
  className,
  menuButtonBackground = "rgba(15,15,15,0.8)",
  openMenuButtonBackground = "#0f0f0f",
  menuTextColor = "#fff",
  openMenuTextColor = "#fff",
  accentColor = "#5227FF",
  changeMenuColorOnOpen = true,
  isFixed = true,
  closeOnClickAway = true,
  onMenuOpen,
  onMenuClose,
  scrollHome,
  scrollAbout,
  scrollServices,
  scrollGames,
  scrollTeam,
  scrollFaq,
  active,
}) {
  const [open, setOpen] = useState(false);
  const openRef = useRef(false);
  const panelRef = useRef(null);
  const preLayersRef = useRef(null);
  const preLayerElsRef = useRef([]);
  const toggleBtnRef = useRef(null);
  const busyRef = useRef(false);
  const openTlRef = useRef(null);
  const colorTweenRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const panel = panelRef.current;
      const preContainer = preLayersRef.current;
      if (!panel) return;

      const layers = Array.from(preContainer.querySelectorAll(".sm-prelayer"));
      preLayerElsRef.current = layers;

      // Diubah dari xPercent ke yPercent dengan nilai -100 (dari atas)
      const offscreen = -100;

      gsap.set([panel, ...layers], {
        yPercent: offscreen,
      });

      gsap.set(toggleBtnRef.current, {
        backgroundColor: "rgba(15,15,15,0.8)",
        backdropFilter: "blur(12px)",
        color: "rgb(255,255,255)",
      });
    });

    return () => ctx.revert();
  }, []);

  const buildOpenTimeline = useCallback(() => {
    const panel = panelRef.current;
    const layers = preLayerElsRef.current;
    if (!panel) return;

    openTlRef.current?.kill();

    const labels = Array.from(panel.querySelectorAll(".sm-panel-itemLabel"));

    const tl = gsap.timeline({
      paused: true,
    });

    layers.forEach((layer, i) => {
      tl.to(
        layer,
        {
          yPercent: 0,
          duration: 0.5,
          ease: "power4.out",
        },
        i * 0.07
      );
    });

    tl.to(
      panel,
      {
        yPercent: 0,
        duration: 0.65,
        ease: "power4.out",
      },
      "-=.3"
    );

    tl.fromTo(
      labels,
      {
        yPercent: 140,
        rotate: 5,
      },
      {
        yPercent: 0,
        rotate: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: "power4.out",
      },
      "-=.45"
    );

    openTlRef.current = tl;
    return tl;
  }, []);

  const playOpen = useCallback(() => {
    if (busyRef.current) return;
    busyRef.current = true;

    const tl = buildOpenTimeline();
    tl.eventCallback("onComplete", () => {
      busyRef.current = false;
    });

    tl.play(0);
  }, [buildOpenTimeline]);

  const playClose = useCallback(() => {
    const panel = panelRef.current;
    const layers = preLayerElsRef.current;
    const offscreen = -100;

    gsap.to([...layers, panel], {
      yPercent: offscreen,
      duration: 0.45,
      stagger: 0.05,
      ease: "power3.inOut",
      onComplete: () => {
        busyRef.current = false;
      },
    });
  }, []);

  const animateColor = useCallback(
    (opening) => {
      if (!changeMenuColorOnOpen) return;

      colorTweenRef.current?.kill();
      colorTweenRef.current = gsap.to(toggleBtnRef.current, {
        backgroundColor: opening ? openMenuButtonBackground : "rgb(15,15,15)",
        color: opening ? openMenuTextColor : menuTextColor,
        duration: 0.3,
        ease: "power2.out",
      });
    },
    [
      changeMenuColorOnOpen,
      openMenuButtonBackground,
      menuTextColor,
      openMenuTextColor,
    ]
  );

  const toggleMenu = useCallback(() => {
    const target = !openRef.current;
    openRef.current = target;
    setOpen(target);

    if (target) {
      onMenuOpen?.();
      playOpen();
    } else {
      onMenuClose?.();
      playClose();
    }

    animateColor(target);
  }, [animateColor, onMenuOpen, onMenuClose, playOpen, playClose]);

  const closeMenu = useCallback(() => {
    if (!openRef.current) return;
    openRef.current = false;
    setOpen(false);

    playClose();
    animateColor(false);
    onMenuClose?.();
  }, [animateColor, playClose, onMenuClose]);

  useLayoutEffect(() => {
    if (!closeOnClickAway) return;

    function handle(e) {
      if (!openRef.current) return;

      if (
        panelRef.current &&
        !panelRef.current.contains(e.target) &&
        toggleBtnRef.current &&
        !toggleBtnRef.current.contains(e.target)
      ) {
        closeMenu();
      }
    }

    document.addEventListener("mousedown", handle);
    document.addEventListener("touchstart", handle);

    return () => {
      document.removeEventListener("mousedown", handle);
      document.removeEventListener("touchstart", handle);
    };
  }, [closeMenu, closeOnClickAway]);

  const menuItems = [
    { id: "home", label: "HOME", jp: "ホーム", action: scrollHome },
    { id: "about", label: "ABOUT", jp: "私たちについて", action: scrollAbout },
    { id: "news", label: "NEWS", jp: "ニュース", action: scrollServices },
    { id: "games", label: "Our Games", jp: "ゲーム一覧", action: scrollGames },
    { id: "anggota", label: "Our Member", jp: "メンバー", action: scrollTeam },
    { id: "faq", label: "FAQ", jp: "よくある質問", action: scrollFaq },
  ];

  return (
    <div
      className={`${className || ""} staggered-menu-wrapper ${
        isFixed ? "fixed-wrapper" : ""
      } md:hidden max-md:block`}
      style={{ "--sm-accent": accentColor }}
      data-open={open ? "" : undefined}
    >
      {/* Background Layers */}
      <div ref={preLayersRef} className="sm-prelayers">
        {colors.slice(0, 3).map((color, index) => (
          <div
            key={index}
            className="sm-prelayer"
            style={{ background: color }}
          />
        ))}
      </div>

      {/* Header */}
      <header className="staggered-menu-header">
        <button
          ref={toggleBtnRef}
          type="button"
          className={`sm-toggle ${open ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label={open ? "Close Menu" : "Open Menu"}
          aria-expanded={open}
        >
          <span className="sm-toggle-line" />
          <span className="sm-toggle-text">
            {open ? "CLOSE" : "MENU"}
          </span>
        </button>
      </header>

      {/* Panel */}
      <aside
        ref={panelRef}
        className="staggered-menu-panel"
        aria-hidden={!open}
      >
        <div className="sm-panel-inner">
          <ul
            className="sm-panel-list"
            role="list"
            data-numbering={displayItemNumbering ? "true" : undefined}
          >
            {menuItems.map((item) => (
              <li key={item.id} className="sm-panel-itemWrap">
                <button
                  className={`sm-panel-item ${
                    active === item.id ? "active" : ""
                  }`}
                  onClick={() => {
                    item.action?.();
                    closeMenu();
                  }}
                  type="button"
                  style={{
                    border: "none",
                    padding: 0,
                    width: "100%",
                    textAlign: "left",
                    background: "transparent",
                  }}
                >
                  <span className="sm-panel-itemLabel">
                    <span
                      style={{
                        display: "block",
                        fontSize: "0.5em",
                        lineHeight: 1,
                      }}
                    >
                      {item.label}
                    </span>
                    <span
                      style={{
                        display: "block",
                        fontSize: "13px",
                        fontWeight: 300,
                        letterSpacing: 4,
                        textTransform: "none",
                      }}
                    >
                      {item.jp}
                    </span>
                  </span>
                </button>
              </li>
            ))}
          </ul>

          {displaySocials && (
            <div className="sm-panel-footer">
              <div className="sm-panel-footerLine" />
              <p className="sm-panel-footerText">
                Follow us for the latest updates.
              </p>
            </div>
          )}
        </div>
      </aside>
    </div>
  );
}