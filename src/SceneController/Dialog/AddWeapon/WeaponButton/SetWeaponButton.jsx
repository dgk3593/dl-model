const BtnIcon = { Left: "⇐", Right: "⇒" };

const SetWeaponButton = ({ side, onClick }) => (
    <div className="WeaponButton-addBtn" data-side={side} onClick={onClick}>
        {BtnIcon[side]}
    </div>
);

export default SetWeaponButton;
