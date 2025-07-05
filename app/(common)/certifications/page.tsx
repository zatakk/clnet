;
import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar";

export default function CertificationsPage() {
    return (
        <>
            <Navbar />

            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-100 to-white px-4">
                <div className="text-center max-w-xl">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
                        🚧 Coming Soon
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 mb-10">
                        We're working hard to launch something amazing. Stay tuned!
                    </p>

                    
                </div>
            </div>

            <Footer />
        </>
    );
}
