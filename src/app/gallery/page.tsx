import GlassCard from "../../components/GlassCard";

export default function GalleryPage() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Photo Gallery</h1>
      <GlassCard>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1,2,3,4,5,6,7,8].map((i) => (
            <div key={i} className="aspect-square bg-glass/40 rounded-lg flex items-center justify-center text-gray-400 text-2xl font-bold">Img {i}</div>
          ))}
        </div>
      </GlassCard>
    </div>
  );
} 