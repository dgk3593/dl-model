import { getTabs } from "./helper";
import IconTabBar from "components/IconTabBar";

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
