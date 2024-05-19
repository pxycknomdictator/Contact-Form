import React from "react";

const Message = () => {
  return (
    <div className="mt-4">
      <label htmlFor="message">Message</label>
      <textarea
        required
        className="mt-2 w-full border border-mediumgray h-28 py-2 px-3 rounded-[6px]"
        name="message"
        id="message"
        placeholder="Your Message"
      ></textarea>
    </div>
  );
};

export default Message;
