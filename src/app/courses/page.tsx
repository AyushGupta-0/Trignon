import GlassCard from "../../components/GlassCard";
import PrimaryButton from "../../components/PrimaryButton";

export default function CoursesPage() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Our Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[1,2,3,4].map((i) => (
          <GlassCard key={i}>
            <h2 className="text-xl font-semibold">Course Title {i}</h2>
            <p className="text-gray-700 dark:text-gray-300">Short description of the course and its benefits. Engaging, effective, and fun for students.</p>
            <PrimaryButton className="mt-2">Learn More</PrimaryButton>
          </GlassCard>
        ))}
      </div>
    </div>
  );
} 