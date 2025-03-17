"use client";

import { useState } from "react";
import { Citation } from "@/types";
import { Tooltip } from "react-tippy";
import Link from "next/link";
import { EMPTY_CITATION_MESSAGE } from "@/configuration/ui";

export function CitationCircle({
  number,
  citation,
}: {
  number: number;
  citation: Citation;
}) {
  const [open, setOpen] = useState(false);

  const isValidUrl = (url: string) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const isNCAADomain = (url: string) => {
    try {
      const parsedUrl = new URL(url);
      return parsedUrl.hostname.endsWith("ncaa.com"); // Ensures subdomains also work
    } catch {
      return false;
    }
  };

  const hasValidNCAAUrl = isValidUrl(citation.source_url) && isNCAADomain(citation.source_url);
  const hasSourceDescription = citation.source_description.trim() !== "";

  return (
    <Tooltip
      title=""
      open={open}
      onRequestClose={() => setOpen(false)}
      position="bottom"
      // @ts-expect-error tippy docs allow this
      trigger="mouseenter click"
      interactive={true}
      html={
        <div className="bg-[#2A2A2A] p-2 rounded-md shadow-sm flex flex-col justify-center border-[1px] border-[#3A3A3A]">
          <p className="text-[#E4E4E4]">
            {hasValidNCAAUrl ? (
              <Link
                href={citation.source_url}
                target="_blank"
                className="text-blue-400 hover:underline text-sm"
              >
                {citation.source_description}
              </Link>
            ) : (
              citation.source_description || EMPTY_CITATION_MESSAGE
            )}
          </p>
        </div>
      }
    >
      <div
        className="bg-gray-500 rounded-full px-2 py-0.5 hover:cursor-pointer hover:scale-105 inline-block"
        onClick={() => setOpen(true)}
      >
        <span>{number}</span>
      </div>
    </Tooltip>
  );
}
