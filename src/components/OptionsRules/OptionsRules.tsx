import React, { useEffect, useState } from "react";

interface IPopupRule {
  id: number;
  name: string;
  enabled: boolean;
  pinned: boolean;
  type: "insert" | "redirect";
}
const OptionsRules: React.FC = () => {
  const [rules, setRules] = useState<IPopupRule[]>([]);

  useEffect(() => {
    const getRules = async () => {
      const result = await chrome.storage.local.get(["rules"]);
      if (!result || !result.rules || result.rules?.length) setRules([]);
      setRules(result.rules);
    };
    getRules();
  }, []);

  return (
    <div>
      <table>
        <tr>
          <th>name</th>
          <th>type</th>
          <th>active</th>
          <th>pinned</th>
        </tr>
        {rules &&
          rules.map((rule) => (
            <tr>
              <td>{rule.name}</td>
              <td>{rule.type}</td>
              <td>{rule.enabled.toString()}</td>
              <td>{rule.pinned.toString()}</td>
            </tr>
          ))}
      </table>
    </div>
  );
};

export default OptionsRules;
