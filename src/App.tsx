import "./App.css";

function App() {
  return (
    <div>
      <h1>Vite React Starter</h1>
      <p>
        This is a template to get client-side React apps up and running{" "}
        <i>fast</i>.
      </p>
      <p>
        It uses the{" "}
        <a href="https://vitejs.dev" target="_blank">
          Vite
        </a>{" "}
        build tool, already configured to use{" "}
        <a href="https://typescriptlang.org" target="_blank">
          TypeScript
        </a>{" "}
        and{" "}
        <a href="https://tailwindcss.com" target="_blank">
          TailwindCSS
        </a>
        .
      </p>
      <br />
      <div className="mt-4">
        <h4>Rendering static assets</h4>
        <p>
          <code>import img from {'"<path-to-asset.ext>'}</code>
        </p>
        <p>
          Then simply set the `src` attribute to <code>img</code>
        </p>
      </div>
      <div className="mt-4">
        <h4>For Tailwind noobs (like me)</h4>
        <p>
          Tailwind layers live in <code>index.css</code>, which are essentially{" "}
          <a href="https://tailwindcss.com/docs/preflight" target="_blank">
            preset styles
          </a>{" "}
          that may surprise you (like globally resetting border widths, hiding
          list item styles, etc.){" "}
        </p>
      </div>
      <div className="mt-4">
        <h4>Samples</h4>
        <h1>
          <code>h1</code> tag
        </h1>
        <h2>
          <code>h2</code> tag
        </h2>
        <h3>
          <code>h3</code> tag
        </h3>
        <h4>
          <code>h4</code> tag
        </h4>
        <h5>
          <code>h5</code> tag
        </h5>
        <h6>
          <code>h6</code> tag
        </h6>
      </div>
      <div className="my-8">
        <p>
          <b>Inputs</b>
        </p>
        <p>
          <input type="text" placeholder="text input"></input>
        </p>
        <p>
          <textarea placeholder="textarea"></textarea>
        </p>
      </div>
    </div>
  );
}

export default App;
