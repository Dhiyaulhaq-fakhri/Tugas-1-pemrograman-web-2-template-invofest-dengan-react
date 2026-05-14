import ListItem from "../../../components/ui/ListItem";

export default function Listcategory() {
    return (
        <div className="p-5">
            <h2 className="font-semibold"> ini laman list kategori</h2>
            <p className="py-5">seharusnya list kategori ada di sini!</p>
            <div className="flex flex-col gap-4">
                <ListItem
                    title="competition"
                />

                <ListItem
                    title="seminar"
                />

                <ListItem
                    title="workshop"
                />

                <ListItem
                title="talkshow"
                />
            </div>
        </div>
    )
}