import React from "react";
import Dropdown from "../Dropdown/DropDown";

interface IPopupRule {
  id: number;
  name: string;
  enabled: boolean;
  pinned: boolean;
  type: "insert" | "redirect";
}

interface IPopupGroupRule {
  [key: string]: IPopupRule[];
}

const mockRules: IPopupGroupRule = {};

const PopupRules: React.FC = () => {
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
        </tr>
        {rules &&
          rules.map((rule) => (
            <tr>
              <td>{rule.name}</td>
              <td>{rule.type}</td>
              <td>{rule.enabled.toString()}</td>
            </tr>
      ))}
      </table>
    </div>
  );
};

export default PopupRules;
