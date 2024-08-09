import React from "react";

interface ListMessageProps {
  items: string[];
}

const ListMessage: React.FC<ListMessageProps> = ({ items }) => {
  return (
    <div className="pl-4">
      <ul className="list-disc pl-5">
        {items.map((item, index) => (
          <li key={index} className="text-sm font-medium">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListMessage;
