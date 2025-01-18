import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import type { LinkProps } from "next/link";
import { AnchorHTMLAttributes } from "react";
import React from "react";
type PLinkProps = {
  href?: Url | string;
  props?: Omit<LinkProps, "href"> & AnchorHTMLAttributes<HTMLAnchorElement>;
};

const PLink: React.FC<PLinkProps> = ({ href, props }) => {
  const isInternalLink = href && (href as string).startsWith("/");
  const isAnchorLink = href && (href as string).startsWith("#");
  if (isInternalLink) {
    return <Link href={href} {...props} />;
  }
  if (isAnchorLink) {
    return <a href={href as string} {...props} />;
  }
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={href as string}
      {...props}
    />
  );
};

export default PLink;
