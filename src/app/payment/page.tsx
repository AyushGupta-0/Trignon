export default function PaymentPage() {
  return (
    <div className="max-w-xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Unlock Courses</h1>
      <div className="space-y-4">
        {["Physics XI", "Maths X", "Accounts XII"].map((course, i) => (
          <div key={i} className="flex items-center justify-between bg-white rounded shadow p-4">
            <span className="font-medium">{course}</span>
            <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">Pay ₹1999</button>
          </div>
        ))}
      </div>
    </div>
  );
} 