const ToolTipComp = (props) => {
  return (
    <div className="w-72 h-32">
      <p className="h-1/2 flex items-center hover:bg-gray-900">Add an existing account</p>
      <p className="h-1/2 flex items-center hover:bg-gray-900" onClick={props.sign_out}>Log out @<span>{props.userName}</span></p>
    </div>
  );
};

export default ToolTipComp;
