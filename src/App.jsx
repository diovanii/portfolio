import "./App.css";
import { FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!window.YT) {
      const script = document.createElement("script");
      script.src = "https://www.youtube.com/iframe_api";
      document.head.appendChild(script);
    }

    const initializePlayers = () => {
      document.querySelectorAll("iframe").forEach((iframe) => {
        if (!iframe.src.includes("youtube.com/embed/")) return;

        new window.YT.Player(iframe, {
          events: {
            onReady: (event) => {
              event.target.setVolume(20);
            },
          },
        });
      });
    };

    if (window.YT?.Player) {
      initializePlayers();
    } else {
      window.onYouTubeIframeAPIReady = initializePlayers;
    }
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("diovani.fsoc");

      setCopied(true);

      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <main>
      <div className="container">
        <section className="profile">
          <div className="profileWrapper">
            <div>
              <img
                className="profileImage"
                src="./profile.png"
                alt="Diovani picture"
              />
            </div>
            <div className="profileTag">
              <span>Video editor for streamers/youtubers</span>
            </div>
            <div className="profileDescription">
              <p>
                Your content have great moments.
                <br />
                Let's make them unforgettable!
              </p>
            </div>
            <div>
              <a href="#examples">
                <button>See more work</button>
              </a>
            </div>
          </div>
        </section>
        <section className="recentWork">
          <h1>My work</h1>
          <iframe
            className="recentWorkIframe"
            src="https://www.youtube.com/embed/oVrhQsl9y5w?enablejsapi=1"
            title="Joshhwann"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </section>
      </div>
      <div id="examples" className="container">
        <section className="shortForm">
          <div>
            <h1>Short-form examples</h1>
          </div>
          <div className="shortFormIframes">
            <iframe
              className="shortFormIframe"
              src="https://www.youtube.com/embed/ov334ir3CwU?enablejsapi=1"
              title="Lobanjicaa"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <iframe
              className="shortFormIframe"
              src="https://www.youtube.com/embed/n4yZo77E9pg?enablejsapi=1"
              title="AbdulHD"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <iframe
              className="shortFormIframe"
              src="https://www.youtube.com/embed/GxAQ0xDY9Xc?enablejsapi=1"
              title="Joshhwann"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </section>
      </div>
      <div className="container">
        <section>
          <div>
            <h1>Long-form examples</h1>
          </div>
          <div className="longFormIframes">
            <iframe
              className="longFormIframe"
              src="https://www.youtube.com/embed/stmfFJfgaCU?enablejsapi=1"
              title="Kai Cenat"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <iframe
              className="longFormIframe"
              src="https://www.youtube.com/embed/CQB4aEMiJNM?enablejsapi=1"
              title="CaseOH"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </section>
      </div>
      <div className="container">
        <section className="letsWork">
          <h1>Found something interesting?</h1>
          <p className="description">
            Send me a message on <strong>X</strong> or <strong>Discord</strong>
            <br />
            and let's work togheter!
          </p>
          <div className="buttons">
            <button className="x">
              <a
                href="https://x.com/diovanifsoc"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact me on X"
              >
                <FaXTwitter />
                <p>Send a message</p>
              </a>
            </button>
            <button className="discord" onClick={handleCopy}>
              <FaDiscord />
              <p>{copied ? "Copied!" : "Copy username"}</p>
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
