// The page markup of the original hero3d.html, unchanged except the note for a browser without WebGL 2. The engine
// (public/js/hero3d.js) finds these elements by id and class, fills the scene texts in and drives them; React renders
// them once and never again.
export default function App() {
  return (
    <>
      {/* Preloader */}
      <div className="preloader" id="preloader" role="status" aria-live="polite">
        <p className="preloader__top caps">Thomas Cole, 1833–1836</p>
        <div className="preloader__frame" id="preFrame">
          <p className="preloader__title display">The Course<br />of Empire</p>
        </div>
        <div className="preloader__enter" id="preEnter" hidden>
          <button className="btn-frame display" id="enterBtn" type="button">Enter</button>
          <button className="sound caps" type="button" data-sound-toggle aria-pressed="true">
            <span className="sound__bars" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i></span>
            <span data-sound-label>Sound [on]</span>
          </button>
        </div>
        <p className="preloader__count caps" id="preCount">000</p>
        <p className="preloader__status caps" id="preStatus">Rising</p>
        <p className="preloader__hint caps" id="preHint" hidden>Best on a large screen. Scroll slowly.</p>
      </div>

      {/* Fixed stage */}
      <main className="stage" id="stage">
        {/* The whole picture is one WebGL canvas: the hall in 3D, then the film it flies into */}
        <canvas className="stage__canvas" id="gl" aria-hidden="true"></canvas>
        <div className="fade fade--top" aria-hidden="true"></div>
        <div className="fade fade--bottom" aria-hidden="true"></div>

        <header className="header">
          <span className="header__about caps" aria-disabled="true">About</span>
          <a className="header__logo display" href="#top" id="logo" aria-label="The Course of Empire — back to start">The Course<br />of Empire</a>
          <button className="sound caps" type="button" data-sound-toggle aria-pressed="true">
            <span className="sound__bars" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i></span>
            <span data-sound-label>Sound [on]</span>
          </button>
        </header>

        {/* Painting card (top right) */}
        <button className="card" id="card" type="button" aria-label="View the original painting">
          <span className="card__img"><img id="cardImg" alt="" src="assets/paintings/consummation-thumb.webp" /></span>
          <span className="card__cap" id="cardCap">III/V, The Consummation, 1836</span>
        </button>

        {/* Scene texts are rendered here by js/hero3d.js from js/content3d.js */}
        <div className="titles" id="titles"></div>
        <div className="bodies" id="bodies"></div>
        <div className="centers" id="centers"></div>

        <button className="btn-frame btn-frame--center display" id="againBtn" type="button">Watch again</button>

        {/* Chapter rail (bottom left) */}
        <nav className="rail" id="rail" aria-label="Chapters">
          <button className="rail__item" type="button" data-chapter="0">
            <span className="rail__line"><i></i></span>
            <span className="rail__row">
              <img className="rail__thumb" alt="" src="assets/paintings/consummation-thumb.webp" />
              <span className="rail__view">Click to view</span>
              <span className="rail__text"><span className="rail__meta">III/V — Noon</span><span className="rail__name">1836<br />The Consummation</span></span>
            </span>
          </button>
          <button className="rail__item" type="button" data-chapter="1">
            <span className="rail__line"><i></i></span>
            <span className="rail__row">
              <img className="rail__thumb" alt="" src="assets/paintings/destruction-thumb.webp" />
              <span className="rail__view">Click to view</span>
              <span className="rail__text"><span className="rail__meta">IV/V — Storm</span><span className="rail__name">1836<br />Destruction</span></span>
            </span>
          </button>
          <button className="rail__item" type="button" data-chapter="2">
            <span className="rail__line"><i></i></span>
            <span className="rail__row">
              <img className="rail__thumb" alt="" src="assets/paintings/desolation-thumb.webp" />
              <span className="rail__view">Click to view</span>
              <span className="rail__text"><span className="rail__meta">V/V — Moonrise</span><span className="rail__name">1836<br />Desolation</span></span>
            </span>
          </button>
        </nav>

        <p className="hint caps" id="hint">Scroll to<br /><span id="hintWord">step inside</span></p>
      </main>

      {/* Original painting overlay */}
      <div className="overlay" id="overlay" role="dialog" aria-modal="true" aria-labelledby="ovTitle" hidden>
        <button className="overlay__close caps" type="button" id="ovClose">Close <span>(Esc)</span></button>
        <div className="overlay__left">
          <p className="overlay__year" id="ovYear"></p>
          <h2 className="overlay__title display" id="ovTitle"></h2>
          <p className="overlay__label" id="ovLabel"></p>
        </div>
        <figure className="overlay__figure"><img id="ovImg" alt="" /></figure>
        <div className="overlay__right" id="ovText"></div>
        <p className="overlay__note" id="ovNote">This is the original canvas. The journey you scrolled through is an interpretation of it.</p>
        <button className="sound sound--overlay caps" type="button" data-sound-toggle aria-pressed="true">
          <span className="sound__bars" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i></span>
          <span data-sound-label>Sound [on]</span>
        </button>
      </div>

      {/* Cursor (shown for a mouse only). Over the painting in the hall it turns into the museum's notice. */}
      <div className="cursor" id="cursor" aria-hidden="true">
        <svg viewBox="0 0 16 16" fill="none">
          <circle className="cursor__ring" cx="8" cy="8" r="7.75" stroke="#FBF8EE" strokeOpacity="0.25" strokeWidth="0.5" />
          <circle className="cursor__dot" cx="8" cy="8" r="2" fill="#FBF8EE" />
        </svg>
        <span className="cursor__touch"><img src="assets/ui/cursor-cross.svg" width={8.70711} height={8.70711} alt="" /><span>Please do not touch!</span></span>
      </div>

      {/* Scroll length */}
      <div className="scroll" id="top" aria-hidden="true"></div>

      <div className="no-gl caps" id="noGl"><p>This page needs WebGL 2.<br />Open it in a current browser.</p></div>
    </>
  );
}
