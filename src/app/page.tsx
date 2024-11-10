import ContactUs from "@/components/ContactUs";
import HeroSection from "@/components/landing/HeroSection";
import ServicesList from "@/components/landing/ServicesList";
import EventsCarousel from "@/components/landing/EventsCarousel";

export default function LandingPage() {
  return (
    <>
      <main className="flex-1">
        <HeroSection />
        <EventsCarousel />
        <ServicesList />
        <ContactUs />

        {/* <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Never Miss a Beat
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-300 md:text-xl">
                  Sign up for our newsletter to get the latest concert announcements and exclusive
                  presale codes.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col sm:flex-row gap-2">
                  <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                  <Button type="submit">Subscribe</Button>
                </form>
              </div>
            </div>
          </div>
        </section> */}
      </main>
    </>
  );
}
