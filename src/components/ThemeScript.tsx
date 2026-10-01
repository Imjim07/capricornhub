// Runs before first paint, so the page never renders in the wrong theme and
// then snaps. Inline and synchronous on purpose: a deferred script or a
// useEffect would both paint first. Wrapped in try/catch because localStorage
// throws in some privacy modes.
const script = `(function(){try{var t=localStorage.getItem("ch-theme");if(t==="light"||t==="dark"){document.documentElement.setAttribute("data-theme",t);}}catch(e){}})();`;

export default function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
