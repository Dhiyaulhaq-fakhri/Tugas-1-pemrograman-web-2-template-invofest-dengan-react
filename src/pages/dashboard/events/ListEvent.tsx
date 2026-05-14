import ListItem from "../../../components/ui/ListItem";

export default function Listevent() {
    return (
        <div className="p-5">
            <h2 className="font-semibold">ini halaman list event</h2>
            <p className="py-5">Harusnya semua list event ada di sini!</p>

            <div className="flex flex-col gap-4">

                <h3>Competition</h3>

                <ListItem
                    title="poster design competition"
                />

                <ListItem
                    title="poster design competition"
                />

                <ListItem
                    title="web design competition"
                />

                <ListItem
                    title="seminar Human AI integration"
                />

                <h3>Workshop</h3>

                <ListItem
                    title="Cyber security"
                />

                <ListItem
                    title="Mobile development"
                />

                <ListItem
                    title="Artificial intelegence"
                />

                <h3>Talkshow</h3>

                <ListItem
                    title="Humanizing technology"
                />
            </div>
        </div>
    )
}