import React, { useContext } from "react";
import FormContext from "../store/FormContext";
import { SAVE_VALUEs } from "../store/FormContextProvider";

const NameFields = () => {
  const { state, dispatch } = useContext(FormContext);

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-4">
      <div className="flex flex-col gap-2">
        <label htmlFor="name">First Name</label>
        <input
          required
          type="text"
          className="border border-mediumgray rounded-[6px] py-2 pl-4"
          placeholder="John"
          value={state.firstName}
          onChange={(event) =>
            dispatch({
              type: SAVE_VALUEs.firstName,
              payload: {
                username: event.target.value,
              },
            })
          }
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="name">Last Name</label>
        <input
          required
          type="text"
          className="border border-mediumgray rounded-[6px] py-2 pl-4"
          placeholder="Cena"
          value={state.lastName}
          onChange={(event) =>
            dispatch({
              type: SAVE_VALUEs.LastName,
              payload: {
                userLastName: event.target.value,
              },
            })
          }
        />
      </div>
    </section>
  );
};

export default NameFields;
