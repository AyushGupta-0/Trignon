import GlassCard from "../../components/GlassCard";
import PrimaryButton from "../../components/PrimaryButton";

export default function ContactPage() {
  return (
    <div className="max-w-xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <GlassCard className="mb-8">
        <p className="mb-2">Address: B-2534 B-BLOCK, INDIRA NAGAR, OPP. UJALA HOSPITAL, LUCKNOW</p>
        <p className="mb-2">Phone: +91 8090422999, +91 8687832993</p>
        <p>Email: info@trignontutorials.com</p>
      </GlassCard>
      <GlassCard>
        <form className="flex flex-col gap-4">
          <input className="border rounded px-3 py-2 bg-glass/40 text-gray-900 dark:text-white placeholder-gray-400" placeholder="Your Name" />
          <input className="border rounded px-3 py-2 bg-glass/40 text-gray-900 dark:text-white placeholder-gray-400" placeholder="Your Email" />
          <textarea className="border rounded px-3 py-2 bg-glass/40 text-gray-900 dark:text-white placeholder-gray-400" placeholder="Your Message" rows={4} />
          <PrimaryButton type="submit">Send Message</PrimaryButton>
        </form>
      </GlassCard>
    </div>
  );
} 