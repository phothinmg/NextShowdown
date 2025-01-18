import React from "react";

const PageLayout: React.FC<{ convertedHtml: string }> = ({ convertedHtml }) => {
  const html = { __html: convertedHtml };
  return (
    <section>
      <article
        className="prose dark:prose-invert lg:prose-lg"
        dangerouslySetInnerHTML={html}
      />
    </section>
  );
};

export default PageLayout;
