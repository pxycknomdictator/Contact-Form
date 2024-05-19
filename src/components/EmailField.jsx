import React from "react";

const EmailField = () => {
  return (
    <div className="w-full mt-4 flex flex-col gap-2">
      <label htmlFor="Email">Email Address</label>
      <input
        required
        type="email"
        className="border border-mediumgray rounded-[6px] py-2 pl-4"
        placeholder="codingbaba69@gmail.com"
      />
    </div>
  );
};

export default EmailField;
