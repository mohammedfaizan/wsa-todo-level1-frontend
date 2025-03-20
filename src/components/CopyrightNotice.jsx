import React from "react";

const defaultNoticeText = "&copy; 2025 WSA. All rights reserved";

export default function CopyrightNotice({ noticeText = defaultNoticeText }) {
  return (
    <div>
      <p className="getting-started-copyright-text">{noticeText}</p>
    </div>
  );
}
