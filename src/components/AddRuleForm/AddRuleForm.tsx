import { useState } from "react";

const AddRuleForm = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const rule = {
      base: input1,
      redirectTo: input2,
      enabled: true,
      name: "test",
      type: "redirect",
      id: 1,
      pinned: true,
    };
    chrome.storage.local.set({ rules: [rule] });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="input1">Input 1:</label>
        <input
          type="text"
          id="input1"
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="input2">Input 2:</label>
        <input
          type="text"
          id="input2"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
        />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default AddRuleForm;
