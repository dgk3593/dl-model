import AniButton from "../components/AniButton";

/**
 * @param {object} props
 * @param {string} [props.icon]
 * @param {string} props.fullName
 * @param {string} [props.user]
 * @param {string} [props.subtitle]
 * @param {string} props.code
 * @param {React.MouseEventHandler<HTMLButtonElement>} props.onClick
 */
function SearchAniButton({ icon, user, code, fullName, onClick }) {
    return (
        <AniButton
            icon={icon}
            user={user}
            name={fullName}
            code={code}
            onClick={onClick}
        />
    );
}

export default SearchAniButton;
