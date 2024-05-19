import React from "react";

const NameFields = () => {
  return (
    <section className="grid grid-cols-2 gap-5 mt-4">
      <div className="flex flex-col gap-2">
        <label htmlFor="name">First Name</label>
        <input
          required
          type="text"
          className="border border-mediumgray rounded-[6px] py-2 pl-4"
          placeholder="John"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="name">Last Name</label>
        <input
          required
          type="text"
          className="border border-mediumgray rounded-[6px] py-2 pl-4"
          placeholder="Cena"
        />
      </div>
    </section>
  );
};

export default NameFields;
