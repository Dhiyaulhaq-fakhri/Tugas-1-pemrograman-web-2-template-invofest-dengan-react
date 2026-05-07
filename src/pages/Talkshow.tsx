import { CalendarDays, MapPin, Clock, Building } from "lucide-react";
import FrequentlyAskedQuestion from "../components/FrequentlyAskedQuestion";
import Infocard from "../components/Infocard";
import { SpeakerCard } from "../components/SpeakerCard";
import Pelaksanaansimple from "../components/ui/Pelaksanaansimple";

export default function Talkshow() {
    return (
        <div>
            {/* Khusus */}
            <div className="space-y-10 p-10">
                <Infocard
                    title='IT Talkshow'
                    description='Talkshow berskala nasional: “Humanizing Technology: Kolaborasi Manusia dan AI di Masa Depan.” Acara ini dirancang bukan untuk membahas teknologi sebagai entitas yang dingin dan terpisah, melainkan untuk menggali bagaimana kita dapat menanamkan nilai-nilai kemanusiaan—seperti empati, etika, dan kreativitas—ke dalam inti pengembangan AI. Kami akan mengupas tuntas visi masa depan di mana AI tidak menjadi pesaing, tetapi menjadi mitra kolaboratif yang memperkuat potensi unik manusia. Talkshow ini bertujuan untuk menginspirasi generasi muda dan para penggiat teknologi untuk tidak hanya menjadi pengguna, tetapi juga menjadi arsitek masa depan digital yang lebih manusiawi. Mari bergabung untuk meningkatkan pengetahuan, mengembangkan potensi diri, dan menjadi bagian dari dialog penting dalam membentuk era kolaborasi manusia dan AI.'
                    image='https://www.invofest-harkatnegeri.com/assets/Maskot-Talkshow.png'
                    variant='left'
                    buttontext='Daftar Sekarang'
                    buttonprops={{
                        onClick: () => alert("Daftar"),
                        variant: "primary",
                        className: "shadow-lg"
                    }}
                />
            </div>

            <div className="bg-[#e7cfd5] px-54 py-10">
                <h2 className="text-center text-6xl font-semibold text-red-900 mb-4">Tentang IT Talkshow</h2>
                <p className="text-gray-600 leading-relaxed text-xl">Seiring teknologi, khususnya kecerdasan buatan (AI), yang semakin meresap ke dalam setiap aspek kehidupan kita, muncul sebuah pertanyaan fundamental: Apakah kita sedang menciptakan teknologi yang melayani manusia, atau justru sebaliknya? Untuk menjawab pertanyaan tersebut, kami mempersembahkan talkshow berskala nasional: “Humanizing Technology: Kolaborasi Manusia dan AI di Masa Depan.” Acara ini dirancang bukan untuk membahas teknologi sebagai entitas yang dingin dan terpisah, melainkan untuk menggali bagaimana kita dapat menanamkan nilai-nilai kemanusiaan—seperti empati, etika, dan kreativitas—ke dalam inti pengembangan AI. Kami akan mengupas tuntas visi masa depan di mana AI tidak menjadi pesaing, tetapi menjadi mitra kolaboratif yang memperkuat potensi unik manusia.</p>
            </div>

            <h2 className="text-center text-5xl p-10 font-semibold text-red-900">Temui Pembicara Khusus Kami</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-35 py-10'>
                <SpeakerCard
                    imageUrl='https://www.invofest-harkatnegeri.com/assets/talkshow/talkshow%20ichsan.png'
                    name='Moh. Ichsan Maulana'
                    role='Human Capital Information System (HCIS), PT. Garuda Daya Pratama Sejahtera'
                />

                <SpeakerCard
                    imageUrl='https://www.invofest-harkatnegeri.com/assets/talkshow/talkshow%20zaim%20zamzami.png'
                    name='M. Zaim Zamzami'
                    role='Programmer, PT. Pertamina Drilling Service Indonesia'
                />

                <SpeakerCard
                    imageUrl="https://www.invofest-harkatnegeri.com/assets/talkshow/talkshow%20daffa.png"
                    name="Daffa Zuhdan Muhtar"
                    role="Android Developer, PT. Astra Internasional"
                />

                <SpeakerCard
                    imageUrl="https://www.invofest-harkatnegeri.com/assets/talkshow/talkshow%20bayu.png"
                    name="Bayu Adi Prasetiyo"
                    role="Software Engineer, KOMPAS.ID"
                />

            </div>

            <h2 className="text-center text-red-900 text-5xl font-semibold bg-[#e7cfd5] p-10">Pelaksanaan IT Talkshow</h2>

            <div className="grid grid-cols-2 gap-6 px-55 py-10 bg-[#e7cfd5]">

                <Pelaksanaansimple
                    icon={<CalendarDays size={18} />}
                    text="Senin, 24 November 2025"
                />
                
                <Pelaksanaansimple
                    icon={<Clock size={18} />}
                    text="08.00 WIB - 12.00 WIB"
                />

                <Pelaksanaansimple
                    icon={<MapPin size={18} />}
                    text="Aula Gedung C"
                />

                <Pelaksanaansimple
                    icon={<Building size={18} />}
                    text="Kampus 1 (Mataram) Universitas Harkat Negeri"
                />

            </div>

            <FrequentlyAskedQuestion />

        </div>
    );
}