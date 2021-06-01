import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ModalVideo from "react-modal-video";
import { setOpen } from "../../actions/selectedMovie";

export default function TrailerModal() {
  // const [isOpen, setOpen] = useState(false);
  const { selectedMovie, isOpen } = useSelector((state) => state.selectedMovie);
  const dispatch = useDispatch();
  return (
    <>
      <React.Fragment>
        <ModalVideo
          channel="custom"
          autoplay
          isOpen={isOpen}
          url={selectedMovie?.trailer}
          onClose={() => dispatch(setOpen(false))}
        />
      </React.Fragment>
      {/* <button className="btn-primary" onClick={() => setOpen(true)}>
        VIEW DEMO
      </button> */}
    </>
  );
}
