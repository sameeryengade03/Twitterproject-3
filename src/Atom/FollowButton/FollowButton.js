import { useState } from "react";

export default function FollowButton({className}) {
  const [show, setShow] = useState(true);
  return (
    <>
      <button
      className={className}
        onClick={() => {
          if (show === false) {
            setShow(true);
          } else {
            setShow(false);
          }
        }}
      >
        {show ? "Follow" : "Following"}
      </button>
    </>
  );
}
