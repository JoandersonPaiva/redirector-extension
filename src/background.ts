chrome.runtime.onInstalled.addListener(async () => {
  console.log("Dynamic Script Replacer Extension Installed");
  const result = await chrome.storage.local.get(["rules"]);
  if (!result || !result.rules || result.rules.length === 0) return;
  const allRules = result.rules;
  const activeRules = allRules.find((rule: any) => rule.active);
  if (!activeRules) return;
  addRule(activeRules.base, activeRules.redirectTo);
});

const addRule = (targetUrl: string, replacementUrl: string) => {
  const rule: chrome.declarativeNetRequest.Rule = {
    id: 1,
    priority: 1,
    action: {
      type: chrome.declarativeNetRequest.RuleActionType.REDIRECT,
      redirect: {
        url: replacementUrl,
      },
    },
    condition: {
      regexFilter: targetUrl,
      resourceTypes: [chrome.declarativeNetRequest.ResourceType.SCRIPT],
    },
  };

  chrome.declarativeNetRequest.updateDynamicRules(
    {
      addRules: [rule],
      removeRuleIds: [1],
    },
    () => {
      if (chrome.runtime.lastError) {
        console.error(
          `Error adding rule: ${JSON.stringify(chrome.runtime.lastError)}`
        );
      } else {
        console.log(`Rule added: ${JSON.stringify(rule)}`);
      }
    }
  );
};

