import React from "react";
import AddRuleForm from "../components/AddRuleForm/AddRuleForm";
import OptionsRules from "../components/OptionsRules/OptionsRules";

const Options: React.FC = () => {
  return (
    <div className="options">
      <OptionsRules />
      <AddRuleForm />
    </div>
  );
};

export default Options;
