import { Building, CalendarDays, Clock, MapPin } from "lucide-react";
import Infocard from "../components/Infocard";
import SpeakerCard from "../components/SpeakerCard";
import Pelaksanaansimple from "../components/ui/Pelaksanaansimple";
import FrequentlyAskedQuestion from "../components/FrequentlyAskedQuestion";

export default function Seminar() {
    return (
        <div>
            <div className="space-y-10 p-10">
                <Infocard
                    title='IT Seminar'
                    description='Seminar Nasional Teknologi Informasi ini mengangkat tema "Human-AI Integration: Merancang Arsitektur Kolaboratif, Bukan Kompetitif.”Kami bertujuan untuk menggeser fokus dari ketakutan akan kompetisi menjadi eksplorasi peluang kolaborasi. Seminar ini akan mengupas tuntas bagaimana kita dapat merancang sistem, etika, dan lingkungan kerja di mana AI berfungsi sebagai mitra yang memperkuat kecerdasan, kreativitas, dan produktivitas manusia—bukan sebagai pengganti.'
                    image='https://www.invofest-harkatnegeri.com/assets/Maskot-Seminar.png'
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
                <h1 className='text-center text-5xl font-semibold text-red-900 pt-10 '>Tentang IT SEMINAR</h1>
                <h3 className='text-center text-2xl text-gray-600 pt-10'>Seminar bertajuk “Human-AI Integration: Merancang Arsitektur Kolaboratif, Di tengah pesatnya kemajuan kecerdasan buatan (AI), narasi yang sering muncul adalah tentang persaingan antara manusia dan mesin. Kekhawatiran akan penggantian peran manusia oleh teknologi cerdas menjadi diskusi utama di berbagai sektor. Namun, bagaimana jika kita mengubah paradigma tersebut? Seminar Nasional Teknologi Informasi ini hadir untuk menjawab tantangan itu dengan mengangkat tema "Human-AI Integration: Merancang Arsitektur Kolaboratif, Bukan Kompetitif.” Kami bertujuan untuk menggeser fokus dari ketakutan akan kompetisi menjadi eksplorasi peluang kolaborasi. Seminar ini akan mengupas tuntas bagaimana kita dapat merancang sistem, etika, dan lingkungan kerja di mana AI berfungsi sebagai mitra yang memperkuat kecerdasan, kreativitas, dan produktivitas manusia—bukan sebagai pengganti.</h3>
            </div>

            <h2 className="text-center text-5xl p-10 font-semibold text-red-900">Temui Pembicara Khusus Kami</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 px-55 py-10'>
                <SpeakerCard
                    imageUrl='https://www.invofest-harkatnegeri.com/assets/seminar/Seminar%20Dery.png'
                    name='Dery Agung Triyadi'
                    role='AWS Indonesia'
                />

                <SpeakerCard
                    imageUrl='https://www.invofest-harkatnegeri.com/assets/seminar/seminar%20sowam.png'
                    name='Sowam Habibi'
                    role='Google Indonesia'
                />
            </div>

            <h2 className="text-center text-red-900 text-5xl font-semibold bg-[#e7cfd5] p-10">Pelaksanaan IT Seminar</h2>

            <div className="grid grid-cols-2 gap-6 px-55 py-10 bg-[#e7cfd5]">

                <Pelaksanaansimple
                    icon={<CalendarDays size={18} />}
                    text="Senin, 24 November 2025"
                />

                <Pelaksanaansimple
                    icon={<MapPin size={18} />}
                    text="Aula Gedung C"
                />

                <Pelaksanaansimple
                    icon={<Clock size={18} />}
                    text="08.00 WIB - 12.00 WIB"
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