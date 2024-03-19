import QuoteTile from "/components/layout/components/QuoteTile";

export default function QuotesSection(props) {
  const { title = "People are saying", quotes } = props;

  return (
    <section className="quotes-section">
      <h2 className="u-title u-text-c u-mb-sm">{title}</h2>

      <ul className="quotes-list">
        {quotes.map((quote) => (
          <QuoteTile
            quote={quote.quote}
            author={quote.author}
            fontSize={quote.fontSize}
            key={quote.author}
          />
        ))}
      </ul>
    </section>
  );
}
