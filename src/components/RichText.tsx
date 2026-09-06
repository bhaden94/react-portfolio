import { Fragment, type ReactNode } from "react";

/**
 * Renders the tiny inline vocabulary the CMS content uses:
 * `**bold**` and `` `code` ``. Deliberately not full markdown — editors get
 * emphasis without being able to break the layout.
 */
export function RichText({ text }: { text: string }): ReactNode {
  if (!text) return null;

  const tokens = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g).filter(Boolean);

  return (
    <>
      {tokens.map((token, i) => {
        if (token.startsWith("**") && token.endsWith("**")) {
          return <b key={i}>{token.slice(2, -2)}</b>;
        }
        if (token.startsWith("`") && token.endsWith("`")) {
          return <code key={i}>{token.slice(1, -1)}</code>;
        }
        return <Fragment key={i}>{token}</Fragment>;
      })}
    </>
  );
}
