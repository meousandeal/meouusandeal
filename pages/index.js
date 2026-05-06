
import { useState } from "react";

export default function Home() {
  const [link, setLink] = useState("");
  const [result, setResult] = useState("");

  const convertLink = () => {
    if (!link) return;

    const tracking =
      "utm_source=facebook&utm_campaign=mxh&utm_medium=social";

    const converted = link.includes("?")
      ? `${link}&${tracking}`
      : `${link}?${tracking}`;

    setResult(converted);
  };

  const copyLink = async () => {
    await navigator.clipboard.writeText(result);
    alert("Đã copy link!");
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Shopee Link Converter</h1>

        <input
          type="text"
          placeholder="Dán link Shopee vào đây..."
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />

        <button onClick={convertLink}>Convert Link</button>

        {result && (
          <div className="result">
            <p>Link đã convert:</p>

            <a href={result} target="_blank">
              {result}
            </a>

            <button onClick={copyLink}>Copy Link</button>
          </div>
        )}
      </div>
    </div>
  );
}
