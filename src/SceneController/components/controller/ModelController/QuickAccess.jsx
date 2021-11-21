import { getTabs } from "./helper";
import IconTabBar from "components/IconTabBar";

/**
 * @param {object} props
 * @param {string} props.value - currently selected tab
 * @param {string[]} props.list - list of tabs
 * @param {(newValue: string) => void} props.onChange - callback for when the tab changes
 */
function QuickAccess({ value, list, onChange }) {
    const tabs = getTabs(list);
    return (
        <div>
            <IconTabBar
                className="QuickAccess"
                value={value}
                onChange={onChange}
                tabs={tabs}
            />
        </div>
    );
}

export default QuickAccess;
