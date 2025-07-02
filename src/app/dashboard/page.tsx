import GlassCard from "../../components/GlassCard";
import PrimaryButton from "../../components/PrimaryButton";

export default function DashboardPage() {
  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">My Dashboard</h1>
      <GlassCard className="mb-8 flex flex-col gap-2">
        <div className="font-semibold">Welcome, John Doe!</div>
        <div className="text-gray-300">Email: johndoe@email.com</div>
      </GlassCard>
      <h2 className="text-xl font-semibold mb-4">Enrolled Courses</h2>
      <div className="space-y-3">
        {["Physics XI", "Maths X", "Accounts XII"].map((course, i) => (
          <GlassCard key={i} className="flex justify-between items-center py-2 px-4">
            <span>{course}</span>
            <PrimaryButton className="text-sm">View Lectures</PrimaryButton>
          </GlassCard>
        ))}
      </div>
    </div>
  );
} 