export default function SidebarSection(props) {
  const { title, slug, children, sidebarContent } = props;
  return (
    <section
      className="sidebar-section padded-section"
      id={slug || "sidebar-section"}
    >
      {title && <h2 className="u-text-c u-title">{title}</h2>}

      <div className="sidebar-section-inner">
        <div className="sidebar-section-main u-font-md">{children}</div>
        <aside className="sidebar-section-aside u-font-sm">
          {sidebarContent}
        </aside>
      </div>
    </section>
  );
}
