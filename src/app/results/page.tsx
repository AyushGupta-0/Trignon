import GlassCard from "../../components/GlassCard";

const toppers = [
  { name: "Aarav Sharma", marks: 98, year: 2024, school: "St. Xavier's" },
  { name: "Priya Singh", marks: 97, year: 2024, school: "Delhi Public School" },
  { name: "Rahul Verma", marks: 96, year: 2023, school: "City Montessori" },
  { name: "Simran Kaur", marks: 95, year: 2023, school: "La Martiniere" },
  { name: "Aditya Patel", marks: 94, year: 2022, school: "St. Francis" },
];

export default function ResultsPage() {
  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Toppers</h1>
      <GlassCard>
        <ul className="divide-y divide-white/10">
          {toppers.map((topper, i) => (
            <li key={i} className="flex items-center justify-between py-3 px-2 hover:bg-white/10 dark:hover:bg-glassDark/80 rounded-xl transition">
              <div className="flex items-center gap-4">
                <span className="text-2xl font-bold text-accent">#{i+1}</span>
                <div className="flex flex-col">
                  <span className="font-semibold text-lg">{topper.name}</span>
                  <span className="text-xs text-gray-400">{topper.school}</span>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-xl font-mono text-primary">{topper.marks}%</span>
                <span className="text-xs text-gray-400">{topper.year}</span>
              </div>
            </li>
          ))}
        </ul>
      </GlassCard>
    </div>
  );
} 