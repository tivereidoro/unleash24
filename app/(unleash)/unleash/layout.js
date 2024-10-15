import Footer from "@/components/footer/Footer";
import UnleashNavbar from "@/components/navbar/UnleashNavbar";


export default function RootLayout({ children }) {
    return (
        <div className={`bg-fixed bg-center bg-cover`}>
            <div className="absolute top-0 left-0 right-0 bottom-0 -z-[2] bg-black/10" />

            <UnleashNavbar />
            {children}
            <Footer />
        </div>
    );
}
