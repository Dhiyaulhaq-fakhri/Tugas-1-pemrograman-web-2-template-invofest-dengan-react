import { Code2, Shield, Smartphone } from "lucide-react";
import { Infocard } from "../components/Infocard";
import { SpeakerCard } from "../components/SpeakerCard";
import WorkshopCard from "../components/ui/WorkshopCard";
import FrequentlyAskedQuestion from "../components/FrequentlyAskedQuestion";

export default function Workshop() {
    return (
        <div>
            <div className="space-y-10 p-10">
                <Infocard
                    title='IT Workshop'
                    description='Workshop "AI for a Sustainable Future: The Role of Z Generation in the Digital Era” ini menjembatani antara potensi Generasi Z dan kekuatan AI untuk menciptakan masa depan yang berkelanjutan. Peserta akan dibekali wawasan dan alat untuk mentransformasi ide-ide inovatif menjadi solusi lingkungan yang nyata dan terukur di era digital.'
                    image='https://www.invofest-harkatnegeri.com/assets/Maskot-Workshop.png'
                    variant='left'
                    buttontext='Daftar Sekarang'
                    buttonprops={{
                        onClick: () => alert("Daftar"),
                        variant: "primary",
                        className: "shadow-lg"
                    }}
                />
            </div>

            <div className="bg-[#e7cfd5] p-54">
                <h2 className="text-center text-6xl font-semibold text-red-900 mb-4">Tentang IT Workshop</h2>
                <p className="text-gray-600 leading-relaxed text-xl">Workshop “AI for a Sustainable Future: The Role of Z Generation in the Digital Era” ini didesain khusus untuk Generasi Z, para digital natives yang berada di persimpangan antara inovasi teknologi dan tantangan keberlanjutan global. Peserta akan diajak untuk menyelami bagaimana Kecerdasan Buatan (AI) bukan hanya sekadar teknologi canggih, tetapi juga alat yang ampuh untuk menciptakan solusi nyata bagi isu-isu lingkungan. Melalui sesi inspiratif, pengenalan konsep, dan praktik langsung (hands-on), workshop ini bertujuan memberdayakan Gen Z untuk menjadi agen perubahan di era digital, menggunakan keahlian mereka untuk masa depan bumi yang lebih baik.</p>
            </div>

            <h2 className="text-center text-5xl p-10 font-semibold text-red-900">Temui Pembicara Khusus Kami</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-55 py-10'>
                <SpeakerCard
                    imageUrl='https://www.invofest-harkatnegeri.com/assets/workshop/workshop%20mobile.png'
                    name='Lhuqita Fazry'
                    role='Mobile Development Developer, Founder Rumah Coding Indonesia'
                />

                <SpeakerCard
                    imageUrl='https://www.invofest-harkatnegeri.com/assets/workshop/workshop%20AI.png'
                    name='M. Dendi Purwanto'
                    role='Artificial Intelligence Software Engineer, PT. Mayar Kernel Supernova'
                />

                <SpeakerCard
                    imageUrl="https://www.invofest-harkatnegeri.com/assets/workshop/talkshow%20cyber.png"
                    name="Danang Avan M"
                    role="Cyber Security Security Analyst, Founder | Contributor TegalSec"
                />
            </div>

            <div className="bg-[#e7cfd5]">

                <h2 className="text-center text-6xl font-semibold text-red-900 mb-4 p-10">Pelaksanaan IT Workshop</h2>

                <div className="flex flex-row gap-10 px-54 py-10">
                    <WorkshopCard
                        icon={<Code2 size={60} />}
                        title="Mobile Development"
                        date="Selasa, 25 November 2025"
                        time="08.00 WIB - 16.30 WIB"
                        location="Lab Kom D.1"
                    />

                    <WorkshopCard
                        icon={<Smartphone size={60} />}
                        title="Artificial Intelligence"
                        date="Selasa, 25 November 2025"
                        time="08.00 WIB - 16.30 WIB"
                        location="Lab Kom D.2"
                    />
                </div>

                <div className="flex justify-center px-54 py-10">
                    <WorkshopCard
                        icon={<Shield size={60} />}
                        title="Cyber Security"
                        date="Rabu, 26 November 2025"
                        time="08.00 WIB - 16.30 WIB"
                        location="Lab Kom D.1"
                    />
                </div>
            </div>

            <FrequentlyAskedQuestion />

        </div>
    );
}