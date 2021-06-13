import { useState } from "react";

type itemType = {
  listItem: string | number;
  isChecked: boolean;
};
const TickItem = ({ listItem, isChecked }: itemType) => {
  const [checkStatus, setCheck] = useState(isChecked);
  return (
    <div className='tickRow'>
      <input type='checkbox' checked={checkStatus} onChange={() => console.log("Nothing")} />
      <input
        style={{ textDecoration: checkStatus ? "line-through" : "" }}
        value={listItem}
        className='tickrow_inputText'
        onChange={() => console.log("Nothing")}
      />
    </div>
  );
};

export default TickItem;
