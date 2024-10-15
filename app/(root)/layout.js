import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

// const poppins = Poppins({
//     subsets: ["latin"],
//     variable: "--font-poppins",
//     weight: ["400", "500", "600", "700"],
// });
// const geistSans = localFont({
//     src: "./fonts/GeistVF.woff",
//     variable: "--font-geist-sans",
//     weight: "100 900",
// });
// const geistMono = localFont({
//     src: "./fonts/GeistMonoVF.woff",
//     variable: "--font-geist-mono",
//     weight: "100 900",
// });

// export const metadata = {
//     title: "Leaders Quarters | LQ",
//     description: "Advocating EFFECTIVE leadership",
// };

export default function RootLayout({ children }) {
    return (
        <>
            <div className={`hero-bg bg-fixed bg-center bg-cover`}>
                <div className="absolute top-0 left-0 right-0 bottom-0 -z-[2] bg-black/70" />
                <Header />
                {children}
                <Footer />
            </div>
        </>
    );
}
