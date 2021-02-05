import Selector from "components/selectors/Selector";
import exportOptions from "helpers/exportModel/exportOptions";

function FileFormatSelector({ value, onClick }) {
    const options = exportOptions.map(({ format }) => format);
    const texts = exportOptions.map(({ name }) => name);
    return (
        <Selector
            value={value}
            options={options}
            texts={texts}
            onClick={onClick}
        />
    );
}

export default FileFormatSelector;
