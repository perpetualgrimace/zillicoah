export default function QuoteTile(props) {
  const { quote, author, fontSize = "md" } = props;

  return (
    <li className="quote-tile">
      <figure className="quote-figure">
        {Array.isArray(quote)
          ? quote.map((q) => makeBlockQuote(q, fontSize))
          : makeBlockQuote(quote, fontSize)}
        <figcaption className="quote-author u-font-sm">
          —{author}
        </figcaption>
      </figure>
    </li>
  );
}

function makeBlockQuote(quote, fontSize) {
  return (
    <blockquote
      className={`quote-text u-font-${fontSize} u-mb-sm`}
      key={quote}
    >
      {quote}
    </blockquote>
  );
}
