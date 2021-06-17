import React, { useState } from "react";
import { Button, ButtonGroup } from "reactstrap";

export default function PhuongThucThanhToan({ selected, setSelected }) {
  // const [selected, setSelected] = useState(null);

  return (
    <div>
      <Button
        className="bg-transparent border-0 text-dark d-block"
        onClick={() => setSelected(1)}
        active={selected === 1}
      >
        Zalo pay
      </Button>
      <Button
        className="bg-transparent border-0 text-dark d-block"
        onClick={() => setSelected(2)}
        active={selected === 2}
      >
        Ví Momo
      </Button>
      <Button
        className="bg-transparent border-0 text-dark d-block"
        onClick={() => setSelected(3)}
        active={selected === 3}
      >
        Thẻ VISA
      </Button>
      <Button
        className="bg-transparent border-0 text-dark d-block"
        onClick={() => setSelected(4)}
        active={selected === 4}
      >
        Phương thức khác
      </Button>
    </div>
  );
}
