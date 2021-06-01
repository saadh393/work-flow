import { useState } from "react";

type itemType = {
  listItem: string | number;
  isChecked: boolean;
};
const TickItem = ({ listItem, isChecked }: itemType) => {
  const [checkStatus, setCheck] = useState(isChecked);
  return (
    <div className="tickRow">
      <input type="checkbox" onChange={() => setCheck(!checkStatus)} checked={checkStatus} />
      <input
        style={{ textDecoration: checkStatus ? "line-through" : "" }}
        value={listItem}
        className="tickrow_inputText"
      />
    </div>
  );
};

export default TickItem;
