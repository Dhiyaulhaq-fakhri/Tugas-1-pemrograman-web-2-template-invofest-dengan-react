import ListItem from "../../../components/ui/ListItem";

export default function Listspeaker() {
    return (
        <div className="p-5">
            <h2 className="font-semibold">ini adalah laman list speaker</h2>
            <p className="py-5">semua data narasumber ada disini!</p>

            <div className="flex flex-col gap-4">
                <ListItem
                    title="Dery Agung Triyadi"
                />

                <ListItem
                    title="Sowam Habibi"
                />

                <ListItem
                    title="Lhuqita Fazry"
                />

                <ListItem
                    title="M. Dendi Purwanto"
                />

                <ListItem
                    title="Danang Avan M"
                />

                <ListItem
                    title="Moh. Ichsan Maulana"
                />

                <ListItem
                    title="M. Zaim Zamzami"
                />

                <ListItem
                    title="Daffa Zuhdan Muhtar"
                />

                <ListItem
                    title="Bayu Adi Prasetiyo"
                />
            </div>
        </div>
    )
}