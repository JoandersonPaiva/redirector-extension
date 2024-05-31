import React from "react";

interface IPopupRule {
  id: number;
  name: string;
  enabled: boolean;
  type: "insert" | "redirect";
}

interface DropdownProps {
  title: string;
  rule: IPopupRule;
}

const Dropdown: React.FC<DropdownProps> = ({ title, rule }) => {
  return (
    <div>
      <button>{title}</button>
      <div>
        <div key={title}>
          <span>Type: {rule.type} </span>
          <span>Enabled: {rule.enabled} </span>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
