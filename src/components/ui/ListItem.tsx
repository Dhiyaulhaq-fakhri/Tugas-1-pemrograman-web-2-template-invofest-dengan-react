interface ListItemProps {
    title: string;
}

const ListItem: React.FC<ListItemProps> = ({
    title
}) => {
    return (
        <div>
            <div className="flex items-center bg-amber-100 p-5 rounded-lg w-120">
                <p className="text-gray-700 text-xl">{title}</p>
            </div>
        </div>
    );
};

export default ListItem;