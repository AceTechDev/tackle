import Input from "../../Input";

function BioLinks({ socialmediaName, link }) {
  return (
    <div className="flex justify-between w-full my-4">
      {socialmediaName}:
      <Input
        Class={
          "bg-transparent border-white flex-1 rounded-md truncate pr-10 lg:pr-0"
        }
        ContainerClass={"mr-2.5 w-[70%]"}
        type="text"
        Value={link}
        Editable={true}
      />
    </div>
  );
}

export default BioLinks;
