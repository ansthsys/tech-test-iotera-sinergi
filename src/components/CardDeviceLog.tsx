type Props = {
  isActive: boolean;
  id: string;
  name: string;
  onClick: () => void;
};

export default function CardDeviceLog({ isActive, id, name, onClick }: Props) {
  return (
    <div
      onClick={onClick}
      className={`
        w-full cursor-pointer
        card rounded-xl bg-base-100 card-md 
        transition-all duration-200 delay-75 ease-in-out
        ${isActive ? "border-2 border-gray-300 shadow-lg hover:shadow-md" : "border-2 border-gray-100 shadow-sm hover:shadow-md"}
      `}
    >
      <div className="card-body">
        <h2 className="card-title">{id}</h2>
        <p className="text-lg font-medium">{name}</p>
      </div>
    </div>
  );
}
